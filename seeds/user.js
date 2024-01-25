const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
  {
    username: 'Matt',
    email: 'matt@matt',
    password: 'password123',
  },
  {
    username: 'John',
    email: 'john@john',
    password: 'password123',
  },
  {
    username: 'Jane',
    email: 'jane@jane',
    password: 'password123',
  },
];

const seedUser = async () => {
  // Hash passwords before creating user records
  const hashedUserData = await Promise.all(
    userData.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return {
        ...user,
        password: hashedPassword,
      };
    })
  );

  // Bulk create users with hashed passwords
  await User.bulkCreate(hashedUserData);
};
console.log(userData)
module.exports = seedUser;
