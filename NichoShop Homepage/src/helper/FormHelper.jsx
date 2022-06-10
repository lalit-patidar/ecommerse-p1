export const inputChecker = (input) => {
    if (input.length !== 0) {
        return true;
    } else {
        return false;
    }
};

export const inputPermissionChecker = (input) => {
    if (Boolean(input) === true) {
        return true;
    } else {
        return false;
    }
};
