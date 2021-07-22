import { Component, OnChanges, OnInit } from "@angular/core";
import { MediaService } from "../../services/content.services"
import { map } from 'rxjs/operators';



@Component({
    selector: 'content',
    templateUrl: './content.component.html'
})

export class Content implements OnInit, OnChanges {

    swag = "Swags";
    data: any;
    description: any;
    title: any;
    link: any;
    imguri: any;

    
    constructor(private mediaservice: MediaService){ }

    ngOnChanges(): void{
        this.retrieveMedia();
    }

    ngOnInit(): void {
        this.retrieveMedia();

    }

    // refreshList(): void {
    //     this.retrieveMedia();
    // }


    retrieveMedia(): void {
        this.mediaservice.getAll().snapshotChanges().pipe(map(changes => 
            changes.map( c => (
                {key: c.payload.key,...c.payload.val()}
            )))).subscribe(data => {
                this.data = data;
                console.log(data)
            })
    }
    

}