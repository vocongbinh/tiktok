import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("avt")} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1661497200&x-signature=g4M0dNn48LwGP6KuSc5WnOSlj44%3D" alt ="img" />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Võ Công Bình</span>
          <FontAwesomeIcon className={cx("icon")} icon={faCheckCircle} />
        </p>
        <span className={cx("username")}>võ công bình</span>
      </div>
    </div>
  );
}

export default AccountItem;
