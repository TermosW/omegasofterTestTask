export interface IListContent {
    content: IContentElem[];
}

export interface IContentElem {
    urlPath: string;
    icon?: string;
    text: string;
    isUnactive?: boolean;
}