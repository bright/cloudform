import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class ConfigurationId {
    Revision: Value<number>;
    Id: Value<string>;
    constructor(properties: ConfigurationId);
}
export interface ConfigurationAssociationProperties {
    Broker: Value<string>;
    Configuration: ConfigurationId;
}
export default class ConfigurationAssociation extends ResourceBase<ConfigurationAssociationProperties> {
    static ConfigurationId: typeof ConfigurationId;
    constructor(properties: ConfigurationAssociationProperties);
}
