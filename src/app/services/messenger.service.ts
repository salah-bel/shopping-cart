import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  subject = new Subject();
  constructor() {}

  // send message : Sujet.next(message)
  sendMessage(product) { 
    this.subject.next(product);
  }

  // get message  : As Observable => le component utilisant cette methode s'abonne et attend la data
  getMessage() {
    return this.subject.asObservable();
  }
}
