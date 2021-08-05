import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import Axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor () { }
  
  private team = [] /**Array containing the heros team*/
  heroesCount: number = 0;
  villainsCount: number = 0;

  /**
   * @function getHeroes()
   * @param {number} id Id of the hero
   * Function to get a heroe from the API based on his Id.
   * @returns The heroe whose match the given id, if any.
  */
  getHeroe(id: number) {
    let heroe
    Axios.get(`${environment.HERO_API_URL}/${id}`)
      .then(
        res => heroe = res
      )
      .catch(
        err => console.error(err)
      )
    return heroe;
  }

  /**
   * @function searchHeroe()
   * @param {string} name The name of the hero user's want to search for
   * Function that recieves a hero name and returns all the matching heroes, if any.
   * @returns An array of heroes matching the given name, if any.
  */ 
  searchHeroe(name: string) {
    let heroes
    Axios.get(`${environment.HERO_API_URL}/search/${name}`)
      .then(
        response => heroes = response
      )
      .catch(
        err => console.error()
      )
  }

  /**
   * @function getTeam()
   * @returns {Array} Team - The current team of heroes.
   * Getter that is used to access to the heroes team.
  */
  getTeam():Array<any> {
    return this.team
  }


  /**
   * @function addHeroe
   * @param {number} heroId - Id of the hero that user's want to add to the team.
   * @returns {string} - If either heroes or villains in the team are equal or greater than 3.
   * Function that adds a given heroe to the team.
   * It checks whether the team has 3 or more heroes or villains and add the heroe if both conditions are false.
  */
  addHeroe(heroId: number): string {
    let hero
    Axios.get(`${environment.HERO_API_URL}/${heroId}`)
      .then(
        res => hero = res
      )
      .catch(
        err => console.error(err)
      )
    if (hero.biography.alignment) {
      if (this.heroesCount >= 3) {
        return 'Too much heroes'
      }
      else if (this.villainsCount >= 3) {
        return 'Too much villains'
      }
      else if (hero.biography.alignment == 'good' && this.heroesCount < 3) {
        this.team.push(hero)
        this.heroesCount++
      }
      else if (hero.biography.alignment == 'evil' && this.villainsCount <3) {
        this.team.push(hero)
        this.villainsCount++
      }
    }
  }

  /**
   * @function deleteHeroe 
   * @param {number} heroeId - The id of the hero the user wants to remove from the team.
   * It removes a heroe of the current team based on his id.
  */
  deleteHeroe(heroeId: number): void {
    this.team.filter(hero => hero.id !== heroeId);
  }
}
