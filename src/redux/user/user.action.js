export const setCurrentUser = user => (
    {
        type: 'SET_CURRENT_USER',
        payload: user,
    }
);

export const purgeUser = () => (
    {
        type: 'PURGE_USER',
        payload: null
    }
);
