const initState={
    count:1,
    value:0
}
export default (state=initState,action)=>{
    var newState=Object.assign({},state)
    switch(action?.type){
      case 'Add':
        newState.count++
        return newState
      default:
        return newState;
    }

}