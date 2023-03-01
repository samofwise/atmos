import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowSigninService {
  showSignin = new BehaviorSubject<boolean>(false);

  toggleShowSignin() {
    this.showSignin.next(!this.showSignin.value);
  }
}