import React, {useState} from "react";
import classes from './UsersList.module.css';
import Card from "../UI/Card";

const UsersList = (props) => {

    return (
        <div>
            <Card className={classes.users}>
                <ul>
                    {/*Transform userdata to JSK.*/}
                    {props.users.map((user) => (
                        <li key={user.id}>
                            {user.name} aged {user.age} is interested!
                        </li>))}
                </ul>
            </Card>
        </div>
    );
};

export default UsersList;