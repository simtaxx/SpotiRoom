export interface IAlbumImages {
  height: number
  width: number
  url: string
}

export interface IArtist {
  id: string
  name: string
}

export interface IAlbumProperties {
  id: string
  name: string
  total_tracks: number
  release_date: string
  images: Array<IAlbumImages>
  artists: Array<IArtist>
}

export interface IAlbum {
  added_at: string
  album: IAlbumProperties
}
