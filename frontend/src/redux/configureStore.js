import {createStore} from 'redux'
import authReducer from './authReducer'

const loggedInState= {

    username: 'user1',
    displayname: 'display1',
    password: 'Password123',
    image: null,
    isLoggedIn:true
    
  }
  
const configureStore = () =>{
  
    return createStore(authReducer,loggedInState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

}
  

  export default configureStore;