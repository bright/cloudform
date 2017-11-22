import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface AccessKeyProperties {
    Serial?: Value<number>;
    Status?: Value<string>;
    UserName: Value<string>;
}
export default class AccessKey extends ResourceBase {
    constructor(properties: AccessKeyProperties, dependsOn?: Value<string>);
}
