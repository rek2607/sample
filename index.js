const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')


const port = process.env.PORT || 8080 
const app = express()

app.use(bodyParser.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors());


const publicDirectoryPath = path.join(__dirname, '/public')

app.use(express.static(publicDirectoryPath))


app.get('/', (req, res) => {
    res.render('index.html')
});





app.listen(port, () => {
	console.log("Server connected to port" + port);
});


