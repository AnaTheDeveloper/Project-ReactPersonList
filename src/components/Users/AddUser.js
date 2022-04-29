import React from "react";
import classes from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {

    //Function is called when submit button is pressed.
    const addUserHandler = (event) => {
        event.preventDefault();
    }





    return (
        <div>
            {/* I want to make sure that all the different styles in putting on this class don't clash with each other */}
            <Card className={classes.input}>
                {/*When the form gets submitted call the addUserHandler function above.*/}
                <form onSubmit={addUserHandler}>
                    <label htmlFor="name">Name</label>
                    <input is="name" type="text" />

                    <label htmlFor="age">Age</label>
                    <input is="age" type="number"/>

                    {/*This is our custom button*/}
                    <Button type="submit">Show Interest</Button>
                </form>
            </Card>


        </div>


    );
};

export default AddUser;