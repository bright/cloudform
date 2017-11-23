import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface VpcSettingsProperties {
    SubnetIds: Value<string>[];
    VpcId: Value<string>;
}
export declare class VpcSettings extends ResourceBase {
    constructor(properties: VpcSettingsProperties, dependsOn?: Value<string>);
}
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
