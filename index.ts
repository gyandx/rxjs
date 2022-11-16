import './style.css';

import { of, Observable } from 'rxjs';

const student$: Observable<String> = of('Rahul');
const studentList$: Observable<String[]> = of([
  'Ram',
  'Sita',
  'Laxman',
  'Hanuman',
]);
const studentObj$: Observable<any> = of({ name: 'Rohit', age: 22 });

student$.subscribe((res) => console.log(res));
studentList$.subscribe((res) => console.log(res));
studentObj$.subscribe((res) => console.log(res));
