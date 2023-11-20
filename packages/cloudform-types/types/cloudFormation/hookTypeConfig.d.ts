import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface HookTypeConfigProperties {
    TypeName?: Value<string>;
    Configuration: Value<string>;
    TypeArn?: Value<string>;
    ConfigurationAlias?: Value<string>;
}
export default class HookTypeConfig extends ResourceBase<HookTypeConfigProperties> {
    constructor(properties: HookTypeConfigProperties);
}
