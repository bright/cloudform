import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface VpcSettingsProperties {
    SubnetIds: Value<string>[];
    VpcId: Value<string>;
}
export declare class VpcSettings extends ResourceBase {
    constructor(properties: VpcSettingsProperties, dependsOn?: Value<string>);
}
export interface SimpleADProperties {
    CreateAlias?: Value<boolean>;
    Description?: Value<string>;
    EnableSso?: Value<boolean>;
    Name: Value<string>;
    Password: Value<string>;
    ShortName?: Value<string>;
    Size: Value<string>;
    VpcSettings: VpcSettings;
}
export default class SimpleAD extends ResourceBase {
    constructor(properties: SimpleADProperties, dependsOn?: Value<string>);
}
