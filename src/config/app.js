import 'dotenv/config'

const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pizzashop'

export {
  PORT,
  MONGODB_URI
} 