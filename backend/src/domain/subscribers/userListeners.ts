import eventEmitter from './eventsEmitter'

eventEmitter.on('logIn', (name) => {
  console.log(`${name} logged in`)
})

export default eventEmitter
