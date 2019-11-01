const express = require('express');
const router = express.Router();
const projects = require('./helpers/projectModel');

router.get('/', async (req, res) => {
    await projects.get()
        .then(projectList => res.status(200).json(projectList))
        .catch(err => res.status(500).json({ errorMessage: "Not able to return projects!" }))
    res.end();
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    !!id === true &&
        await projects.get(id)
            .then(projectById => res.status(200).json(projectById))
            .catch(err => res.status(500).json({ errorMessage: "GIVE ME FLOWER FIRST, THEN YOU GET THE PROJECT." }))
    res.end();
});

router.get('/:id/actions', async (req, res) => {
    const id = req.params.id;

    !!id === true &&
        await projects.getProjectActions(id)
            .then(projectById => res.status(200).json(projectById))
            .catch(err => res.status(500).json({ errorMessage: "GIVE ME FLOWER FIRST, THEN YOU GET THE PROJECT." }))
    res.end();
});

router.post('/', async (req, res) => {
    const project = req.body;

    !!project === true &&
        await projects.insert(project)
            .then(project => res.status(201).json(project))
            .catch(err => res.status(500).json({ errorMessage: "NOOOOOOOOO POSTING FOR YOU BOIII" }))
    red.end();
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    !!id === true &&
        await projects.remove(id)
            .then(project => res.status(200).json({ success: `successfully delete this object, if it appears ${project}` }))
            .catch(err => res.status(500).json({ errorMessage: "GIVE ME FLOWER, OR NO DELETE FOR YOU!" }))
    res.end();
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const project = req.body;

    !!project === true && !!project === true &&
        await projects.update(id, project)
            .then(updatedProject => res.status(201).json(updatedProject))
            .catch(err => res.status(500).json({ errorMessage: "FLOWER, OR NO UPDATE FOR YOU." }))
    res.end();
});

module.exports = router;