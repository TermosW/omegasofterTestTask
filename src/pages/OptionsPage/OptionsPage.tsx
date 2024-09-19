import { FC } from "react";
import { Header } from "../../components/Header/Header";
import TaskIcon1 from "../../images/house1.svg";
import TaskIcon2 from "../../images/house2.svg";
import { IContentElem } from "../../interfaces/interfaces";
import { ListContent } from "../../components/ListContent/ListContent";

export const OptionsPage: FC = () => {
	const content: IContentElem[] = [
        {
            urlPath: "/op1",  //Change
            icon: TaskIcon1,
            text: "Настройка 1",
            isUnactive: true
        },
        {
            urlPath: "/op2",  //Change
            icon: TaskIcon2,
            text: "Гастройка 2",
            isUnactive: true
        }
    ]
	return (
		<>
			<Header headerType="blue">Настройки</Header>
            <ListContent content={content}/>
		</>
	)
}