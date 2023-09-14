import React, { useContext } from "react";
import classes from "./CitiesList.module.scss";
import Spb from "../../assets/spb.jpg";
import Teatral from "../../assets/teatral.jpg";
import { CityContext } from "../Weather/Weather";

export const CitiesList = () => {
  const { city, setCity } = useContext(CityContext);
  return (
    <div>
      <img className={classes.cityImg} src={Spb} alt="Saint-Petersburg" />
      <img className={classes.cityImg} src={Teatral} alt="Teatralny" />
    </div>
  );
};
