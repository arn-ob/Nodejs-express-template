
const mongoose = require('mongoose');

const jobs = mongoose.Schema({
    
    user_id:            { type: String, default: "" },
    json:               { type: String, default: '' },
    
    created_at:         { type: Date, default: Date.now() }
});


// Pipeline test.
mongoose.set('useCreateIndex', true);
module.exports = mongoose.model('jobs', jobs, 'jobs');
