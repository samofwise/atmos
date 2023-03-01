import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlaylistGroupService } from 'src/app/services/playlist-group.service';

@Component({
  selector: 'app-playlist-edit',
  templateUrl: './playlist-edit.component.html',
  styleUrls: ['./playlist-edit.component.scss']
})
export class PlaylistEditComponent {
  isNew = true;
  name = new FormControl('', [Validators.required]);

  constructor(private playlistGroupService: PlaylistGroupService, private router: Router) { }

  goHome = () => this.router.navigate(['/']);

  submit = async () => {
    if (this.name.value) {
      await this.playlistGroupService.createPlaylistGroup({ name: this.name.value });
      this.goHome()
    }
  }
}
