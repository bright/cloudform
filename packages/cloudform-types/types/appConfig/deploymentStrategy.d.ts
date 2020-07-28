import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Tags {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: Tags);
}
export interface DeploymentStrategyProperties {
    ReplicateTo: Value<string>;
    GrowthType?: Value<string>;
    Description?: Value<string>;
    DeploymentDurationInMinutes: Value<number>;
    GrowthFactor: Value<number>;
    FinalBakeTimeInMinutes?: Value<number>;
    Tags?: List<Tags>;
    Name: Value<string>;
}
export default class DeploymentStrategy extends ResourceBase<DeploymentStrategyProperties> {
    static Tags: typeof Tags;
    constructor(properties: DeploymentStrategyProperties);
}
