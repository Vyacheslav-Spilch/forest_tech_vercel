export interface IReview {
    _id: string
    authorName: string
    reviewText: string
    grade: number
    createdAt: string
} 

export type ReviewForm = Pick<IReview, 'authorName' | 'reviewText' | 'grade'>