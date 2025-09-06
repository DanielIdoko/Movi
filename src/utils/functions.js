// Utility function to make search for similar movies at random genres indexes
function generateRandIndex(data) {
    const movie_index = Math.floor(Math.random() * data.length)
    return movie_index
}


export { generateRandIndex };