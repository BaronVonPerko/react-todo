var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var TodoSchema = new Schema({
    text: { type: String, required: true },
    description: String,
    isComplete: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    _list: { type: Schema.Types.ObjectId, ref: 'List' }
});

module.exports = mongoose.model('Todo', TodoSchema);