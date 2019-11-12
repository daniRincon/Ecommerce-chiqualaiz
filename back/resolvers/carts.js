const { Cart, Book } = require("../models/");
const S = require("sequelize");
const Op = S.Op;

const addCart = function(req, res){
    Cart.create({
        userId : req.body.userId,
        prodId : req.body.bookId
    })
    .then(data =>{ 
        res.send(data)})
    .catch(err => res.status(404).send(err))
}

const updateCart = function(req, res){
    switch(req.body.operacion){
        case 'sumar':
                Cart.update({
                    cantidad:  S.literal('cantidad + 1')
                }, {where:{
                    userId : req.body.userId,
                    prodId: req.body.bookId
                }})
                .then(data => res.send(data))
                .catch(err => res.status(404).send(err));
                break;
        case 'restar':
                Cart.update({
                    cantidad:  S.literal('cantidad - 1')
                }, {where:{
                    userId : req.body.userId,
                    prodId: req.body.bookId
                }})
                .then(data => res.send(data))
                .catch(err => res.status(404).send(err))
                break;
        case 'eliminar':
                Cart.destroy({
                    where: {
                        prodId: req.body.bookId,
                        userId: req.body.userId
                    }
                })
                .then(res.sendStatus(200))
                .catch(err => res.status(404).send(err))
                break;
                }   
}

const fetchCart = function(req, res){
    if(!req.user) {
        res.send({})
    } else {
        Cart.findAll({
            where: {
                userId: req.params.id
            }
        })
        .then(async (data) =>{ 
            const prodIds = [], prodQuantities = {};
        data.map((book) => {
            prodIds.push(book.prodId)
            prodQuantities[book.prodId] = book.cantidad
        })
        const bookObj = await Book.findAll({
                where:{
                    id : {
                        [Op.in]: prodIds,  
                    }
                }
        })
        const dataSent = {}
        bookObj.map((book, index) => { 
            dataSent[book.id]= [prodQuantities[book.id],book.precio, book.titulo]  })
        res.send(dataSent)
        })
        .catch(err => res.status(404).send(err))
    }
}

const emptyCart = function(req, res){
    if(req.user){
        Cart.destroy({
            where: {
                userId: req.user.id
            }
        })
        .then((data) => {
            res.sendStatus(200)})
        .catch(err => res.status(404).send(err))
    }
}

const syncCart = function(req, res){

    const ids = Object.keys(req.body)
    const values = Object.values(req.body)
    Promise.all(ids.map(async(id, index) =>{
        const instance = await Cart.findOne({ where: { userId : req.user.id, prodId: id}})
        if(instance){
            let quantity = values[index][0]
            return await Cart.update({
                cantidad:  S.literal(`cantidad + ${quantity}`)
            }, {where:{
                userId : instance.userId,
                prodId: instance.prodId
            }})
        }else{
            return await Cart.create({
                    userId : req.user.id,
                    prodId : id,
                    cantidad: values[index][0]
            })
        }
    }))
    .then(() => Cart.findAll({
        attributes: ['prodId', 'cantidad']
        },{
        where: {
            userId: req.user.id
        }
    }))
    .then(async (data) =>{ 
        const prodIds = [], prodQuantities = {};
        data.map((book) => {
            prodIds.push(book.prodId)
            prodQuantities[book.prodId] = book.cantidad
        })
        const bookObj = await Book.findAll({
                where:{
                    id : {
                        [Op.in]: prodIds,  
                    }
                }
        })
        const dataSent = {}
        bookObj.map((book) => { 
            dataSent[book.id]= [prodQuantities[book.id],book.precio, book.titulo]  })
        res.send(dataSent)
        })
}

module.exports = { addCart, updateCart, fetchCart, emptyCart, syncCart }