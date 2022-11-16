import { Observable, interval, from } from 'rxjs';

const studentData$: Observable<string> = from(['Ram', 'Mohan', 'Ramesh']);

studentData$.subscribe((eachStudent) => {
  const seq$ = interval(500);
  // seq$.subscribe((num) => console.log(eachStudent + num));
  // To stop the interval either we have to put some condition or use unscribe method
  seq$.subscribe((num) => {
    if (num < 5) {
      console.log(eachStudent + num);
    }
  });
});
