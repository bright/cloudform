import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class S3Path {
    Bucket: Value<string>;
    Key: Value<string>;
    constructor(properties: S3Path);
}
export interface FaqProperties {
    IndexId: Value<string>;
    Description?: Value<string>;
    S3Path: S3Path;
    FileFormat?: Value<string>;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Faq extends ResourceBase<FaqProperties> {
    static S3Path: typeof S3Path;
    constructor(properties: FaqProperties);
}
