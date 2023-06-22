class IMusicProviderAuthentication {
  fetchAppAccessToken = async () => {
    throw new Error('fetchAppAccessToken must be implemented')
  }

  generateCodeChallenge = () => {
    throw new Error('generateCodeChallenge must be implemented')
  }

  generateAuthenticationURL = () => {
    throw new Error('generateAuthenticationURL must be implemented')
  }

  generateAccessToken = () => {
    throw new Error('generateAccessToken must be implemented')
  }
}

export default IMusicProviderAuthentication
