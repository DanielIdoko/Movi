import { create } from "zustand";


const Main = create((set, get) => ({
    searchTerm: "",
    searchBarVisible: true,

    handleSearch: (navigate) => {
        const { searchTerm } = get();
        if (!searchTerm.trim()) return;
        
        navigate(`/search/${encodeURIComponent(searchTerm)}`)
        set({ searchTerm: "" })
    },
    handleChange: (value) => {
        set({ searchTerm: value })
    },
    handleToggleSearchBar: () => {
        const { searchBarVisible } = get()
        set({ searchBarVisible: !searchBarVisible })
    }
}))

export default Main;