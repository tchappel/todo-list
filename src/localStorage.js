// credit to Dan Abramov
// https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage

export const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.log(err);
        return undefined;
    }
};

export const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        console.log(err);
    }
};
