import { create } from "zustand";
import { CreateWorkshopData } from "../../types/data/workshops/create-workshop.data";
import { IWorkShop } from "../../types/workshop";
import { createWorkshop, getWorkshop, getWorkshops } from "../../api";
import { IItem } from "../../types/item";

type WorkshopState = {
    workshops: IWorkShop[];
    selectedWorkshop: IWorkShop | null;
    selectedWorkshopItems: IItem[] | null;
    
    loading: boolean;
    error: string | null;
}

type WorkshopActions = {
    getWorkshops:   () => Promise<void>;
    getWorkshop:    (id: string) => Promise<void>;
    createWorkshop: (createWorkshopData: CreateWorkshopData) => Promise<void>;
}

type WorkshopHelperActions = {
    load: () => void;
    stopLoading: () => void;
    clearError: () => void;
    setError: (err: string) => void;
    init: () => void;
}

type WorkshopStore = WorkshopState & WorkshopActions & WorkshopHelperActions;

const useWorkshopStore = create<WorkshopStore>((set, get) => ({
    workshops: [],
    selectedWorkshop: null,
    selectedWorkshopItems: null,

    loading: false,
    error: null,

    getWorkshops: async () => {
        get().init();

        try {
            const res = await getWorkshops();
            const workshops = res.data.data.workshops as IWorkShop[];
            set({ workshops })
        } catch(err) {
            get().setError("Failed to fetch workshops");
        } finally {
            get().stopLoading();
        }
    },

    getWorkshop: async (id) => {
        get().init();
        set({ selectedWorkshop: null });
        
        try {
            const res = await getWorkshop(id);
            const { workshop, items } = res.data.data.workshop as { workshop: IWorkShop, items: IItem[] };
            set({ selectedWorkshop: workshop, selectedWorkshopItems: items })
        } catch(err) {
            get().setError("Failed to fetch workshop");
        } finally {
            get().stopLoading();
        }
    },

    createWorkshop: async (createWorkshopData) => {
        get().init();
        set({ selectedWorkshop: null });
        
        try {
            const res = await createWorkshop(createWorkshopData);
            const workshop = res.data.data.workshop as IWorkShop;
            set({ selectedWorkshop: workshop })
        } catch(err) {
            get().setError("Failed to create workshop");
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

    clearError: () => {
        return set({ error: null });
    },

    setError: (err: string) => {
        return set({ error: err });
    },
    
    init: () => {
        return set({ loading: true, error: null });
    }
}))


export default useWorkshopStore;
