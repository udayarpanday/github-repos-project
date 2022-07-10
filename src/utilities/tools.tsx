import moment from 'moment';

export const formatDate = (dateTime: string, format: string = "MM/DD/YYYY") => {
    if (dateTime) {
        return moment(dateTime).format(format);
    }
    return "";
}

export const numFormatter=(num:number)=> {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; 
    }else if(num < 900){
        return num; 
    }else if(num===0){
        return 0
    }
}