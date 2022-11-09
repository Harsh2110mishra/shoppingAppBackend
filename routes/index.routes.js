const router = require("express").Router();
const { contact, testing } = require("../controllers");

router.post("/contact", contact);
router.get("/", testing);

module.exports = router;
