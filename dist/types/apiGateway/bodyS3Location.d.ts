import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface BodyS3LocationProperties {
    Bucket: Value<string>;
    ETag?: Value<string>;
    Key?: Value<string>;
    Version?: Value<string>;
}
export default class BodyS3Location extends ResourceBase {
    constructor(properties: BodyS3LocationProperties, dependsOn?: Value<string>);
}
