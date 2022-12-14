
import './App.css'
import react from 'react'
// import { Button } from "my-component-library";
// import "my-component-library/dist/index.css";
// import {useSelector,useDispatch} from 'react-redux'
// import Home from './view/home'
import Test from './view/test'
export const Box=react.memo(({value})=>{
  return <div>{value}</div>
})
export const RenderCounter=react.memo(({count})=>{
  return <div>{count}</div>
})


function App(props) {
  // const count=useSelector(state=>state?.counter.count)
  // const value=useSelector(state=>state?.counter.value)
  // const dispatch=useDispatch()
  //console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <Test/>
        {/* <Home/> */}
        {/* <Box value={value} />
        <RenderCounter count={count}/>
        <div className='btn' onClick={()=>dispatch({type:'Add'})}>增加</div>
        <div className='btn' onClick={()=>dispatch({type:'Del'})}>删减</div> */}
        {/* <Button btnType="primary" size="lg">
          Button
        </Button> */}
      </header>
    </div>
  );
}

export default App;
