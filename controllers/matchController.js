const match = require('../data/models/match')
const Match = require('../data/models/match')
const matchService = require('../service/matchService')

const getAllMatch = (req, res) => { 
   matchService
            .getAllMatches()
            .then(matches => {
                res.status(200).json(matches)
            })
            .catch(error => {
                res.status(500).json({msg: process.env.INTERNAL_SERVER_ERROR})
            })

}

const getMatch = (req, res) => {
    matchService
            .getMatch(req.params.id)
            .then(match => {
                match != null ?
                        res.status(200).json(match) :
                        res.status(404).json({msg: process.env.DOCUMENT_NOT_FOUND})
            })
            .catch(error => {
                res.status(500).json({msg: error})
            })
}

const saveMatch = (req, res) => {
    matchService
            .saveMatch(req.body)
            .then(match => {
                res.status(201).json(match)
            })
            .catch(error => {
                console.log(error);
                res.status(400).json({msg: error.errors})
            })
}

const updateMatch = (req, res) => {
    matchService
            .updateMatch(req.params.id, req.body)
            .then(_ => {
                res.status(204).end()
            })
            .catch(error => {
                console.log(error);
                res.status(400).json({msg: error.errors})
            })
}

const deleteMatch = (req, res) => {
    matchService
            .deleteMatch(req.params.id)
            .then(_ => {
                res.status(200).end()
            })
            .catch(error => {
                res.status(404).json({msg:error})
            })

}

const getPlayers = (req, res) => {
    matchService   
            .getPlayers(req.params.id) 
            .then(players => {
                res.status(200).json(players)
            })
            .catch(error => {
                res.status(404).json({msg: "Document not found"})
            })
}

const getPlayer = (req, res) => {
    matchService
            .getPlayer(req.params.matchId, req.params.playerId)
            .then(player => {
                res.status(200).json(player[0]['players'].id(req.params.playerId))
            })
            .catch(error => {
                res.status(404).json({msg: process.env.DOCUMENT_NOT_FOUND})
            })
}


module.exports =  { 
    getAllMatch,
    getMatch,
    saveMatch,
    deleteMatch,
    updateMatch,
    getPlayers,
    getPlayer,
}