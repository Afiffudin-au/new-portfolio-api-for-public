import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import Testimonials from './dbTestimonials.js'
import Cors from 'cors'
//App Config
const app = express()
const port = process.env.PORT || 8001
const connection = 'YOUR MONGODB IDENTITY'
//Middleware
app.use(express.json())
app.use(Cors())
// DB CONFIG
mongoose.connect(connection, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
//API end point
app.get('/', (req, res) => {
  res.status(200).send('Welcome to portfolio API')
})
app.post('/portfolio/cards', (req, res) => {
  const dbCard = req.body
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})
app.get('/portfolio/cards', (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.get('/portfolio/cards/:id', (req, res) => {
  Cards.findById(req.params.id, (erorr, data) => {
    if (erorr) {
      res.status(500).send('Erorr : Invalid id')
    } else {
      res.status(200).send(data)
    }
  })
})

// Testimonial
app.post('/portfolio/testimonials', (req, res) => {
  const dbTestimonial = req.body
  Testimonials.create(dbTestimonial, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})
app.get('/portfolio/testimonials', (req, res) => {
  Testimonials.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})
//Listener
app.listen(port, () => console.log(`Listening on localhost : ${port}`))
