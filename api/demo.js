const req = require('express/lib/request');
const json = require('../database/fake');
const articleJson = require('../database/article');

module.exports = (app) => {
// Code here
    app.get('/hello', (req, res) => {
        return res.send('Hello world')
    })

    app.get('/api/user', (req, res) => {
        try{
            return res.status(200).send(json)
        } catch (err) {
            console.error(err)
            return res.status(500).send({message: "an error occured", status: 500});
        }
    })

    app.get('/api/user', (req, res) => {
        try{
            return res.status(200).send(json)
        } catch (err) {
            console.error(err)
            return res.status(500).send({message: "an error occured", status: 500});
        }
    })

    app.get('/api/fake/:id', (req, res) => {
        try {
            if (!json.users[req.params.id]){
                throw "Id not found !"
            } else {
                return res.status(200).send(json.users[req.params.id]);
            }
        } catch (err) {
            console.error(err)
            return res.status(500).send({message: "an error occured", status: 500});
        }
    })

    app.put('/api/fake/:id', (req,res) => {
        try {
            if (!json.users[req.params.id]) throw "Id not found !";
            if (!req.body) throw "body empty";
            console.log(req);
            json['users'][req.params.id]['name'] = req.body['name'];
            
            return res.status(200).send(json.users[req.params.id]);            
        } catch (err) {
            console.error(err)
            return res.status(500).send({message: "an error occured", status: 500}); 
        }
    })

    //-------------------------------------------------

    //Get One Article
    app.get('/OneArticle/:id', (req, res) => {
        console.log("OneArticle")
        try {
            if (!articleJson.Articles[req.params.id]){
                throw "Id not found !"
            } else {
                return res.status(200).send(articleJson.Articles[req.params.id]);
            }
        } catch (err) {
            console.error(err)
            return res.status(500).send({message: "an error occured", status: 500});
        }
    })

    //Get All Article
    app.get('/AllArticle/', (req, res) => {
        console.log("AllArticle")
        try {
            if (!articleJson.Articles){
                throw "il n'y pas d'article"
            } else {
                console.log(articleJson.Articles)
                return res.status(200).send(articleJson.Articles);
            }
        } catch (err) {
            console.error(err)
            return res.status(500).send({message: "an error occured", status: 500});
        }
    })

    //Post One Article
    app.post('/PostArticle', (req,res) => {
        try {
            if (!req.body) throw "body empty";
            let ret = {
                "name": req.body['name'],
                "prix": req.body['prix'],
                "_id": articleJson.Articles.length
            }
            console.log(ret);
            articleJson['Articles'].push(ret);
            return res.status(200)          
        } catch (err) {
            console.error(err)
            return res.status(500).send({message: "an error occured", status: 500}); 
        }
    })

    app.put('/PutArticle', (req,res) => {
        console.log(req.body._id);
        console.log(req.body);
        try {
            if (!req.body) throw "body empty";
            if (!json.users[req.body._id]) throw "Id not found !";
            console.log(req);
            articleJson['Articles'][req.body._id]['name'] = req.body['name'];
            articleJson['Articles'][req.body._id]['prix'] = req.body['prix'];
            return res.status(200).send(json.users[req.params.id]);            
        } catch (err) {
            console.error(err)
            return res.status(500).send({message: "an error occured", status: 500}); 
        }
    })
}