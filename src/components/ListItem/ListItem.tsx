import { FC } from "react";
import "./ListItem.css";

interface IListItem {
    icon?: string;
    children: string;
}

export const ListItem: FC<IListItem> = ({icon, children}: IListItem) => {
    return (
        <div className="card">
            {icon && <img className="card__image" src={icon} alt={"Иконка " + children} />}
            <span className="card__text">{children}</span>
        </div>
    )
}