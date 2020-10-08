

  const defaultState= {

    username: undefined,
    displayname: undefined,
    password: undefined,
    image: undefined,
    isLoggedIn:false
    
  }

  const authReducer = (state,action) =>{
 
    if(action.type=== 'logout-success'){
      return defaultState;
    }
  
  
    return state;
  }

  export default authReducer;