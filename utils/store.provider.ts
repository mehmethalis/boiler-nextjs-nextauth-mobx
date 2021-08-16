class StoreProvider {
    stores: any = {};

    addStore(name: string, store: any) {
        if (this.stores[name]) {
            throw new Error('same_name_store');
        }

        this.stores[name] = store;
    }

    getStore(name: string) {
        if (!this.stores[name]) {
            throw new Error('store_not_found');
        }

        return this.stores[name];
    }
}

const _storeProvider = new StoreProvider();
export default _storeProvider;