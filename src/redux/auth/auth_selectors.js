export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getIsRefreshing = state => state.auth.getIsRefreshing;

export const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsRefreshing,
};
