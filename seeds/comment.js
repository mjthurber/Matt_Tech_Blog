const { Comment } = require('../models')

const commentData = [
    {
        comment: 'This is a comment',
        user_id: 1,
        post_id: 1
    },
    {
        comment: 'This is another comment',
        user_id: 2,
        post_id: 2
    },
    {
        comment: 'This is a third comment',
        user_id: 3,
        post_id: 3
    }
];

const seedComment = () => Comment.bulkCreate(commentData);
console.log(commentData)
module.exports = seedComment;