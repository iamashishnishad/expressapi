const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");

connectDB();
app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});