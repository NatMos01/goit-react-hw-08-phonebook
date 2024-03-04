
export const getContacts = state => {
    return state.contacts.items;
};

export const getFilter = state => {
    return state.filter;
};

export const getIsLoading = state => state.root.isLoading;

export const getError = state => state.root.error;

export const getToken = state => state.auth.token

export const getAuthUser = state => state.auth.user

export const getIsLoggedIn = state => state.auth.isLoggedIn