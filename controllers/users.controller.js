const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');

exports.allUsers = catchAsync(async (req, res, next) => {
  const allUsers = await User.findAll({
    where: {
      status: 'available',
    },
  });
  res.status(200).json({
    status: 'success',
    message: 'Find all Users',
    allUsers,
  });
});

exports.user = catchAsync(async (req, res, next) => {
  const { user } = req;

  res.status(200).json({
    status: 'success',
    message: 'Find Users successfully',
    user,
  });
});

exports.newUser = catchAsync(async (req, res, next) => {
  const { name, email, password, status, role } = req.body;

  const newUser = await User.create({
    name,
    email: email.toLowerCase(),
    password,
    role,
    status,
  });

  res.status(200).json({
    status: 'success',
    message: 'New User',
    newUser,
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const { user } = req;

  const { name, email } = req.body;

  const updateUser = await user.update({
    name,
    email: email.toLowerCase(),
  });

  res.status(200).json({
    status: 'success',
    message: 'Update User',
    updateUser,
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const { user } = req;

  await user.update({ status: 'unavailable' });

  res.status(200).json({
    status: 'success',
    message: 'The User has been delete successfully',
  });
});
