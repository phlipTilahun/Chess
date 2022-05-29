const Match = require('../data/models/match')

const getAllMatches = ()=> {
    return Match.find()
}

const getMatch = (id) => {
    return Match.findOne({_id: id})
}

const saveMatch = (match) => {
    return new Match(match).save()
}

const updateMatch = (id, match) => {
    return Match.updateOne({_id: id} , {match});
}

const deleteMatch = (id) => {
    return Match.deleteOne({_id: id})
}

const getPlayers = (id) => {
    return Match.find({_id: id}, 'players')
}

const getPlayer = (matchId, playerId) => {
    console.log();
     return Match.find({_id: matchId}).select('players')
}


module.exports = {
    getAllMatches,
    getMatch,
    saveMatch,
    updateMatch,
    deleteMatch,
    getPlayers,
    getPlayer
}