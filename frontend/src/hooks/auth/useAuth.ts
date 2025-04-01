import { create } from "zustand"
import { LoginUserData } from "../../types/data/auth/login-user.data";
import { getProfile, loginUser } from "../../api";
import { LOCAL_STORAGE } from "../../constants";
import { IUser } from "../../types/user";

export type AuthState = {
    user: {
        id: string | null;
        username: string | null;
        role: string | null;
        profile_pic: string | null;
    }

    accessToken: string | null;
    
    loading: boolean;
    err: any;
    success: boolean | null;
}

export type AuthActions = {
    login: (loginUserDto: LoginUserData) => Promise<void>;
    logout: () => void;
    fetch: () => Promise<boolean>;
    refresh: () => Promise<void>;
}

export type AuthStateModifiers = {
}

export type AuthStore = AuthState & AuthActions & AuthStateModifiers;

export const useAuth = create<AuthStore>((set, get) => ({
    user: {
        id: null,
        username: null,
        role: null,
        profile_pic: null,
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
            set({ loading: false });
            return true;
        }

        const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN_KEY);

        if(!accessToken) {
            set({ loading: false });
            return false;
        }

        try {
            const res = await getProfile();
            const user = res.data.data.user as IUser;
            set({
                accessToken,
                user,
                loading: false
            });
            return true;
        } catch(err) {
            set({
                err,
                loading: false
            })
            return false;
        }
    },

    refresh: async () => {
        set({ loading: true });
        const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN_KEY);

        if(!accessToken) {
            return set({ loading: false });
        }

        try {
            const res = await getProfile();
            const user = res.data.data.user as IUser;
            set({
                accessToken,
                user,
            });
        } catch(err) {
            set({
                err,
            })
        } finally {
            set({
                loading: false
            });
        }
    },

    logout: () => {
        set({
            user: {
                id: null,
                role: null,
                username: null,
                profile_pic: null
            },
            accessToken: null,
        });

        localStorage.removeItem(LOCAL_STORAGE.USER_KEY);
        return localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN_KEY);
    },
}))