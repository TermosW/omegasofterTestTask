import { ChangeEvent, FC, MouseEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "../../images/previous-arrow-icon.svg";
import ArrowNextIcon from "../../images/next-arrow-icon.svg";
import "./PageSwitch.css";

interface IPageSwitch {
  current: number;
  max: number;
  urlPath: string;
}

export const PageSwitch: FC<IPageSwitch> = ({current, max, urlPath}: IPageSwitch) => {
  const navigate = useNavigate();
  const [pageNum, setPageNum] = useState(current);

  function handlePrevPage(e: MouseEvent) {
		e.preventDefault();

		if (current > 1) {
      setPageNum(current - 1);
			navigate(`${urlPath}/${current-1}`);
		}
	}

  function handleNextPage(e: MouseEvent) {
		e.preventDefault();

		if (current < max) {
      setPageNum(current + 1);
			navigate(`${urlPath}/${current+1}`);
		}
	}

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.currentTarget.value);

    if (value >= 1 && value <= max) {
      setPageNum(value);
      navigate(`${urlPath}/${value}`);
    }
	}

  return (
    <div className="page-switch">
      <Link to={".."} onClick={(e) => handlePrevPage(e)}>
        <button className={`page-switch__button ${pageNum > 1 && "page-switch__button--blue"}`}>
          <img className="page-switch__icon" src={ArrowBackIcon} alt="" />
        </button>
      </Link>
      <input className="page-switch__input" type="number" value={pageNum} id="pageId" onChange={(e) => handleChange(e)}/>
      <span className="page-switch__text">из {max}</span>
      <Link to={".."} onClick={(e) => handleNextPage(e)}>
        <button className={`page-switch__button ${pageNum < max && "page-switch__button--blue"}`}>
          <img className="page-switch__icon" src={ArrowNextIcon} alt="" />
        </button>
      </Link>
    </div>
  )
}