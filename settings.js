module.exports = {
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL ? 
  process.env.DATABASE_URL :
  'postgres://blog:blog@localhost:5432/blog'
}
