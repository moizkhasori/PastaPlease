// types
import { ButtonRef,} from "../../utility/types";

// functions
import { getRandomExclusive} from "../../utility/functions";

import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../general/customYesNoButton/CustomButton";
import MenuIconButton from "../general/menuIconButton/MenuIconButton";
import Popup from "../general/popupMenu/Popup";
import { PastaContext } from "../../context/PastaContextProvider";




const QuestionPage = () => {

    const {pastaContextState, setPastaContextState} = useContext(PastaContext)!;

  const noButtonRef = useRef<ButtonRef>(null);
  const yesButtonRef = useRef<ButtonRef>(null);

  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [yesButtonPosition, setYesButtonPosition] = useState({ top: 0, left: 0 });
  const [isPositioned, setIsPositioned] = useState(true);

  const noButtonWidth = noButtonRef.current?.getBoundingClientRect().width;
  const noButtonHeight = noButtonRef.current?.getBoundingClientRect().height;

  const moveButton = () => {
      const randomLeft = getRandomExclusive(noButtonWidth!,window.innerWidth - noButtonWidth!);
      const randomTop = getRandomExclusive(noButtonHeight!,window.innerHeight - noButtonHeight!);      
      
      setNoButtonPosition({
        top: randomTop,
        left: randomLeft
      })
    }


  useEffect(() => {

    const updatePositions = () => {

      if (noButtonRef.current && yesButtonRef.current && QuestionRef.current){
        const QuestionRect = QuestionRef.current.getBoundingClientRect();
        const QuestionBottom = QuestionRect.bottom;

        const BtnTop = QuestionBottom + 20;
        const YesLeft = QuestionRect.left + (QuestionRect.width/2) - yesButtonRef.current.getBoundingClientRect().width - 10;
        const NoLeft = QuestionRect.left + (QuestionRect.width/2) + 10;

        setYesButtonPosition({ top: BtnTop, left: YesLeft });
        setNoButtonPosition({ top: BtnTop, left: NoLeft });

      }

    }

    updatePositions();

    window.addEventListener("resize", updatePositions);
    return () => window.addEventListener("resize", updatePositions);

  }, [pastaContextState])


  const QuestionRef = useRef<HTMLButtonElement | null>(null);
  

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/yes");
  }
  

  return (
    <>

      <MenuIconButton />
      <Popup />

      <Box
        className="container"
        sx={{
          width: "100%",
          height: "100vh",
          bgcolor: pastaContextState.themeBgColor,
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
        <Box
          ref={QuestionRef}
        >
          
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
            {pastaContextState.question}
          </Typography>
        </Box>

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
            {pastaContextState.yesButtonText}
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
            {pastaContextState.noButtonText}
          </CustomButton>

      </Box>
    </>
  );
};

export default QuestionPage;


