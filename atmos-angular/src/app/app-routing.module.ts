import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ComunityPlaylistsComponent } from './pages/comunity-playlists/comunity-playlists.component';
import { IndexComponent } from './pages/index/index.component';
import { PlaylistEditComponent } from './pages/playlist-edit/playlist-edit.component';

export const routes: CustomRoute[] = [
  { title: 'Playlists', path: '', component: IndexComponent, },
  { title: 'Playlists Edit', path: 'playlists/:id', component: PlaylistEditComponent, hide: true },
  { title: 'Community Playlists', path: 'comunity-playlists', component: ComunityPlaylistsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export interface CustomRoute extends Route {
  hide?: boolean;
}