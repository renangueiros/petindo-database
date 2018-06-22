var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Banco de dados conectado");

    var dbo = db.db("petindo");
    var usuarios = dbo.collection("usuarios");

    usuarios.insert({
        _id: "1",
        name: "Renan",
        email: "renan@email.com",
        address: {
            state: "PE",
            city: "Correntes"
        },
        pet: {
            breed: "Poodle",
            sex: "M",
            age: 2,
            color: "branco",
        }
    }, function (err, res) {
        if (err) throw err;
        console.log("Usuario inserido com sucesso");
    });

    usuarios.insertMany([
        {
            _id: "2",
            name: "Leonardo",
            email: "email@email.com",
            address: {
                state: "PE",
                city: "Garanhuns"
            },
            pet: {
                breed: "Pug",
                sex: "M",
                age: 5,
                color: "marrom",
            }
        },
        {
            _id: "3",
            name: "Ana Maria",
            email: "email@email.com",
            address: {
                state: "PE",
                city: "Garanhuns"
            },
            pet: {
                breed: "Pug",
                sex: "F",
                age: 4,
                color: "marrom",
            }
        },
        {
            _id: "4",
            name: "Marcelo",
            email: "email@email.com",
            address: {
                state: "PE",
                city: "Garanhuns"
            },
            pet: {
                breed: "Pitbull",
                sex: "M",
                age: 1,
                color: "preto",
            }
        },
        {
            _id: "5",
            name: "Thor",
            email: "email@email.com",
            address: {
                state: "PE",
                city: "Lajedo"
            },
            pet: {
                breed: "Chiuaua",
                sex: "F",
                age: 7,
                color: "branco",
            }
        },
        {
            _id: "6",
            name: "Bruna",
            email: "email@email.com",
            address: {
                state: "PE",
                city: "Garanhuns"
            },
            pet: {
                breed: "Poodle",
                sex: "F",
                age: 2,
                color: "branco",
            }
        }
    ], function (err, res) {
        if (err) throw err;
        console.log(res.insertedCount + " usuarios cadastrados com sucesso");
    });

    var query = { name: "Leonardo" };

    usuarios.update(query, { $set: { email: "leonardo@email.com" } }, function (err, res) {
        if (err) throw err;
        console.log("Cadastro atualizado com sucesso");
    });

    var query = { name: "Ana Maria" };

    usuarios.update(query, { $unset: { email: "" } }, function (err, res) {
        if (err) throw err;
        console.log("Cadastro atualizado com sucesso");
    });

    var query = { name: "Renan" };

    usuarios.update(query, { $set: { "pet.breed": "Rottweiler" } }, function (err, res) {
        if (err) throw err;
        console.log("Cadastro atualizado com sucesso");
    });

    var query = { name: "Renan" };

    usuarios.update(query, {
        $set: {
            location: {
                latitude: -9.1415000,
                longitude: -36.3133900
            }
        }
    }, function (err, res) {
        if (err) throw err;
        console.log("Cadastro atualizado com sucesso");
    });

    var query = { name: "Renan" };

    usuarios.update(query, { $set: { following: ["2", "4", "6"] } }, function (err, res) {
        if (err) throw err;
        console.log("Cadastro atualizado com sucesso");
    });

    var query = { name: "Renan" };

    usuarios.update(query, { $push: { following: "5" } }, function (err, res) {
        if (err) throw err;
        console.log("Cadastro atualizado com sucesso");
    });

    var query = { name: "Renan" };

    usuarios.update(query, { $pull: { following: "5" } }, function (err, res) {
        if (err) throw err;
        console.log("Cadastro atualizado com sucesso");
    });

    var query = { name: "Marcelo" };

    usuarios.findOne(query, function (err, res) {
        if (err) throw err;
        console.log(res);
    });

    var query = { name: "Marcelo" };

    usuarios.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
    });

    var query = { "pet.breed": "Pug" };

    usuarios.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
    });

    var query = { following: "4" };

    usuarios.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
    });

    var query = { "address.city": "Garanhuns", "pet.breed": "Pug" };

    usuarios.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
    });

    var query = { $or: [{ "pet.breed": "Poodle" }, { "pet.sex": "F" }] };

    usuarios.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
    });

    var query = { "pet.age": { $in: [5, 7] } };

    usuarios.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
    });

    var query = { "pet.age": { $nin: [5, 7] } };

    usuarios.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
    });

    var query = { "pet.age": { $all: [2] } };

    usuarios.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
    });

    var query = { "pet.age": { $gt: 4 } };

    usuarios.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
    });

    var query = { "pet.age": { $gte: 4 } };

    usuarios.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
    });

    var query = { "pet.age": { $lt: 2 } };

    usuarios.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
    });

    var query = { "pet.age": { $lte: 2 } };

    usuarios.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
    });

    var query = { "address.city": "Garanhuns" };

    usuarios.find(query).count(function (err, res) {
        if (err) throw err;
        console.log(res);
    });

    var query = { name: "Renan" };

    usuarios.update(query, { $pullAll: { following: ["2", "6"] } }, function (err, res) {
        if (err) throw err;
        console.log("Cadastro atualizado com sucesso");
    });

    var query = { name: "Renan" };

    usuarios.update(query, { $push: { following: { $each: ["2", "6"] } } }, function (err, res) {
        if (err) throw err;
        console.log("Cadastro atualizado com sucesso");
    });

    var query = { name: "Bruna" };

    usuarios.deleteOne(query, function (err, res) {
        if (err) throw err;
        console.log("Cadastro deletado com sucesso");
    });

    var query = { "pet.color": "branco" };

    usuarios.deleteMany(query, function (err, res) {
        if (err) throw err;
        console.log(res.deletedCount + " cadastros deletados com sucesso");
    });

    db.close();
});