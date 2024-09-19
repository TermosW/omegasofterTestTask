import { FC } from "react";
import { Header } from "../../../../components/Header/Header";

export const InvoicesExpenseAdd: FC = () => {

    return (
        <>
            <Header headerType={"white"}>Создание ВЗН (Расход)</Header>
            <main>
                <section className="scan">
                    <div className="container">
                        <div className="scan__content">
                            <form className="scan-form" method="GET" action="#">
                                {/* <Input inputLabel={"№ ВЗН*"} id={"object-num"} inputType={"number"} />
                                <Input inputLabel={"Отправитель*"} id={"sender"} inputType={"text"} />
                                <Input inputLabel={"Получатель*"} id={"recipient"} inputType={"text"} />
                                <Input inputLabel={"Выдал МОЛ*"} id={"recipient"} inputType={"text"} />
                                <Input inputLabel={"Дата выдачи*"} id={"date"} inputType={"date"} />
                                <Input inputLabel={"Принял МОЛ"} id={"recipient"} inputType={"text"} /> */}
                                <div className="scan-form__button-container">
                                    <button className="scan-form__button btn" type="submit">Создать</button>
                                    <button className="scan-form__button btn btn--white" type="button">Отмена</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>  
            </main>
        </>
    )
}