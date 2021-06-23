import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface GrantProperties {
    GrantName?: Value<string>;
    LicenseArn?: Value<string>;
    HomeRegion?: Value<string>;
    AllowedOperations?: List<Value<string>>;
    Principals?: List<Value<string>>;
    Status?: Value<string>;
}
export default class Grant extends ResourceBase<GrantProperties> {
    constructor(properties?: GrantProperties);
}
