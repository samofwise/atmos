import { Component, OnInit } from '@angular/core';
import { ModelPlaylistConnection, Playlist, PlaylistGroup } from 'src/api/api';
import { PlaylistGroupService } from 'src/app/services/playlist-group.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  playlistGroups: PlaylistGroupWithImages[] = [];

  constructor(private playlistGroupService: PlaylistGroupService){}

  async ngOnInit() {
    this.playlistGroups = (await this.playlistGroupService.getPlaylistGroups()).map(g=> ({...g, Playlists:g.Playlists?.items ?? [], images: getImages(g)}));
    console.log(this.playlistGroups)
  }
}

interface PlaylistGroupWithImages extends Omit<PlaylistGroup, 'Playlists'> {
  Playlists: (Playlist|null)[];
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
