function recursiveFilter(modSeedList,modList,finalList){
    //base case
    if(finalList.length==25)
        return finalList;

    var dupeArr=[];
    var counter=(modSeedList.length-1);
    var counter2=0;
    var counter3=0;

    //break the seeded position numbers down into numbers that can fit into the array
    while(counter>-1){
        //calculate the positions numbers
        modSeedList[counter2]=modSeedList[counter2]% modList.length;
        counter--;
        counter2++;
    }

    //reset counter2
    counter2=finalList.length;
    for(counter=0; counter2<25; counter++){
        //checks to see if it was found
        if(!modList[modSeedList[counter]].found){
            //add it to the final list
            finalList.push(modList[modSeedList[counter]].slot.slice());
            modList[modSeedList[counter]].found=true; //change the found status to true
        }

        else{
            //put it into the duplicate array for further processing
           dupeArr.push(modSeedList[counter]);
           counter3++;

        }
        counter2++;
    }

    //remember to filter the modlist
    //this won't work if you don't filter it after you go through the trouble of marking which ones off the list
    modList=modList.filter(isFound => isFound.found!=true);
    return finalList = recursiveFilter(dupeArr,modList,finalList);
}

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
    var modList=JSON.parse(JSON.stringify(unmodList));
    var finalList=[];
    //calculate the seed 
    var modSeedList=seedCalc();
        
    if($(".devMode").is(":checked")){
        modList=$.merge(modList,JSON.parse(JSON.stringify(unmodDevList)));	
        //this is just like a surprise shit post fn
        var chance=2;
        var limit=Math.floor(Math.random()*500);
            if(chance>=limit){
            $('#slot'+13).empty().append("Sales Hub is binned!");
        }
    }
    //this filters the array and returns the final array to be used for filling the card
    return finalList=recursiveFilter(modSeedList,modList,finalList);
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

//initalization of website fns
function init(){
    bannerSwitcher();
    tableHover();
    newCard();
}
