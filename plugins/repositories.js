import Repository from 'repositories/Repository'

export default async (ctx, inject) => {
  const project = ctx.$config.project
  const config = await ctx.$content(project).fetch()
  inject('repositories', Repository(ctx.$http, config))
}