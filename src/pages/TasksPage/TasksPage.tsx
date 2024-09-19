import { FC } from "react";
import { Header } from "../../components/Header/Header";
import TaskIcon1 from "../../images/house1.svg";
import TaskIcon2 from "../../images/house2.svg";
import { IContentElem } from "../../interfaces/interfaces";
import { ListContent } from "../../components/ListContent/ListContent";

export const TasksPage: FC = () => {
	const content: IContentElem[] = [
        {
            urlPath: "/tasks/warehouse", //change
            icon: TaskIcon1,
            text: "Складской учёт",
            isUnactive: true
        },
        {
            urlPath: "/tasks/production", //change
            icon: TaskIcon2,
            text: "Учёт в производстве"
        }
    ];

	return (
		<>
			<Header headerType="blue">Задачи</Header>
			<ListContent content={content}/>
		</>
	)
}