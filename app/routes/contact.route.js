const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();
router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.findAllFavorite);

router.route("/favotrite")
    .get(contacts.findAllFavorite);

router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);

module.exports = router;