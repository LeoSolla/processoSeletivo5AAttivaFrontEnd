import { MarvelService } from './../../shared/services/marvel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  heroes
  heroesAux
  isAscendic = true
  p
  descriptionHero = 'Descrição do Personagem Lorem ipsum dolor sit amet, consectetur'

  constructor(private marvelService:MarvelService) { }

  ngOnInit(): void {

  this.marvelService.getHeroes()
    .subscribe(
      res => {
        this.heroesAux = res.data.results;
        this.heroes = [...res.data.results]
      },
      err => {
        console.log(err);
      }
    )
  }

  ascendic(){
    this.isAscendic = false;
     this.heroes = this.heroes.sort((n1,n2) => {
        if (n1.name < n2.name) {
            return 1;
        }
        if (n1.name > n2.name) {
            return -1;
        }
        return 0;
    });
  }

  descendic(){
    this.isAscendic = true
    this.heroes = this.heroes.sort((n1,n2) => {
        if (n1.name > n2.name) {
            return 1;
        }
        if (n1.name < n2.name) {
            return -1;
        }
        return 0;
    });
  }

  send(){
    this.isAscendic?this.ascendic():this.descendic();
  }

  onChange(event) {
    this.heroes = this.heroesAux.filter((item) => {
      return item.name.toLowerCase().includes(event.toLowerCase()) && item;
    });
  }
}
