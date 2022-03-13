import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
  const [UserInputName, setUserInputName] = useState("");
  const [UserInputAge, setUserInputAge] = useState("");
  const [error, setError] = useState();

  const userNameChange = (event) => {
    setUserInputName(event.target.value);
  };

  const userAgeChange = (event) => {
    setUserInputAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (UserInputName.trim().length === 0 || UserInputAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name or age (non-empty values)",
      });
      return;
    }
    if (+UserInputAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Sorry,,, You're not Allowed to share us.",
      });
      return;
    }
    props.onAdduser(UserInputName, UserInputAge);
    setUserInputName("");
    setUserInputAge("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <h1>Share us..</h1>
        <h4>
          if you want attending our workshop. Please share us your information
        </h4>
        <br />
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName:</label>
          <input
            id="username"
            type="text"
            value={UserInputName}
            onChange={userNameChange}
          />
          <label htmlFor="age">Age (Year):</label>
          <input
            id="age"
            type="number"
            value={UserInputAge}
            onChange={userAgeChange}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
