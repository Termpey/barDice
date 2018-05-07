function Doeshelp(list, number){

    for(let i in list){
        if (list[i].value === number || list[i].value === 1){
            list[i].doesHelp = true
        }else{
            list[i].doesHelp = false
        }
    }
    return list;
}

export default Doeshelp