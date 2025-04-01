export interface UpdateItemPrevData {
    name: string;
    location: string;
    description: string;
    pictures: string[];
    workshop: string;
}

export interface UpdateItemValidationError {
    name: string;
    location: string;
    description: string;
    pictures: string;
    workshop: string;
}

export interface UpdateItemState {
    name: string;
    location: string;
    description: string;
    pictures: (File | string)[];
    workshop: string;
}

export interface UpdateItemData {
    data: FormData;
}