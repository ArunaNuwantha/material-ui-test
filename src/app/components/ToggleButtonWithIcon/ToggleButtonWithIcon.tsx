import ToggleButton from "@mui/material/ToggleButton";
import Image from "next/image";
import React from "react";
import styles from "./ToggleButtonWithIcon.module.css";

const ToggleButtonWithIcon = () => {
  return (
    <div>
      <ToggleButton value="bold" aria-label="bold">
        <div>
          <Image src={"/assets/image.png"} width={40} height={40} alt="image" />
          <Image src={"/assets/icon.png"} width={10} height={10} alt="image" />
        </div>
      </ToggleButton>
    </div>
  );
};

export default ToggleButtonWithIcon;
