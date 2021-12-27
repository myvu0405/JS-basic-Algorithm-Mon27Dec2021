//Largest Number in Arrays
//Return an array consisting of the largest number from each provided sub-array.

function largestOfFour(arr) {
    let result=[];
    let maxNo=0;
    /*
    for (let i= 0;i<arr.length;i++){
        maxNo=arr[i][0];
        for (let j=0;j<arr[i].length;j++){
            if (arr[i][j]>maxNo){
                maxNo=arr[i][j];
            }
        }
        result.push(maxNo);
    }*/

    /*
    arr.forEach(x => {
        maxNo=x[0];
        x.forEach (y => {
            if (y>maxNo) {
                maxNo=y;
            }
        })
        result.push(maxNo);
    })*/

    
    arr.forEach(x=> {
        maxNo=Math.max(...x);
        result.push(maxNo);
    })

    
    return result;

}

const myArr=[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
console.log(largestOfFour(myArr));
