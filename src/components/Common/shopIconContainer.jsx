
import { connect } from "react-redux";
import ShopIcon from "./shopIcon";


let mapStateToProps = (state) => {
    return {
        boughtQTY: state.shopPage.boughtQTY,   
                       
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
   
    }
}


const ShopIconContainer = connect(mapStateToProps, mapDispatchToProps)(ShopIcon);



export default ShopIconContainer

