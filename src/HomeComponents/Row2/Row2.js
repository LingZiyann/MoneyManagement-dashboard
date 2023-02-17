import classes from './Row2.module.css'
import MyPiechart from './Piechart';
import MyResponsiveBar from './BarChart';

const Row2 = () => {

  return(
    <div className={classes.Row2Container}>
        <div className={classes.GraphContainer}>
          <p>Recent transactions</p>
          <MyResponsiveBar/>
        </div>
        <div className={classes.TransactionsContainer}>
          <p>Transactions distribution</p>
          <MyPiechart></MyPiechart>
        </div>  
    </div>

  );  
};

export default Row2;