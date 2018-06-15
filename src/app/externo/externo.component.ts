import { Component, OnInit } from '@angular/core';
import { PeticionesServiceService } from '../services/peticiones-service.service';

@Component({
	selector: 'app-externo',
	templateUrl: './externo.component.html',
	styleUrls: [ './externo.component.css' ],
	providers: [ PeticionesServiceService ],
})
export class ExternoComponent implements OnInit {
	public response: any = 'no';
	public img = '';

	constructor(private _peticionesService: PeticionesServiceService) {}

	ngOnInit() {
		this._peticionesService.getData().subscribe(
			(result) => {
				this.response = result.answer;
				this.img = result.image;

				console.log(result.image);
				console.log(this.response);
			},
			(error) => {
				console.log(<any>error);
			},
		);
	}
}
