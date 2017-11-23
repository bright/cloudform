import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface LocationProperties {
    Method?: Value<string>;
    Name?: Value<string>;
    Path?: Value<string>;
    StatusCode?: Value<string>;
    Type?: Value<string>;
}
export declare class Location extends ResourceBase {
    constructor(properties: LocationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface DocumentationPartProperties {
    Location: Location;
    Properties: Value<string>;
    RestApiId: Value<string>;
}
export default class DocumentationPart extends ResourceBase {
    constructor(properties: DocumentationPartProperties, dependsOn?: Value<string> | Value<string>[]);
}
