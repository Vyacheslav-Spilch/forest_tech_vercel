import axios from "axios"
import { ReviewForm } from "./types"



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