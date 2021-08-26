import StoreProvider from '../utils/store.provider';
import UserStore from './user.store';
import AuthStore from './auth.store';
import {createContext, useContext} from "react";


const StoreContext = createContext<any | null>(null);

export const StoreWrap = ({children, store}: { children: any, store: any }) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

/* Hook to use store in any functional component */
export const useStore = () => useContext(StoreContext)

export const stores: any = {
    UserStore,
    AuthStore
}

Object.keys(stores).forEach((store) => {
    StoreProvider.addStore(store, stores[store]);
});