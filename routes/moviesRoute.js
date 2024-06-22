import express from 'express'
import {
  MovieIndex,
  MovieCreate,
  MovieUpdate,
  MovieDelete,
  MovieDetail,
} from '../controller/movies.controller.js'

const router = express.Router()

// CURD functionality

// 1.Read
router.get('/', MovieIndex)

// 2.Create
router.post('/', MovieCreate)

// 3.Detail
router.get('/:id', MovieDetail)

// 4.Update
router.put('/:id', MovieUpdate)

// 5.Delete
router.delete('/:id', MovieDelete)

export default router
