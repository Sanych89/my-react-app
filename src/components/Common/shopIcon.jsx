import React from "react";
import classes from './common.module.css'



let ShopIcon = (props) => {
    return <div className={classes.shopIcon + " " + (props.boughtQTY > 0 ? classes.isActive : "")}>            
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlowNRb4iRA-o1F7WW4a-O_lHWYRJxkh6bzA&usqp=CAU" alt="корзина" />
        <div> {props.boughtQTY}</div>
        </div>
    }


export default ShopIcon;