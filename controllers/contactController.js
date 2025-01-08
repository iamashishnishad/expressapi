const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});



const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;

    // Check if all fields are provided
    if (!name || !email || !phone) {
        return res.status(400).json({ message: "Please fill in all fields!" });
    }

    // Create the contact
    const contact = await Contact.create({ name, email, phone });

    // Return the created contact with a success status
    res.status(201).json(contact);
});

const updateContact = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Update contact with ID: ${req.params.id}` });
});

const getContactbyid = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Get contact by ID: ${req.params.id}` });
});

const deleteContact = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Delete contact with ID: ${req.params.id}` });
});

module.exports = { getContact, createContact, updateContact, getContactbyid, deleteContact };