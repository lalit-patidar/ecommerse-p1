export const setUser = (data) => {
  return {
    type: "SETUSER",
    payload: data,
  };
};

export const setHideSearchBar = (data) => {
  return {
    type: "SETHIDESEARCHBAR",
    payload: data,
  };
};

export const setShowNotif = (data) => {
  return {
    type: "SETSHOWNOTIF",
    payload: data,
  };
};
