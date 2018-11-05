export function setWallType(checked, typeIndex) {
    return {
        type: "CHANGE_TYPE",
        payload: {checked, typeIndex}
    }
}
export function setActiveWall(index) {
    return {
        type: "SET_ACTIVE_WALL",
        payload: index
    }
}

export function addWall(index) {
    return {
        type: "ADD_WALL",
        payload: index
    }
}
export function changeWallParam(params) {
    return {
        type: "CHANGE_WALL_PARAM",
        payload: params
    }
}

export function changeProemParam(params) {
    return {
        type: "CHANGE_PROEM_PARAM",
        payload: params
    }
}
export function addProem(index) {
    return {
        type: "ADD_PROEM",
        payload: index
    }
}
export function showResultPage() {
    return {
        type: "RESULT_PAGE",
        payload: true
    }
}
export function priceChange(params) {
    return {
        type: "SET_PRICE",
        payload: params
    }
}