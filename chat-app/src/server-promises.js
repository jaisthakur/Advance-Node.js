var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var mongoose = require('mongoose')

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.Promise = Promise  // Mongoose Promises added

var dbUrl = 'mongodb://localhost:27017/learning-node'

/**
 * A simple chat application
 * 
 */

var Message = mongoose.model('Message', {
    name: String,
    message: String
})

app.get('/server-promises', (req, res) => {
        /**
         * @param   {Object}    Message
         * @param   {String}    Message.name    user name
         * @param   {String}    Message.message user message
         */
    Message.find({}, (err, messages) =>{
        res.send(messages)
    })
})

app.post('/server-promises', (req, res) => {
    var message = new Message(req.body)

    message.save()
    .then(() => {
        console.log('saved')
        return Message.findOne({message: 'badword'})
    })
    .then( censored => {
        if(censored) {
            console.log('censored words found', censored)
            return Message.remove({_id: censored.id})
        }
        io.emit('message', req.body)
        res.sendStatus(200)
    })
    .catch((err) => {
        res.sendStatus(500)
        return console.error(err)
    })

})



io.on('connection', (socket) => {
    console.log('a user connected')
})

mongoose.connect(dbUrl, { useMongoClient: true }, (err) => {
    console.log('mongo db connection', err)
})

var server = http.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})