let initialState = {
    
    trainingData: [{trainerName: "Cardio Trainer", trainerUrl: "cardio", id: 1},{trainerName: "Strenght Trainer", trainerUrl: "strenght", id: 2 }, {trainerName: "Crossfit Trainer", trainerUrl: "crossfit", id: 3 }, {trainerName: "Joga Trainer", trainerUrl: "Joga", id: 4}],
    trainingDataMessages: [{trainerMsg: "Good!!!", id: 1},{trainerMsg: "Medium try.", id: 2 }, {trainerMsg: "Need improvements!", id: 3 },  {trainerMsg: "No Need for improvements.", id: 4 } , {trainerMsg: "Superb!", id: 5 } ]
        
}

const trainingPageReducer = (state = initialState, action) => {
    
    return state;
}

export default trainingPageReducer