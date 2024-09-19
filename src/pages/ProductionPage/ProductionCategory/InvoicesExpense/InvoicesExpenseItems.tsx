import { Link, useLocation, useParams } from "react-router-dom";
import { IInvoicesExpense, IInvoicesCard, invoicesExpenseArray } from "../../../../api/getData";
import { ProductionCardInfo } from "../../../../components/ProductCardInfo/ProductCardInfo";
import { HeaderCategory } from "../../../../components/HeaderCategory/HeaderCategory";
import { useState } from "react";

export const InvoicesExpenseItems = () => {
	const location = useLocation();
	const { id } = useParams();
  const [data, setdata] = useState<IInvoicesExpense| null>(null);

	function isInvoicesExpense(obj: any): obj is IInvoicesExpense {
		return (typeof obj === "object" &&
			obj !== null
		);
	}

	const getData = () => new Promise((resolve) => {
		setTimeout(() => resolve(invoicesExpenseArray.find(elem => elem.id === Number(id))), 10);
	});
	
	getData().then((res) => {
		if (isInvoicesExpense(res)) {
			setdata(res);
		}
	});

	return (
		<>
			<HeaderCategory hasAddButton={false} title={data ? data.name + " (Расход)" : ""} />
			<main>
				<section className="production production--no-padding">
					<div className="container">
						<div className="production__content-top">
							{data &&
							(<div className="production-card__props">
								<ProductionCardInfo title={"Отправитель"} text={data.sender} />
								<ProductionCardInfo title={"Получатель"} text={data.recipient} />
								<ProductionCardInfo title={"Статус"} text={data.status} />
								<ProductionCardInfo title={"Дата выдачи"} text={data.date} />
							</div>)}
						</div>
						<ul className="production__list production__list--small">
							{data?.cardsExpense && data.cardsExpense.length ? 
							(data.cardsExpense.map((elem: IInvoicesCard)  => (
								<li className="production__list-item" key={elem.id}>
									<Link className="link" to={`${location.pathname}/${elem.id}`}>
										<div className="production-card">
											<h2 className="production-card__title">{elem.designation + " -- " + elem.name}</h2>
											<div className="production-card__props">
												<ProductionCardInfo title={"Выдано"} text={elem.issued + " шт"} />
												<ProductionCardInfo title={"Принято"} text={elem.accepted + " шт"} />
											</div>
										</div>
									</Link>
								</li>
							)))
							:<p className="production__list-empty">Список пуст...</p>}
						</ul>
					</div>
				</section>
			</main>
		</>
	)
}
