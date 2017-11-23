import {Value} from "./dataTypes"

export interface CreationPolicy {
    AutoScalingCreationPolicy?: {
        MinSuccessfulInstancesPercent?: Value<number>
    },
    ResourceSignal?: {
        Count?: Value<number>
        Timeout?: Value<string>
    }
}

export type DeletionPolicy = 'Delete' | 'Retain' | 'Snapshot'

export interface UpdatePolicy {
    AutoScalingReplacingUpdate?: {
        WillReplace?: Value<boolean>
    },
    AutoScalingRollingUpdate?: {
        MaxBatchSize?: Value<number>
        MinInstancesInService?: Value<number>
        MinSuccessfulInstancesPercent?: Value<number>
        PauseTime?: Value<string>
        SuspendProcesses?: Value<string>[],
        WaitOnResourceSignals?: Value<boolean>
    },
    AutoScalingScheduledAction?: {
        IgnoreUnmodifiedGroupSizeProperties?: Value<boolean>
    }
}

export default interface Resource {
    Type: string

    Properties?: { [key: string]: any }
    DependsOn?: Value<string> | Value<string>[]

    Metadata?: { [key: string]: any }

    CreationPolicy?: CreationPolicy
    DeletionPolicy?: DeletionPolicy
    UpdatePolicy?: UpdatePolicy
}

export class ResourceBase {
    constructor(public Type: string, public Properties?: { [key: string]: any }, public DependsOn?: Value<string> | Value<string>[]) {
    }
}

export class ResourceTag {
    constructor(public Key: Value<string>, public Value: Value<string>) {
    }
}