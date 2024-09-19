import { FC, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ListItem } from "../ListItem/ListItem";
import { IContentElem, IListContent } from "../../interfaces/interfaces";
import { v4 as uuid } from "uuid";
import "./ListContent.css";


export const ListContent: FC<IListContent> = ({content}: IListContent) => {
	function HandleClick(event: MouseEvent) {
		event.preventDefault();
	}
	
    const listItems: JSX.Element[] = content.map((elem: IContentElem) => (
        <li className="menu__list-item" key={uuid()}>
            <Link className={`link ${elem.isUnactive && "unactive"}`} to={elem.urlPath} onClick={(event) => elem.isUnactive && HandleClick(event)}>
                {elem.icon ? <ListItem icon={elem.icon}>{elem.text}</ListItem> : <ListItem>{elem.text}</ListItem>}
            </Link>
        </li>
    ));

	return (
		<main>
			<section className="menu">
				<div className="container">
					<ul className="menu__list">
						{listItems}
					</ul>
				</div>
			</section>
		</main>
	)
}