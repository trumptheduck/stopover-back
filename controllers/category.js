const Category = require("../models/category.js")

exports.getAllCategory = async (req,res) => {
  try {
    var allCategory = await Category.find()
    return res.status(200).json(allCategory);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

exports.createCategory = async (req, res) => {
  try {
    let categoryName = req.body.name;
    const category = new Category({
      name: categoryName,
    })
    const createdCategory = await category.save();
    return res.status(200).json(createdCategory);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
  
exports.deleteCategory = async (req, res) => {
  try {
    let categoryId = req.body.category._id
    var deletedCategory = await Category.findByIdAndRemove(categoryId);
    return res.status(200).json(deletedCategory);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
