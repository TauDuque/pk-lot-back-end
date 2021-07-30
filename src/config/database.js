module.exports = {
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: "3306",
  database: "heroku_78e4989f6759e87",
  define: {
    timestamps: false,
    underscored: true,
  },
};
