
export const getDateCreatedReview = (dateString: string): string => {
    const date = new Date(dateString);
    
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    // Возвращаем строку в нужном формате
    return `${day} ${month} ${year} года`;
}
