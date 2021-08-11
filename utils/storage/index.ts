import * as Adapter from './adapters/localStorage.adapter';

const set = async (key: string, value: string) => {
    return Adapter.set(key, value);
};

const remove = async (key: string) => {
    return Adapter.remove(key);
};

const get = async (key: string) => {
    return Adapter.get(key)
};

const clear = async () => {
    return Adapter.clear()
}

const _storageService = {
    set,
    remove,
    get,
    clear
}

export default _storageService