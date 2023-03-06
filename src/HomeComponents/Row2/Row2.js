import classes from './Row2.module.css'
import MyPiechart from './Piechart';
import MyResponsiveLine from './Chart';

const Row2 = (props) => {

  return(
    <div className={classes.Row2Container}>
        <div className={classes.LineContainer}>
          <p>Total money spent over time</p>
          <MyResponsiveLine fontSize={props.fontSize}></MyResponsiveLine>
        </div>
        <div className={classes.PieChartContainer}>
          <p>Transactions distribution</p>
          <MyPiechart></MyPiechart>
        </div>  
    </div>

  );  
};

export default Row2;