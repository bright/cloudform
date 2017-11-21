import { ResourceBase } from '../resource';
import { Value } from '../internal';
import VpcSettings from './vpcSettings';
export interface MicrosoftADProperties {
    CreateAlias?: Value<boolean>;
    EnableSso?: Value<boolean>;
    Name: Value<string>;
    Password: Value<string>;
    ShortName?: Value<string>;
    VpcSettings: VpcSettings;
}
export default class MicrosoftAD extends ResourceBase {
    constructor(properties: MicrosoftADProperties, dependsOn?: Value<string>);
}
