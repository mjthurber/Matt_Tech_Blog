const sequelize = require('../config/connection');
const seedpost = require('./post');
const seeduser = require('./user');
const seedcomment = require('./comment');

const seedallseed = async () => {
    await sequelize.sync({ force: true });
    
    await seeduser();
    
    await seedpost();
    
    await seedcomment();
    
    process.exit(0);
    }

seedallseed();