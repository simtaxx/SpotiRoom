import {
    getAccessToken,
    getAuthorization,
    getRefreshedAccessToken,
    getUserInformations
} from '../routes/routeAuthentication'

interface IUser {
    id: string
    name: string
    picture: string
    product: string
    type: string
}

interface IStoredUserInformations {
    access_token: string
    refresh_token: string
    token_type: string
    user: IUser
}

const storeUserInformations = ({ access_token, refresh_token, token_type, user }: IStoredUserInformations) => {
    localStorage.setItem('authAccessToken', `${token_type} ${access_token}`)
    localStorage.setItem('authRefreshToken', refresh_token)
    localStorage.setItem('user', JSON.stringify(user))
}

const manageAuthWindows = () => {
    window.close()
    window.onunload = () => {
        window.opener.location.reload()
    }
}

export const authenticate = async () => {
    const { redirectionURL } = await getAuthorization()
    window.open(redirectionURL as unknown as string,'name','width=600,height=800')
}

export const logout = () => {
    localStorage.clear()
    window.location.href = '/'
}

export const fetchUser = async (code: string) => {
    const { access_token, refresh_token, token_type } = await getAccessToken(code)
    const user: IUser = await getUserInformations(access_token)

    storeUserInformations({ access_token, refresh_token, token_type, user })
    manageAuthWindows()
}

export const fetchRefreshAccessToken = async () => {
    const refreshToken: string|null = localStorage.getItem('authRefreshToken')

    if (!refreshToken) return

    const { access_token, token_type } = await getRefreshedAccessToken(refreshToken)
    const user = await getUserInformations(access_token)

    localStorage.setItem('authAccessToken', `${token_type} ${access_token}`)
    localStorage.setItem('user', JSON.stringify(user))
}
