const asyncHandler = require("express-async-handler");
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req,res) => {
    res.status(200).json({
        msg : "Get all contacts"
    });
});

//@desc Create New contacts
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req,res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error ("All fields are mandatory");
    }
    res.status(201).json({
        msg : "Create contacts"
    });
});

//@desc Get contacts by id
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req,res) => {
    res.status(200).json({
        msg : `Get contact for ${req.params.id}`
    });
});

//@desc Create New contacts
//@route POST /api/contacts:/id
//@access public
const addContact = asyncHandler(async (req,res) => {
    res.status(200).json({
        msg : `Update contact for ${req.params.id}`
    });
});

//@desc Create New contacts
//@route POST /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req,res) => {
    res.status(200).json({
        msg : `Delete contact for ${req.params.id}`
    });
});


module.exports = {
    getContact, 
    getContacts, 
    createContact, 
    addContact, 
    deleteContact
};
