const express = require('express');

const app = express();

app.get('/', (req, res)=>{
	res.send('Hi Hello there!');
});


app.listen(8080, ()=>{
console.log("App is running!");
});