export interface IGetAuth {
    redirectionURL: Location
    codeVerifier: string
}

export interface IPostAccessToken {
    access_token: string,
    expires_in: number,
    refresh_token: string,
    scope: string,
    token_type: string
}

export interface IPostRefreshAccessToken {
    access_token: string,
    token_type: string,
    scope: string,
    expires_in: number
}
