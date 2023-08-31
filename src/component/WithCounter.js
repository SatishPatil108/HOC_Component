import React,{Component} from "react";

const WithCounter = (WrappedComponent,increment) =>{

    class WithCounter extends Component{

        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
      
          incrementCounter = ()=>{
              this.setState(prevState=>{
                  return{count:prevState.count+increment}
              })
          }

          render(){
            return(
                <WrappedComponent
                  count={this.state.count}
                  incrementCounter={this.incrementCounter}
                  {...this.props}
                />
            )
          }
    }
    return WithCounter
}

export default WithCounter