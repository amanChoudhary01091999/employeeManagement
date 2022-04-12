import { OPEN_TOAST, CLOSE_TOAST } from "../constants/toast.constants";

export const toastReducer = (
    state = {
        open: false,
        message: "",
        severity: "success",
    },
    action
) => {
    switch (action.type) {
        case OPEN_TOAST:
            return { open: true, ...action.payload };
        case CLOSE_TOAST:
            return { open: false, ...action.payload };
        default:
            return state;
    }
};
