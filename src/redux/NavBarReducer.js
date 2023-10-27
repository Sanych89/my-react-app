let initialState = {
    
    navPageTrainers: [{trainerRealName: 'Alex!', trainerImgUrl: 'https://cdn.pixabay.com/photo/2016/08/18/11/00/man-1602633_640.png', id: 1 }, {trainerRealName: 'Aya', trainerImgUrl: 'https://cdn.pixabay.com/photo/2013/10/22/07/56/android-199225_640.jpg', id: 2 }],
    navPageTrainersPrice: [{trainerRealName: 'Alex', trainerPrice: 3000, id: 1 },{trainerRealName: 'Aya', trainerPrice: 5000, id: 2 }]
    
}


const navBarReducer = (state = initialState , action) => {
    
    return state;
}

export default navBarReducer;