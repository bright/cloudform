import { Value } from "./dataTypes";
export interface CreationPolicy {
    AutoScalingCreationPolicy?: {
        MinSuccessfulInstancesPercent?: Value<number>;
    };
    ResourceSignal?: {
        Count?: Value<number>;
        Timeout?: Value<string>;
    };
}
export declare type DeletionPolicy = 'Delete' | 'Retain' | 'Snapshot';
export interface UpdatePolicy {
    AutoScalingReplacingUpdate?: {
        WillReplace?: Value<boolean>;
    };
    AutoScalingRollingUpdate?: {
        MaxBatchSize?: Value<number>;
        MinInstancesInService?: Value<number>;
        MinSuccessfulInstancesPercent?: Value<number>;
        PauseTime?: Value<string>;
        SuspendProcesses?: Value<string>[];
        WaitOnResourceSignals?: Value<boolean>;
    };
    AutoScalingScheduledAction?: {
        IgnoreUnmodifiedGroupSizeProperties?: Value<boolean>;
    };
}
export default interface Resource {
    Type: string;
    Properties?: {
        [key: string]: any;
    };
    DependsOn?: Value<string> | Value<string>[];
    Metadata?: {
        [key: string]: any;
    };
    CreationPolicy?: CreationPolicy;
    DeletionPolicy?: DeletionPolicy;
    UpdatePolicy?: UpdatePolicy;
}
export declare class ResourceBase {
    Type: string;
    Properties: {
        [key: string]: any;
    };
    DependsOn: Value<string> | Value<string>[];
    constructor(Type: string, Properties?: {
        [key: string]: any;
    }, DependsOn?: Value<string> | Value<string>[]);
}
export declare class ResourceTag {
    Key: Value<string>;
    Value: Value<string>;
    constructor(Key: Value<string>, Value: Value<string>);
}
