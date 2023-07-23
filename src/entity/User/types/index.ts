export interface User {
    username: string,
}

export interface UserSchema {
    authData?: User,
    setAuthData: (authData: User) => void
    initAuth: () => void,
    logout: () => void
}
