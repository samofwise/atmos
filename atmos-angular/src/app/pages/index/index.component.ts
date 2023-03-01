import { Component, Input, OnInit } from '@angular/core';
import { AuthModel, AuthService } from '../../services/auth.service';
import { ShowSigninService } from '../../services/show-signin.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  auth: AuthModel = {} as AuthModel;
  showSignIn: boolean = false;

  constructor(private authService: AuthService, private showSigninService: ShowSigninService) { }

  ngOnInit(): void {
    this.authService.auth.subscribe(v => this.auth = v);
    this.showSigninService.showSignin.subscribe(v => this.showSignIn = v)
  }
}
