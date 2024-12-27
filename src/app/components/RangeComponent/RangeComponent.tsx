"use client";
import { Grid2, Slider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import RangeInput from "./RangeInput";
import styels from "./RangeComponent.module.css";

interface RangeComponentProps {
  currentMin: number;
  currentMax: number;
  isOpenSlider: boolean;
}

const RangeComponent = ({
  currentMax,
  currentMin,
  isOpenSlider,
}: RangeComponentProps) => {
  const [range, setRange] = useState<number[]>([currentMin, currentMax]);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setRange(newValue);
    }
  };

  const handleInputChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      setRange((prev) => {
        const newRange = [...prev];
        newRange[index] = value;
        return newRange;
      });
    };

  const handleBlur = (index: number) => () => {
    setRange((prev) => {
      const newRange = [...prev];
      if (index === 0 && newRange[index] < 0) newRange[index] = 0;
      if (index === 1 && newRange[index] > 10000) newRange[index] = 10000;
      if (newRange[0] > newRange[1]) newRange[index] = newRange[1 - index];
      return newRange;
    });
  };

  return (
    <div>
      <Typography gutterBottom>Price Range (AED)</Typography>
      <Slider
        value={range}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        min={0}
        max={10000}
        sx={{
          display: `${isOpenSlider ? "block" : "none"}`,
          "& .MuiSlider-thumbColorPrimary": {
            color: "white",
          },
        }}
      />
      <Grid2 container spacing={2} alignItems="center">
        <div className={styels.inputContainer}>
          <RangeInput
            placeHolder="Min Price"
            value={range[0]}
            onChange={handleInputChange(0)}
            onBlur={handleBlur(0)}
          />
          <RangeInput
            placeHolder="Max Price"
            value={range[1]}
            onChange={handleInputChange(1)}
            onBlur={handleBlur(1)}
          />
        </div>
      </Grid2>
    </div>
  );
};

export default RangeComponent;
