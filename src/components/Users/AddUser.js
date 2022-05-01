import React, {useState} from "react";
import classes from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {

    const [enteredName, setEnteredName] = useState('');

    const [enteredAge, setEnteredAge] = useState('');

    //Check if error needs to come up or not.
    const [error, setError] = useState();

    //Function is called when submit button is pressed.
    const addUserHandler = (event) => {
        event.preventDefault();

        //Adding validation
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age.'
            });
            return;
        }

        //The + is added to ensure a conversion is made. enteredAge is a string but its being compared against a number.
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age, greater than 0.'
            });
            return;
        }

        console.log('This persons details are: \n Name:', enteredName + '\n Age: ', enteredAge);
        //Pointing to props, props hold a pointer to a method in App. Forwarding data to app.
        props.onAdduser(enteredName, enteredAge);

        //After form is submitted reset users input to blank.
        setEnteredName('');
        setEnteredAge('');
    }

    //This function will be called for every keystroke that is entered into the username.
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }


    return (
        // Custom wrapper to avoid div soup.
        <Wrapper>
            {/*Conditional render on JSK*/}
            {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
            {/* I want to make sure that all the different styles in putting on this class don't clash with each other */}
            <Card className={classes.input}>
                {/*When the form gets submitted call the addUserHandler function above.*/}
                <form onSubmit={addUserHandler}>
                    <label htmlFor="name">Name</label>
                    {/*OnChange listens to the keystrokes and on each keystroke calls the method.*/}
                    <input is="name" type="text" value={enteredName} onChange={nameChangeHandler}/>

                    <label htmlFor="age">Age</label>
                    <input is="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>

                    {/*This is our custom button*/}
                    <Button type="submit">Show Interest</Button>
                </form>
            </Card>
        </Wrapper>

    );
};

export default AddUser;