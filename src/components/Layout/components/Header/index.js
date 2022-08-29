import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from "~/assets/images";
import AccountItem from "~/components/accountItem";
import Button from "~/components/Button";
import Menu from "~/components/propper/menu";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faSignIn,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PropWrapper } from "~/components/propper";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);
const handleChange = (item) => {
  console.log(item)
}
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "Tiếng Việt",
    children: {
      title: 'language',
      data: [
        {
          type:'language',
          code: 'en',
          title: 'English'
          
        },
        {
          type:'language',
          code: 'vi',
          title: 'Việt Nam'
        }
      ]
    }
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Phản hồi và trợ giúp",
    to: "./path",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcut",
  },
];
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => setSearchResult([1, 2, 3]), 2000);
  });
  return (
    <header className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </div>
        <Tippy
          visible={searchResult.length > 0}
          render={(Attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...Attrs}>
              <PropWrapper>
                <h4 className={cx("account")}>account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PropWrapper>
            </div>
          )}
          interactive
        >
          <div className={cx("search")}>
            <input placeholder="search accounts and videos" />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("action")}>
          <Button text>upload</Button>
          <Button primary icon={<FontAwesomeIcon icon={faSignIn} />}>
            Log in
          </Button>
          <Menu items={MENU_ITEMS} onChange ={handleChange}>
            <button className={cx("more-btn")}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
