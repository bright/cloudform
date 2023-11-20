import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class Location {
    Path?: Value<string>;
    Type?: Value<string>;
    Method?: Value<string>;
    StatusCode?: Value<string>;
    Name?: Value<string>;
    constructor(properties: Location);
}
export interface DocumentationPartProperties {
    RestApiId: Value<string>;
    Properties: Value<string>;
    Location: Location;
}
export default class DocumentationPart extends ResourceBase<DocumentationPartProperties> {
    static Location: typeof Location;
    constructor(properties: DocumentationPartProperties);
}
