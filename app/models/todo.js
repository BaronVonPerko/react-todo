var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var TodoSchema = new Schema({
    text: String,
    isComplete: Boolean
});

module.exports = mongoose.model('Todo', TodoSchema);