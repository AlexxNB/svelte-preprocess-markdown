export default function codehider(regexp='.') {
    let savedCode = [];
    let code_id = 0;

    let re = new RegExp('(```[\\w]+((?!```[\\w])[\\S\\s])*)('+regexp+'+)(((?!```[\\w])[\\S\\s])*```(?![\\w]))', "gmi");

    const code_replacer = (text) => {
        savedCode[code_id++] = text;
        return '##### svelte-md-codehider-'+code_id+' #####';
    }

    const code_restorator = (text,id) => {
        return savedCode[id-1];
    }

    const hide = (text,processor) => {
        return text.replace(re,code_replacer);
    }

    const replace = (text,callback) => {
        return text.replace(re,callback);
    }


    const unhide = (text) => {
        const re_uncode = /##### svelte\-md\-codehider\-(\d+) #####/gmi
        return text.replace(re_uncode,code_restorator);
    }
    return {hide,unhide,replace}
}