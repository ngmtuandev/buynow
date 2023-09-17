const userRouter = require("./user");
const productRouter = require("./product");
const category = require("./category");
const blog = require("./blog");
const initRoute = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/product", productRouter);
  app.use("/api/category", category);
  app.use("/api/blog", blog);
};

module.exports = initRoute;
