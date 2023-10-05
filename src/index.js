import React, { useState }  from 'react';
import ReactDOM from 'react-dom/client';
import NewApp from './NewApp';
import state from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let testProp = 13

/*let trainingData = [{trainerName: "Cardio Trainer!", trainerUrl: "cardio", id: 1},{trainerName: "Strenght Trainer", trainerUrl: "strenght", id: 2 }, {trainerName: "Crossfit Trainer", trainerUrl: "crossfit", id: 3 }, {trainerName: "Joga Trainer", trainerUrl: "Joga", id: 4} ]
/*обьявили массив обьектов из которого потом извлекаются пропсы для компонента. Создано как задел на будущее когда данные будут браться из сервера*/



/*let trainingDataMessages = [{trainerMsg: "Good", id: 1},{trainerMsg: "Medium try.", id: 2 }, {trainerMsg: "Need improvements!", id: 3 },  {trainerMsg: "No Need for improvements.", id: 4 } , {trainerMsg: "Superb!", id: 5 } ]*/

root.render(
  <React.StrictMode>   
      <NewApp state={state} />   
  </React.StrictMode>
);
