import { Card } from './card';
export class Column {
  constructor(public id: number, public name: string, public tasks: Array<Card>) { }
}
