const express = require("express");
const router = express.Router();
const {getContact, createContact, updateContact, getContactbyid, deleteContact} = require("../controllers/contactController");


router.route("/").get(getContact).post(createContact); 
router.route("/:id").put(updateContact).get(getContactbyid).delete(deleteContact);

module.exports = router;