import mongoose from 'mongoose'
const testimonialSchema = mongoose.Schema({
  name: String,
  description: String,
  imgUrl: String,
})
export default mongoose.model('testimonials', testimonialSchema)
