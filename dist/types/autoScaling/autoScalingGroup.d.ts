import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
import MetricsCollection from './metricsCollection';
import NotificationConfiguration from './notificationConfiguration';
export declare type AvailabilityZones = "us-east-1b" | "us-east-1c" | "us-east-1d" | "us-east-1e" | "us-west-1b" | "us-west-1c" | "us-west-2a" | "us-west-2b" | "us-west-2c" | "ap-northeast-1a" | "ap-northeast-1c" | "ap-northeast-2a" | "ap-northeast-2c" | "ap-south-1a" | "ap-south-1b" | "ap-southeast-1a" | "ap-southeast-1b" | "ap-southeast-2a" | "ap-southeast-2b" | "ap-southeast-2c" | "sa-east-1a" | "sa-east-1b" | "sa-east-1c" | "eu-west-1a" | "eu-west-1b" | "eu-west-1c" | "eu-central-1a" | "eu-central-1b";
export declare type HealthCheckType = "EC2" | "ELB";
export interface AutoScalingGroupProperties {
    AvailabilityZones: Value<AvailabilityZones>;
    Cooldown?: Value<string>;
    DesiredCapacity?: Value<string>;
    HealthCheckGracePeriod?: Value<number>;
    HealthCheckType?: Value<HealthCheckType>;
    InstanceId?: Value<string>;
    LaunchConfigurationName?: Value<string>;
    LoadBalancerNames?: Value<string>[];
    MaxSize: Value<string>;
    MetricsCollection?: MetricsCollection[];
    MinSize: Value<string>;
    NotificationConfiguration?: NotificationConfiguration;
    NotificationConfigurations?: NotificationConfiguration[];
    PlacementGroup?: Value<string>;
    Tags?: ResourceTag[];
    TargetGroupARNs?: Value<string>[];
    TerminationPolicies?: Value<string>[];
    VPCZoneIdentifier?: Value<string>[];
}
export default class AutoScalingGroup extends ResourceBase {
    constructor(properties: AutoScalingGroupProperties, dependsOn?: Value<string>);
}
