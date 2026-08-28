import {create} from "zustand";

export const useCountStore = create((set) =>
    ({
        count: 0
    }));