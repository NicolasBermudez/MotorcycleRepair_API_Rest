const Repair = require('../models/repair.model');
const catchAsync = require('../utils/catchAsync');

exports.validRepairById = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending',
    },
  });

  if (!repair) {
    return next(new AppError('User not found', 404));
  }

  req.repair = repair;
  next();
});
