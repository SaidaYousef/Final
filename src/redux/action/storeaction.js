export const Addin = (inn) => {
    return {
        type: 'addin',
        data: inn
    }
}

export const login = (data) => {
    return {
        type: 'login',
        data: data
    }
}

export const logout = () => {
    return {
        type: 'logout',
    }
}