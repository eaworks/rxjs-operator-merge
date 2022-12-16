import { of, merge, interval, map } from 'rxjs';
// let list1 = of(1, 2, 3, 4, 5);
// let list2 = of(4, 5, 6, 7, 8, 9, 10);
// let final_val = merge(list1, list2);
// final_val.subscribe((x) => console.log(x));

const first = interval(2500);
const second = interval(2000);
const third = interval(1500);
const fourth = interval(1000);

const example = merge(
  first.pipe(map(() => 'FIRST')),
  second.pipe(map(() => 'SECOND')),
  third.pipe(map(() => 'THIRD')),
  fourth.pipe(map(() => 'FOURTH'))
);
const subscribe = example.subscribe((val) => console.log(val));
