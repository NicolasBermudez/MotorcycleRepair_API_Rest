const Repair = require("../models/repair.model")

exports.allMotorcyclePending = async (req, res) => {

 try {
  
  const allMotorcycle = await Repair.findAll({
    where:{
      status: 'pending'
    }
  })
   res.status(200).json({
    status: 'success',
    message: 'Find all Users',
    allMotorcycle
  })
 
 } catch (error) {
  console.log(error)
  return res.status(500).json({
    status: 'fail',
    message: 'Internal Server error'
  })
  
}
}
exports.findMotorcyclePending = async (req, res) => {
   try {
    
    const { repair } = req

    res.status(200).json({
      status:'success',
      message: 'Find Repair successfully',
      repair
    })

   } catch (error) {
    console.log(error)
    return res.status(500).json({
      status: 'fail',
      message: 'Internal Server error'
    })
   }
}

exports.newMotorcycleRepair = async (req, res) => {
  try {
    const {date, userId, status} = req.body
  
  const newMotorcycle = await Repair.create({
    date,
    status,
    userId
  })

  res.status(200).json({
    status:'success',
    message:'New motorcycle',
    newMotorcycle
  })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status: 'fail',
      message: 'Internal Server error'
    })
  }
  
}

exports.statusMotorcycle = async (req, res) => {
  try {
    
    const { repair } = req

    const { status } = req.body

    await repair.update({ status })

    res.status(200).json({
      status: 'success',
      message: 'status actualized',
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status: 'fail',
      message: 'Internal Server error'
    })
  }
 
}

exports.cancelRepair = async (req, res) => {

  try {
    
    const { repair }  = req

    await repair.update({status: 'cancelled'})

    res.status(200).json({
      status: 'success',
      message: 'repair cancelled'
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status: 'fail',
      message: 'Internal Server error'
    })
  }
}