export const initialState ={
    userLoggedIn:null,
    popularMovies:[],
    upcomingMovies:[],
    topRatedMovies:[],
};

const reducer = (state , action)=>{
    console.log("Action -->", action);
    console.log("state -->", state);


    //action --> type , [payload]
    
    switch(action.type){
        case 'USER':
            return{
                ...state,
                userLoggedIn:action.payload,
            }
        case 'SET_POPULAR':
            return{
                ...state,
                popularMovies:action.payload
            }
        case 'SET_TOP_RATED':
            return{
                ...state,
                topRatedMovies:action.payload
            }
        case 'SET_UPCOMING':
            return{
                ...state,
                upcomingMovies:action.payload
            }
        default:
            return state;
    }
    
}

export default reducer;