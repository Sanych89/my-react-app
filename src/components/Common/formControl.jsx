import React from "react"
import styles from "./../Common/formControl.module.css"



export const TextArea = ({input, meta, ... props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <div> <textarea {...input} {...props}/> </div> 
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

/*export const TextArea = ({input, meta, ... props}) =>  означает, что из поступающего 
обьекта пропс будет взято  инпут, мета и  деструктуризирован пропс*/
/* в обьекте мета хранятся мета данные (данные о данных в т.ч. ерроры и ворнинги) т.е. 
если  в метаданных есть ерроры показать спан с ошибкой. Если нет - не показывать */ 

export const Input = ({input, meta, ... props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <div> <input {...input} {...props}/> </div> 
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}