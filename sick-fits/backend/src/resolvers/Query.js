const { forwardTo } = require('prisma-binding')

/* If the query is exactly the same on prisma as it will be here for graphql then you can just
forward it from prisma */

const Query = {
  items: forwardTo('db'),
}

/*
// Above is the same as this query
const Query = {
  async items(parent, args, context, info) {
    const items = await context.db.query.items() //db calls go here regardless of what you're using on the backend
    return items
  },
}
*/

module.exports = Query
