import s from './style.module.css'
import Button  from '@mui/material/Button'
import Rating from '@mui/material/Rating'
import CreateIcon from '@mui/icons-material/Create';
import { FC } from 'react';

interface ReviewsInfoPanelProps {
    amountReviews: number 
    generalRating: string
    handleOpen: () => void
}

export const ReviewsInfoPanel: FC<ReviewsInfoPanelProps> = ({ amountReviews, generalRating, handleOpen }) => {

    return (
        <div className={s.container_info}>
                <div className={s.container_counter_reviews}>
                    <span>Всего отзывов {amountReviews || ''}</span>
                    <CreateIcon sx={{ 
                        color: '#fff', 
                        fontSize: '27px' ,
                        '@media (max-width: 900px)': {
                            fontSize: '26px'
                        },
                        '@media (max-width: 700px)': {
                            fontSize: '23px'
                        }
                    }}/>
                </div>
                <div className={s.container_rating_reviews}>
                    <span>Общий рейтинг {generalRating}</span>
                    <Rating 
                        name="read-only" 
                        precision={0.5} 
                        value={Number(generalRating)} 
                        readOnly
                        sx={{
                            color: '#ffbf00',
                            margin: 0,
                            '& .MuiRating-icon': {
                            fontSize: '27px', // Размер звезд по умолчанию
                            },
                            '& .MuiRating-iconFilled': {
                            color: '#ffbf00', // Цвет заполненных звезд
                            },
                            '& .MuiRating-iconHover': {
                            color: '#ffbf00', // Цвет звезд при наведении
                            },
                            '@media (max-width: 900px)': {
                            '& .MuiRating-icon': {
                                fontSize: '24px', // Увеличение размера звезд при ширине экрана <= 900px
                            },
                            },
                            '@media (max-width: 700px)': {
                            '& .MuiRating-icon': {
                                fontSize: '22px', // Уменьшение размера звезд при ширине экрана <= 700px
                            },
                            },
                        }}
                    />
                </div>
                <div className={s.container_btn}>
                    <span>Поделитесь впечатлениями</span>
                    <Button 
                        onClick={handleOpen} 
                        sx={{ 
                            position: 'relative',
                            background: 'radial-gradient(circle, #003822, #08603c)', 
                            borderRadius: '10px', 
                            fontSize: '14px',
                            '@media (max-width: 900px)': {
                                fontSize: '12px'
                            },
                            '@media (max-width: 700px)': {
                                fontSize: '10px'
                            }
                        }} 
                        variant='contained'
                    >
                        Оставить отзыв
                    </Button>
                </div>
            </div>
    )
}

