export default function codehider(regexp) {
    let savedCode = [];
    let code_id = 0;

    const code_replacer = (text) => {
        savedCode[code_id++] = text;
        return '##### svelte-md-codehider-'+code_id+' #####';
    }

    const code_restorator = (text,id) => {
        return savedCode[id-1];
    }

    const hide = (text,processor) => {
        return text.replace(regexp,code_replacer);
    }


    const unhide = (text) => {
        const re_uncode = /##### svelte\-md\-codehider-(\d+) #####/gmi
        return text.replace(re_uncode,code_restorator);
    }
    return {hide,unhide}
}