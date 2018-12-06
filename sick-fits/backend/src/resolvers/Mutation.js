const Mutations = {
  async createItem(parent, args, context, info) {
    // where you interface with Prisma (all method available in prisma.graphql)
    // access via context!
    const item = await context.db.mutation.createItem(
      // createItem is a method IN you prisma.graphql file
      {
        data: {
          ...args,
        },
      },
      info
    )
    return item
  },
}

module.exports = Mutations
