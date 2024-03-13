import express from "express";
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get("/randomNumber", (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.send(randomNumber.toString());
})

app.get("/randomString", (req, res) => {
    const randomSting = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    res.send(randomSting);
})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})