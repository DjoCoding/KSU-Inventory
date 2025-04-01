import { create } from "zustand"
import { IUser } from "../../types/user";
import { updateUserProfilePicture } from "../../api";
import { useAuth } from "../auth/useAuth";

type UserState = {
    selectedUser: IUser | null;
    users: IUser[];

    loading: boolean;
    err: any;
    success: boolean | null;
}

type UserActions = {
    updateProfilePicture: (id: string, picture: File) => Promise<void>;
}

type UserHelpers = {
    init: () => void;
    load: () => void;
    stopLoading: () => void;
}

type UserStore = UserState & UserActions & UserHelpers;

const useUserStore = create<UserStore>((set, get) => ({
    selectedUser: null,
    users: [],
    
    loading: false,
    err: null,
    success: null,
    
    updateProfilePicture: async(id, picture) => {
        get().init();
        try {
            await updateUserProfilePicture(id, picture);
            set({ success: true });
        } catch(err) {
            set({ err });
        } finally {
            get().stopLoading();
        }
    },

    load: () => {
        return set({ loading: true });
    },

    stopLoading: () => {
        return set({ loading: false });
    },

    init: () => {
        return set({
            loading: true,
            err: null,
            success: null,
            selectedUser: null,
            users: []
        });
    }
}))

export default useUserStore;