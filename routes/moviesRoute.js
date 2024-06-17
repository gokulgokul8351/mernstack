import express from 'express'
import {
  MovieIndex,
  MovieCreate,
  MovieUpdate,
  MovieDelete,
} from '../controller/movies.controller.js'

const router = express.Router()

// CURD functionality

// Read
router.get('/', MovieIndex)

// Create
router.post('/', MovieCreate)

// Update
router.put('/:id', MovieUpdate)

// Delete
router.delete('/:id', MovieDelete)

export default router
