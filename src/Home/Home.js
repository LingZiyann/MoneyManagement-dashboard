import classes from './Home.module.css'
import Card from '../UI/Card';
import MoneyDistribution from '../MoneyDistribution/MoneyDistribution';
import Row2 from '../Row2/Row2';
import Row3 from '../Row3/Row3';


const Home = () => {
    return(
        <div className={classes.Homecontainer}>
            <MoneyDistribution></MoneyDistribution>
            <Row2></Row2>
            <Row3></Row3>
        </div>
    );
};

export default Home;