import { SpotifyAuthentication } from '../../spotify/services/authentication'

export class Authentication {
  constructor() {
    this.spotifyAuthentication = new SpotifyAuthentication()
  }

  fetchMusicProviderAuthentication = async () => {
    try {
      const authentication = await this.spotifyAuthentication.fetchAccessToken()

      console.log(authentication)
    } catch (error) {
      console.error(error)
      return error
    }
  }
}
