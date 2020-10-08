import {createStore} from 'redux'
import authReducer from './authReducer'
import SecureLS from 'secure-ls'

const secureLs = new SecureLS();

const getStateFromStorage= () =>{

  const hoaxAuth = secureLs.get('hoax-auth')

  let stateInLocaleStore={
    username: undefined,
    displayname: undefined,
    password: undefined,
    image: undefined,
    isLoggedIn:false
  }

  if(hoaxAuth){    
     return hoaxAuth;
    }

  return stateInLocaleStore;

}

const updateStateInStorage = (newState) =>{
  secureLs.set('hoax-auth',newState)
 
}

  
const configureStore = () =>{
  
    const store = createStore(authReducer,getStateFromStorage(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    
    store.subscribe(()=>{
      updateStateInStorage(store.getState());
    })

    return store;

};
  

  export default configureStore;