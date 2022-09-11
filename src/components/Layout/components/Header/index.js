import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from "~/assets/images";
import Button from "~/components/Button";
import Menu from "~/components/propper/menu";
import Image from "~/components/Image"
import { UploadIcon, InboxIcon} from "~/components/icon"
import Search from "~/components/Layout/components/search"
import {

  faSignIn,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faUser,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);
const handleChange = (item) => {  
  console.log(item);
};
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "Tiếng Việt",
    children: {
      title: "language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Việt Nam",
        },
      ],
    },
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
const menuItems = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "View profile",
  }, 
  {
    icon: <FontAwesomeIcon icon={faBitcoin} />,
    title: "Get coins",
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Settings",
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: "Log out",
    separate: true
  }
]
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;
  useEffect(() => {
    setTimeout(() => setSearchResult([1, 2, 3]), 2000);
  });
  return (
    <header className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </div>
        <Search/>
        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tippy content="upload video" >
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy content="message">
                <button className={cx("action-btn")}  >
                  <InboxIcon/>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>upload</Button>
              <Button primary icon={<FontAwesomeIcon icon={faSignIn} />}>
                Log in
              </Button>
            </>
          )}
          <Menu items={currentUser? menuItems : MENU_ITEMS} onChange={handleChange}>
            {currentUser ? (
              <Image
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7071114066953469978~c5_720x720.jpeg?x-expires=1662012000&x-signature=iTW7YD2egPcD9HoEoP3l1ZkMn%2Fk%3D"
                alt="binh"
                 className={cx("avatar")}
              />
            ) : (
              <div>
                <button className={cx("more-btn")}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </div>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
