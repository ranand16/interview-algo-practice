function reorderArrayAccordingIndexes(array, indices) {
    if(!array.length) return 0
    console.log(array, indices)
    for (let i = 0; i < array.length; i++) {
        const index = indices[i];
        if(i !== index) {
            swap(array, i, index)
            swap(indices, i, index)
        } else continue
    }
    return array
}