import musicProviderAuthRoutes from './musicProviderAuth'
import musicProviderRefreshAuthRoutes from './musicProviderRefreshAuth'
import musicProviderUserInfoRoutes from './musicProviderUserInfo'
import albumsRoutes from './albums'

export default {
  musicProviderAuth: musicProviderAuthRoutes,
  musicProviderRefreshAuth: musicProviderRefreshAuthRoutes,
  musicProviderUserInfo: musicProviderUserInfoRoutes,
  albums: albumsRoutes
}
