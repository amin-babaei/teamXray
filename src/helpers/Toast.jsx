import { toast } from 'react-toastify';

export const toastSuccess = (message) => {
    toast.success(message,{icon:'🥳'});
}

export const toastError = (message) => {
    toast.error(message,{icon:'💀'});
}