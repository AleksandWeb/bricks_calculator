/*----- Округление до двух знаков после запятой ---*/
export function roundVal(val){
    if(val.toString().slice(-1) !== "." && val !== "") {
        return Math.round(parseFloat(val)*100)/100;
    }
    return val;
}

/*----- Проверка на число ---*/
export function validVal(val) {
    if((isNaN(parseFloat(val)) || !isFinite(val)) && val !== ""){
        return false;
    }
    return true;
}




