import { Injectable } from '@angular/core';
import { Dtnote } from './dtnote';

@Injectable({
  providedIn: 'root'
})
export class GlobalvarService {

  public arrNotes : Dtnote[] = [];

  constructor() { }

  public addNew(notebaru : Dtnote) {
    this.arrNotes.push(notebaru);
  }
}
