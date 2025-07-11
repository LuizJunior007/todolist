import { createContext, useContext, useState, type ReactNode } from "react";

type Toast = {
    msg: string;
    show: boolean;
    status: string;
}

type Props = {
    children: ReactNode;
}

type ToastContextProps = {
    toast: Toast;
    showToast: (toast: Toast) => void
    closeToast: () => void
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider = ({ children }: Props) => {

    const [ toast, setToast ] = useState<Toast>({
        msg: '',
        show: false,
        status: ''
    });

    const showToast = ( toast: Toast) => {

        setToast({
            msg: toast.msg,
            show: toast.show,
            status: toast.status
        });

    }

    const closeToast = () => {

        setToast(prev => ({...prev, show: false}))
    }

    return(
        <ToastContext.Provider value={{ toast, showToast, closeToast }}>
            {children}
        </ToastContext.Provider>
    );

}

export const useToast = () => {

    const context = useContext(ToastContext);

    if(!context){

        throw new Error('Erro ao tentar usar context');
    }

    return context;
}