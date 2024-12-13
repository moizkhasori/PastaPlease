import React from "react";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

const BackIconButton = () => {
  const navigate = useNavigate();

  const handleNavigationToHomePage = () => {
    navigate("/");
  };

  return (
    <IconButton
      sx={{
        position: "absolute",
        top: "20px",
        left: "20px",
        bgcolor: "primary.main",
        color: "white",
        "&:hover": {
          bgcolor: "primary.dark",
        },
      }}
      onClick={handleNavigationToHomePage}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
};

export default BackIconButton;
