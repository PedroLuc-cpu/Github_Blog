import { TSearchPublication } from "../../../@types"
import {SearchContent, SearchInput} from "./styled"





export function SearchPublication({publication, publicationCount, handleChangeSearch, isLoading} : TSearchPublication){

 return (
  <SearchContent>
    <div>   
      <h3>{publication}</h3>
      <span>{`${publicationCount} ${publication}`}</span>
    </div>
    <SearchInput
      disabled={isLoading}
      type="text" 
      name="SearchpublicationName" 
      id="Searchpublication" 
      onChange={(e) => handleChangeSearch(e.target.value)}
      placeholder="Buscar conteúdo"
    />
  </SearchContent>
)

}