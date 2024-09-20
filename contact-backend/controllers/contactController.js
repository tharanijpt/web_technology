//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req,res) => {
    res.status(200).json({
        msg : "Get all contacts"
    });
}

//@desc Create New contacts
//@route POST /api/contacts
//@access public
const createContact = (req,res) => {
    console.log(req.body);
    res.status(201).json({
        msg : "Create contacts"
    });
}

//@desc Get contacts by id
//@route GET /api/contacts/:id
//@access public
const getContact = (req,res) => {
    res.status(200).json({
        msg : `Get contact for ${req.params.id}`
    });
}

//@desc Create New contacts
//@route POST /api/contacts:/id
//@access public
const addContact = (req,res) => {
    res.status(200).json({
        msg : `Update contact for ${req.params.id}`
    });
}

//@desc Create New contacts
//@route POST /api/contacts/:id
//@access public
const deleteContact = (req,res) => {
    res.status(200).json({
        msg : `Delete contact for ${req.params.id}`
    });
}


module.exports = {
    getContact, 
    getContacts, 
    createContact, 
    addContact, 
    deleteContact
};
