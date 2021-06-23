import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class InstanceAssociationOutputLocation {
    S3Location?: S3OutputLocation;
    constructor(properties: InstanceAssociationOutputLocation);
}
export declare class Target {
    Key: Value<string>;
    Values: List<Value<string>>;
    constructor(properties: Target);
}
export declare class S3OutputLocation {
    OutputS3Region?: Value<string>;
    OutputS3BucketName?: Value<string>;
    OutputS3KeyPrefix?: Value<string>;
    constructor(properties: S3OutputLocation);
}
export interface AssociationProperties {
    AssociationName?: Value<string>;
    DocumentVersion?: Value<string>;
    InstanceId?: Value<string>;
    Name: Value<string>;
    Parameters?: {
        [key: string]: {
            [key: string]: any;
        };
    };
    ScheduleExpression?: Value<string>;
    Targets?: List<Target>;
    OutputLocation?: InstanceAssociationOutputLocation;
    AutomationTargetParameterName?: Value<string>;
    MaxErrors?: Value<string>;
    MaxConcurrency?: Value<string>;
    ComplianceSeverity?: Value<string>;
    SyncCompliance?: Value<string>;
    WaitForSuccessTimeoutSeconds?: Value<number>;
    ApplyOnlyAtCronInterval?: Value<boolean>;
    CalendarNames?: List<Value<string>>;
}
export default class Association extends ResourceBase<AssociationProperties> {
    static InstanceAssociationOutputLocation: typeof InstanceAssociationOutputLocation;
    static Target: typeof Target;
    static S3OutputLocation: typeof S3OutputLocation;
    constructor(properties: AssociationProperties);
}
