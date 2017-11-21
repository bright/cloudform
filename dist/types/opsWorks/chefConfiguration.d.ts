import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface ChefConfigurationProperties {
    BerkshelfVersion?: Value<string>;
    ManageBerkshelf?: Value<boolean>;
}
export default class ChefConfiguration extends ResourceBase {
    constructor(properties: ChefConfigurationProperties, dependsOn?: Value<string>);
}
