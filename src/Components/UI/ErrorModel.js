import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
const ErrorModel = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>{props.message}</div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModel;
