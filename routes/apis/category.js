const router = require("express").Router();
const categoryController = require("../../controllers/category.js");
const verifyMiddleware = require('../../middlewares/verify.js')
// GET ALL CAT

router.get('/categories', categoryController.getAllCategory);


router.post("/category", verifyMiddleware.verifyUser, verifyMiddleware.verifyWriter,categoryController.createCategory);


router.post("/category/remove", verifyMiddleware.verifyUser, verifyMiddleware.verifyWriter,categoryController.deleteCategory);

// //////////////////////////////////////////////////////////////

module.exports = router;