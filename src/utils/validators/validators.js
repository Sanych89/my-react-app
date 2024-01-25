export const requiredField = value => {
    if (value) return undefined

    return ('Field is required!')

}

export const maxLenghtCreator = (maxLength) => (value) => {    
    
    if (value.length > maxLength) return `Max lenght is ${maxLength} symbols!`
    return undefined  ;


}
/*maxLenghtCreator - функция высшего порядка. ПРинимает аргумент maxLenght , применяет его к функции принимающей
value и выдает валидатор с не более чем maxLenght символов */