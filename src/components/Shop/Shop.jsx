import React from 'react';
import classes from './shop.module.css'
import { NavLink, Route } from 'react-router-dom';
import ShopIcon from '../Common/shopIcon';



let Shop = (props) => {

    return <div>
        <ShopIcon/>



        <span> Топ бар</span>
        <span> список товаров </span>
        <span> <NavLink to ='/Mainscreen'> Назад</NavLink> </span>

        
    
    </div>   
    }
    





export default Shop