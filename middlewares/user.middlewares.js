const User = require("../models/user.model")


exports.validUserById = async (req, res, next) => {
 
 try {
  const { id } = req.params

  const user = await User.findOne({
    where: {
      id,
      status: true
    }
  })
  if(!user) {
    return res.status(404).json({
      status: 'error',
      message: 'the user is not found'
    })
  }
  req.user = user
  next()
}
catch (error) {
  console.log(error)
  res.satatus(500).json({
    status: 'fail',
    message: 'Internal Server error'
  })
 }
}