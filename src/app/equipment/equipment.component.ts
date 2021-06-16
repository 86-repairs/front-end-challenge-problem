import {Component} from '@angular/core';
import { EquipmentServiceService } from '../equipment-service.service';

@Component({
    selector: 'app-equipment',
    templateUrl: './equipment.component.html',
    styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent {
    public stuff = 'This is the equipment';
    equipment;
    error;
    constructor(public equipmentService: EquipmentServiceService) {}
    ngOnInit() {
        this.equipmentService.getEquipment().subscribe(
            data => this.equipment = data,
            err => this.error = err.error.message
        )
    }
}
