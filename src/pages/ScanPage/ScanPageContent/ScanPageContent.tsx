import "./ScanPageContent.css";
import { Input } from "../../../components/Input/Input";
import { ChangeEvent, MouseEvent, useState } from "react";
import { IInvoicesExpense, invoicesExpenseArray } from "../../../api/getData";
import { useNavigate } from "react-router-dom";


interface ITarget {
	isFind: boolean;
	data: IInvoicesExpense [] | null;
}

export const ScanPageContent = () => {
	const navigate = useNavigate();

	const [objectNum, setObjectNum] = useState("");
	const [objectType, setObjectType] = useState("");

	const [target, setTarget] = useState<ITarget>({isFind: false, data: null});

	const onChangeNum = (e: ChangeEvent<HTMLInputElement>): void => {
		const currentText = e.currentTarget.value.toUpperCase();
		setObjectNum(currentText);
		const res = invoicesExpenseArray.find(elem => elem.invoiceNum === currentText);
		
		if (res) {
			setTarget({isFind: true, data: invoicesExpenseArray.filter(elem => elem.invoiceNum === currentText)});
		} else {
			setTarget({isFind: false, data: null});
		}
	}

	const onChangeType = (e: ChangeEvent<HTMLInputElement>): void => {
		setObjectType(e.currentTarget.value);
	}

	function handleFind(e: MouseEvent) {
		e.preventDefault();
		// searchParams.set("num", objectNum);
		// const path = {
		// 	"http://localhost:5173/tasks/production/invoices-expense",
		// 	search: createSearchParams(searchParams).toString
		// };
		// navigate({
		// 	pathname: "http://localhost:5173/tasks/production/invoices-expense",
		// 	search: `?${createSearchParams({
    //     "num": objectNum
    // })}`
		// });
	}

	function handleCancel() {
		navigate(-1);
	}
	
	return (
		<main>
			<section className="scan">
				<div className="container">
					<div className="scan__content">
						<p className="scan__text">Сканируйте штрихкод с номером объекта или введите его вручную.</p>
						<form className="scan-form" method="GET" action="#">
							<Input inputLabel={"Номер объекта"} id={"object-num"} inputType={"text"} value={objectNum} onChangeValue={onChangeNum}/>
							<Input inputLabel={"Тип объекта БО"} id={"object-type"} inputType={"text"} value={objectType} onChangeValue={onChangeType}/>
							<div className="scan-form__button-container">
								{target.isFind ? <button className="scan-form__button btn" type="submit" onClick={(e) => handleFind(e)}>Перейти</button> :
								<button className="scan-form__button btn" type="submit" disabled>Перейти</button>}
								<button className="scan-form__button btn btn--white" type="button" onClick={handleCancel}>Отмена</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</main>
	)
}




{/* <div className="scan-form__input">
<label className="scan-form__input-label" htmlFor="object-num">Номер объекта</label>
<input className="scan-form__input-field" type="text" id="object-num" value={objectNum} onChange={(e) => handleChangeNum(e)}/>
</div>
<div className="scan-form__input">
<label className="scan-form__input-label" htmlFor="object-type">Тип объекта БО</label>
<input className="scan-form__input-field" type="text" id="object-type" />
</div> */}