import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Location {
    CidrList: List<Value<string>>;
    LocationName: Value<string>;
    constructor(properties: Location);
}
export interface CidrCollectionProperties {
    Locations?: List<Location>;
    Name: Value<string>;
}
export default class CidrCollection extends ResourceBase<CidrCollectionProperties> {
    static Location: typeof Location;
    constructor(properties: CidrCollectionProperties);
}
