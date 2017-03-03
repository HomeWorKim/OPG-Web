var util = {};

util.isLoggedin = function(req,res,next){
	if(req.isAuthenticated()){
		next();
	}else{
		req.flash("errors", {login:"Please login first"});
  		res.redirect("/");
	}
};

module.exports = util;
