import { Injectable } from '@angular/core';
import { Team } from '@app/models/team.interface';
import { environment } from '@env/environment';
import Axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor () { }
  
  private team:Team = {  /**Array containing the heros team*/
    stats: {
      strength: 0,
      intelligence: 0,
      speed: 0,
      power: 0,
      combat: 0,
      durability: 0,
      avgWeight: 0,
      avgHeight: 0,
    },
    members: [],
  } 
    heroesCount: number = 0;
    villainsCount: number = 0;

  /**
   * @function getHeroes()
   * @param {number} id Id of the hero
   * Function to get a heroe from the API based on his Id.
   * @returns The heroe whose match the given id, if any.
  */
  getHeroe(id: number):Promise<any> {
      return Axios({
        url: `${environment.HERO_API_URL}/${id}`,
        method: 'get',
      })
  }

  /**
   * @function searchHeroe()
   * @param {string} name The name of the hero user's want to search for
   * Function that recieves a hero name and returns all the matching heroes, if any.
   * @returns An array of heroes matching the given name, if any.
  */ 
  searchHeroe(name: string) {
    return Axios({
      url: `${environment.HERO_API_URL}/search/${name}`,
      method: 'get'
    })
  }

  /**
   * @function getTeam()
   * @returns {Array} Team - The current team of heroes.
   * Getter that is used to access to the heroes team.
  */
  getTeam():Team {
    return this.team
  }


  /**
   * @function addHeroe
   * @param {number} heroId - Id of the hero that user's want to add to the team.
   * @returns {string} - If either heroes or villains in the team are equal or greater than 3.
   * Function that adds a given heroe to the team.
   * It checks whether the team has 3 or more heroes or villains and add the heroe if both conditions are false.
  */
  addHeroe(hero:any): string {
    if (hero.biography.alignment) {
      if (this.heroesCount >= 3) {
        return 'Too much heroes'
      }
      else if (this.villainsCount >= 3) {
        return 'Too much villains'
      }
      else if (hero.biography.alignment == 'good' && this.heroesCount < 3) {
        this.team.members.push(hero)
        this.calcStats(hero)
        this.heroesCount++
      }
      else if (hero.biography.alignment == 'bad' && this.villainsCount <3) {
        this.team.members.push(hero)
        this.calcStats(hero)
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
    this.team.members.filter(hero => hero.id !== heroeId);
  }


  /**
   * @function calcStats
   * @param hero - The hero that has been added to the team
   * This function calculates the new values of the stats of the team.
  */
  calcStats(hero:any): void {
    let team = this.getTeam()
    let index1 = hero.appearance.height[1].indexOf("")
    let heroheight = parseInt(hero.appearance.height[1].substring(0, index1))
    let index2 = hero.appearance.weight[1].indexOf("")
    let heroweight = parseInt(hero.appearance.weight[1].substring(0, index2))
    team.stats.combat += parseInt(hero.powerstats.combat)
    team.stats.durability += parseInt(hero.powerstats.durability)
    team.stats.intelligence += parseInt(hero.powerstats.intelligence)
    team.stats.power += parseInt(hero.powerstats.power)
    team.stats.speed += parseInt(hero.powerstats.speed)
    team.stats.strength += parseInt(hero.powerstats.strength)
    if (team.stats.avgHeight != 0) {
      team.stats.avgHeight = (heroheight + team.stats.avgHeight) / 2
    }
    else {
      team.stats.avgHeight = heroheight
    }
    if (team.stats.avgWeight != 0) {
      team.stats.avgWeight = (heroheight + team.stats.avgWeight) / 2
    }
    else {
      team.stats.avgWeight = heroweight
    }

    this.team = team
  }
}
