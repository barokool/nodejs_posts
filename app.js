const express = require('express')
const connectDB = require('./config/db')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
//routes
const posts = require('./routes/posts')


//chay app
const app = express()
//run handlebars 
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

//chay middle ware
app.use(express.json())
app.use(express.urlencoded())

//chay method override middle ware
app.use(methodOverride('_method'))

//ket noi csdl
connectDB()


//some basic routes
app.get('/', (req, res) => res.render('index'))
app.get('/about', (req, res) => res.render('about'))

// bring routes into use
app.use('/posts', posts)



const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Listening at PORT ${PORT}`))
