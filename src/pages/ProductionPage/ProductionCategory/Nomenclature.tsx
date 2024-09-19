import { FC, useState } from "react"
import { HeaderCategory } from "../../../components/HeaderCategory/HeaderCategory"
import { Link, useLocation } from "react-router-dom";
import { INomenclature, nomenclatureArray } from "../../../api/getData";
import { ProductionCardInfo } from "../../../components/ProductCardInfo/ProductCardInfo";
import "./ProductionCategory.css";

export const Nomenclature: FC = () => {
	const location = useLocation();
	const [data, setdata] = useState<INomenclature [] | null>(null);

	function isNomenclature(obj: any): obj is INomenclature [] {
		return (typeof obj === "object" &&
			obj !== null && "id" in obj[0] &&
			"nomenclature" in obj[0]
		);
	}

	const getData = () => new Promise((resolve) => {
		setTimeout(() => resolve(nomenclatureArray), 10);
	});

	getData().then((res) => {
		if (isNomenclature(res)) {
			setdata(res);
		}
	});
    
  return (
    <>
    	<HeaderCategory title="Цех. номенклатура" hasAddButton={false}/>
      <main>
				<section className="production">
					<div className="container">
						<ul className="production__list">
							{data && data.length ?
							(data.map((elem: INomenclature)  => (
								<li className="production__list-item" key={elem.id}>
									<Link className="link" to={`${location.pathname}/${elem.id}`}>
										<div className="production-card">
											<h2 className="production-card__title">{elem.name}</h2>
											<div className="production-card__props">
												<ProductionCardInfo title={"Подразделение"} text={elem.division} />
												<ProductionCardInfo title={"Номенклатура"} text={elem.nomenclature} />
												<ProductionCardInfo title={"Тип продукции"} text={elem.productionType} />
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