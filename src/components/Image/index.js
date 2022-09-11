import styles from './Image.module.scss';
import classNames from 'classnames'
import { forwardRef, useState } from "react";
import images from "~/assets/images"
const Image = forwardRef(({ src, className,fallback:customFallback =images.noImage , ...props }, ref) => {
  const [fallback, setFallback] = useState("");
  const handleError = ()=> {
    setFallback(customFallback)
  }
  return <img ref={ref} className = {classNames(styles.wrapper, className)} src={fallback || src} {...props} onError= {handleError} />;
});

export default Image;
