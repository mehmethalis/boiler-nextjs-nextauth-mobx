import StoreProvider from '../utils/store.provider';
import UserStore from './user.store';

export const stores: { [name: string]: Object } = {
    UserStore
}

Object.keys(stores).forEach((store) => {
    StoreProvider.addStore(store, stores[store]);
});