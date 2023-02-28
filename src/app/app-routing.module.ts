import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunityPlaylistsComponent } from './comunity-playlists/comunity-playlists.component';
import { HomeComponent } from './home/home.component';
import { PlaylistsComponent } from './playlists/playlists.component';

const routes: Routes = [
  {title: 'Playlists', path:'', component: HomeComponent },
  {title: 'Community Playlists', path:'comunity-playlists', component: ComunityPlaylistsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
