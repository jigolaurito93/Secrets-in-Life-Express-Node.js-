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
app.use(express.static(__dirname + "/public"))

// Load index.html when GET request is successful
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

// Use routehandler POST request to check if the entered password is correct
// If correct, reroute to the secret.html page
app.post('/check', (req, res) => {
    if (req.body['password'] == "ILoveProgramming"){
        res.sendFile(__dirname + '/public/secret.html');
    } else {
        res.sendFile(__dirname + '/public/index.html')
    }  
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});