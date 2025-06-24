export interface User {
    id: string,
    username: string,
    avatar?: string,
}

export interface UserSchema {
    //Если authData = undefined, то пользователь не авторизован
    authData?: User,
    _inited: boolean,
}