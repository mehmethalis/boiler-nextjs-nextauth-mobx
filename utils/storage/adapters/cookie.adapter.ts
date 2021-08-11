import cookie from 'js-cookie';

export const set = (key: string, value: string) => {
    if (process.browser) {
        cookie.set(key, value, {
            path: '/',
        });
    }
};

export const remove = (key: string) => {
    if (process.browser) {
        cookie.remove(key, {
            expires: 1,
        });
    }
};

export const get = (key: string) => {
    return cookie.get(key);
};

export const clear = () => {
    Object.keys(cookie.get()).map((key) => {
        cookie.remove(key)
    })
}