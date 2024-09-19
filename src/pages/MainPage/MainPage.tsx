import { FC } from "react";
import { Header } from "../../components/Header/Header";
import TasksIcon from "../../images/tasks-icon.svg";
import OptionsIcon from "../../images/options-icon.svg";
import AboutSystemIcon from "../../images/about-system-icon.svg";
import { IContentElem } from "../../interfaces/interfaces";
import { ListContent } from "../../components/ListContent/ListContent";

export const MainPage: FC = () => {
	const content: IContentElem[] = [
        {
            urlPath: "/tasks",
            icon: TasksIcon,
            text: "Задачи"
        },
        {
            urlPath: "/options",
            icon: OptionsIcon,
            text: "Настройки"
        },
        {
            urlPath: "/about-system",
            icon: AboutSystemIcon,
            text: "О системе",
            isUnactive: true
        }
    ];

	return (
		<>
			<Header headerType="blue">Меню</Header>
			<ListContent content={content}/>
		</>
	)
}