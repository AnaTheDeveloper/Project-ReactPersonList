import classes from './App.module.css';
import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import Title from "./components/UI/Title";
import Subtitle from "./components/UI/Subtitle";
import UsersList from "./components/Users/UsersList";

function App() {

    //Stores added data - Lifting the state
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (nameData, ageData) => {
        setUsersList((prevUsersList) => {
            return [...prevUsersList, {name: nameData, age: ageData, id: Math.floor(Math.random().toString())}];
        });
    };


  return (
    <div className={classes.app}>

        <Title>
            <p>Show your interest in programming!</p>
        </Title>

        <Subtitle>
            Sign Up Below
        </Subtitle>

        {/*Adding users data*/}
        <AddUser onAdduser={addUserHandler}/>

        {/*Outputting users data*/}
        <UsersList users={usersList}/>

    </div>
  );
}

export default App;
