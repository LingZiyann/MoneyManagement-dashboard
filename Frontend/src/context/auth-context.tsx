import { createContext } from "react";

export interface AuthContextType {
    isLoggedIn: boolean;
    userId: string | null;
    token: string | null;
    login: (userId: string, token: string, expirationDate: Date) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    userId: null,
    token: null,
    login: () => {},
    logout: () => {}
})

