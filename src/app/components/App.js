import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
//import { sendTodos, loadTodos } from '../actions/todos'
//import { ipfs, room } from '../ipfs'

import IPFS from 'ipfs'
import Room from 'ipfs-pubsub-room'

const App = ({ dispatch }) => {
    // ipfs.once('ready', () => ipfs.id((err, info) => {
    //     room.on('peer joined', (peer) => {
    //         console.log('peer ' + peer + ' joined')
    //         dispatch(sendTodos(peer))
    //     })
    //     room.on('message', (message) => {
    //         console.log('got message from ' + message.from + ': ' + message.data.toString())
    //         dispatch(loadTodos(JSON.parse(message.data.toString())))
    //     })
        
    // }))
    return <div className="container-fluid">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
}

export default App