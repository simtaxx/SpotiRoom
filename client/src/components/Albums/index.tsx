import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { fetchAlbums } from '@/api/services/serviceAlbums'
import Image from 'next/image'

interface IAlbumImages {
  height: number
  width: number
  url: string
}

interface IAlbumProperties {
  id: string
  name: string
  total_tracks: number
  release_date: string
  images: Array<IAlbumImages>
}

interface IAlbum {
  added_at: string
  album: IAlbumProperties
}

export const Albums = () => {
  const [albums, setAlbums] = useState<IAlbum[]>([])

  useEffect(() => {
    storeAlbums()
  }, []) 

  const storeAlbums = async () => {
    const albums = await fetchAlbums()
    setAlbums(albums)
  }

  return (
    <section className={styles.albums}>
      <p>My albums</p>
      <div className={styles.albums__list}>
        {albums.length && albums.map(({ album }) => (
          <div className={styles.albums__item} key={album.id}>
            <Image src={album.images[0].url} alt={album.name} width='200' height='200' />
            <p>{album.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
