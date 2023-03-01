import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModelPlaylistConnection, Playlist, PlaylistGroup } from 'src/api/api';
import baseData from 'src/app/data/baseData';
import { PlaylistGroupService } from 'src/app/services/playlist-group.service';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  isEditing: boolean = false;
  playlistGroups: PlaylistGroupWithImages[] = [];

  constructor(private playlistGroupService: PlaylistGroupService, private playlistService: PlaylistService, private snackBar: MatSnackBar) { }

  async ngOnInit() {
    await this.loadData();
    console.log('this.playlistGroups.length', this.playlistGroups.length)

    if (this.playlistGroups.length === 0) {
      this.snackBar.open('Creating Default Data');
      await this.createDefaultData()
      await this.loadData();
      this.snackBar.dismiss();
      this.snackBar.open('Created Default Data', undefined, {
        duration: 3000
      })
    };
  }

  private async loadData() {
    this.playlistGroups = (await this.playlistGroupService.getPlaylistGroups()).map(g => ({ ...g, Playlists: g.Playlists?.items ?? [], images: getImages(g) }));
  }

  createDefaultData = async () => {
    const newGroups = baseData.map(async g => ({ ...g, newGroup: await this.playlistGroupService.createPlaylistGroup({ name: g.name }) }))
    const newPlaylists = newGroups.map(async g => {
      const group = await g;
      group.playlists.map(p => this.playlistService.createPlaylist({ ...p, playlistGroupId: group.newGroup.id }));
    })
    await Promise.all(newPlaylists);
  }

  toggleIsEditing = () => this.isEditing = !this.isEditing
}

interface PlaylistGroupWithImages extends Omit<PlaylistGroup, 'Playlists'> {
  Playlists: (Playlist | null)[];
  images: string[];
}

const getImages = (g: PlaylistGroup) => {
  const uniqueItems = (g.Playlists as ModelPlaylistConnection).items
    .flatMap((p) => (p as Playlist).songs?.map((s) => s.image))
    .filter((i) => i).filter((v, i, a) => a.indexOf(v) === i).slice(0, 4);

  if (uniqueItems.length < 4) return [...uniqueItems, ...uniqueItems,
  ...uniqueItems, ...uniqueItems].slice(0, 4);
  return uniqueItems;
};
