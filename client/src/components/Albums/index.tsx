import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { fetchAlbums } from '@/api/services/serviceAlbums'
import Image from 'next/image'
import { IAlbum } from './interfaces'
import { Album } from './Album'

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
      <p className={styles.albums__title}>My albums</p>
      <div className={styles.albums__list}>
        {!!albums.length && (albums.map(({ album }) => (
          <Album album={album} key={album.id} />
        )))}
      </div>
    </section>
  )
}
