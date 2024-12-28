"use client";
import SimpleDialogDemo from "./components/dialog/SimpleDialogDemo";
import LocationInput from "./components/LocationInput/LocationInput";
import RangeComponent from "./components/RangeComponent/RangeComponent";
import ToggleButtonWithIcon from "./components/ToggleButtonWithIcon/ToggleButtonWithIcon";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <div className={styles.page}>
      {/* <div className={styles["outer-container"]}>
        <div className={styles["top-container"]}></div>
        <div className={styles["middle-container"]}></div>
        <div className={styles["bottom-container"]}></div>
      </div> */}

      {/* <SimpleDialogDemo />
      <RangeComponent currentMin={100} currentMax={1000} isOpenSlider={true} />
      <LocationInput
        placeHolder="Enter First Point"
        value="value"
        onChange={() => console.log("change value")}
      /> */}
      <ToggleButtonWithIcon />
    </div>
  );
}
