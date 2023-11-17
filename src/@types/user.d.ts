import {z} from "zod"


export const UserZod_ = z.object({
  login: z.string(),
  id: z.string(),
  avatar_url: z.string(),
  name: z.string(),
  company: z.string(),
  blog: z.string(),
  html_url:z.string(),
  bio: z.string(),
  public_repos: z.string(),
  followers: z.string(),
})


type IUser = z.infer< typeof UserZod_>
