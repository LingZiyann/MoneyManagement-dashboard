import classes from './Card.module.css'

const Card = (props: any) => {
    return (
        <div className={classes.container}>
            {props.children}
        </div>
    );
};

export default Card;