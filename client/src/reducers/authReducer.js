const INITIAL_STATE = {
    isSignedIn: null,
    user_id: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            
            return {...state, isSignedIn : true, user_id: action.payload };
    
        case 'SIGN_OUT': 

            return {...state, isSignedIn : false, user_id: null};
        default:
            return state;
    }
}