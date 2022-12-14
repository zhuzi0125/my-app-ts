import { observable } from "mobx";
class Counter{
  @observable count=2
}

export default {
    couterStore:new Counter()
}