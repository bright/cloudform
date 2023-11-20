import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface GrantProperties {
    Status?: Value<string>;
    Principals?: List<Value<string>>;
    HomeRegion?: Value<string>;
    AllowedOperations?: List<Value<string>>;
    LicenseArn?: Value<string>;
    GrantName?: Value<string>;
}
export default class Grant extends ResourceBase<GrantProperties> {
    constructor(properties?: GrantProperties);
}
