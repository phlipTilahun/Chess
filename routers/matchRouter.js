const router = require("express").Router();
const matchController = require("../controllers/matchController");


router
    .route("/")
    .get(matchController.getAllMatch)
    .post(matchController.saveMatch)


router
    .route('/:id') 
    .get(matchController.getMatch)   
    .put(matchController.updateMatch)
    .delete(matchController.deleteMatch)

router
    .route('/:id/players')
    .get(matchController.getPlayers)
    .post()
    .put()
    .delete()

router
    .route('/:matchId/players/:playerId')    
    .get(matchController.getPlayer)
    .put()
    .delete()

router




module.exports = router;