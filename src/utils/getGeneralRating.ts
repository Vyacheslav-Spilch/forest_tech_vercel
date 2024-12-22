import { IReview } from "../pages/reviews/store/types";

export const getGeneralRating = (reviews: IReview[]): string => {
    const countGrades = reviews.reduce((acc, { grade}) => grade + acc, 0)
    let sum = Math.ceil(countGrades / reviews.length * 2) / 2
    return sum.toFixed(1)
}