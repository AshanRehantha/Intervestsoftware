import React, { useEffect, useRef, useState } from "react";
import { Form, FormControl, FormGroup, InputGroup } from "react-bootstrap";
import { Field } from "react-final-form";
import { AiOutlineUser, AiOutlineLock, AiOutlineSearch } from "react-icons/ai";

const ReactFormField = ({
    component,
    name,
    render,
    validate,
    validateFields,
    type,
    onChange,
}) => {
    return (
        <Field
            component={component}
            name={name}
            render={render}
            validate={validate}
            validateFields={validateFields}
            type={type}
            onChange={(val, prevVal) => {
                onChange(val);
            }}
        />
    );
};

const UiInputs = (props) => {
    const inputRef = useRef(null);
    const [passwordShown, setPasswordShown] = useState(false);
    const [inputValueLength, setInputValueLength] = useState();
    const [inputValue, setInputValue] = useState("");



    useEffect(
        function () {
            if (
                typeof props.onChange != "undefined" &&
                typeof props.value != "undefined"
            ) {
                setInputValueLength(props.value.length);
                setInputValue(props.value);
            }
        },
        [props.value],
    );

    return (
        <ReactFormField
        name={props.name}
        render={({ input, meta }) => {
            return(
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"> {props.type === "password" ? <AiOutlineLock/> : <AiOutlineUser/>}</InputGroup.Text>
                    <Form.Control
                            {...input}
                            placeholder={props.label}
                            type={
                                props.type === "password"
                                    ? passwordShown
                                        ? "text"
                                        : "password"
                                    : props.type
                                }
                                id={props.id}
                                name={props.name}
                                value={props.value}
                                isInvalid={
                                    meta.invalid &&
                                    meta.touched &&
                                    !meta.active
                                }
                                ref={inputRef}
                                onInput={(e) => {
                                        props.clearErrors != undefined && props.clearErrors();
                                        setInputValueLength(
                                            inputRef.current.value.length,
                                        );
                                        if (props.pattern) {
                                            if (!e.target.validity.valid) {
                                                e.target.value = inputValue;
                                            } else {
                                                setInputValue(e.target.value);
                                            }
                                        }
                                    }}
                                disabled={props.disabled}
                                maxLength={props.maxLength}
                                onPaste={props.onPaste}
                                pattern={props.pattern}
                                onChange={
                                        typeof props.onChange != "undefined"
                                            ? props.onChange
                                            : input.onChange
                                    }
                    />
                </InputGroup>
            )
        }}
        />
    )
}

const UiLoginCheckBox = (props) => {
    return(
    <div className="inter-auth-login-checkbox">
        <Form.Check 
            type={'checkbox'}
            id={'check'}
        />
        <span className="inter-auth-login-checkbox__text">Remember me <a href="" className="login-canvas__link">Forgot password</a></span>
    </div>
    )
}

const UiSearchBar = (props) => {
    const [searchInput, setSearchInput] = useState("");
    return (
        <div className={"inter-search-input"}>
            <FormGroup>
                <div className={"inter-search-input__ico"}>
                    <AiOutlineSearch/>
                </div>
                <FormControl
                    size="md"
                    type={"text"}
                    placeholder={props.placeholder}
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    maxLength={props.maxLength}
                />
            </FormGroup>
        </div>
    )
}

export default UiInputs;
export {
    UiLoginCheckBox,
    UiSearchBar
}