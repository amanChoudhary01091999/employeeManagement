import { OPEN_TOAST, CLOSE_TOAST } from "../constants/toast.constants";

export const openToast = (message, severity) => {
    return {
        type: OPEN_TOAST,
        payload: { message, severity },
    };
};
export const closeToast = (message, severity) => {
    return {
        type: CLOSE_TOAST,
        payload: { message, severity },
    };
};
