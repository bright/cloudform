import { ResourceBase } from '../resource';
import { Value } from '../internal';
import StorageLocation from './storageLocation';
export interface BuildProperties {
    Name?: Value<string>;
    StorageLocation?: StorageLocation;
    Version?: Value<string>;
}
export default class Build extends ResourceBase {
    constructor(properties: BuildProperties, dependsOn?: Value<string>);
}
