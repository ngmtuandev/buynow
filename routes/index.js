const userRouter = require("./user");
const productRouter = require("./product");
const category = require("./category");
const blogCategory = require("./blogCategory");
const blog = require("./blog");
const brand = require("./brand");
const coupon = require("./coupon");
const initRoute = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/product", productRouter);
  app.use("/api/category", category);
  app.use("/api/blogCategory", blogCategory);
  app.use("/api/blog", blog);
  app.use("/api/brand", brand);
  app.use("/api/coupon", coupon);
};

module.exports = initRoute;
