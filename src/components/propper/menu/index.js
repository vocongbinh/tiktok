import Tippy from "@tippyjs/react/headless";
import { Wrapper as PropWrapper } from "~/components/propper";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItem from "./menuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);

function Menu({ children, items, onChange }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const defaultFn = () => {}
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onChange = {defaultFn}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            }
            else {
              onChange(item)
            }
          }}
        />
      );
    });
  };
  const onBack = () => {
    setHistory(history.slice(0, history.length - 1));
  };

  return (
    <Tippy
      visible
      onHide = {()=> setHistory(prev => prev.slice(0,1))}
      offset={[-100, 12]}
      delay={[0, 500]}
      render={(Attrs) => (
        <div className={cx("more-active")} tabIndex="-1" {...Attrs}>
          <PropWrapper className={cx("custom-padding")}>
            {history.length > 1 && <Header onClick={onBack} />}
            {renderItems()}
          </PropWrapper>
        </div>
      )}
      interactive
    >
      {children}
    </Tippy>
  );
}

export default Menu;
