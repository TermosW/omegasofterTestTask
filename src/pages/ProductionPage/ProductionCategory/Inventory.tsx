import { FC, useState } from "react";
import { HeaderCategory } from "../../../components/HeaderCategory/HeaderCategory";
import { Link, useLocation } from "react-router-dom";
import { IInventory, inventoryArray } from "../../../api/getData";
import { ProductionCardInfo } from "../../../components/ProductCardInfo/ProductCardInfo";
import "./ProductionCategory.css";

export const Inventory: FC = () => {
	const location = useLocation();
	const [data, setdata] = useState<IInventory [] | null>(null);

	function isInventory(obj: any): obj is IInventory [] {
		return (typeof obj === "object" &&
			obj !== null && "id" in obj[0] &&
			"division" in obj[0]
		);
	}

	const getData = () => new Promise((resolve) => {
		setTimeout(() => resolve(inventoryArray), 10);
	});

	getData().then((res) => {
		if (isInventory(res)) {
			setdata(res);
		}
	});

	return (
		<>
			<HeaderCategory title="Акты инвентаризации УП" hasAddButton={false}/>
			<main>
				<section className="production">
					<div className="container">
						<ul className="production__list">
							{data && data.length ?
							(data.map((elem: IInventory)  => (
								<li className="production__list-item" key={elem.id}>
									<Link className="link" to={`${location.pathname}/${elem.id}`}>
										<div className="production-card">
											<h2 className="production-card__title">{elem.name}</h2>
											<div className="production-card__props">
												<ProductionCardInfo title={"Подразделение"} text={elem.division} />
												<ProductionCardInfo title={"Дата"} text={elem.date} />
											</div>
										</div>
									</Link>
								</li>
							))): <p className="production__list-empty">Список пуст...</p>}
						</ul>
					</div>
				</section>
			</main>
		</>
	)
}