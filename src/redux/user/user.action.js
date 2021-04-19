export const setCurrentUser = user => (
    {
        type: 'SET_CURRENT_USER',
        payload: user,
    }
);

export const purgeUser = user => (
    {
        type: 'PURGE_USER',
        payload: null
    }
);
