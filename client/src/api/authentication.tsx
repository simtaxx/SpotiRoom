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

export const getAccessToken = async (code: string, codeVerifier: string): Promise<any> => {
  try {
    const { data } = await http.post('/musicProviderAuth', { code, codeVerifier })

    return data
  } catch (error: any) {
    return error
  }
}
