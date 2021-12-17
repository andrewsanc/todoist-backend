const { CustomerAPIError } = require("../errors/error-handler");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomerAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res.status(500).json({ msg: `Something went wrong. Try again.` });
};

module.exports = errorHandlerMiddleware;
