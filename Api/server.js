import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
const app = express()
const port = 3000

app.use(express.json());
app.use(cors())


app.get('/users/', async (req, res) => {

    let users = [];

    if (req.query) {
        users = await prisma.user.findMany( {
            where: {
                name: req.query.name,
                age: req.query.age,
                email: req.query.email,
            }
        })
    } else {
        users = await prisma.user.findMany();
    }

    res.status(200).json(users);
})

app.post('/users', async (req, res) => {
    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
        }
    })

    res.status(201).send('Usuário criado: ' + req.body.name);
})

app.put('/users/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id,
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    res.status(201).send('Usuário edt: ' + req.body.name);
})

app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id,
        }
    })

    res.status(200).json('Usuário deletado com sucesso');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})