import React, { useState }  from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import NewApp from './NewApp';
import store from './redux/redux-store';
import { Provider } from 'react-redux';





const root = ReactDOM.createRoot(document.getElementById('root'));




  
    root.render (
      
        <BrowserRouter>
          <Provider store={store}>
            <NewApp 
            //state={state}
            /*addPost={store.addPost.bind(store)}*/
            /*updateNewPost={store.updateNewPost.bind(store)} */  
            //dispatch={store.dispatch.bind(store)}
            //store={store}          
          />    
          </Provider>
        </BrowserRouter> );       
  




/* поскольку при конфигурации addPost в формате {store.addPost} происходит ее вызов в другой функции внутри компонентов  (в ревьювс вызывается 

     let addPost = () => {                    
        props.addPost() 
        
  которая смотрит на свой обьект, в данном случае пропс и пытается вызвать там функцию addPost которая на самом деле сидит в сторе. 

  Поэтому, чтобы явно указать то, что функция должна вызываться из обьекта стор мы используем  метод () bind - метод позволяющий привязать вызов метода к конкретному обьекту */
