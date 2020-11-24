import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbrsCollection';
const numberscollection = new NumbersCollection([10,-3,5,0])
const sorter = new Sorter(numberscollection)
sorter.sort();
console.log(numberscollection.data)