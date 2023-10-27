import React, { useState }  from 'react';

/*import store from './redux/state';*/

import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import NewApp from './NewApp';

import store from './redux/redux-store';





const root = ReactDOM.createRoot(document.getElementById('root'));



let rerenderEntireTree = (state) => {
  
    root.render (
        <BrowserRouter>
          <NewApp 
          state={state}
          /*addPost={store.addPost.bind(store)}*/
          /*updateNewPost={store.updateNewPost.bind(store)} */  
          dispatch={store.dispatch.bind(store)}
          store={store}
          
          />    
        </BrowserRouter> );       
}

rerenderEntireTree(store.getState())
    
store.subscribe( () => {

  let state = store.getState();
  rerenderEntireTree(state);
});
 
/* поскольку при конфигурации addPost в формате {store.addPost} происходит ее вызов в другой функции внутри компонентов  (в ревьювс вызывается 

     let addPost = () => {                    
        props.addPost() 
        
  которая смотрит на свой обьект, в данном случае пропс и пытается вызвать там функцию addPost которая на самом деле сидит в сторе. 

  Поэтому, чтобы явно указать то, что функция должна вызываться из обьекта стор мы используем  метод () bind - метод позволяющий привязать вызов метода к конкретному обьекту */
