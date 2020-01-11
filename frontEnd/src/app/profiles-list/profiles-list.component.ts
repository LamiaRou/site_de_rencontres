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
	pokemons:ProfilePreview[];	
	
	Select(selectedPokemon:ProfilePreview){
		this.pokemonService.togglePokemonSelected(selectedPokemon);
	}
	constructor(private pokemonService:ProfilesService) { }
	
	ngOnInit() {
		this.pokemonService.GetAll().subscribe((pokemons) => {
			this.pokemons = pokemons;
		})
		this.pokemonService.selectedPokemons$.subscribe((selectedPokemons) => {
			this.selectedPokemons = selectedPokemons.reduce((acc, current) => {
				acc[current] = true;
				return acc;
			}, {});
			console.log(this.selectedPokemons);
		})
	}

}
