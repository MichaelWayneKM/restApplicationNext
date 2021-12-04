import connectDB from '../../../middleware/server';
import domains from '../../../models/domains';
const search = async(req, res) => {
    var noMatch = null;
    if(req.query.q) {
        const regex = new RegExp(escapeRegex(req.query.q), 'gi');
        // Get all campgrounds from DB
        domains.find({domainName: regex}, function(err, alldomains){
           if(err){
               console.log(err);
               res.send(err.message)
           } else {
              if(alldomains.length < 1) {
                  noMatch = "No campgrounds match that query, please try again.";
              }
              res.json({domains:alldomains, noMatch: noMatch});
           }
        });
    } else {
        // Get all campgrounds from DB
        domains.find({}, function(err, alldomains){
           if(err){
               console.log(err);
           } else {
            res.json({domains:alldomains})
           }
        });
    }
}

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

export default connectDB(search)