const errorHandlerMiddleWare = (err, req, res, next) => {
  res.status().json({ msg: `sometjing get wront try again latter` })
}
module.exports = errorHandlerMiddleWare
