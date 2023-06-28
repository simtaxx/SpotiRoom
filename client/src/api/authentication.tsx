import { http } from "./http"

export interface IGetAuth {
  redirectionURL: Location
  codeVerifier: string
}

export const getAuthorization = async (): Promise<IGetAuth> => {
  try {
    const { data } = await http.get('/musicProviderAuth')

    return data
  } catch (error: any) {
    return error
  }
}

export const getAccessToken = async (code: string): Promise<any> => {
  try {
    const { data } = await http.post('/musicProviderAuth', { code })
  
    return data
  } catch (error: any) {
    return error
  }
}

export const getRefreshedAccessToken = async (): Promise<any> => {
  try {
    const refreshToken = localStorage.getItem('authRefreshToken')
    const { data } = await http.post('/musicProviderRefreshAuth', { refreshToken })
  
    return data
  } catch (error: any) {
    return error
  }
}
