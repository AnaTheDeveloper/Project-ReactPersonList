import React from "react";
import classes from './Card.module.css';

const Card = (props) => {

    return (
        // Using CSS Module for the styling
        //Makes sure external class and internal class work together.
        <div className={`${classes.card} ${props.className}`}>
            {/*Lets other components pass info into them. In this case AddUsers JSK goes into here, which is then styled by the Card css.*/}
            {props.children}
        </div>
    );
};

export default Card;

