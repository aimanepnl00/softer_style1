import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Styles } from '../style.model';
import { StyleService } from '../style.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  @Input()
  id!: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Liste !: Styles | undefined;

  constructor(  private route: ActivatedRoute, private data: StyleService) { }

  ngOnInit(): void  {

    this.route.paramMap.subscribe (param =>{
      if (param.get('id')){
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.id =+param.get('id')!;
      this.Liste = this.data.getStyleById(this.id);

    }
  });}}


