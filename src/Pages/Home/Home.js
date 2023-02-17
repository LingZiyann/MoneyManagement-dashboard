import classes from './Home.module.css';
import Row1 from '../../HomeComponents/Row1/Row1';
import Row2 from '../../HomeComponents/Row2/Row2';
import Row3 from '../../HomeComponents/Row3/Row3';


const Home = () => {
    return(
        <div className={classes.Homecontainer}>
            <Row1/>
            <Row2/>
            <Row3/>
        </div>
    );
};

export default Home;