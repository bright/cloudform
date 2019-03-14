import { List, Value } from "./dataTypes";
export interface CreationPolicy {
    AutoScalingCreationPolicy?: {
        MinSuccessfulInstancesPercent?: Value<number>;
    };
    ResourceSignal?: {
        Count?: Value<number>;
        Timeout?: Value<string>;
    };
}
export declare enum DeletionPolicy {
    Delete = "Delete",
    Retain = "Retain",
    Snapshot = "Snapshot"
}
export interface UpdatePolicy {
    AutoScalingReplacingUpdate?: {
        WillReplace?: Value<boolean>;
    };
    AutoScalingRollingUpdate?: {
        MaxBatchSize?: Value<number>;
        MinInstancesInService?: Value<number>;
        MinSuccessfulInstancesPercent?: Value<number>;
        PauseTime?: Value<string>;
        SuspendProcesses?: List<string>;
        WaitOnResourceSignals?: Value<boolean>;
    };
    AutoScalingScheduledAction?: {
        IgnoreUnmodifiedGroupSizeProperties?: Value<boolean>;
    };
}
export default interface Resource {
    Type: string;
    DependsOn?: Value<string> | List<string>;
    Properties?: {
        [key: string]: any;
    };
    Metadata?: {
        [key: string]: any;
    };
    CreationPolicy?: CreationPolicy;
    DeletionPolicy?: DeletionPolicy;
    UpdatePolicy?: UpdatePolicy;
    Condition?: Value<string>;
}
export declare abstract class ResourceBase<TProperties extends object = {
    [key: string]: any;
}> implements Resource {
    Type: string;
    DependsOn?: Value<string> | List<string>;
    Properties: TProperties;
    Metadata?: {
        [key: string]: any;
    };
    CreationPolicy?: CreationPolicy;
    DeletionPolicy?: DeletionPolicy;
    UpdatePolicy?: UpdatePolicy;
    Condition?: Value<string>;
    protected constructor(type: string, properties: TProperties);
    dependsOn(dependencies: Value<string> | List<string>): this;
    metadata(metadata: {
        [key: string]: any;
    }): this;
    creationPolicy(policy: CreationPolicy): this;
    deletionPolicy(policy: DeletionPolicy): this;
    updatePolicy(policy: UpdatePolicy): this;
    condition(condition: Value<string>): this;
}
export declare class ResourceTag {
    Key: Value<string>;
    Value: Value<string>;
    constructor(Key: Value<string>, Value: Value<string>);
}
