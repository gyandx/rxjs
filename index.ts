import { fromEvent } from 'rxjs';

let btnClick$ = fromEvent(document.getElementById('myBtn'), 'click');

btnClick$.subscribe((data) => console.log(data));
