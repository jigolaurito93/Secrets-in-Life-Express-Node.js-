//The password is ILoveProgramming

// Import necessary packages and middleware
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Load index.html when get request is successful
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});