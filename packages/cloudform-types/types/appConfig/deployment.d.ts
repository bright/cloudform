import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Tags {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: Tags);
}
export interface DeploymentProperties {
    DeploymentStrategyId: Value<string>;
    ConfigurationProfileId: Value<string>;
    EnvironmentId: Value<string>;
    Description?: Value<string>;
    ConfigurationVersion: Value<string>;
    ApplicationId: Value<string>;
    Tags?: List<Tags>;
}
export default class Deployment extends ResourceBase<DeploymentProperties> {
    static Tags: typeof Tags;
    constructor(properties: DeploymentProperties);
}
