const { Schema, model } = require ('mongoose')
const reactionSchema = require('./Reaction')
const dateFormat = require('../utils/dateFormat')

const thoughtSchema = new Schema (
    {
      thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp),
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
)
// get total count of user's friends!
thoughtSchema.virtual('reactionCount')
.get(function() {
    return this.reactions.length
})

//creates the Thought model using the thoughtSchema.
const Thought = model('Thought', thoughtSchema)

//exports Thought model. 
module.exports = Thought