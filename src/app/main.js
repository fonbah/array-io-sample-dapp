import '../assets/css/style.scss'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { ipfs, room } from './ipfs'
import { sendTodos, loadTodos } from './actions/todos'
import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk))

ipfs.once('ready', () => ipfs.id((err, info) => {
    room.on('peer joined', (peer) => {
        store.dispatch(sendTodos(peer))
    })
    room.on('message', (msg) => {
        store.dispatch(loadTodos(JSON.parse(msg.data.toString())))
    })
}))

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
)
