const users = require('../models/usersModel');

const getUsers = async (req, res) => {
  try {
    const user = await users.find();
    if (!user) {
      res.status(404).json({
        success: false,
        message: 'Users all data not found',
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Return all users data',
        data: user,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUsersById = async (req, res) => {
  try {
    const user = await users.findOne({ _id: req.params.id });
    if (!user) {
      res.status(404).json({
        success: false,
        message: 'Users single data not found',
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Return single users data',
        data: user,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createUsers = async (req, res) => {
  try {
    const newUsers = new users({
      name: req.body.name,
      age: req.body.age,
      village: req.body.village,
      job: req.body.job,
      location: req.body.location,
    });
    const nuser = await newUsers.save();
    if (!nuser) {
      res.status(404).json({
        success: false,
        message: 'Users added not successfully',
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Users added successfully',
        data: nuser,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUsers = async (req, res) => {
  try {
    const id = req.params.id;
    const uUser = await users.findByIdAndUpdate(
      { _id: id },
      {
        name: req.body.name,
        age: req.body.age,
        village: req.body.village,
        job: req.body.job,
        location: req.body.location,
      },
      { new: true }
    );
    if (uUser) {
      res.status(200).json({ success: true, message: 'updated successfully', data: uUser });
    } else {
      res.status(404).json({ success: false, message: 'updated not successfully' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteUsers = async (req, res) => {
  try {
    const id = req.params.id;
    const dUser = await users.findByIdAndDelete({ _id: id });
    if (dUser) {
      res.status(200).json({ success: true, message: 'User deleted successfully', data: dUser });
    } else {
      res.status(404).json({ success: false, message: 'user deleted not successfully' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getUsers, getUsersById, createUsers, updateUsers, deleteUsers };
