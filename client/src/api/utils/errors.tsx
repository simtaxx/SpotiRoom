import { fetchRefreshAccessToken } from '../services/serviceAuthentication'

const errors = {
    401: fetchRefreshAccessToken
}

export const manageErrors = (status: number) => {
    return errors[status as keyof typeof errors]()
}
