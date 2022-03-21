import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { Styles } from '../style.model';
import { StyleService } from '../style.service';

@Component({
  selector: 'app-add-style',
  templateUrl: './add-style.page.html',
  styleUrls: ['./add-style.page.scss'],
})
export class AddStylePage implements OnInit {

  id!: number;
  nom!: string;
  prix!: number;
  taille!: number;
  lien!: string;
  histoire!: string;
  image!: string;
  statut!: string;
  categorie!: string;
  couleur!: string;
  article!: Styles;

  // styles: Styles[] = [];

  constructor(
    private route: ActivatedRoute, private styleService: StyleService
    // public navCtrl: NavController,
    // private fb: FormBuilder,
    // private styleService: StyleService,
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    const article= {
      id: this.id = Date.now() ,
      nom: this.nom,
      prix: this.prix,
      taille: this.taille,
      lien: this.lien,
      histoire: this.histoire,
      image: this.image,
      complement: {
        statut: this.statut,
        categorie: this.categorie,
        couleur: this.couleur,
      }



    };

    console.log(article);
    this.styleService.addProduit(article);

  }



  // eslint-disable-next-line @typescript-eslint/member-ordering
  // productForm: FormGroup = this.fb.group({
  //   nom: [[], Validators.required],
  //   prix: [[], Validators.required],
  //   taille: [[], Validators.required],
  //   lien: [[], Validators.required],
  //   histoire: [[], Validators.required],
  //   image: [[], Validators.required],
  //   statut: [[], Validators.required],
  //   categorie: [[], Validators.required],
  //   couleur: [[], Validators.required],

  // });

  // addStyle(){
  //   if (this.productForm.valid){
  //     const styles: Styles = {
  //       id: this.productForm.get('id')?.value,
  //       nom: this.productForm.get('nom')?.value,
  //       taille: this.productForm.get('taille')?.value,
  //       prix: this.productForm.get('prix')?.value,
  //       lien: this.productForm.get('lien')?.value,
  //       histoire: this.productForm.get('histoire')?.value,
  //       image: this.productForm.get('image')?.value,
  //       complement: {
  //         statut: this.productForm.get('statut')?.value,
  //         categorie: this.productForm.get('categorie')?.value,
  //         couleur: this.productForm.get('couleur')?.value,
  //       }
  //     };

  //     this.styleService.addStyle(styles);
  //     this.previousState();

  //   }

  // // }
  // previousState() {
  //   window.history.back();
  // }

  // loadAll(){
  //   this.styles= this.styleService.getStyle();
  // }





}
