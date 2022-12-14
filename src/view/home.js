import React from 'react'
import {connect} from 'react-redux'



class Home extends React.Component{
    handleAdd=()=>{
       this.props.Add()
    }
    render(){
        return (
            <div>
                 <div className='btn' onClick={this.handleAdd}>增加</div>
                 <div className='btn'>删减</div>
            </div>
        )
    }
}


//
const mapStateProps=(state,props)=>({...state,...props})
const mapDispatchProps=dispatch=>(
    {
        Add:()=>dispatch({type:'Add'}),
        Del:()=>dispatch({type:'Del'})
    }
)
export default connect(mapStateProps,mapDispatchProps)(Home)