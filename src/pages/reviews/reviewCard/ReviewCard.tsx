import Rating from '@mui/material/Rating'
import { getDateCreatedReview } from '../../../utils/getDateCreatedReview'
import { IReview } from '../store/types'
import s from './style.module.css'

const ReviewCard = ({review}: {review: IReview}) => {
    return (
        <section className={s.container_review}>
            <header className={s.review_header}>
                <div className={s.container_name}>
                    <span>{review.authorName}</span>
                </div>
                <div className={s.container_grade}>
                    {/* <Rating value={review.grade} readOnly /> */}

                    <Rating 
                        name="read-only" 
                        precision={0.5} 
                        value={Number(review.grade)} 
                        readOnly
                        sx={{
                            color: '#ffbf00',
                            margin: 0,
                            '& .MuiRating-icon': {
                            fontSize: '23px', // Размер звезд по умолчанию
                            },
                            '& .MuiRating-iconFilled': {
                            color: '#ffbf00', // Цвет заполненных звезд
                            },
                            '& .MuiRating-iconHover': {
                            color: '#ffbf00', // Цвет звезд при наведении
                            },
                            '@media (max-width: 900px)': {
                            '& .MuiRating-icon': {
                                fontSize: '20px', // Увеличение размера звезд при ширине экрана <= 900px
                            },
                            },
                            '@media (max-width: 700px)': {
                            '& .MuiRating-icon': {
                                fontSize: '18px', // Уменьшение размера звезд при ширине экрана <= 700px
                            },
                            },
                        }}
                    />
                </div>
            </header>
            <div className={s.container_message}>
                <p>{review.reviewText}</p>
            </div>
            <footer className={s.container_date}>
                <span>{getDateCreatedReview(review.createdAt)}</span>
            </footer>
        </section>
    )
}

export default ReviewCard