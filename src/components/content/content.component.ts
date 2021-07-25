import { Component, OnChanges, OnInit } from "@angular/core";
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { FormControl } from "@angular/forms";

@Component({
    selector: 'content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})

export class Content{

    data: Observable<any[]>;
    cats: Observable<any[]>;
    selected: string = '';

    category = "Swags";

    select(event: any){
        this.category = event.target.value
        console.log(this.category)
        this.data = this.db.list(this.category).valueChanges();
    }
    
    constructor(public db: AngularFireDatabase){ 
        
        this.data = db.list(this.category).valueChanges();
        this.cats = db.list('/').valueChanges();
        
    }
    

}