import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TargetTrackingConfiguration {
    TargetValue: Value<number>;
    constructor(properties: TargetTrackingConfiguration);
}
export declare class LaunchTemplate {
    LaunchTemplateId?: Value<string>;
    LaunchTemplateName?: Value<string>;
    Version?: Value<string>;
    constructor(properties: LaunchTemplate);
}
export declare class AutoScalingPolicy {
    EstimatedInstanceWarmup?: Value<number>;
    TargetTrackingConfiguration: TargetTrackingConfiguration;
    constructor(properties: AutoScalingPolicy);
}
export declare class InstanceDefinition {
    InstanceType: Value<string>;
    WeightedCapacity?: Value<string>;
    constructor(properties: InstanceDefinition);
}
export interface GameServerGroupProperties {
    AutoScalingPolicy?: AutoScalingPolicy;
    BalancingStrategy?: Value<string>;
    DeleteOption?: Value<string>;
    GameServerGroupName: Value<string>;
    GameServerProtectionPolicy?: Value<string>;
    InstanceDefinitions: List<InstanceDefinition>;
    LaunchTemplate: LaunchTemplate;
    MaxSize?: Value<number>;
    MinSize?: Value<number>;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
    VpcSubnets?: List<Value<string>>;
}
export default class GameServerGroup extends ResourceBase<GameServerGroupProperties> {
    static TargetTrackingConfiguration: typeof TargetTrackingConfiguration;
    static LaunchTemplate: typeof LaunchTemplate;
    static AutoScalingPolicy: typeof AutoScalingPolicy;
    static InstanceDefinition: typeof InstanceDefinition;
    constructor(properties: GameServerGroupProperties);
}
