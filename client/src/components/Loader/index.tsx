import Image from 'next/image'

import style from './styles.module.scss'

export const Loader = () => {
  return (
    <div className={style.loader}>
        <Image src="/img/duck-loader.gif" alt="loader" width='400' height='450' />
    </div>
  )
}
