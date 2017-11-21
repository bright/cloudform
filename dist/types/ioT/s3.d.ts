import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface S3Properties {
    BucketName: Value<string>;
    Key: Value<string>;
    RoleArn: Value<string>;
}
export default class S3 extends ResourceBase {
    constructor(properties: S3Properties, dependsOn?: Value<string>);
}
