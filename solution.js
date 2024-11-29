function daemon(numbers,k){
    let numToCheck = numbers[k];
    for(let i = 0; i < numbers.length; i++){
        if(i !== k){
            if(i < k){
                if(numbers[i] >= numToCheck){
                    return false;
                }
            }else{
                if(numbers[i] < numToCheck){
                    return false;
                }
            }
        }
    }
    return true;
}

module.exports = {
    daemon
}

