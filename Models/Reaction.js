const { Schema, Types} = require ('mongoose')
const dateFormat = require('../utils/dateFormat')

const reactionSchema = new Schema(
    {
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get:timestamp => dateFormat(timestamp)
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
)

module.exports = reactionSchema