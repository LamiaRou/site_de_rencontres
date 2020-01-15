import { Component, OnInit } from '@angular/core';
import {ProfilesService} from '../service/profiles.service';
import {ProfilePreview} from './profile-preview'
@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfilesListComponent implements OnInit {
selectedPokemons = {};
	pokemons:any[];	
	
	Select(selectedPokemon:ProfilePreview){
		this.pokemonService.togglePokemonSelected(selectedPokemon);
	}
	constructor(private pokemonService:ProfilesService) { }
	
	ngOnInit() {

		console.log('init');
		this.pokemonService.getAll().subscribe(
		products => {
			this.pokemons = products;
			console.log(this.pokemons)

		},
		error => console.log(error)
		);

		this.pokemonService.selectedPokemons$.subscribe((selectedPokemons) => {
			this.selectedPokemons = selectedPokemons.reduce((acc, current) => {
				acc[current] = true;
				return acc;
			}, {});
			console.log(this.selectedPokemons);
		})
	}

}
