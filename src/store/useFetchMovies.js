import { create } from "zustand";
import { API_URL } from '../utils/api'
import axios from "axios";


const useFetchMovies = create((set) => ({
    error: null,
    isLoading: true,
    movies: [],
    allMovies: [],
    filteredMovies: [],
    fetchMovies: async () => {
        try {
            set({ error: null, isLoading: false })
            fetch('/data/mostPopular.json')
                .then((res) => res.json())
                .then((data) => set({ movies: data }))
                .catch((err) => set({ error: err, isLoading: false }))
        } catch (error) {
            set({ error: error, isLoading: false })
        } finally {
            set({ error: null, isLoading: false })
        }
    },
    fetchAllMovies: async () => {
        try {
            set({ error: null, isLoading: false })
            fetch('/data/movies.json')
                .then((res) => res.json())
                .then((data) => set({ allMovies: data }))
                .catch((err) => set({ error: err, isLoading: false }))
        } catch (error) {
            set({ error: error, isLoading: false })
        } finally {
            set({ error: null, isLoading: false })
        }
    },

    filterMovies: async (category) => {
        set({ error: null, isLoading: false })
        fetch('/data/movies.json')
            .then((res) => res.json())
            .then((data) => {
                const filteredData = data.filter(Data => Data.genres.includes(category))
                set({ filteredMovies: filteredData })
            })
            .catch((err) => set({ error: err, isLoading: false }))
    },
}))

export default useFetchMovies;