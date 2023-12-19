import classes from './Home.module.css';
import Row1 from '../../Components/HomeComponents/Row1/Row1'
import Row2 from '../../Components/HomeComponents/Row2/Row2'
import Row3 from '../../Components/HomeComponents/Row3/Row3'
import { useState, useEffect } from 'react';


const Home = () => {
    const [fontSize, setFontSize] = useState<number>(11)
    // const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    // useEffect(() => {
    //   const handleWindowResize = () => {
    //     setWindowWidth(window.innerWidth);
    //   };
  
    //   window.addEventListener('resize', handleWindowResize);
  
    //   if (windowWidth < 420){
    //     setFontSize(9);
    //   } else {
    //     setFontSize(11);
    //   };

    //   return () => {
    //     window.removeEventListener('resize', handleWindowResize);
    //   };

    // }, [windowWidth]);

    return(
        <div className={classes.Homecontainer}>
            <Row1 /*className={classes.Row1}*//>
            <Row2 fontSize={fontSize}/>
            <Row3 fontSize={fontSize}/>
        </div>
    );
};

export default Home;