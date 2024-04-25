const cuboidVolume = (length, width, height) => {
    return length * width * height;
}

const cuboidSurfaceArea = (length, width, height) => {
    return 2 * (length * width + length * height + width * height);
}

module.exports = {
    cuboidVolume,
    cuboidSurfaceArea
};