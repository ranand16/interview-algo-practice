function minPlafromsReq(arr1, arr2) {
    if(!arr1.length || !arr2.length) return 0
    let p1=0, p2=0, platform=0, max_platform=0;
    // console.log(p1, p2, platform, max_platform)
    while(p1<=arr1.length && p2<=arr2.length) {
        // platform++
        if(arr1[p1]<=arr2[p2] || p1===0) {
            platform++;
            p1++;
            // console.log("pltform inc+++", arr1[p1], arr2[p2])
        } else {
            platform--
            p2++
            // console.log("pltform dec---")
        }
        // console.log(p1, p2, platform, max_platform)
        if(platform > max_platform) max_platform = platform
    }
    return max_platform
}