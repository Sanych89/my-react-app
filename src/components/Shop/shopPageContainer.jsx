import React from "react";

import { connect } from "react-redux";
import Shop from "./Shop";
import { isBought } from "../../redux/ShopPageReducer";







let mapStateToProps = (state) => {
    return {
        quantity: state.shopPage.quantity,   
        name: state.shopPage.name, 
        boughtQTY: state.shopPage.boughtQTY,  
        boughtNAME: state.shopPage.boughtNAME,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        isBought: () => {dispatch(isBought())},        

    }
}


const ShopPageContainer = connect(mapStateToProps, mapDispatchToProps)(Shop);



export default ShopPageContainer