import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunityPlaylistsComponent } from './comunity-playlists.component';

describe('ComunityPlaylistsComponent', () => {
  let component: ComunityPlaylistsComponent;
  let fixture: ComponentFixture<ComunityPlaylistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunityPlaylistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunityPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
