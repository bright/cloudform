import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class InstanceAssociationOutputLocation {
    S3Location?: S3OutputLocation;
    constructor(properties: InstanceAssociationOutputLocation);
}
export declare class S3OutputLocation {
    OutputS3KeyPrefix?: Value<string>;
    OutputS3Region?: Value<string>;
    OutputS3BucketName?: Value<string>;
    constructor(properties: S3OutputLocation);
}
export declare class Target {
    Values: List<Value<string>>;
    Key: Value<string>;
    constructor(properties: Target);
}
export interface AssociationProperties {
    AssociationName?: Value<string>;
    CalendarNames?: List<Value<string>>;
    ScheduleExpression?: Value<string>;
    MaxErrors?: Value<string>;
    Parameters?: {
        [key: string]: any;
    };
    InstanceId?: Value<string>;
    WaitForSuccessTimeoutSeconds?: Value<number>;
    MaxConcurrency?: Value<string>;
    ComplianceSeverity?: Value<string>;
    Targets?: List<Target>;
    SyncCompliance?: Value<string>;
    OutputLocation?: InstanceAssociationOutputLocation;
    ScheduleOffset?: Value<number>;
    Name: Value<string>;
    ApplyOnlyAtCronInterval?: Value<boolean>;
    DocumentVersion?: Value<string>;
    AutomationTargetParameterName?: Value<string>;
}
export default class Association extends ResourceBase<AssociationProperties> {
    static InstanceAssociationOutputLocation: typeof InstanceAssociationOutputLocation;
    static S3OutputLocation: typeof S3OutputLocation;
    static Target: typeof Target;
    constructor(properties: AssociationProperties);
}
