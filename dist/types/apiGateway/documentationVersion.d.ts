import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface DocumentationVersionProperties {
    Description?: Value<string>;
    DocumentationVersion: Value<string>;
    RestApiId: Value<string>;
}
export default class DocumentationVersion extends ResourceBase {
    constructor(properties: DocumentationVersionProperties, dependsOn?: Value<string>);
}
