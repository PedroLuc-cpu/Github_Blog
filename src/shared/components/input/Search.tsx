import {SearchContent, SearchInput} from "./styled"




type TSearchPublication = {
 publication: string;
 publicationCount: number | string
 isLoading: boolean
 handleChangeSearch: () => void;
}

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
      onChange={() => handleChangeSearch()}
      placeholder="Buscar conteúdo"
    />
  </SearchContent>
)

}