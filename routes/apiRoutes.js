const express = require('express');
const router= express.Router();
const db = require('../models');


//get all todos
router.get('/all', (req, res) => {
    db.Todo.findAll().then(todos =>{
        res.send(todos);
    })
});

//get one todo by id
router.get('/todo', (req, res) => {
    db.Todo.findAll({
        where:{
            id:req.query.id
        }
    }).then(todo=>{
        res.send(todo);
    })
})


//post new todo
router.post('/new', (req, res) => {
    db.Todo.create({
        text: req.body.text
    })
    .then(todo =>{
        res.send(todo);
    })
});


//delete one todo by id
router.delete('/delete/:id', (req, res) => {
    db.Todo.destroy({
        where:{
            id: req.params.id
        }
    }).then(()=>{
        res.send('success');
    })
});

//update one todo by id
router.put('/edit', (req, res)=>{
    db.Todo.update({
        text:req.body.text
    },
    {
        where:{
            id: req.body.id
        }
    }).then(todo=>{
        res.send(todo);
    })
})



module.exports=router;