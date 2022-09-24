import express from "express";
import axios from "axios";

const app = express();
const port = 5454;
const privateKey = "verysecurekeyyes123lmao";

app.use(express.json());
app.post('/apiproxy', (req, res) => {
    console.log(req);
    try {
        if(req.body !== undefined && req.body['key'] === privateKey) {
            axios
            .get(req.body.url, req.body.parameters)
            .then(response => res.send({data: response.data, headers: response.headers}))
            .catch(ex => {
                console.log(ex);
                res.status(500);
                res.send(ex)
            });
        }
        else {
            console.log("Unauthorized request");
            res.status(401);
            res.send("Unauthorized request");
        }
    }
    catch(ex) {
        console.log(ex);
        res.status(500);
        res.send(ex);
    }
})

app.listen(port, () => {
  console.log(`Api Proxy listening on port ${port}`)
})