
function fillTable(finalList){
    var counter=0;

    //populate the actual table on the page
	for (i=1; i<=25; i++) {
        //leave slot 13 as the free space
        if(i!=13){
            $('#slot'+i).empty(); //this is for emptying the table slots for each subsequent run
            $('#slot'+i).append(finalList[counter]);
            counter++;
        }
    }
}

function shuffle(){

    var modList=unmodList.slice();
    var finalList=[];
    var current_index;
    var rand_index;

    //populate the array
    for(i=0; i<24; i++){
        rand_index=Math.floor(Math.random() * modList.length);
        finalList.push(modList[rand_index]);
        modList.splice(rand_index,1);
    }

    current_index=finalList.length;
    //swapping part
    while(current_index>0){
        rand_index=Math.floor(Math.random() * current_index);
        current_index--;
        //swap
        [finalList[current_index],finalList[rand_index]]=[finalList[rand_index],finalList[current_index]];
    }

    //capture the shuffled array and start appending to table
    return finalList;
}

//clears the greensquare css
function resetClass(){
    $(".greensquare").toggleClass("greensquare");
}

function newCard(){
    resetClass();
    var finalList=shuffle();
    fillTable(finalList);

}

//initalization of table and hover fns
function init(){
    tableHover();
    newCard();
}


