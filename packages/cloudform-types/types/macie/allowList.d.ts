import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Criteria {
    Regex?: Value<string>;
    S3WordsList?: S3WordsList;
    constructor(properties: Criteria);
}
export declare class S3WordsList {
    BucketName: Value<string>;
    ObjectKey: Value<string>;
    constructor(properties: S3WordsList);
}
export interface AllowListProperties {
    Description?: Value<string>;
    Criteria: Criteria;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class AllowList extends ResourceBase<AllowListProperties> {
    static Criteria: typeof Criteria;
    static S3WordsList: typeof S3WordsList;
    constructor(properties: AllowListProperties);
}
