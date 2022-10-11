
    let obj =  {
        arr : ['Javascript','Python','Ruby','Go',"languages","isChallenging","isRewarding","difficulty","isFun"],
        arr1 :['Javascript','Python','Ruby','Go'],
        arr2:[true,true,7,true],
    
        printArray()
        {
            this.arr.forEach(function(item){
                console.log(item);
            });
            console.log(this.arr1);
            this.arr2.forEach(function(item){
                console.log(item);
            })
        }
    
    }
    obj.printArray();