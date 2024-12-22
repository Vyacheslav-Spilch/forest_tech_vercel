import Alert from '@mui/material/Alert'
import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IReview, ReviewForm } from '../store/types'
import { CustomRating } from './CustomRating'
import s from './style.module.css'
import { apiRewiews } from '../store/api';
import { Loader } from '../../../components/Loader';


interface ReviewCreateBoxProps {
    setReviewsList: (data: IReview[]) => void
    openCreateReview: boolean
    handleClose: () => void
}


export const ReviewCreateBox: FC<ReviewCreateBoxProps> = ({setReviewsList, openCreateReview, handleClose }) => {

    const { register, reset, control, handleSubmit, formState: {errors}, setError } = useForm<ReviewForm>({
        defaultValues: {
            authorName: '',
            reviewText: '',
            grade: 0
        }
    })

    const [ errorRating, setErrorRating ] = useState(false)
    const [ feedbackSuccess, setFeedbackSuccess ] = useState(false)
    const [ feedBackFailed, setFeedbackFailed ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setFeedbackSuccess(false)
            setFeedbackFailed(false)
        }, 2500)
    }, [feedbackSuccess, feedBackFailed])

    const handleCreateReview = async (data: ReviewForm) => {
        setIsLoading(true)
        try {
            const body: ReviewForm = {
                authorName: data.authorName,
                reviewText: data.reviewText,
                grade: Number(data.grade)
            }
            const response = await apiRewiews.createReview(body)
            if(response) {
                await apiRewiews.getReviews().then(({data}) => {
                    setReviewsList([...data.reverse()])
                    reset()
                    handleClose()
                    setFeedbackSuccess(true)
                })
            } else {
                setFeedbackFailed(true)
            }
        } catch (error) {
            setFeedbackFailed(true)
        } finally {
            setIsLoading(false)
            setErrorRating(false)
        }
    }


    const handleForm = (data: ReviewForm) => {
        if(!data.authorName.trim()) {
            setError('authorName', {message: 'Это поле является обязательным'})
            
        }
        if(Number(data.grade) === 0) {
            setErrorRating(true)
        }
        else {
            handleCreateReview(data)
        }
    }


    return (
        <section className={`${s.container_create_review} ${openCreateReview && s.active}`}>
            <Alert 
                sx={{ 
                    background: `${(feedbackSuccess && 'radial-gradient(circle, #003822, #08603c)') || ( feedBackFailed && 'rgba(218, 70, 70, 0.565)')}`,
                    color: '#fff'
                }}
                className={`${s.modal_feedback} ${(feedbackSuccess || feedBackFailed) && s.active_modal}`} 
                icon={feedbackSuccess && <CheckIcon sx={{ color: '#fff'}} fontSize="inherit" />} >
                    {feedbackSuccess ? 'Отзыв успешно добавлен. Спасибо!' : 'Не удалось добавить отзыв, попробуйте еще раз'}
            </Alert>
            <form className={`${s.container_form} ${openCreateReview && s.active_form}`} onSubmit={handleSubmit(handleForm)}>
                    <input 
                        className={s.field_name}
                        type="text" 
                        placeholder='Введите имя'
                        {...register('authorName', {required: 'Это поле является обязательным'})}
                    />
                    {errors.authorName && <span className={s.error} style={{ color: 'red', fontSize: '13px'}}>{errors.authorName.message}</span>}
                    <textarea 
                        className={s.field_review}
                        placeholder='Ваш отзыв'
                        {...register('reviewText', {required: 'Это поле является обязательным'})}
                        
                    />
                    {errors.reviewText && <span className={s.error} style={{ color: 'red', fontSize: '13px'}}>{errors.reviewText.message}</span>}
                    <div className={s.field_rating}>
                        <div className={s.box_title}>
                            <span>Поставьте оценку нашей работе</span>
                        </div>
                        <CustomRating 
                            control={control}
                        />
                    </div>
                    {errorRating && <span className={s.error} style={{ color: 'red', fontSize: '13px'}}>Это поле является обязательным</span>}
                    <footer className={s.container_submit_btn}>
                        <Button 
                            onClick={handleClose} 
                            sx={{ 
                                width: 120,
                                border: '1px solid #00693e', 
                                color: '#00693e', 
                                borderRadius: '10px', 
                                marginRight: '16px',
                                fontSize: '14px',
                                '@media (max-width: 900px)': {
                                    fontSize: '12px'
                                },
                                '@media (max-width: 700px)': {
                                    fontSize: '10px'
                                }
                            }} 
                            size='medium' 
                            variant='outlined'
                        >
                            Скрыть
                        </Button>
                        <Button 
                            type='submit'
                            sx={{ 
                                background: 'radial-gradient(circle, #003822, #08603c)', 
                                borderRadius: '10px',
                                width: 120, 
                                fontSize: '14px',
                                '@media (max-width: 900px)': {
                                    fontSize: '12px'
                                },
                                '@media (max-width: 700px)': {
                                    fontSize: '10px'
                                }
                            }}
                            size='medium' 
                            variant='contained'
                        >
                            Отправить
                            {isLoading ? <Loader size={10}/> : <SendIcon sx={{ fontSize: '16px', marginLeft: 1}}/>}
                        </Button>
                    </footer>
            </form>
        </section>
    )
}

