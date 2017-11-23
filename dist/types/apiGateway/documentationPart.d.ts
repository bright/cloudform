import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class Location {
    Method?: Value<string>;
    Name?: Value<string>;
    Path?: Value<string>;
    StatusCode?: Value<string>;
    Type?: Value<string>;
    constructor(properties: Location);
}
export interface DocumentationPartProperties {
    Location: Location;
    Properties: Value<string>;
    RestApiId: Value<string>;
}
export default class DocumentationPart extends ResourceBase {
    constructor(properties: DocumentationPartProperties, dependsOn?: Value<string> | Value<string>[]);
}
