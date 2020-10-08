import * as ACTIONS from './Constanst'

  const defaultState= {

    username: undefined,
    displayname: undefined,
    password: undefined,
    image: undefined,
    isLoggedIn:false
    
  }

  const authReducer = (state,action) =>{
 
    if(action.type=== ACTIONS.LOGOUT_SUCCESS){
      return defaultState;
    }
    else if(action.type=== ACTIONS.LOGIN_SUCCESS){
      return {
        ...action.payload,
        isLoggedIn:true
      }
    }
  
  
    return state;
  }

  export default authReducer;