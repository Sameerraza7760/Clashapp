import express from "express";
import dotenv from "dotenv";
// Configure dotenv to load environment variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 7000;
app.use(express.json());
app.get("/", (req, res) => {
    return res.send("Hey, it's working...");
});
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
