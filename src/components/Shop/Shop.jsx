import React from 'react';
import classes from './shop.module.css'
import { NavLink, Route } from 'react-router-dom';
import ShopIcon from '../Common/shopIcon';
import ShopIconContainer from '../Common/shopIconContainer';




let Shop = (props) => {

    return <div >
        <ShopIconContainer/>
        <div className={classes.ShopMain}>
        
        


        <div >
        <div> Количество: {props.quantity}</div>
        <div> Наименование: {props.name}</div>
        {props.quantity >= 1 ? <button onClick={props.isBought}> Купить </button> : <button disabled> Нет в наличии!</button> }

        
        </div>
        
        

        
    
    </div>   
    <div>
    <span> Список товаров купленных товаров:</span>
    {props.boughtNAME}, {props.boughtQTY}
    </div>
    <div>
    <span className={classes.link}> <NavLink to ='/Mainscreen'> Назад</NavLink> </span>
    </div>
    </div>
    }
    





export default Shop