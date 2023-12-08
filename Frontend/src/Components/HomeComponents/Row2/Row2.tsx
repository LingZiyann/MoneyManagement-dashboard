import classes from './Row2.module.css'
import MyPiechart from './Piechart';
import MyResponsiveLine from './Chart';

interface Row2Props {
  fontSize: number;
}


const Row2 = (props:Row2Props) => {

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