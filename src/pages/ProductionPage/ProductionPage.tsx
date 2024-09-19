import { FC } from "react";
import { Header } from "../../components/Header/Header";
import { IContentElem } from "../../interfaces/interfaces";
import { ListContent } from "../../components/ListContent/ListContent";

export const ProductionPage: FC = () => {
	const content: IContentElem[] = [
        {
            urlPath: "/tasks/production/inventory", //change
            text: "Акты инвентаризации"
        },
        {
            urlPath: "/tasks/production/invoices-arrival", //change
            text: "Внутризаводские накладные (Приход)"
        },
        {
            urlPath: "/tasks/production/invoices-expense", //change
            text: "Внутризаводские накладные (Расход)"
        },
        {
            urlPath: "/tasks/production/limit-cards", //change
            text: "Лимитные карты (Приход)"
        },
        {
            urlPath: "/tasks/production/nomenclature", //change
            text: "Цеховая номенклатура"
        }
    ]
	
	return (
		<>
			<Header headerType="blue">Учёт в производстве</Header>
            <ListContent content={content}/>
		</>
	)
}