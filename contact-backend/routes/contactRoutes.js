// const { request } = require("express");
const express = require("express");
const router = express.Router();
const  { getContacts } = require("../controllers/contactController");
const  { createContact } = require("../controllers/contactController");
const  { getContact } = require("../controllers/contactController");
const  { addContact } = require("../controllers/contactController");
const  { deleteContact } = require("../controllers/contactController");


// router.route("/").get(getContacts);

// router.route("/").post(createContact);

// router.route("/:id").get(getContact);

// router.route("/:id").put(addContact);

// router.route("/:id").delete(deleteContact);

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(addContact).delete(deleteContact);

module.exports = router;