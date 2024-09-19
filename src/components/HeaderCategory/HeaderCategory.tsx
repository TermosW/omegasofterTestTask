import { FC } from "react";
import SearchIcon from "../../images/filter-icon.svg";
import AddIcon from "../../images/make-icon.svg";
import "./HeaderCategory.css";
import { useLocation, useNavigate } from "react-router-dom";

interface IHeaderCategory {
	hasAddButton: boolean;
	title: string;
}

export const HeaderCategory: FC<IHeaderCategory> = ( {title, hasAddButton}: IHeaderCategory ) => {
	const navigate = useNavigate();
	const location = useLocation();
	
	function handleSearch() {
		navigate(`${location.pathname}/search`);
	}

	return (
		<header className="header">
			<div className="container">
				<div className="header__wrapper">
					<h1 className="header__title">{title}</h1>
					<div className="header__buttons-container">
						<button className="header__button btn btn--small" onClick={handleSearch}>
							<img className="header__button-image" src={SearchIcon} alt=""/>
							<span className="header__button-text">Поиск</span>
						</button>
						{hasAddButton && 
						<button className="header__button btn btn--small" >
							<img className="header__button-image" src={AddIcon} alt="" />
							<span className="header__button-text">Создать</span>
						</button>}
					</div>
				</div>
			</div>
		</header>
	)
}