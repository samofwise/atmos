import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunityPlaylistsComponent } from './comunity-playlists/comunity-playlists.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { PlaylistsComponent } from './playlists/playlists.component';

export const routes: Routes = [
  { title: 'Playlists', path: '', component: IndexComponent },
  { title: 'Community Playlists', path: 'comunity-playlists', component: ComunityPlaylistsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
