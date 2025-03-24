/** @format */

import { FC } from "react";

import ButtonProps from "./button.types";

import Style from "./button.module.sass";

const Button: FC<ButtonProps> = ({ children }) => {
  return <button className={Style.button}>{children}</button>;
};

export default Button;
