import { action, observable } from 'mobx';

export interface IHomeStore {
  data: Array<string>;
  addData: () => void;
}

export class HomeStore implements IHomeStore {
  @observable
  data: Array<string> = ['Hello world'];

  @action
  addData() {
    this.data.push('Test');
  }

  @action
  fetchData() {
    setTimeout(() => this.data = observable(['test', 'hello world', 'asdasd']), 4000);
  }
}
