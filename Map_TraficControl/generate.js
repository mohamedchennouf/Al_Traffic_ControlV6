function generatePosition(maxNumber){
    return Math.floor(Math.random() * maxNumber)
}

function mapToCoordinates(mapJ){
    var coord = [];
    var coordTemp = mapJ.features;
    for(var i = 0; i < coordTemp.length;i++)
    {
        for(var j = 0; j < coordTemp[i].geometry.coordinates.length; j++){
            coord.push(coordTemp[i].geometry.coordinates[j]);
        }
    }
    return coord;
}

function findNumber(tab,elt) {
    var res = false;
    for(var i = 0; i < tab.length; i++){
        if(tab[i] === elt){
            res = true;
            //console.log(res);
        }
    }
    //console.log(res);
    return res;
}
function generateTabP(num,max){
    var temp = [];
    var val = 0;
    do{
        val = generatePosition(max);
        if(!findNumber(temp,val)){
            temp.push(val);
        }
    }while(temp.length < num);
    return temp;
}


function randomPos(mapJ,numberPos){
    var tabPosT = mapToCoordinates(mapJ);
    var posArray = [];
    var randomPos = [];
    randomPos = generateTabP(numberPos,tabPosT.length);
    for(var i = 0; i < randomPos.length; i++){
        posArray.push(tabPosT[randomPos[i]]);
    }
    //console.log(posArray);
    return posArray;
}

var cars = randomPos(map,20);

