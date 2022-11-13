const mongoose = require('mongoose')
const PASSWORD = encodeURIComponent('@GmQBL27v3fGNhN')
const URI = `mongodb+srv://Denys:${PASSWORD}@cluster0.5mdf0jj.mongodb.net/expensetracker?retryWrites=true&w=majority`

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    )
  } catch (error) {
    console.log(`Error:  ${error.message}`.red)
    process.exit(1)
  }
}

module.exports = connectDB
