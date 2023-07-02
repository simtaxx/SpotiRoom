import styles from './styles.module.scss'
import Image from 'next/image'
import { IAlbumProperties } from '../interfaces'

interface IProps {
  album: IAlbumProperties
}

export const Album = ({ album }: IProps) => {

  return (
    <div className={styles.album}>
      <Image
        className={styles['album__main-picture']}
        src={album.images[0].url}
        alt={album.name}
        width='200'
        height='200'
      />
      <p className={styles.album__name}>{album.name}</p>
      <p className={styles.album__artist}>{album.artists[0].name}</p>
    </div>
  )
}
