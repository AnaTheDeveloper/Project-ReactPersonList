import React, {useState} from "react";
import classes from './ErrorModel.module.css';
import Card from "./Card";
import Button from "./Button";

const ErrorModel = (props) => {

    return(
        <div>
            {/*Greys out the screen behind the pop up.*/}
            <div className={classes.backdrop} onClick={props.onConfirm}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>
                        {props.title}
                    </h2>
                </header>
                <div className={classes.content}>
                    <p>
                        {props.message}
                    </p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModel;