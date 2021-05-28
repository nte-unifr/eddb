import Apiarist from "~/repositories/Apiarist.js"

export default async (ctx, inject) => {
  const project = ctx.$config.project
  const config = await ctx.$content(project).fetch()
  inject('apiarist', Apiarist(config))
}