import React from "react";
import { Field, reduxForm } from "redux-form";
import { TextArea } from "../../Common/formControl";
import { maxLenghtCreator, requiredField } from "../../../utils/validators/validators.js"


const maxLenght15 = maxLenghtCreator(15);


const MyCabForm = (props) => {
    return (
        
        <form onSubmit={props.handleSubmit} >

            <div>
                <Field name={'mycabMessage'} component={TextArea} placeholder={'myCabMessage'}
                validate={[requiredField, maxLenght15 ]}/>                
            </div>
        </form>
        


    )
}

const MyCabReduxForm  = reduxForm ({form: 'myCabForm'})(MyCabForm)

export default MyCabReduxForm