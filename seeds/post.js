const { Post } = require('../models');

const postData = [
    {
        title: 'This is a post',
        content: 'This is the content of the post',
        userID: 1
    },
    {
        title: 'This is another post',
        content: 'This is the content of the second post',
        userID: 1
    },
    {
        title: 'This is a third post',
        content: 'This is the content of the third post',
        userID: 3
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;