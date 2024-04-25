const cubeVolume = (sideLength) => {
    return sideLength ** 3;
}

const cubeSurfaceArea = (sideLength) => {
    return 6 * sideLength ** 2;
}

module.exports = {
    cubeVolume,
    cubeSurfaceArea
};
