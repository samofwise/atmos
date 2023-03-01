import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth = new BehaviorSubject<AuthModel>({
    isLoading: true,
    authenticated: undefined,
    name: undefined
  });

  async loadAuthentication() {
    const setAuthed = Auth.currentCredentials().then(c=> this.auth.next({...this.auth.getValue(), authenticated: c.authenticated }))
    const setName = Auth.currentUserInfo().then(i=> this.auth.next({...this.auth.getValue(), name: i?.attributes?.name }))

    await Promise.all([setAuthed, setName])
    this.auth.next({...this.auth.getValue(), isLoading: false})
  }
}

export interface AuthModel {
  isLoading: boolean,
  authenticated?: boolean,
  name?: string
}
