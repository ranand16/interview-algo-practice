function maximumSumCircularSubarray(array){
    let array_sum = 0;
    let max_straight_sum = Number.MIN_SAFE_INTEGER;
    let temp_max = 0;
    let min_straight_sum = Number.MAX_SAFE_INTEGER;
    let temp_min = 0;
    array.forEach(element => {
        array_sum += element
        temp_max += element
        max_straight_sum = max_straight_sum<temp_max?temp_max:max_straight_sum
        temp_max = temp_max<0?0:temp_max;

        temp_min +=element
        min_straight_sum = min_straight_sum>temp_min?temp_min:min_straight_sum
        temp_min = temp_min>0?0:temp_min;
        console.log("temp_max==", temp_max, "temp_min==", temp_min)
    });
    if(array_sum === min_straight_sum) return max_straight_sum
    return Math.max(max_straight_sum, array_sum-min_straight_sum)
}