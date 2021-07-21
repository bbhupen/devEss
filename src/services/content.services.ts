import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Media from '../models/media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private dbPath = '/';

  mediaRef: AngularFireList<Media>;

  constructor(private db: AngularFireDatabase) {
    this.mediaRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Media> {
    return this.mediaRef;
  }

  create(media: Media): any {
    return this.mediaRef.push(media);
  }

  update(key: string, value: any): Promise<void> {
    return this.mediaRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.mediaRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.mediaRef.remove();
  }
}