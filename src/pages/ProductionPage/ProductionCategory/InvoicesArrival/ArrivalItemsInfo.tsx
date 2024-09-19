import { ChangeEvent, FC, useState } from "react";
import { Header } from "../../../../components/Header/Header";
import { ProductionCardInfo } from "../../../../components/ProductCardInfo/ProductCardInfo";
import { useLocation, useParams } from "react-router-dom";
import { invoicesExpenseArray } from "../../../../api/getData";
import { Input } from "../../../../components/Input/Input";
import { PageSwitch } from "../../../../components/PageSwitch/PageSwitch";

export const ArrivalItemsInfo: FC = () => {
	const {id } = useParams();
	const location = useLocation();
	const urlArr = location.pathname.split("/");
	const urlPathPrev = urlArr.slice(0, urlArr.length-1).join("/");
	const idExpenseCard = urlArr[urlArr.length-2];
	const data = invoicesExpenseArray.filter(elem => elem.id === Number(idExpenseCard))[0];
	const dataCards = data.cardsArrival.filter(elem => elem.id === Number(id))[0];

	const [issuedCount, setIssuedCount] = useState(dataCards.issued);
	const [acceptedCount, setAcceptedCount] = useState(dataCards.accepted);
	const [orderNum, setOrderNum] = useState("");
	
	function handleChangeIssued(e: ChangeEvent<HTMLInputElement>): void {
		setIssuedCount(Number(e.currentTarget.value));
	}

	function handleChangeAccepted(e: ChangeEvent<HTMLInputElement>): void {
		setAcceptedCount(Number(e.currentTarget.value));
	}

	function handleChangeOrder(e: ChangeEvent<HTMLInputElement>): void {
		setOrderNum(e.currentTarget.value);
	}
	
	return (
		<>
			<Header headerType="white">{`Элемент ${data.name}`}</Header>
			<main>
				<section className="scan">
					<div className="container">
						<div className="scan__content">
							<div className="scan__top-content">
								<ProductionCardInfo title={"№ карточки"} text={String(dataCards.number)} />
								<ProductionCardInfo title={"Обозначение"} text={dataCards.designation} />
								<ProductionCardInfo title={"Наименование"} text={dataCards.name} />
							</div>
							<form className="scan-form" method="GET" action="#">
								<div className="scan-form__double-input">
									<Input inputLabel={"Выдано (шт)*"} id={"issued"} inputType={"number"} value={issuedCount} onChangeValue={handleChangeIssued}/>
									<Input inputLabel={"Принято (шт)*"} id={"accepted"} inputType={"number"} value={acceptedCount} onChangeValue={handleChangeAccepted}/>
								</div>
								<Input inputLabel={"№ Заказа"} id={"num"} inputType={"string"} value={orderNum} onChangeValue={handleChangeOrder}/>	
								<PageSwitch current={Number(id)} max={data.cardsArrival.length} urlPath={urlPathPrev}/>
							</form>
						</div>
					</div>
				</section>  
			</main>
		</>
	)
}
