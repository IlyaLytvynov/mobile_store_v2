import {observable} from 'mobx';

export class AppState {
  @observable items = [
    {
      title: 'test'
    }
  ];

  setItem() {
    const title = "TEstasdas";
    this.items.push({title})
  }

  constructor() {
    console.log("Hello world!!");
    setTimeout(() => {
      const title = "TEstasdas";
      this.items.push({title})
    }, 4000)
  }
}