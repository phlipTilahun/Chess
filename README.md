# Chess

A simple application that does CRUD operations on a mongodb collection

Endpoints 

GET /api/v1/matches
GET /api/v1/matches/:id
POST /api/v1/matches
PUT /api/v1/matches/:id
DELETE /api/v1/matches/:id

GET /api/v1/matches/:matchID/players/
GET /api/v1/matches/:matchID/players/:playerID
POST /api/v1/matches/:matchID/players
PUT /api/v1/matches/:matchID/players/:playerID
DELETE /api/v1/matches:matchID/players/:playerID