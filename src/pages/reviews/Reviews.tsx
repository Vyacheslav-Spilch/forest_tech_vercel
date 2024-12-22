import s from './style.module.css'
import './../../../global.css'
import ReviewCard from './reviewCard/ReviewCard'
import { useEffect, useState } from 'react'
import { IReview } from './store/types'
import { ScrollToTop } from '../../utils/ScrollToTop'
import { ReviewsInfoPanel } from './reviewsInfoPanel/ReviewsInfoPanel'
import { ReviewCreateBox } from './reviewCreateBox/ReviewCreateBox'
import { getGeneralRating } from '../../utils/getGeneralRating'
import { apiRewiews } from './store/api'
import { Loader } from '../../components/Loader'

export const Reviews = () => {

    const [ reviewsList, setReviewsList ] = useState<IReview[] | null>(null)
    const [ openCreateReview, setOpenCreateReview ] = useState(false)
    const [ responseError, setResponseError ] = useState(false)
    const [ generalRating, setGeneralRating ] = useState('0')


    useEffect(() => {
        apiRewiews.getReviews().then(({data}) => {
            if(data) {
                setReviewsList([...data.reverse()])
                setGeneralRating(getGeneralRating(data))
            }
        }).catch((err) => {
            console.log('Ошибка не получилось  загрузить отзывы');
            setResponseError(true)
        })
    }, [])



    const handleOpen = () => {
        setOpenCreateReview(true)
    }

    const handleClose = () => {
        setOpenCreateReview(false)
    }

    return (
        <section className={s.container}>
            <ScrollToTop />
            { reviewsList 
            ?  
                <>
                    <ReviewsInfoPanel 
                        amountReviews={reviewsList.length}
                        generalRating={generalRating}
                        handleOpen={handleOpen}
                    />
                    <ReviewCreateBox 
                        setReviewsList={setReviewsList}
                        handleClose={handleClose}
                        openCreateReview={openCreateReview}
                    />
                    {reviewsList && reviewsList.map(review => (
                        <ReviewCard key={review._id} review={review}/>
                    ))}
                </> 
            : 
                <div style={{ fontSize: '20px', color: '#fff'}}> 
                    {responseError ? <h2>Не удалось загрузить отзывы</h2> : <Loader size={50}/>}
                </div>
            }
        </section>
    )
}

