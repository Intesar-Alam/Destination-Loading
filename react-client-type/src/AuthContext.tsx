import { createContext } from 'react';
import { User } from './App';
import { DecodedToken } from './App';
export interface AuthObj {
    user: User | null;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthObj | undefined>(undefined);

export default AuthContext;