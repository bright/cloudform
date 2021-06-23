import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DocumentRequires {
    Name?: Value<string>;
    Version?: Value<string>;
    constructor(properties: DocumentRequires);
}
export declare class AttachmentsSource {
    Key?: Value<string>;
    Values?: List<Value<string>>;
    Name?: Value<string>;
    constructor(properties: AttachmentsSource);
}
export interface DocumentProperties {
    Content: {
        [key: string]: any;
    };
    Attachments?: List<AttachmentsSource>;
    Name?: Value<string>;
    VersionName?: Value<string>;
    DocumentType?: Value<string>;
    DocumentFormat?: Value<string>;
    TargetType?: Value<string>;
    Tags?: List<ResourceTag>;
    Requires?: List<DocumentRequires>;
}
export default class Document extends ResourceBase<DocumentProperties> {
    static DocumentRequires: typeof DocumentRequires;
    static AttachmentsSource: typeof AttachmentsSource;
    constructor(properties: DocumentProperties);
}
