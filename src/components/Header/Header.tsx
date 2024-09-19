import { FC } from "react";
import CloseIcon from "../../images/exit-icon.svg";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";

interface IChildren {
	children: string;
	headerType: "blue" | "white";
}

export const Header: FC<IChildren> = ({ children, headerType }: IChildren) => {
	const navigate = useNavigate();
	const location = useLocation();
	const urlArr = location.pathname.split("/");
	const res = urlArr.slice(0, urlArr.length-1);

	function handleClose() {
		if (location.pathname === "/scan") {
			navigate(-1);
		} else {
			navigate(res.join("/"));
		}
		
	}

	return (
		<header className="header">
			<div className="container">
				<div className={`header__content ${headerType === "white" && "header__content--white"}`}>
					{(headerType === "white") && 
					<button className="header__button" onClick={handleClose}>
						<img className="header__button-icon" src={CloseIcon} alt="Иконка закрыть" />
					</button>
					}
					<h1 className="header__title">{children}</h1>
				</div>
			</div>
		</header>
	)
}