import axios from "axios"


export const getpost = (page) => async (dispatch) => {
    try {
        dispatch({ type: 'ALL_COIN_REQUEST' })
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`)
        dispatch({ type: 'ALL_COIN_SUCCESS', paylod: data })
    } catch (error) {
        dispatch({ type: 'ALL_COIN_FAILED', paylod: error })
    }
}

export const getOneCoin = (allCoin, pageNumber) => (dispatch) => {

    const dataCoin = allCoin.find(item => item.id === pageNumber)
    console.log(allCoin);
    console.log(pageNumber);
    //----------------------------------------------------------------
    // localStorage.setItem('onCoin', JSON.stringify(dataCoin))
    // JSON.parse(localStorage.getItem('onCoin'))
    dispatch({ type: 'ONE_COIN_SUCCESS', paylod: dataCoin })
    // dispatch({ type: 'ONE_COIN_FAILED', paylod: 'error' })

}

export const getPageNamber = (number) => (dispatch) => {
    dispatch({ type: 'PAGE_NUMBER', paylod: number })

}