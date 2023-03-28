export const initialState ={
    cookie:"",
    popularMovies:[],
    upcomingMovies:[],
    topRatedMovies:[],
    eventData : [],
};

const reducer = (state , action)=>{
    console.log("Action -->", action);
    console.log("state -->", state);


    //action --> type , [payload]
    
    switch(action.type){
        case 'SET_COOKIE':
            return{
                ...state,
                cookie:action.payload,
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
        case 'SET_EVENT_DATA':
            return{
                ...state,
                eventData:action.payload
            }
        default:
            return state;
    }
    
}

export default reducer;