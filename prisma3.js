const prismVolume = (baseLength, height, prismHeight) => {
    return (1 / 2) * baseLength * height * prismHeight;
}

const prismSurfaceArea = (baseLength, height, prismHeight) => {
    const baseArea = baseLength * height;
    const sideArea = baseLength * prismHeight + 2 * (Math.sqrt(3) / 2) * baseLength * height;
    return baseArea + sideArea;
}

module.exports = {
    prismVolume,
    prismSurfaceArea
};
