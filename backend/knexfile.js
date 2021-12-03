const { DATABASE_HOST, DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD } = process.env

if (!DATABASE_HOST){
  console.error("Where is the database?")
}
if (!DATABASE_NAME){
  console.error("What's the name of the database?")
}
if (!DATABASE_USER){
  console.error("Who is the database user?")
}
if (!DATABASE_USER){
  console.error("Who is the database user?")
}
console.log(DATABASE_HOST, DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD)

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: DATABASE_HOST,
      database: DATABASE_NAME,
      user: DATABASE_USER,
      password: DATABASE_PASSWORD,
    }
  },
}
