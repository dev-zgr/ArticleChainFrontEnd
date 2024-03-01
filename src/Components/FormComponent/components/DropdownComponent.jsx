import "../styles/dropdown.css";
import {useState} from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import {preKeydownBehavior} from "@testing-library/user-event/dist/keyboard/plugins";
import * as events from "events";

export const DropdownComponent = ({label,id, options, limit, field ,value,onSelect, onDeselect,error, index}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState([]);

    const selectHandler = () => {
        setIsOpen((prevState) => (!prevState));
    }

    const onSelectHandler = (label, value) => {
        if(selectedOption.length >= limit){
            return;
        }
        const selectedObject = {label:label,value:value}
        if(selectedOption.filter(s => s.label === label).length === 0){
            if(index !== undefined){
                onSelect(index,field, selectedObject);
            }else{
                onSelect(field, selectedObject);
            }
            setSelectedOption((prevState) => {
                return [...prevState, selectedObject]
            })
        }
    }

    const onRemoveHandler = (label) => {
        onDeselect(field,label)
        setSelectedOption((prevState) => {
            return prevState.filter(s => s.label !== label)
        })
    }

    return (
        <div  className={`form-input ${error ? 'invalid' : '' }`}>
            <label htmlFor={id}>
                <strong>{label}</strong>
            </label>
            <div id={id} className={"dropdown-selectmenu"} >
                {
                    value && value.map((option) => {
                        return (
                            <div className={"dropdown-selectmenu__selected"} onClick={() => onRemoveHandler(option.label)}>
                                {option.label}
                            </div>
                        )

                    })
                }

                {isOpen ? <RiArrowDropUpLine onClick={selectHandler} className={"dropdown-selectmenu__icon"}/>
                    :
                    <RiArrowDropDownLine onClick={selectHandler} className={"dropdown-selectmenu__icon"}/>}
            </div>
            <div className={isOpen === true ? `dropdown-item-list ` : `dropdown-item-list; display:none`}>
                {isOpen && options.map((option) => {

                    return (
                        <div className={"dropdown-dropdown__item"}
                             onClick={() => {onSelectHandler(option.label, option.value)}}>
                            {option.label}
                        </div>
                    )
                })}
            </div>
            {error && <p className="input-error"><strong>{error}</strong> </p>}
        </div>
    );
};