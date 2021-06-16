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
    constructor(public equipmentService: EquipmentServiceService) {}
    ngOnInit() {
        this.equipmentService.getEquipment().subscribe((data) => {
            this.equipment = data;
            console.log(data)
        })
    }
}
