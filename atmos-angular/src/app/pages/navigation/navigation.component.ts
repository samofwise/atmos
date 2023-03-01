import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { routes } from '../../app-routing.module';
import { AuthModel, AuthService } from '../../services/auth.service';
import { ShowSigninService } from '../../services/showSignin.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  events: string[] = [];
  opened: boolean = false;
  links = routes;
  auth: AuthModel = {} as AuthModel;

  constructor(private showSigninService: ShowSigninService, private authService: AuthService) {}

  ngOnInit() {
    this.authService.auth.subscribe(a => this.auth = a);
  }

  signOut() {
    Auth.signOut({ global: true });
  }

  toggleShowSignIn() { this.showSigninService.toggleShowSignin(); }
}
