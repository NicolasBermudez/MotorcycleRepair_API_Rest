const User = require("../models/user.model")


exports.allUsers = async(req, res) => {
  try { 
    const allUsers = await User.findAll({
      where:{
        status: true
      }
    })
    res.status(200).json({
    status:'success',
    message:'Find all Users',
    allUsers
  })
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status: 'fail',
      message: 'Internal Server error'
    })
  }
}

exports.user = async(req, res) => {
  try {

    const { user } = req

    res.status(200).json({
    status:'success',
    message:'Find Users successfully',
    user
  })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status: 'fail',
      message: 'Internal Server error'
    })
  }
}

exports.newUser = async(req, res) => {
  try {
    const { name, email, password, status, role } = req.body

    const newUser = await User.create({
      name,
      email: email.toLowerCase(),
      password,
      role,
      status
  })
  
  res.status(200).json({
    status:'success',
    message:'New User',
    newUser
  })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status: 'fail',
      message: 'Internal Server error'
    })
  }
}

exports.updateUser = async(req, res) => {

  try {

    const { user } = req

    const { name, email } = req.body

    const updateUser = await user.update({
      name,
      email: email.toLowerCase()
  })
  
  res.status(200).json({
    status:'success',
    message:'New User',
    updateUser
  })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status: 'fail',
      message: 'Internal Server error'
    })
  }
}

exports.deleteUser = async(req, res) => {

try {

  const { user } = req

  await user.update({status: false})

  res.status(200).json({
    status: 'success',
    message: 'The User has been delete successfully'
  })
  
} catch (error) {
    console.log(error)
    return res.status(500).json({
      status: 'fail',
      message: 'Internal Server error'
    })
  }
}