import classNames from 'classnames/bind'
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Header({onClick}) {
    return ( <div className = {cx('wrapper')}>
        <FontAwesomeIcon  onClick = {onClick} className = {cx('back-btn')} icon = {faAngleLeft}/>
        <h3 className = {cx('header')} > Ngôn ngữ</h3>
        
    </div> );
}

export default Header;