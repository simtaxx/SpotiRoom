import { useCallback, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { fetchAlbums } from '@/api/services/serviceAlbums'
import { IAlbum } from './interfaces'
import { Album } from './Album'
import { useDispatch } from 'react-redux'
import { setIsAlbumsloading } from '@/store/loadingSlice'

export const Albums = () => {
  const [albums, setAlbums] = useState<IAlbum[]>([])
  const dispatch = useDispatch()

  const storeAlbums = useCallback(async () => {
    dispatch(setIsAlbumsloading(true))
    const albums = await fetchAlbums()
    setAlbums(albums)
    dispatch(setIsAlbumsloading(false))
  }, [dispatch])

  useEffect(() => {
    storeAlbums()
  }, [storeAlbums]) 

  return !!albums.length && (
    <section className={styles.albums}>
      <p className={styles.albums__title}>My albums</p>
        <div className={styles.albums__list}>
          {albums.map(({ album }) => (
            <Album album={album} key={album.id} />
          ))}
        </div>
    </section>
  )
}
