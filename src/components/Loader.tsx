import { ClipLoader } from 'react-spinners';

const loaderStyles = {
    marginLeft: '10px'
}


export const Loader = ({size}: {size: number}) => {
    return (
        <div>
        <ClipLoader 
            loading={true}
            color='#fff'  
            cssOverride={loaderStyles}
            size={size} 
        />
        </div>
    );
}


