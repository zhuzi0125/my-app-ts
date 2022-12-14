import { observable } from "mobx";
class Counter{
  @observable count=2
}

const store ={
    couterStore:new Counter()
}  

export default store