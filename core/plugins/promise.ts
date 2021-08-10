export default Promise.prototype.toArray = function (): Promise<any> {
    return this.then((data) => {
        return [null, data];
    }).catch((err) => {
        return [err, undefined];
    });
};