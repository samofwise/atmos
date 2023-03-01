import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { CustomRoute, routes } from '../../app-routing.module';
import { AuthModel, AuthService } from '../../services/auth.service';
import { ShowSigninService } from '../../services/show-signin.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  events: string[] = [];
  opened: boolean = false;
  links: CustomRoute[];
  auth: AuthModel = {} as AuthModel;

  constructor(private showSigninService: ShowSigninService, private authService: AuthService) {
    this.links = routes.filter(r => !r.hide);
  }

  ngOnInit() {
    this.authService.auth.subscribe(a => this.auth = a);
  }

  signOut() {
    Auth.signOut({ global: true });
  }

  toggleShowSignIn() { this.showSigninService.toggleShowSignin(); }
}
