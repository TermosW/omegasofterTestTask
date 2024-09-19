import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "../../images/menu-icon.svg";
import ScanIcon from "../../images/skan-icon.svg";
import BackIcon from "../../images/arrow-back-icon.svg";
import "./Footer.css";
import { FC, MouseEvent } from "react";

export const Footer: FC = () => {
	const navigate = useNavigate();

	function handleClick(event: MouseEvent) {
		event.preventDefault();
		navigate(-1);
	}
	
	return (
		<footer className="footer">
			<div className="container">
				<ul className="footer__list">
					<li className="footer__list-item">
						<Link className="link" to={"/"}>
							<div className="footer__nav-item">
								<img className="footer__nav-image" src={MenuIcon} alt="" />
								<span className="footer__nav-title">Меню</span>
							</div>
						</Link>
					</li>
					<li className="footer__list-item">
						<Link className="link" to={"/scan"}>
							<div className="footer__nav-item">
								<img className="footer__nav-image" src={ScanIcon} alt="" />
								<span className="footer__nav-title">Сканнер</span>
							</div>
						</Link>
					</li>
					<li className="footer__list-item">
						<Link className="link" to={".."} onClick={(event) => handleClick(event)}>
							<div className="footer__nav-item">
								<img className="footer__nav-image" src={BackIcon} alt="" />
								<span className="footer__nav-title">Назад</span>
							</div>
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}