import classes from './Home.module.css';
import MoneyDistribution from '../../HomeComponents/MoneyDistribution/MoneyDistribution';
import Row2 from '../../HomeComponents/Row2/Row2';
import Row3 from '../../HomeComponents/Row3/Row3';


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