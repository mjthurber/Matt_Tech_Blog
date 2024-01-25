const { Comment } = require('../models')

const commentData = [
    {
        comment: 'This is a comment',
        userID: 1,
        postID: 1
    },
    {
        comment: 'This is another comment',
        userID: 2,
        postID: 2
    },
    {
        comment: 'This is a third comment',
        userID: 3,
        postID: 3
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;