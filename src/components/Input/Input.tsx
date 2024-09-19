import { ChangeEvent, FC } from "react";
import "./Input.css";

interface IInput {
    inputLabel: string;
    id: string;
    inputType: string;
    value: string | number;
    onChangeValue(arg: ChangeEvent<HTMLInputElement>): void;
}

export const Input: FC<IInput> = ({inputLabel, id, inputType, value, onChangeValue}: IInput) => {

    function handleChange(e: ChangeEvent<HTMLInputElement>): void {
        onChangeValue(e);
    }
    
    return (
        <div className="scan-form__input">
            <label className="scan-form__input-label" htmlFor={id}>{inputLabel}</label>
            <input className="scan-form__input-field" type={inputType} value={value} id={id} onChange={(e) => handleChange(e)}/>  
        </div>
    )
}
