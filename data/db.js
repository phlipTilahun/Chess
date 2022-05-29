const mongoose = require('mongoose')

const connection = mongoose.connect(process.env.DB_URL)

mongoose.connection.on('connected', () => {
    connection.then( (con) => {
        //console.log(con)
        //con.disconnect()
    })    
})

mongoose.connection.on('disconnected', () => {
    console.log('disconnected')
})

mongoose.connection.on('error', () => {
    console.log('error')
})
// module.exports = connection