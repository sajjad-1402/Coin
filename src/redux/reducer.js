

export const CoinReducer = (state = { list: [] }, action) => {

    switch (action.type) {
        case 'ALL_COIN_REQUEST':

            return { ...state, loading: true }
        case 'ALL_COIN_SUCCESS':

            return { ...state, loading: false, list: action.paylod }
        case 'ALL_COIN_FAILED':

            return { ...state, loading: false, list: action.payload }

        default:
            return { ...state }
    }
}


export const OneCoinReducer = (state = { listOne: [] }, action) => {


    switch (action.type) {

        case 'ONE_COIN_SUCCESS':

            return { ...state, listOne: action.paylod }
        case 'ONE_COIN_FAILED':

            return { ...state, listOne: action.payload }

        default:
            return { ...state }
    }

}


export const PageNumberReducer = (state = 1, action) => {


    // if (action.type === 'PAGE_NUMBER') {

    //     return action.payload
    // }
    // return state


    switch (action.type) {

        case 'PAGE_NUMBER':

            return action.paylod

        default:
            return state
    }




}

