import React from "react"
import { Field, reduxForm } from "redux-form";
import { Input } from "../Common/formControl";
import { requiredField } from "../../utils/validators/validators";
import style from "../Common/formControl.module.css"


const LoginForm = (props) => {
console.log(props.error)
return (
    
<form onSubmit={props.handleSubmit}> 


<div>
    <Field placeholder="Email" name={'email'} validate={[requiredField]}component={Input}/>
</div>        

<div>
<Field placeholder="Password" name={'password'} validate={[requiredField]} component={Input} type='password'/>
</div>        

<div>
    <Field component={Input} name={'rememberMe'} type='checkbox'/> Remember me
</div>        
{props.error && <div className={style.formSummaryError}> {props.error} </div>}
<div>
    <button> Login </button>

</div>                
</form>
)
}


const LoginReduxForm  = reduxForm ({form: 'login'})(LoginForm)

export default LoginReduxForm;

/*<form onSubmit={props.handleSubmit}>  -  в реакт формс формам присваиваются
свои внутренние пропсы, одним из которых есть свойство handleSubmit 
которое принимает сабмиті от всех форм
*/