const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Task = require('../models/task');

router.get('/',(req,res) => {
  res.render('index.ejs');
});
router.get('/conoce',(req,res) => {
  res.render('conoceMiTren.ejs');
});

router.get('/login',(req,res) => {
  res.render('login.ejs');
});

router.get('/horarios',(req,res) => {
  res.render('horarios.ejs');
});

router.get('/rutas',(req,res) => {
  res.render('rutas.ejs');
});

router.get('/contacto',(req,res) => {
  res.render('contacto.ejs');
});

router.post('/send',async (req,res) =>{
const task = new Task(req.body);
await task.save();

const tasks = await Task.find();
console.log(tasks);
// Definimos el transporter
var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'ayorustuamigo98@gmail.com',
            pass: 'darknext123'
        }
    });
// Definimos el email
var mailOptions = {
    from: 'ayorustuamigo98@gmail.com',
    to: 'clopezbaya@gmail.com',
    subject: req.body.nombre + " " + req.body.email + " " + req.body.telefono,
    text: req.body.mensaje
};
// Enviamos el email
transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
        res.redirect('/');
    } else {
        console.log("Email sent");
        res.redirect('/');

    }
});

});

module.exports = router;
