import React from 'react'
// import {connect} from 'react-redux'


import {observer,inject } from 'mobx-react'



@inject('store')
@observer
export default class Test extends React.Component{
    test(){
        throw Error("xxx")
       // console.log(sn)
    }
    render(){
        //console.log(this.props,'xxx')
        return (
            <div onClick={this.test.bind(this)}>
                测试
            </div>
        )
    }
}


