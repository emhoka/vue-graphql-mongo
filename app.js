const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const { connect } = require("./db");
const usersController = require("./controllers/users");
const schema = require("./schema");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    pretty: true,
    graphiql: true,
  })
);

app.get("/", (_, res) => {
  res.send("Hello API");
});

app.get("/users", usersController.all);

app.get("/users/:id", usersController.findById);

app.post("/users", usersController.create);

app.put("/users/:id", usersController.update);

app.delete("/users/:id", usersController.delete);

const startServer = async () => {
  await connect("mongodb://localhost:27017/api");

  app.listen(3012, function () {
    console.log("API app started");
  });
};

startServer();