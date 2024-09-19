import { FC, useState } from "react";
import { HeaderCategory } from "../../../components/HeaderCategory/HeaderCategory";
import { Link, useLocation } from "react-router-dom";
import { IInvoicesExpense, invoicesExpenseArray } from "../../../api/getData";
import { ProductionCardInfo } from "../../../components/ProductCardInfo/ProductCardInfo";
import "./ProductionCategory.css";


export const InvoicesExpense: FC = () => {
	const location = useLocation();
	const [data, setdata] = useState<IInvoicesExpense [] | null>(null);

	function isInvoicesExpense(obj: any): obj is IInvoicesExpense [] {
		return (typeof obj === "object" &&
			obj !== null && "id" in obj[0] &&
			"cardsExpense" in obj[0]
		);
	}

	const getData = () => new Promise((resolve) => {
		setTimeout(() => resolve(invoicesExpenseArray), 10);
	});

	getData().then((res) => {
		if (isInvoicesExpense(res)) {
			setdata(res);
		}
	});
	
	return (
		<>
			<HeaderCategory title="ВЗН УП (Расход)" hasAddButton={true}/>
			<main>
				<section className="production">
					<div className="container">
						<ul className="production__list">
							{data && data.length ? 
							(data.map((elem: IInvoicesExpense)  => (
								<li className="production__list-item" key={elem.id}>
									<Link className="link" to={`${location.pathname}/${elem.id}`}>
										<div className="production-card">
											<h2 className="production-card__title">{elem.name}</h2>
											<div className="production-card__props">
												<ProductionCardInfo title={"Отправитель"} text={elem.sender} />
												<ProductionCardInfo title={"Получатель"} text={elem.recipient} />
												<ProductionCardInfo title={"Дата выдачи"} text={elem.date} />
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




	// getData().then((res) => {
	// 	setdata( { loaded: true, data: res } )
	// })

	// let invoicesItems: ReactNode = <p className="production__list-empty">Список пуст...</p>;

	// if (data.data !== null) {
	// 	invoicesItems = data.data.map((elem: IInvoicesExpenseArray)  => (
	// 		<li className="production__list-item" key={elem.id}>
	// 			<Link className="link" to={`/tasks/production/invoices-expense/${elem.id}`}>
	// 				<div className="production-card">
	// 					<h2 className="production-card__title">{elem.name}</h2>
	// 					<div className="production-card__props">
	// 						<ProductionCardInfo title={"Отправитель"} text={elem.sender} />
	// 						<ProductionCardInfo title={"Получатель"} text={elem.recipient} />
	// 						<ProductionCardInfo title={"Дата выдачи"} text={elem.date} />
	// 					</div>
	// 				</div>
	// 			</Link>
	// 		</li>
	// 	));
	// }
