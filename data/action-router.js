const express = require('express');
const router = express.Router();
const actions = require('./helpers/actionModel');

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    !!id === true &&
        await actions.get(id)
            .then(actionResults => res.status(200).json(actionResults))
            .catch(err => res.status(500).json({ errorMessage: "FLOWER, OR NO ACTIONS FOR YOU." }))
    res.end();
});

router.post('/:id', async (req, res) => {
    const action = req.body;
    const id = req.params.id;

    !!action === true &&
        !!action.description === true &&
        !!action.notes === true &&
        !!id === true &&
        await actions.insert({ ...action, project_id: id })
            .then(actionResults => res.status(200).json(actionResults))
            .catch(err => res.status(500).json({ errorMessage: "FLOWER, OR NO ACTIONS FOR YOU." }))
    res.end();
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    !!id === true &&
        await actions.remove(id)
            .then(actionResults => res.status(200).json({ success: `successfully delete this action id of: ${project}` }))
            .catch(err => res.status(500).json({ errorMessage: "FLOWER, OR NO DELETE ACTION FOR YOU." }))
    res.end();
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const action = req.body;

    !!id === true &&
        await actions.update(id, action)
            .then(actionResults => res.status(200).json(actionResults))
            .catch(err => res.status(500).json({ errorMessage: "FLOWER, OR NO UPDATE ACTION FOR YOU." }))
    res.end();
});

module.exports = router;