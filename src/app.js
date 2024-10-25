const express = require("express");
const dotenv = require("dotenv");

const { connectToDB } = require("./config/database.js");
const authRoutes = require("./routes/users.route.js");
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", authRoutes);

connectToDB();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
