const sequelize = require('../config/connection');
const {User, Post} = require('../models');

const userInfo = require('./userInfo.json');
const postData = require('./postData.json');

const dataBaseSeed = async () => {
    await sequelize.sync({force: true});
    const users = await User.bulkCreate(userInfo, {
        individualHooks: true,
        returning: true,
      });

    for(const post of postData) {
        await Post.create({...post});
    }

    process.exit(0);
}

dataBaseSeed();