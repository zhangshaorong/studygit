'use strict';


function unique(a1,a2){
    var len1 = a1.length;
    var len2 = a2.length;
    var temparray = [];

    for(var i=0; i<len2; i++){
        var idx = a1.indexOf(a2[i]);
        if(idx !== -1){
            a1.splice(idx,1);
        }else{
            temparray.push(a2[i]);
        }
    }
    return temparray.concat(a1);
}

module.exports = unique
