import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DocumentProperties {
    Content: {
        [key: string]: any;
    };
    DocumentType?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Document extends ResourceBase<DocumentProperties> {
    constructor(properties: DocumentProperties);
}
