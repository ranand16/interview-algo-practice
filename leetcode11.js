function leetcode11 (arr){
    console.log(arr)
    let stack = new Stack();
    let max = 0, i = 0, curMax = 0; 
    while(i<arr.length){
        // console.log("empty == ",stack.isEmpty(), "peek ==", stack.peek(), "arr i ===", arr[i])
        if(stack.isEmpty() || arr[stack.peek()] <= arr[i]){
            stack.push(i);
            console.log("i ====== ", i)
            i++;
            stack.printItems()
        } else {
            curMax = stack.pop();
            area = arr[curMax] * (stack.isEmpty()?(i-1):(i-1-stack.peek()))
            if(area>max) max = area
            stack.printItems()
            console.log("area==", area, " maxarea==", max)
        }
    }
    while(stack.length()){
        curMax = stack.pop();
        area = arr[curMax] * (stack.isEmpty()?(i-1):(i-1-stack.peek()))
        if(area>max) max = area
        stack.printItems()
        console.log("area==", area, " maxarea==", max)
    }
    stack.printItems();
    console.log(max)
    return max
}

