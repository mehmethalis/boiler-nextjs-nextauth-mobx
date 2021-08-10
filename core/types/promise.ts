declare global {
    interface Promise<T> {
        toArray<T, U = Error>(this: Promise<T>): Promise<[U | null, T | undefined]>;
    }
}
export {};