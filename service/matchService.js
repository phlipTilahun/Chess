const Match = require('../data/models/match')

const getAllMatches = ()=> {
    return Match.find();
    
    
}

const getMatch = (id) => {
    return Match.findOne({_id: id})
}

const saveMatch = (match) => {
    return new Match(match).save()
}

const updateMatch = (id, match) => {
    return Match.updateOne({_id: id} , {...match});
}

const deleteMatch = (id) => {
    return Match.deleteOne({_id: id})
}

const getPlayers = (id) => {
    return Match.find({_id: id}, 'players')
}

const getPlayer = (matchId, playerId) => {
     return Match.find({_id: matchId}).select('players')
}

const addPlayer = (matchId, player) => {
      return new Promise((resolve, reject) => {
        Match.findById(matchId, (err, match) => {
            if(!match)
                reject("Match not found")
            else{
                if(match['players'].length >= 2) reject({msg:"Number of players cannot be more than 2"})
                else{
                    match['players'].push(player)
                    resolve(match.save()) 
                }         
            }     
         })
      })
}

const deletePlayer = (matchId, playerId) => {
    return new Promise((resolve, reject) => {
        Match.findById(matchId, (err, match) => {
            if(!match)
                reject({msg: "Match not found"})
            else{
                match['players'] = match['players'].filter((player, index) => player._id != playerId)
                resolve(match.save())
            }    
        })
    })
}

const updatePlayer = (matchId, playerId, playerUpdate) => {
    return new Promise((resolve, reject) => {
        Match.findById(matchId, (err, match) => {
           if(!match)
               reject({msg: "Match not found"})
            else{
                const player =  match['players'].filter((player, index) => player._id == playerId)
                match['players'] = match['players'].filter((player, index) => player._id != playerId)
                var playerClone = Object.assign({}, {...playerUpdate})
                delete playerClone._id
                playerClone['_id'] = playerId
                match['players'].push(playerClone)
                resolve(match.save())
            }           
        })
    })
}


module.exports = {
    getAllMatches,
    getMatch,
    saveMatch,
    updateMatch,
    deleteMatch,
    getPlayers,
    getPlayer,
    addPlayer,
    deletePlayer,
    updatePlayer
}
