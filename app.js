const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const response = Array.from({ length: 50 }, (_, i) => 1 + i).map(
    (e) => `<p>${e} ${e % 2 === 0 ? "Soy Par" : "Soy Impar"}!</p>`
  );
  res.send(`${response.join("")}`);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
