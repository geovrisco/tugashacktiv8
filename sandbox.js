let numFirst = 1;
    let numSecond=1;
    let numThird=1;
    let numMax;
    let numMin;
    let nummid;
    let lostnum="";

if (numFirst == numSecond && numFirst ==numThird){
    lostnum='tidak ada'
    
}else if (numSecond==numFirst && numSecond ==numThird){
    lostnum='tidak ada'
    
}else if (numThird==numSecond && numThird==numFirst){
    lostnum='tidak ada'
    
}
    
    if (numFirst > numSecond && numFirst > numThird) {
        numMax=numFirst
    } else if (numSecond > numFirst && numSecond > numThird){
        numMax=numSecond
    }else if (numThird > numSecond && numThird >numFirst){ 
        numMax=numThird
    }

    if (numFirst < numSecond && numFirst < numThird) {
        numMin=numFirst
    } else if (numSecond < numFirst && numSecond < numThird){
        numMin=numSecond
    }else if (numThird < numSecond && numThird < numFirst){ 
        numMin=numThird
    }

    if (numFirst !== numMax && numFirst!==numMin){
        nummid=numFirst}
    else if (numSecond !== numMax && numSecond!==numMin){
        nummid=numSecond}
    else if (numThird !== numMax && numThird!==numMin){
        nummid=numThird}
    
    for(let i = numMin; i<=numMax;i++){
           if(i ==numMin && i==numMax || i==nummid){
                lostnum+=""
            } else if (i ==numMin || i==numMax && i==nummid){
                lostnum+=""
            } else if (i !==numMin && i!==numMax && i!==nummid)
                {lostnum+=i}

                
                
            }
        


    console.log('terbesar : '+numMax+' tengah : '+nummid+' kecil :'+numMin)
            console.log(lostnum)
