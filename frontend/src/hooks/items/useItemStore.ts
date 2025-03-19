import { create } from "zustand";
import { CreateItemData } from "../../types/data/items/create-item.data";
import { IItem } from "../../types/item"
import { createItem, getItem, getItems } from "../../api";

type ItemState = {
    items: IItem[];
    selectedItem: IItem | null;
    
    loading: boolean;
    error: string | null;
}

type ItemActions = {
    getItems:   () => Promise<void>;
    getItem:    (id: string) => Promise<void>;
    createItem: (createItemData: CreateItemData) => Promise<void>;
}

type ItemHelperActions = {
    load: () => void;
    stopLoading: () => void;
    clearError: () => void;
    setError: (err: string) => void;
    init: () => void;
}

type ItemStore = ItemState & ItemActions & ItemHelperActions;

const useItemStore = create<ItemStore>((set, get) => ({
    items: [],
    selectedItem: null,
    loading: false,
    error: null,

    getItems: async () => {
        get().init();
        try {
            const res = await getItems();
            const items = res.data.data.items as IItem[];
            set({ items })
        } catch(err) {
            get().setError("Failed to fetch items")
        } finally {
            get().stopLoading()
        }
    },

    getItem: async (id) => {
        get().init();
        set({ selectedItem: null });
        
        try {
            const res = await getItem(id);
            const item = res.data.data.item as IItem;
            set({ selectedItem: item })
        } catch(err) {
            get().setError("Failed to fetch item")
        } finally {
            get().stopLoading();
        }
    },

    createItem: async (createItemData) => {
        get().init();
        set({ selectedItem: null });
        
        try {
            const res = await createItem(createItemData);
            const item = res.data.data.item as IItem;
            set({ selectedItem: item })
        } catch(err) {
            get().setError("Failed to create item")
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


export default useItemStore;
