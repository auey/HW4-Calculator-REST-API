var express = require ('express');
var app = express();
var bodyParser = require('body-parser');

app.set('num', 1);
var num = app.get('num');
console.log(num); //1

app.use(function (req, res, next) { 
    console.log('Record timestamp');
    next();
});

app.use(bodyParser.json()); 

app.post('/calculator/rest/minus', function (req, res, next) { 
    var body = req.body; //creat var body  
    var x = body.x;
    var y = body.y;
    var result = 0;
    var object = {
        "x": x,
        "y": y,
        "Result x Minus y" :x-y
    }
    res.json(object);
});

app.post('/calculator/rest/multiply', function (req, res, next) { 
    var body = req.body;  
    var x = body.x;
    var y = body.y;
    var result = 0;
    var object = {
        "x": x,
        "y": y,
        "Result x Multiply y" :x*y
    }
    res.json(object);
});

app.post('/calculator/rest/divide', function (req, res, next) { 
    var body = req.body;  
    var x = body.x;
    var y = body.y;
    var result = 0;
    var object = {
        "x": x,
        "y": y,
        "Result x Divide y :" :x/y
    }
    res.json(object);
});

app.get ('/help',function (req, res, next) {
    res.send('Help me'); 
}); 

app.listen(3000, function(){
    console.log('Starting node on port 3000') //ให้ express start อยู่ที่port 3000
});