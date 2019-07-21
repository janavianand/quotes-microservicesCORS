import React from 'react'
import {connect} from 'react-redux'
import {quoteAndFlagThunk} from '../store/quote'

class GetQuote extends React.Component{

  render(){
    console.log(this.props)
    return (
      <div>
        {!this.props.flag ?
        <a className="waves-effect waves-light btn" onClick={()=>this.props.setFlag()}>Get Quote</a>:
        <div>
          <a className="waves-effect waves-light btn" onClick={()=>this.props.setFlag()}>Get Random Quote</a>
          <h4>Quote:{this.props.quote.quote}</h4>
          <h6>Author:{this.props.quote.author.author}</h6>
        </div>
        }
      </div>
    )
  }
}

//map the state to the component via props
const mapState=(state)=>{
  return {
    flag:state.quotes.flag,
    quote:state.quotes.quote
  }
}
//dispatch thunk
const mapDispatch=(dispatch)=>{
  return {
    setFlag:function(){
      return dispatch(quoteAndFlagThunk())
    }
  }
}

export default connect(mapState,mapDispatch)(GetQuote)
