export const set = (key: string, value: string) => {
    if (process.browser) {
        localStorage.setItem(key, value);
    }
};

export const remove = (key: string) => {
    if (process.browser) {
        localStorage.removeItem(key);
    }
};

export const get = (key: string) => {
    return localStorage.getItem(key)
};

export const clear = () => {
    localStorage.clear()
}