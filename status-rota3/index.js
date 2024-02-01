/* eslint-disable no-unused-vars */
const express = require('express');
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())


//rotas - endpoints


app.post('/createproduct', (req, res)=>{
    const name = req.body.name;
    const price = req.body.price;

    if(!name){
        res.status(422).json({
            messagem: 'O campo é obrigatório!!!'
        })
        return
    }


    console.log(name);
    console.log(price);

    res.status(201).json({
        messagem: `O produto ${name} foi criado com sucesso com o valor ${price}`
    })
})

app.get('/', (req, res)=>{
    res.status(200).json({
        messagem: 'Primero rota criada com sucesso!'
    })
})


app.listen(3000)



