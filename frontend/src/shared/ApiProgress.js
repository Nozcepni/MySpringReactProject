import React, { Component } from 'react'
import axios from 'axios'

function getDisplayName(WrappedComponent){ 
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

 function withApiProgress(WrappedComponent){

    return class extends Component {

       // static displayName= 'ApiProgress'+ getDisplayName(WrappedComponent)

        static displayName = `ApiProgress(${getDisplayName(WrappedComponent)})`

        state={
            pendingApiCall:false
        }
    
        componentDidMount(){
            this.responseInterceptor =  axios.interceptors.request.use((request)=>{
                this.setState({
                    pendingApiCall:true
                })
                return request;
            })
    
           this.responseInterceptor = axios.interceptors.response.use((response)=>{
    
                this.setState({pendingApiCall:false});
                return response;
    
            },(error)=>{
                this.setState({pendingApiCall:false});
                throw error;
            })
    
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.responseInterceptor)
            axios.interceptors.response.eject(this.responseInterceptor)
        }
    
    
        render() {
    
            const {pendingApiCall} = this.state
    
            return (
                    <WrappedComponent pendingApiCall={pendingApiCall} {...this.props}></WrappedComponent>
                   
            )
        }
    }
    

 }

 
export default withApiProgress