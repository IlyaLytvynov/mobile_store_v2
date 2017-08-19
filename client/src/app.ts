/**
 * Created by IlyaLitvinov on 10.04.17.
 */
import { Observable } from 'rxjs/Rx';

const startButton = document.querySelector('#start');

Observable
    .fromEvent(startButton, 'click')
    .switchMap(() => Observable.interval(1000))
    .subscribe(e => console.log(e));
