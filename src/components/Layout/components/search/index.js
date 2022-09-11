import { useState, useEffect, useRef } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import AccountItem from "~/components/accountItem";
import { Wrapper as PropWrapper } from "~/components/propper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDebounce } from "~/hooks";
import * as searchService  from "~/ApiService/searchService";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const debounce = useDebounce(searchValue, 500);

  const deleteValue = () => {
    setSearchValue("");
    inputRef.current.focus();
    setSearchResult([]);
  };
  const handleClickOutside = () => {
    setShowResult(false);
  };
  useEffect(() => {
    if (!debounce.trim()) {
      //loại bỏ khoảng trống đầu và cuối
      setSearchResult([]);
      return;
    }

    const fetchAPI = async () => {
      setLoading(true);
      const result = await searchService.search(debounce);
      setSearchResult(result);
      setLoading(false);
    };
    fetchAPI();
   
  }, [debounce]);
  const inputRef = useRef();
  return (
    <HeadlessTippy
      onClickOutside={handleClickOutside}
      visible={showResult && searchResult.length > 0}
      render={(Attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...Attrs}>
          <PropWrapper>
            <h4 className={cx("account")}>account</h4>
            {searchResult.map((result) => {
              return <AccountItem key={result.id} data={result} />;
            })}
          </PropWrapper>
        </div>
      )}
      interactive
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="search accounts and videos"
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx("clear")} onClick={deleteValue}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && (
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        )}

        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
