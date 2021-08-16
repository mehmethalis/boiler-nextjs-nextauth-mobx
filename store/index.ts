import StoreProvider from '../utils/store.provider';
import UserStore from './user.store';
import AuthStore from './auth.store';

export const stores: any = {
    UserStore,
    AuthStore
}

Object.keys(stores).forEach((store) => {
    StoreProvider.addStore(store, stores[store]);
});