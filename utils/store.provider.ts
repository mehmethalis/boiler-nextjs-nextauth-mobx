class StoreProvider {
    stores: { [name: string]: Object } = {};

    addStore(name: string, store: Object) {
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