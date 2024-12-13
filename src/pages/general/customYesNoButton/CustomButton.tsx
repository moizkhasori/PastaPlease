import React, { forwardRef, useContext } from 'react'
import { CustomButtonProps } from '../../../utility/types'
import { Button } from '@mui/material'
import { ThemeContext } from '../../../context/ThemeContextProvider';

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ onClick, isPositioned = false, position = { top: 0, left: 0 }, children, type },ref) => {

      const {themeContextState, setThemeContextState} = useContext(ThemeContext)!;
    

    return (
      <Button
        sx={{
          position: isPositioned ? "absolute" : "relative",
          top: isPositioned ? `${position.top}px` : 0,
          left: isPositioned ? `${position.left}px` : 0,
          backgroundColor: themeContextState.buttonColor, // Custom color
          color: "#FFFFFF", // Text color
          "&:hover": {
            backgroundColor: themeContextState.buttonHoverColor, // Hover color
          },
          fontWeight: "500",
          fontSize: "1.2rem",
          padding: "1rem 2rem",
          borderRadius: "50px",
          transition:"0.5s"
        }}
       
        ref={ref}
        variant="contained"
        onClick={onClick}
        onMouseOver={type === "nobtn" ? onClick : () => {}}
      >
        {children}
      </Button>
    );
  }
);

export default CustomButton

