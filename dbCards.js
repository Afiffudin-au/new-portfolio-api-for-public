import mongoose from 'mongoose'
const cardSchema = mongoose.Schema({
  projectName: String,
  description: String,
  githubLink: String,
  imgUrl: String,
  tech: [],
  previewLink: String,
})
export default mongoose.model('cards', cardSchema)
