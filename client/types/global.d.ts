export {}

declare global {
    interface IUserState {
        accessToken: string|null,
        refreshAccessToken: string|null,
        user: any
    }
}
