import { FC, useState } from "react";
import { HeaderCategory } from "../../../components/HeaderCategory/HeaderCategory";
import { Link, useLocation } from "react-router-dom";
import { ILimitCards, limitCardsArr } from "../../../api/getData";
import { ProductionCardInfo } from "../../../components/ProductCardInfo/ProductCardInfo";
import "./ProductionCategory.css";

export const LimitCards: FC = () => {
	const location = useLocation();
	const [data, setdata] = useState<ILimitCards [] | null>(null);

	function isLimitCards(obj: any): obj is ILimitCards [] {
		return (typeof obj === "object" &&
			obj !== null && "id" in obj[0] &&
			"objectName" in obj[0]
		);
	}

	const getData = () => new Promise((resolve) => {
		setTimeout(() => resolve(limitCardsArr), 10);
	});

	getData().then((res) => {
		if (isLimitCards(res)) {
			setdata(res);
		}
	});
    
	return (
		<>
			<HeaderCategory title="Лимитные карты УП (Приход)" hasAddButton={false}/>
			<main>
				<section className="production">
					<div className="container">
						<ul className="production__list">
							{data && data.length ?
							(data.map((elem: ILimitCards)  => (
								<li className="production__list-item" key={elem.id}>
									<Link className="link" to={`${location.pathname}/${elem.id}`}>
										<div className="production-card">
											<h2 className="production-card__title">{elem.name}</h2>
											<div className="production-card__props">
												<ProductionCardInfo title={"Отправитель"} text={elem.sender} />
												<ProductionCardInfo title={"Получатель"} text={elem.recipient} />
												<ProductionCardInfo title={"Объект"} text={elem.objectName} />
											</div>
										</div>
									</Link>
								</li>
							)))
							: <p className="production__list-empty">Список пуст...</p>}
						</ul>
					</div>
				</section>
			</main>
		</>
	)
}