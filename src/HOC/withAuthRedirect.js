import { Navigate } from "react-router-dom"


export function withAuthRedirect (Component) {

            if (!isAuth) return <Navigate to='/login' />

            return <Component {...this.props} />     

}
