import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {ProfilePreview} from '../profiles-list/profile-preview'
@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
	products: any[] = null;
	getAll(): Observable<any[]> {
		if (this.products) {
		  return of(this.products);
		}
		return (this.http.get('http://localhost:3000/auth/getProfiles/') as Observable<any[]>)
		  .pipe(
			map((products) => {
			  return products.map((profileJson) => {
				return {
				  id: profileJson.id,
				  fname: profileJson.fname,
				  lname: profileJson.lname,
				  image:profileJson.image
				};
			  });
			}), tap((products) => {
			  this.products = products;
			  console.log(products);
			})
		  );
	  }
	selectedPokemons = new BehaviorSubject<number[]>([]);
	selectedPokemons$ = this.selectedPokemons.asObservable();

	togglePokemonSelected(pokemonPreview:ProfilePreview){
		let newSelectedPokemons = this.selectedPokemons.value.filter((alreadySelectedPokemon) => {
			return alreadySelectedPokemon != pokemonPreview.id;
		});
		if(newSelectedPokemons.length == this.selectedPokemons.value.length){
			newSelectedPokemons = [...newSelectedPokemons, pokemonPreview.id]; 	
		}
		this.selectedPokemons.next(newSelectedPokemons);
	}

	cachedPokemons:ProfilePreview[] = null;
	
	constructor(private http:HttpClient) {

	}
}
