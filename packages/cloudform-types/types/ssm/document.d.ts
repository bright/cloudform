import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AttachmentsSource {
    Values?: List<Value<string>>;
    Key?: Value<string>;
    Name?: Value<string>;
    constructor(properties: AttachmentsSource);
}
export declare class DocumentRequires {
    Version?: Value<string>;
    Name?: Value<string>;
    constructor(properties: DocumentRequires);
}
export interface DocumentProperties {
    DocumentFormat?: Value<string>;
    Requires?: List<DocumentRequires>;
    Content: {
        [key: string]: any;
    };
    TargetType?: Value<string>;
    DocumentType?: Value<string>;
    VersionName?: Value<string>;
    UpdateMethod?: Value<string>;
    Attachments?: List<AttachmentsSource>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class Document extends ResourceBase<DocumentProperties> {
    static AttachmentsSource: typeof AttachmentsSource;
    static DocumentRequires: typeof DocumentRequires;
    constructor(properties: DocumentProperties);
}
