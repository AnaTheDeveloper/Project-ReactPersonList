import classes from './App.module.css';
import AddUser from "./components/Users/AddUser";
import Title from "./components/UI/Title";
import Subtitle from "./components/UI/Subtitle";

function App() {


  return (
    <div className={classes.app}>

        <Title>
            <p>Show your interest in programming!</p>
        </Title>

        <Subtitle>
            Sign Up Below
        </Subtitle>

        <AddUser/>

    </div>
  );
}

export default App;
