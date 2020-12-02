const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const rawdata = fs.readFileSync('routes/pokemondata.json')
const pokemonData = JSON.parse(rawdata)

router.get('/', (req, res) => {
	console.log('pokemonData')
	res.json(pokemonData)
})

router.get('/:id', (req, res) => {
	const { id } = req.params
	const match = pokemonData.find((p) => Number(p.id) === Number(id))
	if (!match) {
		return res.status(404).send('Pokemon with this ID does not exist')
	}
	res.json(match)
})

router.get('/:id/:info', (req, res) => {
	const { id, info } = req.params
	const acceptableFields = new Set(['name', 'base', 'type'])
	const match = pokemonData.find((p) => Number(p.id) === Number(id))
	if (!match) {
		return res.status(404).send('Pokemon with this ID does not exist')
	}
	if (!acceptableFields.has(info)) {
		return res.status(400).send("You can't request this info type")
	}
	res.json(match[info])
})

module.exports = router
