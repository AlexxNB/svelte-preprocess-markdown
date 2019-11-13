let STORE = [];

export const moduleStore = {
    add: (value) => STORE.push(value),
    get: () => STORE
}