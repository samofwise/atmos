import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistsComponent } from './pages/playlists/playlists.component';
import { ComunityPlaylistsComponent } from './pages/comunity-playlists/comunity-playlists.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HomeTitleComponent } from './pages/home/home-title/home-title.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppNameComponent } from './common/app-name/app-name.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { IndexComponent } from './pages/index/index.component';

import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { initServicesFactory } from './factories/initServicesFactory';
import { AuthService } from './services/auth.service';

// aws-sdk requires global to exist
(window as any).global = window;

Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    ComunityPlaylistsComponent,
    HomeComponent,
    HomeTitleComponent,
    AppNameComponent,
    NavigationComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    AmplifyAuthenticatorModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initServicesFactory,
    deps: [AuthService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
