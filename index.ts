import './style.css';

import { Observable } from 'rxjs';

let observer = new Observable((observer) => {
  try {
    observer.next('Ram');
    // observer.next('Rohit');
    // observer.next('Rahul');
    setInterval(() => {
      observer.next('Rohit');
    }, 3000);
    setInterval(() => {
      observer.next('Rahul');
    }, 6000);
  } catch (e) {
    observer.error(e);
  }
});

observer.subscribe((data) => {
  console.log(data);
});
