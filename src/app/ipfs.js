'use strict'
import IPFS from 'ipfs'
import Room from 'ipfs-pubsub-room'

export const ipfs = new IPFS({
    repo: repo(),
    EXPERIMENTAL: {
        pubsub: true
    },
    config: {
        Addresses: {
            Swarm: [
                '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star'
            ]
        }
    }
})

export let room

ipfs.once('ready', () => ipfs.id((err, info) => {
    if (err) { throw err }
    console.log('IPFS node ready with address ' + info.id)

    room = Room(ipfs, 'ipfs-pubsub-todos')
}))

function repo() {
    return 'ipfs/pubsub-todos/' + Math.random()
}
