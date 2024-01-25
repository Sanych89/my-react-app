import React from "react";

class ProfileStatus extends React.Component  {

    

    statusInputRef = React.createRef;


    state = {
        editMode: false,
        status: this.props.status,

    };

    activateEditMode = () => {
        this.setState( {
            editMode: true,
        })
    };

    deactivateEditMode = () => {
        this.setState( {
            editMode: false,
        });
        this.props.udpateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    }

    componentDidUpdate(prevProps, prevState){
        
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
        let a = this.state;
        let b = this.props;
        console.log('Component updated!')
        

    }
        /*в  componentDidUpdate можно посмотреть приходящий в функцию стейт  пропс
        и сравнить их с текущими this, тем самым понимая что изменилось */
        /*В данном случае запускается обновление стейта если из внешних пропсов пришел 
        статус который не равен локальному стейту*/
        /* цель - синхронизация локального и глобального стейта при отрисовке*/ 
  
  
   


    render () {
        console.log('render')
    return (<div>
    {!this.state.editMode &&
    <div>
    <p onDoubleClick={ this.activateEditMode}> {this.props.status || "No status!"} </p>
    </div>
    }
    {this.state.editMode &&
    <div>
    <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode} value = {this.state.status}/>
    </div>
    }
    </div>
    )
    /*классовая компонента ProfileStatus имеет свой локальный стейт. Если в нем у поля
    едитМод значение НЕ тру то отображаем статус, а если тру - поле инпута */
    /*прописали стрелочной функцией метод activateEditMode который при даблклике меняет 
    стейт через метод сетстейт и посылает ему обьект с перечнем свойств локал стейта
    для изменения и меняем там едитМод на тру. 
    Сетсттейт говорит  локал стейту что страницу нужно перерисовать */
    
}
}

export default ProfileStatus