import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);

function Button({
  to,
  href,
  children,
  onClick,
  disabled,
  text = false,
  primary = false,
  outline = false,
  small = false,
  rounded = false,
  icon,
  className,
  ...passPros
}) {
  let Comp = "button";
  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    text,
    disabled,
    rounded,
    [className]: className
  });
  const pros = {
    onClick,
    ...passPros,
  };
  if (disabled) {
    Object.keys(pros).forEach((pro) => {
      if (pro.startsWith("on") && typeof pros[pro] === "function") {
        delete pros[pro];
      }
    });
  }
  if (to) {
    pros.to = to;
    Comp = Link;
  } else if (href) {
    pros.href = href;
    Comp = "a";
  }
  return (
    <Comp className={classes} {...pros}>
      {icon&&<span className = {cx('icon')}>
        {icon}
        </span>}
      <span className = {cx('title')}>{children}</span>
    </Comp>
  );
}

export default Button;
