import {createStore,applyMiddleware,compose} from 'redux'
import authReducer from './authReducer'
import SecureLS from 'secure-ls'
import thunk from 'redux-thunk'

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

   const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(authReducer,getStateFromStorage(),composeEnhancers(applyMiddleware(thunk)))
    
    store.subscribe(()=>{
      updateStateInStorage(store.getState());
    })

    return store;

};
  

  export default configureStore;