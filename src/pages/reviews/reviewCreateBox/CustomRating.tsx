import Rating from '@mui/material/Rating'
import StarBorderIcon from '@mui/icons-material/StarBorder'; 
import StarIcon from '@mui/icons-material/Star'
import { Controller } from 'react-hook-form';

export const CustomRating = ({control} : {control: any}) => {
    return (
        <Controller
            name="grade"                
            control={control}
            render={({ field }) => (
            <Rating
                defaultValue={0}
                {...field}
                icon={<StarIcon/>} // Цвет полной звезды
                emptyIcon={<StarBorderIcon sx={{ color: 'rgba(255, 255, 255, 0.809)' }} />} // Белый контур для пустой звезды
                sx={{
                    '& .MuiRating-iconFilled': {
                    color: '#ffc107', // Цвет заполненной звезды
                    },
                    '& .MuiRating-iconEmpty': {
                    color: '#fff', // Цвет пустой звезды
                    },
                    }}
            />
            )}
        />
    )
}

