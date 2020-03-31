import React, { FC } from "react";
import style from "./Email.module.css";
import { ReactComponent as EmailIcon } from "../../images/emailIcon.svg";

export const Email: FC<{}> = ({
  ...props
}) => (
  <div className={style.Email} {...props}>
    <EmailIcon className={style.Icon}/>
    <span className={style.EmailAddress}>rightonhana@gmail.com</span>
  </div>
);

export default Email;
