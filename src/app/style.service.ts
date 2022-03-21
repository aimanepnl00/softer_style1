/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Styles } from './style.model';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  // eslint-disable-next-line @typescript-eslint/member-ordering
  styles: Styles [] = [
    {
      id: 1,
      nom: 'Fendi',
      prix: 100,
      taille: 10,
      lien: 'assets/img/fendi1.jpg',
      histoire: 'Fendi est une marque italienne de prêt-à-porter de luxe fondée en 1925 par Adèle et Eduardo Fendi, dont la réputation repose sur son choix de chaussures et de fourrures. Depuis 2001, Fendi appartient à la division « Mode & Maroquinerie » du groupe français LVMH',
      // complement:
      image: 'assets/img/fendi2.jpg',
      complement: {
        statut:'',
        categorie: '',
        couleur: '',
        },


    },

    {
      id: 2,
      nom: 'Gucci',
      prix: 150,
      taille: 10,
      lien: 'assets/img/gucci1.jpg',
      histoire: 'Gucci est une maison italienne spécialisée dans la mode et le luxe dont le siège est situé à Florence en Italie. Gucci crée des collections de sacs-à-main, de prêt-à-porter, de chaussures, daccessoires, de produits cosmétiques, de parfums, et de produits de décoration dintérieur',
      // complement:
      image: 'assets/img/gucci2.jpg',
      complement: {
      statut:'',
      categorie: '',
      couleur: '',

      },



    },

    {
      id: 3,
      nom: 'Dior',
      prix: 200,
      taille: 10,
      lien: 'assets/img/dior1.jpg',
      histoire: 'Christian Dior SE est une holding cotée à la bourse de Paris, qui détient 41,23 % du capital et 56,54 % des droits de vote de la société LVMH SE',
      // complement:
      image: 'assets/img/dior2.jpeg',
      complement: {
        statut:'',
        categorie: '',
        couleur: '',
        },

    },

    {
      id: 4,
      nom: 'Louis Vuitton',
      prix: 250,
      taille: 10,
      lien: 'assets/img/lv1.jpg',
      histoire: 'Louis Vuitton Malletier, souvent appelée simplement Louis Vuitton, est une maison française de maroquinerie de luxe, mais également de prêt-à-porter depuis le début des années 2000, qui a été fondée en 1854 à Paris.',
      // complement:
      image: 'assets/img/lv2.jpg',
      complement: {
        statut:'',
        categorie: '',
        couleur: '',
        },


    },


    {
      id: 5,
      nom: 'Adidas',
      prix: 300,
      taille: 10,
      lien: 'assets/img/adidas1.jpg',
      histoire: 'Adidas est une firme allemande fondée en 1949 par Adolf Dassler, spécialisée dans la fabrication d’articles de sport, basée à Herzogenaurach en Allemagne. Elle est mondialement connue sous l’appellation « la marque aux trois bandes, des trois bandes parallèles qui constituent son logo.',
      // complement:
      image: 'assets/img/adidas2.jpg',
      complement: {
        statut:'',
        categorie: '',
        couleur: '',
        },


    },

    {
      id: 6,
      nom: 'Coco Channel',
      prix: 350,
      taille: 10,
      lien: 'assets/img/channel1.jpg',
      histoire: 'Chanel est une entreprise française productrice de haute couture, ainsi que de prêt-à-porter,  accessoires, parfums et divers produits de luxe. Elle trouve son origine dans la maison de couture qu’avait créée Coco Chanel en 1910, mais résulte du rachat de Chanel par l’entreprise Les Parfums Chanel en 1954',
      // complement:
      image: 'assets/img/channel2.jpeg',
      complement: {
        statut:'',
        categorie: '',
        couleur: '',
        },


    },

    {
      id: 7,
      nom: 'Puma',
      prix: 400,
      taille: 10,
      lien: 'assets/img/puma1.jpg',
      histoire: 'Puma SE est une entreprise allemande spécialisée dans la fabrication d’articles de sport fondée en 1948 par Rudolf Dassler, frère aîné d’Adolf Dassler fondateur d’Adidas, et basée à Herzogenaurach en Bavière.',
      // complement:
      image: 'assets/img/puma2.jpg',
      complement: {
        statut:'',
        categorie: '',
        couleur: '',
        },




    },

    {
      id: 8,
      nom: 'Nike',
      prix: 450,
      taille: 10,
      lien: 'assets/img/nike1.png',
      histoire: 'Nike est une société américaine créée en 1971 par Philip Knight et Bill Bowerman. Basée à Beaverton dans l’Oregon, elle est spécialisée dans la fabrication d’articles de sport. ',
      // complement:
      image: 'assets/img/nike2.jpg',
      complement: {
        statut:'',
        categorie: '',
        couleur: '',
        },


    },



  ];


  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor() { }
  getStyle(): Styles[]{
    return this.styles;
  }

  getStyleById(id: number): Styles |undefined{
    const styles=this.styles.find(value => value.id === id);
    return styles;
  }

  addProduit(book: Styles): void {
    console.log(book);
    // style.id = this.getId();
    this.styles.push(book);
  }


  private getId(): number{
    let idMax=0;
    this.styles.forEach(style => {
      if(style.id && style.id > idMax){
        idMax = style.id;
      }
    });
    return idMax+1;
  }

}
