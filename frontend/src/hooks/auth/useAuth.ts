import { create } from "zustand"
import { LoginUserData } from "../../types/data/auth/login-user.data";
import { loginUser } from "../../api";
import { LOCAL_STORAGE } from "../../constants";

export type AuthState = {
    user: {
        id: string | null;
        username: string | null;
        role: string | null;
    }

    accessToken: string | null;
    
    loading: boolean;
    err: any;
    success: boolean | null;
}

export type AuthActions = {
    login: (loginUserDto: LoginUserData) => Promise<void>;
    fetch: () => Promise<void>;
}

export type AuthStore = AuthState & AuthActions;

export const useAuth = create<AuthStore>((set, get) => ({
    user: {
        id: null,
        username: null,
        role: null,
    },
    
    accessToken: null,

    loading: false,
    err: null, 
    success: null,

    login: async (loginUserDto) => {
        set({ success: null, loading: true });
        try {
            const res = await loginUser(loginUserDto);
            const { user, accessToken } = res.data.data;

            set({ user, accessToken, success: true });
            
            localStorage.setItem(LOCAL_STORAGE.USER_KEY, JSON.stringify(user));
            localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN_KEY, accessToken as string);
        } catch(err) {
            set({ err })
        } finally {
            set({ loading: false });
        }
    },

    fetch: async () => {
        set({ loading: true });
        
        if(get().user && get().user.username) {
            return set({ loading: false });
        } 

        const stringifiedUser = localStorage.getItem(LOCAL_STORAGE.USER_KEY);
        const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN_KEY);

        if(!stringifiedUser || !accessToken) {
            return set({ loading: false });
        }

        const user = JSON.parse(stringifiedUser);
        if(!user) {
            return set({ loading: false });
        }

        return set({
            user,
            accessToken,
            loading: false
        });
    } 
}))