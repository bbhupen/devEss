import { Component } from "@angular/core";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/database";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from "rxjs";



@Component({
    selector: 'content',
    templateUrl: './content.component.html'
})

export class Content {

    description = 1;
    title = "hua";

}