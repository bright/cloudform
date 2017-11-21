import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
import OptionConfigurations from './optionConfigurations';
export declare type EngineName = "MySQL" | "mariadb" | "oracle-se1" | "oracle-se" | "oracle-ee" | "sqlserver-ee" | "sqlserver-se" | "sqlserver-ex" | "sqlserver-web" | "postgres" | "aurora" | "*";
export interface OptionGroupProperties {
    EngineName: Value<EngineName>;
    MajorEngineVersion: Value<string>;
    OptionGroupDescription: Value<string>;
    OptionConfigurations: OptionConfigurations;
    Tags?: ResourceTag[];
}
export default class OptionGroup extends ResourceBase {
    constructor(properties: OptionGroupProperties, dependsOn?: Value<string>);
}
