import React from "react"
import { Field, reduxForm } from "redux-form";
import { maxLenghtCreator, requiredField } from "../../utils/validators/validators";
import { TextArea } from "../Common/formControl";



const maxLenght10 = maxLenghtCreator(10);

const ReviewsForm = (props) => {
return (
<form onSubmit={props.handleSubmit}> 
<div  >   
    <Field name={'reviewsMessage'} component={TextArea} placeholder={"ReduxTestMessage"}
    validate={[requiredField, maxLenght10 ]}  />
</div>        

<div>
    <button> Отправить отзыв </button>

</div>                
</form>
)
}


const ReviewsReduxForm  = reduxForm ({form: 'reviewsTextForm'})(ReviewsForm)

export default ReviewsReduxForm;

/*<form onSubmit={props.handleSubmit}>  -  в реакт формс формам присваиваются
свои внутренние пропсы, одним из которых есть свойство handleSubmit 
которое принимает сабмиті от всех форм
*/
/* Компонент TextArea это кастомная текст ареа из коммон / формконтрол <div className="
Для корректного использования указывается в формате {название компоенты}> */