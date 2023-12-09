import classes from './Planner.module.css';
import PlannerDetails from '../../Components/PlannerComponent/PlannerDetails'

const Planner = () => {
    return(
        <div className={classes.container}>
            <PlannerDetails/>
        </div>
    );
}

export default Planner;