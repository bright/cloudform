import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface DocumentProperties {
    Content: {
        [key: string]: any;
    };
    DocumentType?: Value<string>;
    Tags?: ResourceTag[];
}
export default class Document extends ResourceBase {
    constructor(properties?: DocumentProperties);
}
