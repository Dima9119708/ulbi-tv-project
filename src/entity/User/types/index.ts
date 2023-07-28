export interface User {
    username: string,
}

export interface Profile {
    first: string,
    lastname: string,
    age: never,
    currency: string,
    country: string,
    city: string,
    username: string,
    avatar: string
}

export interface UserSchema {
    authData?: User | null,
    setAuthData: (authData: User) => void
    initAuth: () => void,
    logout: () => void
}

export interface ProfileSchema {
    profile?: Profile | null,
    getProfile: () => Promise<Profile>
}
