// import { countBy } from "lodash";
import Notiflix, {Notify} from "notiflix";

export default class SearchCountry {
    constructor() {
        this.name = ''
    }

    fetchCountries(){
        const URL = `https://restcountries.com/v3.1/name/${this.name}`

        return fetch(URL).then(response => {
            if (!response.ok) {
               Notiflix.Notify.failure ('Oops, there is no country with that name') 
                 }
          return response.json()  
       
    })
    

}

get country(){
    return this.name
}
set country(newCoutry){
    this.name=newCoutry
}
}