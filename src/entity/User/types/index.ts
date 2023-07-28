export interface User {
    username: string,
}

export interface Profile {
    first?: string,
    lastname?: string,
    age?: number,
    currency?: string,
    country?: string,
    cit?: string,
    username?: string,
    avatar?: string
}

export interface UserSchema {
    authData?: User | null,
    setAuthData: (authData: User) => void
    initAuth: () => void,
    logout: () => void
}

export interface ProfileSchema {
    profile?: Profile | null,
    profileReadonly: boolean,
    getProfile: () => Promise<Profile>
    updateProfile: (data: Profile) => Promise<Profile>
    setReadonly: (flag: boolean) => void
}
