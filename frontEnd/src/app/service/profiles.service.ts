import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {ProfilePreview} from '../profiles-list/profile-preview'
@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

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
	GetAll():Observable<ProfilePreview[]>{
		if(this.cachedPokemons)
			return of(this.cachedPokemons);
		return (this.http.get('assets/pokedex.json') as Observable<any[]>)
		.pipe(
			map((pokemons) => {
				return pokemons.map((pokemonJson) => {
					let padId = `000${pokemonJson.id}`.slice(-3)
					let pokemon = {
						id: +pokemonJson.id,
						name : pokemonJson.name.english,
						thumbnail : `assets/thumbnails/${padId}.png`
					} as ProfilePreview;
					return pokemon;
				});
			}),
			tap((pokemons) => {
				this.cachedPokemons = pokemons;
			})
		)
	}
	constructor(private http:HttpClient) {

	}
}
