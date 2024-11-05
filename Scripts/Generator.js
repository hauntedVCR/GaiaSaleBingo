function seedCalc(){
    var seed;
    var salt;
    var input=$(".seedInput");

    //check if empty
    if(!input.val()){
        seed=new Math.seedrandom();
        seed=seed.int32().toString();
        input.val(seed);
        seed=new Math.seedrandom(seed);    
    }

    else{
        seed=new Math.seedrandom(input.val());

    }

    //makes generated seed into a string
    seed=seed.int32().toString();
    salt=sha256.array(seed);

    //return the array for processing
    return salt;
}