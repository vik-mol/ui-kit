/** @format */

import { FC } from "react";

import ButtonProps from './button.types'

import Style from './button.module.sass'

const Button: FC<ButtonProps> = () => {
  return <button className={Style.button} >xxxx </button>;
};

export default Button;
