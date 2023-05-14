import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

const UiButtonPrimary = (props) => {
    return (
        <Fragment>
            <Button
                variant="primary"
                disabled={props.isLoading || props.isDisable}
                size={"lg"}
                onClick={props.onClick}
                type={props.type}
                id={props.id}
                className={'inte-button'}
            >
                {`${props.text}`}
            </Button>
        </Fragment>
    );
};

export {
    UiButtonPrimary
}


