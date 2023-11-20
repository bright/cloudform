import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AutoScalingPolicy {
    TargetTrackingConfiguration: TargetTrackingConfiguration;
    EstimatedInstanceWarmup?: Value<number>;
    constructor(properties: AutoScalingPolicy);
}
export declare class InstanceDefinition {
    WeightedCapacity?: Value<string>;
    InstanceType: Value<string>;
    constructor(properties: InstanceDefinition);
}
export declare class LaunchTemplate {
    LaunchTemplateName?: Value<string>;
    Version?: Value<string>;
    LaunchTemplateId?: Value<string>;
    constructor(properties: LaunchTemplate);
}
export declare class TargetTrackingConfiguration {
    TargetValue: Value<number>;
    constructor(properties: TargetTrackingConfiguration);
}
export interface GameServerGroupProperties {
    AutoScalingPolicy?: AutoScalingPolicy;
    MinSize?: Value<number>;
    DeleteOption?: Value<string>;
    BalancingStrategy?: Value<string>;
    GameServerGroupName: Value<string>;
    LaunchTemplate?: LaunchTemplate;
    GameServerProtectionPolicy?: Value<string>;
    VpcSubnets?: List<Value<string>>;
    MaxSize?: Value<number>;
    InstanceDefinitions: List<InstanceDefinition>;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class GameServerGroup extends ResourceBase<GameServerGroupProperties> {
    static AutoScalingPolicy: typeof AutoScalingPolicy;
    static InstanceDefinition: typeof InstanceDefinition;
    static LaunchTemplate: typeof LaunchTemplate;
    static TargetTrackingConfiguration: typeof TargetTrackingConfiguration;
    constructor(properties: GameServerGroupProperties);
}
