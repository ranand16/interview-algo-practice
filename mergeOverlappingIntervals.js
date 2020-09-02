function mergeOverlappingIntervals(array){
    // let l, h = 0;
    let peek = [];
    let newRange = [];
    let s = new Stack();
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        peek = s.peek()
        if(s.isEmpty() || peek[1] <= element[0]) {
            s.push(element)
        } else if(peek[1] > element[0]) {
            newRange = [peek[0], element[1]]
            s.pop()
            s.push(newRange)
        }
    }
    return s.items
}