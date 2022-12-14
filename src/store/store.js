import {createStore,combineReducers} from 'redux'
import counter from './reducer/index'
const reducer =combineReducers({
    counter
})
export default createStore(reducer)