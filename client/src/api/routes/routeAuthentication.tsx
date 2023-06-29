import { IGetAuth, IPostAccessToken, IPostRefreshAccessToken } from '../interfaces/IAuthentication'
import { http } from '../utils/http'

export const getAuthorization = async (): Promise<IGetAuth> => {
  try {
    const { data } = await http.get('/musicProviderAuth')

    return data
  } catch (error: any) {
    return error
  }
}

export const getAccessToken = async (code: string): Promise<IPostAccessToken> => {
  try {
    const { data } = await http.post('/musicProviderAuth', { code })
  
    return data
  } catch (error: any) {
    return error
  }
}

export const getRefreshedAccessToken = async (refreshToken: string): Promise<IPostRefreshAccessToken> => {
  try {
    const { data } = await http.post('/musicProviderRefreshAuth', { refreshToken })
  
    return data
  } catch (error: any) {
    return error
  }
}

export const getUserInformations = async (accessToken: string): Promise<any> => {
  try {
    const { data } = await http.post('/musicProviderUserInfo', { accessToken })
  
    return data
  } catch (error: any) {
    return error
  }
}
