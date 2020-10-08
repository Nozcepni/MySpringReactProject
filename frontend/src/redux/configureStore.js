import {createStore} from 'redux'
import authReducer from './authReducer'

  
const configureStore = () =>{

  const hoaxAuth = localStorage.getItem('hoax-auth')

  let stateInLocaleStore={
    username: undefined,
    displayname: undefined,
    password: undefined,
    image: undefined,
    isLoggedIn:false
  }

    if(hoaxAuth){
      try{
        stateInLocaleStore = JSON.parse(hoaxAuth)
      }
      catch(error){
        
      }
     
    }
  
    const store = createStore(authReducer,stateInLocaleStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    
    store.subscribe(()=>{
        localStorage.setItem('hoax-auth',JSON.stringify(store.getState()))
    })

    return store;

};
  

  export default configureStore;