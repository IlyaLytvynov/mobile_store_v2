import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/operator/map';
import { AjaxResponse } from 'rxjs/Rx';
// import 'rxjs/add/observable/combineLatest';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/catch';


const get = (url: string) => {
  return Observable
    .ajax(url)
    .map((resp: AjaxResponse) => resp.response);
};

export { get };
