import { create } from "zustand";
import { API_URL } from '../utils/api'
import axios from "axios";


const useFetchMovies = create((set) => ({
    error: null,
    isLoading: true,
    movies: [],
    searchMoviesResult: [],
    filteredMovies: [],
    fetchMovies: async (options) => {
        try {
            set({ error: null, isLoading: false })
            const response = await axios.request(options);

            if (!response.ok) {
                set({ error: "An unexpected error occured. Try Reloading the page or see if your internet is connected." })
            }

            set({ movies: response.data })

        } catch (error) {
            set({ error: error, isLoading: false })
        } finally {
            set({ error: null, isLoading: false })
        }
    },
    searchMovies: async (options) => {
        try {
            set({ error: null, isLoading: false })
            const response = await axios.request(options);

            if (!response.ok) {
                set({ error: "An unexpected error occured. Try Reloading the page or see if your internet is connected." })
            }

            set({ searchMoviesResult: response.data })

        } catch (error) {
            set({ error: error, isLoading: false })
        } finally {
            set({ error: null, isLoading: false })
        }
    },
    filterMovies: async (options) => {
        try {
            set({ error: null, isLoading: true })
            const response = await axios.request(options);

            if (!response.ok) {
                set({ error: "An unexpected error occured. Try Reloading the page or see if your internet is connected." })
            }

            set({ filteredMovies: response.data.results.slice(0, 20) })

        } catch (error) {
            set({ error: error, isLoading: false })
        } finally {
            set({ error: null, isLoading: false })
        }
    },
}))

export default useFetchMovies;