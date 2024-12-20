// constants
import { randomIntensity } from "../../utility/constants";

// types
import { ButtonRef, Diamension, Range } from "../../utility/types";

// functions
import { getRandomExclusive, getRandomInclusive, splitRangeIntoArray } from "../../utility/functions";

import { Box, Button, Divider, SwipeableDrawer, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../general/customYesNoButton/CustomButton";
import Loader from "../general/loader/Loader";
import MenuIconButton from "../general/menuIconButton/MenuIconButton";
import Popup from "../general/popupMenu/Popup";
import { QuestionContext } from "../../context/QuestionContextProvider";
import { ThemeContext } from "../../context/ThemeContextProvider";




const Question = () => {

  const {questionContextState, setQuestionContextState} = useContext(QuestionContext)!;
  const {themeContextState, setThemeContextState} = useContext(ThemeContext)!;

  const [isLoading, setIsLoading] = useState(true);

  const [windowDiamension, setWindowDiamension] = useState<Diamension>({
    width: 0,
    height: 0,
  });

  const [heightRangeArray, setHeightRangeArray] = useState<Range[]>([]);
  const [widthRangeArray, setWidthRangeArray] = useState<Range[]>([]);


  const [noButtonDiamension, setNoButtonDiamension] = useState<Diamension>({
    width: 0,
    height: 0
  })

  const noButtonRef = useRef<ButtonRef>(null);
  const yesButtonRef = useRef<ButtonRef>(null);

  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [yesButtonPosition, setYesButtonPosition] = useState({ top: 0, left: 0 });
  const [isPositioned, setIsPositioned] = useState(false);

  


  useEffect(() => {
    const updatePositionsAndRange = () => {      

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
      setWindowDiamension({
        width: windowWidth,
        height: windowHeight
      });      

      if (noButtonRef.current && yesButtonRef.current) {

        // No Button Data
        const noBtnBoundingRect = noButtonRef.current.getBoundingClientRect();
        setNoButtonPosition({ top: noBtnBoundingRect.top, left: noBtnBoundingRect.left });
        setNoButtonDiamension({
          width: noBtnBoundingRect.width,
          height: noBtnBoundingRect.height
        })
  
        const yesBtnBoundingRect = yesButtonRef.current.getBoundingClientRect();
        setYesButtonPosition({ top: yesBtnBoundingRect.top, left: yesBtnBoundingRect.left });
  


        //   pass button diamension as minimum so responsiveness should be maintained
        const widthRange = splitRangeIntoArray(noBtnBoundingRect.width, windowWidth, randomIntensity);
        const heightRange = splitRangeIntoArray(noBtnBoundingRect.height, windowHeight, randomIntensity);

      setWidthRangeArray(widthRange);
      setHeightRangeArray(heightRange);
        
      setIsPositioned(true);
        
        // 0.5s later false, so transition and proper button placement done
        setTimeout(() => {
          setIsLoading(false);
        }, 500)
        
      }
    }

    updatePositionsAndRange()
    
    
  }, [])



  
  

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/yes");
  }

  const moveButton = () => {

    const random1 = getRandomExclusive(0,randomIntensity);
    const random2 = getRandomExclusive(0,randomIntensity);

    const widthRange = widthRangeArray[random1];
    const heightRange = heightRangeArray[random2];

    const leftRandom = getRandomInclusive(widthRange.min, widthRange.max) - noButtonDiamension.width;
    const topRandom = getRandomInclusive(heightRange.min, heightRange.max) - noButtonDiamension.height;
    
    setNoButtonPosition({
      top: topRandom,
      left: leftRandom
    })
  }

  

  return (
    <>
      {isLoading && <Loader />}

      <MenuIconButton />
      <Popup />
      <Box
        className="container"
        sx={{
          width: "100%",
          height: "100vh",
          bgcolor: themeContextState.backgroundColor,
          display: "flex",
          gap: 3,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 2,
          position: "relative",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              mb: "2rem",
              color: "#111",
              fontWeight: "bold",
              textAlign: "center",
            }}
            className="header_text"
          >
            {questionContextState.question}
          </Typography>
        </Box>

        <Box
          className="buttons"
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            ml: "20px",
            md: { flexDirection: "column" },
          }}
        >

          <CustomButton
            ref={yesButtonRef}
            onClick={handleNavigate}
            isPositioned={isPositioned}
            position={{
              top: yesButtonPosition.top,
              left: yesButtonPosition.left,
            }}
            type="yesbtn"
          >
            {questionContextState.yesBtnText}
          </CustomButton>

          <CustomButton
            ref={noButtonRef}
            onClick={moveButton}
            isPositioned={isPositioned}
            position={{
              top: noButtonPosition.top,
              left: noButtonPosition.left,
            }}
            type="nobtn"
          >
            {questionContextState.noBtnText}
          </CustomButton>


        </Box>
      </Box>
    </>
  );
};

export default Question;


