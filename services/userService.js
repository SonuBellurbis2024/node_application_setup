const User = require('../models/User');

const getUsers = async () => {
    return await User.find();
};

const createUsers = async (data)=>{
      let createData ={};
     

    return await User.create()
}

module.exports = { getUsers };
