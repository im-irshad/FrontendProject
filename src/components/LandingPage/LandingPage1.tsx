import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    label: "Copenhagen, Denmark",
    imgPath:
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    label: "Helsinki, Finland",
    imgPath:
      "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    label: "Hunza, Pakistan",
    imgPath:
      "https://images.unsplash.com/photo-1589610190054-ca780b311d16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    label: "Sweden",
    imgPath:
      "https://images.unsplash.com/photo-1562263075-da00b5209d88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    label: "Istanbul, Turkey",
    imgPath:
      "https://images.unsplash.com/photo-1578912996078-305d92249aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box
        component="span"
        sx={{
          p: 2,
          border: "1px dashed grey",
          position: "absolute",
          top: "2%",
          left: "5%",
          zIndex: 100,
        }}
      >
        <Typography>LOGO</Typography>
      </Box>

      <Box
        component="span"
        sx={{
          p: 2,
          border: "1px dashed grey",
          position: "absolute",
          top: "40%",
          left: "40%",
          opacity: "1",
          color: "black",
          zIndex: 100,
        }}
      >
        <img
          src="https://see.fontimg.com/api/renderfont4/qZDw5/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/Q291bnRyaWVz/chicanos-personal-use-regular.png"
          alt="Tattoo fonts"
        ></img>

        <Typography variant="subtitle1" align="center">
          Info & Images
        </Typography>
        <Link to="/allcountries">
          <Button variant="contained" fullWidth>
            View All{" "}
          </Button>
        </Link>
      </Box>

      <Box
        component="span"
        sx={{
          p: 1,
          border: "1px dashed grey",
          position: "absolute",
          bottom: "2%",
          left: "5%",
          zIndex: 100,
        }}
      >
        <Typography>Develop by Irshad</Typography>
      </Box>
      <Box
        sx={{
          maxWidth: "100%",
          height: "100%",
          flexGrow: 1,
          alignItems: "center",
          position: "relative",
        }}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: "100vh",
                    display: "block",

                    overflow: "hidden",
                    width: "100%",
                    opacity: 0.6,
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            ></Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            ></Button>
          }
        />
      </Box>
    </>
  );
}

export default SwipeableTextMobileStepper;
