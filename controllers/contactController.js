const getContact = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
};

const createContact = (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        return res.status(400).json({ message: "Please fill in all fields!" });
    }
    res.status(201).json({ message: "Contact created successfully!" });
};

const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact with ID: ${req.params.id}` });
};

const getContactbyid = (req, res) => {
    res.status(200).json({ message: `Get contact by ID: ${req.params.id}` });
};

const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact with ID: ${req.params.id}` });
};

module.exports = { getContact, createContact, updateContact, getContactbyid, deleteContact };