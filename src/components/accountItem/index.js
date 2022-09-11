import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import Image from '~/components/Image'
const cx = classNames.bind(styles);
function AccountItem({data}) {
  return (
    <Link to = {`/@${data.nickname}`} className={cx("wrapper")}>
      <Image className={cx("avt")} src={data.avatar} alt ="img" />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>{data.full_name}</span>
         {data.tick && <FontAwesomeIcon className={cx("icon")} icon={faCheckCircle} />} 
        </p>
        <span className={cx("username")}>{data.nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
