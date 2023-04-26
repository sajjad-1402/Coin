import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import { CoinReducer, OneCoinReducer, PageNumberReducer } from './reducer'

const reducers = combineReducers({
    listCoin: CoinReducer,
    oneListCoin: OneCoinReducer,
    pageNumber: PageNumberReducer
})

const initialStates = {

}
const middlewares = [thunk]

export const store = legacy_createStore(
    reducers,
    initialStates,
    composeWithDevTools(applyMiddleware(...middlewares))
)