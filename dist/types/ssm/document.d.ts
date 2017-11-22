import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface DocumentProperties {
    Content: any;
    DocumentType?: Value<string>;
}
export default class Document extends ResourceBase {
    constructor(properties: DocumentProperties, dependsOn?: Value<string>);
}
