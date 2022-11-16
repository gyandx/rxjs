import { Observable, from } from 'rxjs';

let students$: Observable<string> = from(['Mohit', 'Rohit', 'Shayam']);

students$.subscribe((eachStudent) => console.log(eachStudent));
