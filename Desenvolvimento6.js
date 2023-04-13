//Desenvolvimento 6
//Aluno: Alex Barros
//Data: 13/04/2023.

import express from 'express';
import routes from './routes';

const app = express();

app.post('minhaApi.com/', (request, response) => {
    try{
        const turmas = await Turmas.create(req.body);

        return resizeBy.send({turmas});
    } catch (err) {
        return resizeBy.status(404).send({error: 'erro na criação de um novo projeto'});
    }
});

app.get('minhaApi.com/turmas', (request, response) => {
    return response.json([
        "turma 1",
        "turma 2",
    ])
});

app.get('minhaApi.com/turmas/10', (request, response) => {
    try {
        resizeBy.send({ user: request.userid});
    } catch (err) {
        return resizeBy.status(400).send({ error: 'erro em achar o projeto'});
    }
});

app.put('minhaApi.com/turmas/10', (req, res) => {
    Turmas.update(req.params.id);
})

app.delete('minhaApi.com/turmas/10', (req, res) => {
    Turmas.findByIdAndRemove(req.params.turmasId);

    return res.statusCode(204);
})