import {useState} from 'react';


export default function useInput(value,validationFn) {
    const [enteredValue, setEnteredValue]=useState(value);
    const [didEdit,setDidEdit]=useState(false);

    const valueIsValid = validationFn(enteredValue);
    
    function handleOnChange(event) {
        //console.log(identifier,value);
        setEnteredValue(event.target.value)
        setDidEdit(false);
    }
    
    function handleBlur(){
        setDidEdit(true);
    }

    return {
        value:enteredValue,
        handleOnChange,
        handleBlur,
        hasError: didEdit && !valueIsValid
    };
};


