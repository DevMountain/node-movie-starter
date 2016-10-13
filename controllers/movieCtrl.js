var movies = require('../movies.json');

module.exports = {
    get: function(req, res, next) {
        //http://locchost:3000/api/movies?page=18
        // req.query,req.query,req.query,req.query, req.query, req.query, req.query
        var page = (req.query.page || 1) / 1;
        var pageSize = (req.query.pageSize || 20) / 1;
        var startIndex = (page - 1) * pageSize;
        console.log(pageSize);
        var first20movies = movies.slice(startIndex, startIndex + pageSize);
        res.send(first20movies);
    },
    getByID: function(req, res, next) {
        var movieID = req.params.movieID;
        var movie = movies[movieID];
        var responseObj = {
            message: "You've asked for movie ID ",
            movie: movie
        }
        res.send(responseObj);
    },
    modify: function(req, res, next) {
        // which item to modify
        var movieID = req.params.movieID;
        // what data to change it to
        //http://locchost:3000/api/movies/272?Worldwide Gross=20000
        moviesToModify = movies[moviesID];
        for (var p in req.query) {
            if (req.query.hasOwnProperty(p) && moviesToModify.hasOwnProperty(p)) {
                req.query[p] = movieID[p];
            }
        }
    },
    add: function(req, res, next) {
      movies.push(req,body);
      res.status(200).end();
    },
    delete: function(req, res, next) {
      movies.splice(req.params.movieID, 1);
      res.status(200).end();
    }
}
