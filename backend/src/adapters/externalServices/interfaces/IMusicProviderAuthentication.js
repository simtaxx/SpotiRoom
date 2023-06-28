class IMusicProviderAuthentication {
  fetchAppAccessToken = async () => {
    throw new Error('fetchAppAccessToken must be implemented')
  }

  generateAuthenticationURL = () => {
    throw new Error('generateAuthenticationURL must be implemented')
  }

  generateAccessToken = () => {
    throw new Error('generateAccessToken must be implemented')
  }

  generateRefreshAccessToken = () => {
    throw new Error('generateRefreshAccessToken must be implemented')
  }
}

export default IMusicProviderAuthentication
