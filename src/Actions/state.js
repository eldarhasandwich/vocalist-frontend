
export function updateWindowSize (newWidth, newHeight) {
    return {
        type: "UPDATE_WINDOW_SIZE",
        newWidth,
        newHeight
    }
}