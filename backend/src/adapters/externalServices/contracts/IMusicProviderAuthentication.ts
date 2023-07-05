type IFetchAppAccessToken = () => Promise<string>
type IGenerateAuthenticationURL = () => Promise<string>
type IGenerateAccessToken = (code: string) => Promise<string>
type IGenerateRefreshedAccessToken = (refreshToken: string) => Promise<string>
type IFetchUser = (accessToken: string) => Promise<unknown>

abstract class IMusicProviderAuthentication {
  fetchAppAccessToken: IFetchAppAccessToken = async () => {
    throw new Error('fetchAppAccessToken must be implemented')
  }

  generateAuthenticationURL: IGenerateAuthenticationURL = () => {
    throw new Error('generateAuthenticationURL must be implemented')
  }

  generateAccessToken: IGenerateAccessToken = () => {
    throw new Error('generateAccessToken must be implemented')
  }

  generateRefreshedAccessToken: IGenerateRefreshedAccessToken = () => {
    throw new Error('generateRefreshAccessToken must be implemented')
  }

  fetchUser: IFetchUser = () => {
    throw new Error('fetchUser must be implemented')
  }
}

export default IMusicProviderAuthentication
