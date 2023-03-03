import classes from './Home.module.css';
import Row1 from '../../HomeComponents/Row1/Row1';
import Row2 from '../../HomeComponents/Row2/Row2';
import Row3 from '../../HomeComponents/Row3/Row3';
import { useState, useEffect } from 'react';


const Home = () => {
    const [fontSize, setFontSize] = useState(11)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleWindowResize);
  
      if (windowWidth < 420){
        setFontSize(9);
      } else {
        setFontSize(11);
      };

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };

    });

    return(
        <div className={classes.Homecontainer}>
            <Row1 className={classes.Row1}/>
            <Row2 fontSize={fontSize}/>
            <Row3 fontSize={fontSize}/>
        </div>
    );
};

export default Home;