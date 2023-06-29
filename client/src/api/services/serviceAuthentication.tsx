import {
    getAccessToken,
    getAuthorization,
    getRefreshedAccessToken,
    getUserInformations
} from '../routes/routeAuthentication'

export const authenticate = async () => {
    const { redirectionURL } = await getAuthorization()
    window.location = redirectionURL
}

export const fetchUser = async (code: string) => {
    const { access_token, refresh_token, token_type } = await getAccessToken(code)
    const user = await getUserInformations(access_token)

    localStorage.setItem('authAccessToken', `${token_type} ${access_token}`)
    localStorage.setItem('authRefreshToken', refresh_token)
    localStorage.setItem('user', JSON.stringify(user))
    window.location.href = '/'
}

export const fetchRefreshAccessToken = async () => {
    const refreshToken: string|null = localStorage.getItem('authRefreshToken')

    if (!refreshToken) return

    const { access_token, token_type } = await getRefreshedAccessToken(refreshToken)
    const user = await getUserInformations(access_token)

    localStorage.setItem('authAccessToken', `${token_type} ${access_token}`)
    localStorage.setItem('user', JSON.stringify(user))
}
