const Repair = require("../models/repair.model")


exports.validRepairById = async (req, res, next) => {

  try {
    const { id } = req.params
    
    const repair = await Repair.findOne({
      where:{
        id,
        status: 'pending'
      }
    })

    if(!repair) {
      return res.status(404).json({
        status: 'error',
        message: 'the repair is not found'
      })
    }

    req.repair = repair
    next()

  } catch (error) {
    console.log(error)
    res.satatus(500).json({
      status: 'fail',
      message: 'Internal Server error'
    })
  }
}