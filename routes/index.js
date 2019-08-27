var express = require("express");
var router = express.Router();
var todos = require('../data/todos');

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { todos });
});

router.post('/todos', function (req, res) {
  todos.push({todo: req.body.todo, done: false})
  res.redirect('/');
});

router.delete('/todos/:id', function(req, res){
  todos.splice(req.params.id, 1); 
  res.redirect('/'); 
}); 


module.exports = router;