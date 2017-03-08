var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/chihuo');//；连接数据库
var Schema = mongoose.Schema;   //  创建模型
var goodsSchema = new Schema({
    name: String,
    url:String,
    imgUrl: String,
    discountDesc:String,
    couponUrl:String,
    price:Number,
    date:Date,
    goodsId:String,
    monthlySales:Number
}); //  定义了一个新的模型，但是此模式还未和users集合有关联
exports.goods = db.model('goods', goodsSchema); //  与users集合关联