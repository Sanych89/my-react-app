import React from 'react';
import ReactDOM from 'react-dom/client';
import './MyCab.module.css';
import MyCabStat from './Mystat/MyCabStat';
import classes from './MyCab.module.css'




function MyCab(props) {
    return (
        <>
        <div className={classes.MyCabMain}>          
          Личный кабинет        
        <MyCabStat avname="Sanych" clubAge='34'/>
        <MyCabStat avname="Marsik" clubAge='8' />
        </div>
        </>
  )
}

export default MyCab