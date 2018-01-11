// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var db = require('./models');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
// serve static files from public folder
app.use(express.static(__dirname + '/public'));

/************
 * DATABASE *
 ************/

/* hard-coded data */



/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index (req, res){
  res.json({
    message: "Welcome to tunely!",
    documentation_url: "https://github.com/tgaff/tunely/api.md",
    base_url: "http://tunely.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
});

app.get('/api/albums', function album_index(req, res){
   console.log('arrived at api/albums route');

   db.Album.find({}, function(err, docs) {
     console.log('here are my db results');
     console.log(err, docs);
     res.json(docs);
 });
});

app.post('/api/albums', function update_album(req, res) {
  //get form data from req.body
  let newAlbum = ({
      artistName: req.body.artistName,
      name: req.body.artistName,
      releaseDate: req.body.releaseDate,
      genres: [ '', '', '' ],
      

  });

  console.log('should newPost');
  console.log(newAlbum);
    
 });

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
