import { FC, useState } from "react";
import { Header } from "../../../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../../components/Input/Input";

export const InvoicesExpenseSearch: FC = () => {
    const navigate = useNavigate();
    const [numValue, setNumValue] = useState("");
    const [sender, setSender] = useState("");
    const [recipient, setRecipient] = useState("");
    const [date, setDate] = useState("");

    function handleChangeNum(e: React.FormEvent<HTMLInputElement>) {
		setNumValue(e.currentTarget.value);
	}

    function handleChangeSender(e: React.FormEvent<HTMLInputElement>) {
		setSender(e.currentTarget.value);
	}

    function handleChangeRecipient(e: React.FormEvent<HTMLInputElement>) {
		setRecipient(e.currentTarget.value);
	}

    function handleChangeDate(e: React.FormEvent<HTMLInputElement>) {
		setDate(e.currentTarget.value);
	}

    function handleSearch() {

    }

    function handleClose() {
        navigate(-1);
    }

    return (
        <>
            <Header headerType={"white"}>Фильтр ВЗН УП</Header>
            <main>
                <section className="scan">
                    <div className="container">
                        <div className="scan__content">
                            <form className="scan-form" method="GET" action="#">
                                <Input inputLabel={"Номер ВЗН"} id={"object-num"} inputType={"text"} value={numValue} onChangeValue={handleChangeNum}/>
                                <Input inputLabel={"Отправитель"} id={"sender"} inputType={"text"} value={sender} onChangeValue={handleChangeSender}/>
                                <Input inputLabel={"Получатель"} id={"recipient"} inputType={"text"} value={recipient} onChangeValue={handleChangeRecipient}/>
                                <Input inputLabel={"Дата принятия (период)"} id={"date"} inputType={"text"} value={date} onChangeValue={handleChangeDate}/>
                                
                                <div className="scan-form__button-container">
                                    <button className="scan-form__button btn" type="submit" onClick={handleSearch}>Поиск</button>
                                    <button className="scan-form__button btn btn--white" type="button" onClick={handleClose}>Отмена</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>  
            </main>
        </>
    )
}



                
        {/* <Input inputLabel={"Номер ВЗН"} id={"object-num"} inputType={"text"}/>
        <Input inputLabel={"Отправитель"} id={"sender"} inputType={"text"} />
        <Input inputLabel={"Получатель"} id={"recipient"} inputType={"text"} />
        <Input inputLabel={"Дата принятия (период)"} id={"date"} inputType={"text"} /> */}

        // <div className="scan-form__input">
        //     <label className="scan-form__input-label" htmlFor="object-num">Номер ВЗН</label>
        //     <input className="scan-form__input-field" type="text" value={numValue} id="object-num" onChange={(e) => handleChangeNum(e)}/>  
        // </div>
        // <div className="scan-form__input">
        //     <label className="scan-form__input-label" htmlFor="sender">Отправитель</label>
        //     <input className="scan-form__input-field" type="text" value={numValue} id="sender" onChange={(e) => handleChangeNum(e)}/>  
        // </div>
        // <div className="scan-form__input">
        //     <label className="scan-form__input-label" htmlFor="recipient">Получатель</label>
        //     <input className="scan-form__input-field" type="text" value={numValue} id="recipient" onChange={(e) => handleChangeNum(e)}/>  
        // </div>