const { post } = require('../models');

const postData = [
    {
        title: 'This is a post',
        content: 'This is the content of the post',
        user_id: 1
    },
    {
        title: 'This is another post',
        content: 'This is the content of the second post',
        user_id: 1
    },
    {
        title: 'This is a third post',
        content: 'This is the content of the third post',
        user_id: 3
    }
];