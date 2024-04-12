import express from "express"

const app = express();

app.use(express.json());

const pineappleVarietals = [
  {
    name: "Smooth Cayenne",
    fact: "Smooth Cayenne pineapples are the most commonly grown variety for canning.",
  },
  {
    name: "Queen Victoria",
    fact: "Queen Victoria pineapples are known for their exceptionally sweet flavor.",
  },
  {
    name: "Red Spanish",
    fact: "Red Spanish pineapples have a reddish exterior and are often used for decoration.",
  },
  {
    name: "Sugarloaf",
    fact: "Sugarloaf pineapples have a cylindrical shape and are prized for their sweetness.",
  },
  {
    name: "Abacaxi",
    fact: "Abacaxi pineapples are native to Brazil and have a distinct tropical flavor.",
  },
  {
    name: "MD2",
    fact: "MD2 pineapples, also known as Gold pineapples, are renowned for their golden color and sweet taste.",
  },
  {
    name: "Pernambuco",
    fact: "Pernambuco pineapples are grown primarily in Brazil and are known for their intense aroma.",
  },
  {
    name: "Smooth Victoria",
    fact: "Smooth Victoria pineapples are a hybrid variety combining the characteristics of Smooth Cayenne and Queen Victoria.",
  },
  {
    name: "Kona Sugarloaf",
    fact: "Kona Sugarloaf pineapples are grown in Hawaii and are prized for their low acidity and high sugar content.",
  },
  {
    name: "Montufar",
    fact: "Montufar pineapples are a Costa Rican variety known for their juicy flesh and low acidity.",
  },
];

app.get("/", function (request, response) {
  console.log("/ is called");
  response.json("This is the root, you shouldn't be here.");
});

app.get("/random", function (request, response) {
  const random = Math.floor(Math.random() * 1001);
  response.json(random);
});

app.get("/pineapples", function (request, response) {
  response.json(pineappleVarietals);
});

app.post("/add", function (request, response) {
  const a = request.body.num1;
  const b = request.body.num2;
  const sum = a + b;
  response.json(sum);
});

app.listen(7070, function () {
  console.log("App is running on PORT 7070");
});