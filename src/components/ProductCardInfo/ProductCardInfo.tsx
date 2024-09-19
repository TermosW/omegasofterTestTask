import { FC } from "react"


interface IItemData {
    title: string;
    text: string | undefined;
}

export const ProductionCardInfo: FC<IItemData> = ({title, text}: IItemData) => {
    return (
        <div className="production-card__props-item">
            <span className="production-card__props-title">{title}:</span>
            <span className="production-card__props-text">{text}</span>
        </div>
    )
}