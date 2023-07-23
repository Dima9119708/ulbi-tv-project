export interface ISubmitFormData {
    id: number,
    username: string,
    password: string
}

export interface LoginSchema {
    isLoading: boolean,
    error: string,
    auth: (data: ISubmitFormData) => Promise<void>
}
