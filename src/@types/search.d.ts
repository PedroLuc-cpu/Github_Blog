import { z } from "zod";

export const SearchPublicationZod_ = z.object({
  publication: z.string(),

  publicationCount: z.number() | z.number(),

  isLoading: z.boolean(),

  resultField: z.string({
    invalid_type_error:"Apenas numeros"
  }).description(),

  handleChangeSearch: z
  .function()
  .args(z.string())
  .returns(z.void)
 })


type TSearchPublication = z.infer<typeof SearchPublicationZod_>