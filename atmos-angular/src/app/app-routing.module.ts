import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunityPlaylistsComponent } from './pages/comunity-playlists/comunity-playlists.component';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
  { title: 'Playlists', path: '', component: IndexComponent },
  { title: 'Community Playlists', path: 'comunity-playlists', component: ComunityPlaylistsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
