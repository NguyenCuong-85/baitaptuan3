const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    // console.log(dogsJuliaCorrected);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);
    dogs.forEach(function (dog,i){
        if(dog>=3){
            console.log(`Chó số ${i+1} là người lớn và ${dog} tuổi`)
        }else{
            console.log(`Chó số ${i+1} vẫn là chó con �`)
        }
    })

};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3] );