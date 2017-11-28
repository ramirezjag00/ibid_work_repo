 var mongoose = require("mongoose");
 var Item = require("./models/item");
 var Comment = require("./models/comment");

 var data = [
 	{
 		name: "Acer Aspire E14(E5-473) Laptop",
 		price: 15000,
 		image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQdwcabzI8Dcs0z2lFhX2i8iJSZgsA9oxC2DJRHcBm2hSyw49p",
 		description: "bla bla bla bla bla"
 	},
 	{
 		name: "AOC E2470SWHE 23.6 LED Monitor",
 		price: 3000,
 		image:"https://www.cclonline.com/images/MediaPool/VEg6KG8VDYOis9MEkNGMWA-3d-3d.jpg?width=1600&height=1600",
 		description: "bla bla bla bla bla"
 	},
 	{
 		name: "Samsung S24D330 24 LED Monitor",
 		price: 3000,
 		image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8uVLqY9xJpDGJIeVL4mX-wQbNrusVdqoTZQxCrCGj1wIY21V",
 		description: "bla bla bla bla bla"
 	}
 ]

 function seedDB(){
 	//Remove all items
 	 Item.remove({}, function(err){
	 	if(err){
	 		console.log(err);
	 	} 
	 	console.log("removed items! ");
	 	 //add a few items
	 	 data.forEach(function(seed){
 	 		Item.create(seed, function(err, item){
	 	 		if(err){
	 	 			console.log(err);
	 	 		} else {
	 	 			console.log("added an item");
	 	 			//add a few comments
	 	 			Comment.create({text: "Can you add more info?",
	 	 			author:"Trumpete"
	 	 		}, function(err,comment){
	 	 				if(err){
	 	 					console.log(err);
	 	 				} else {
	 	 					item.comments.push(comment);
	 	 					item.save();
	 	 					console.log("Created a new comment");
	 	 				}
	 	 				
	 	 			});
	 	 		}
 	 		});
 		});
 	});
 }

 module.exports = seedDB;