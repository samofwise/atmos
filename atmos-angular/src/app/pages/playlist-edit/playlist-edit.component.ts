import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { baseFillerPlaylists } from 'src/app/data/baseData';
import { PlaylistGroupService } from 'src/app/services/playlist-group.service';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-playlist-edit',
  templateUrl: './playlist-edit.component.html',
  styleUrls: ['./playlist-edit.component.scss']
})
export class PlaylistEditComponent {
  isNew = true;
  name = new FormControl('', [Validators.required]);

  constructor(private playlistGroupService: PlaylistGroupService, private playlistService: PlaylistService, private router: Router) { }

  goHome = () => this.router.navigate(['/']);

  submit = async () => {
    if (this.name.value) {
      const newGroup = await this.playlistGroupService.createPlaylistGroup({ name: this.name.value });
      const newPlaylists = baseFillerPlaylists.map(p => this.playlistService.createPlaylist({...p, playlistGroupId: newGroup.id}))
      await Promise.all(newPlaylists);
      this.goHome()
    }
  }
}
