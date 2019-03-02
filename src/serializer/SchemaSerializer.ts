import { Reflection, Schema } from '@colyseus/schema';
import { Serializer } from './Serializer';

export class SchemaSerializer<T> implements Serializer<T> {
  public id = 'schema';
  private state: T & Schema;

  public reset(newState: T & Schema) {
    this.state = newState;
  }

  public getData() {
    return this.state.encodeAll();
  }

  public hasChanged(newState: Schema) {
    return newState.$changed;
  }

  public getPatches() {
    return this.state.encode();
  }

  public handshake() {
    return Reflection.encode(this.state);
  }
}