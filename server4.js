const express = require('express');
const hbs = require('hbs');
var app = express();
const port = 3000;
//key - view engine
//value- hbs
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.get('/home', (req, res) => {
 res.render('home.hbs', {
 welmessage: 'Hello this is my homepage!!!',
 pageTitle: 'Home Page',
 currentYear: new Date().getFullYear()
 });
});

app.get('/about', (req, res) => {
 res.render('about.hbs', {
 pageTitle: 'About Page',
 currentYear: new Date().getFullYear()
 });
});

app.get('/contact', (req, res) => {
 res.render('contact.hbs', {
 cont: 'Our Details are:',
 pageTitle: 'Contact Page',
 details: 7611016440
 });
});

app.get('/location', (req, res) => {
 res.render('location.hbs', {
 loc: 'Our office address',
 pageTitle: 'Location Page',
 address: 'f-37, MNIT, Jaipur-Rajasthan'
 });
});

app.get('/error', (req, res) => {
 res.send({
 errorMsg: 'Unable to find the page'
 });
});
app.listen(port, () => {
 console.log(`App listening on port number :- ${port}...!!!`);
});
