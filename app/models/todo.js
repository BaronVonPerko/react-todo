var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var TodoSchema = new Schema({
    text: String,
    description: String,
    isComplete: Boolean
});

module.exports = mongoose.model('Todo', TodoSchema);