//ITEM SCHEMA/MODEL
var mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
	name:String,
	price: Number,
	bidPrice: Number,
	highestBidder: String,
	image:[{
		type:String,
	}],
	description: String,
	created:{type:Date, default: new Date()},
	endDate:{type:Date, default: new Date(+new Date() + 7*24*60*60*1000).setHours(12,0,0,0)},
	author: {
		id:{
			type:mongoose.Schema.Types.ObjectId,
			ref:"User"
		},
		username:String,
		name:String
	}
});

module.exports = mongoose.model("Item", itemSchema);

