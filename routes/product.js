const productController = require("../controllers/productController");
const express = require("express");
const verifyToken = require("../middeware/verifyToken");
const verifyAdmin = require("../middeware/verifyAdmin");
const router = express.Router();

router.post(
  "/create-product",
  [verifyToken, verifyAdmin],
  productController.createProduct
);

router.get("/all-product", productController.getAllProducts);
router.get("/:id", productController.getOneProduct);
router.put("/:id", [verifyToken, verifyAdmin], productController.updateProduct);
router.delete(
  "/:id",
  [verifyToken, verifyAdmin],
  productController.deleteProduct
);

module.exports = router;
