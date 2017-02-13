var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var ListSchema = new Schema({
    name: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('List', ListSchema);