const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
                    nombre : String,
                    email : String,
                    telefono : Number,
                    mensaje : String
                  });

module.exports = mongoose.model('task',taskSchema);
