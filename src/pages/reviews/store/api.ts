import axios, { AxiosResponse } from "axios"
import { IReview, ReviewForm } from "./types"



const instance = axios.create({
    baseURL: 'http://localhost:4444'
})

export const apiRewiews = {
    getReviews: () => {
        return instance.get('/reviews')
    },
    createReview: (data: ReviewForm) => {
        return instance.post('/reviews', data)
    }
}