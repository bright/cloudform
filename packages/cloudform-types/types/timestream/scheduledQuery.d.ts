import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DimensionMapping {
    DimensionValueType: Value<string>;
    Name: Value<string>;
    constructor(properties: DimensionMapping);
}
export declare class ErrorReportConfiguration {
    S3Configuration: S3Configuration;
    constructor(properties: ErrorReportConfiguration);
}
export declare class MixedMeasureMapping {
    MeasureName?: Value<string>;
    SourceColumn?: Value<string>;
    TargetMeasureName?: Value<string>;
    MeasureValueType: Value<string>;
    MultiMeasureAttributeMappings?: List<MultiMeasureAttributeMapping>;
    constructor(properties: MixedMeasureMapping);
}
export declare class MultiMeasureAttributeMapping {
    SourceColumn: Value<string>;
    TargetMultiMeasureAttributeName?: Value<string>;
    MeasureValueType: Value<string>;
    constructor(properties: MultiMeasureAttributeMapping);
}
export declare class MultiMeasureMappings {
    TargetMultiMeasureName?: Value<string>;
    MultiMeasureAttributeMappings: List<MultiMeasureAttributeMapping>;
    constructor(properties: MultiMeasureMappings);
}
export declare class NotificationConfiguration {
    SnsConfiguration: SnsConfiguration;
    constructor(properties: NotificationConfiguration);
}
export declare class S3Configuration {
    BucketName: Value<string>;
    ObjectKeyPrefix?: Value<string>;
    EncryptionOption?: Value<string>;
    constructor(properties: S3Configuration);
}
export declare class ScheduleConfiguration {
    ScheduleExpression: Value<string>;
    constructor(properties: ScheduleConfiguration);
}
export declare class SnsConfiguration {
    TopicArn: Value<string>;
    constructor(properties: SnsConfiguration);
}
export declare class TargetConfiguration {
    TimestreamConfiguration: TimestreamConfiguration;
    constructor(properties: TargetConfiguration);
}
export declare class TimestreamConfiguration {
    TimeColumn: Value<string>;
    TableName: Value<string>;
    DimensionMappings: List<DimensionMapping>;
    MixedMeasureMappings?: List<MixedMeasureMapping>;
    MeasureNameColumn?: Value<string>;
    DatabaseName: Value<string>;
    MultiMeasureMappings?: MultiMeasureMappings;
    constructor(properties: TimestreamConfiguration);
}
export interface ScheduledQueryProperties {
    ScheduledQueryExecutionRoleArn: Value<string>;
    ErrorReportConfiguration: ErrorReportConfiguration;
    ScheduleConfiguration: ScheduleConfiguration;
    TargetConfiguration?: TargetConfiguration;
    KmsKeyId?: Value<string>;
    QueryString: Value<string>;
    NotificationConfiguration: NotificationConfiguration;
    ScheduledQueryName?: Value<string>;
    ClientToken?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class ScheduledQuery extends ResourceBase<ScheduledQueryProperties> {
    static DimensionMapping: typeof DimensionMapping;
    static ErrorReportConfiguration: typeof ErrorReportConfiguration;
    static MixedMeasureMapping: typeof MixedMeasureMapping;
    static MultiMeasureAttributeMapping: typeof MultiMeasureAttributeMapping;
    static MultiMeasureMappings: typeof MultiMeasureMappings;
    static NotificationConfiguration: typeof NotificationConfiguration;
    static S3Configuration: typeof S3Configuration;
    static ScheduleConfiguration: typeof ScheduleConfiguration;
    static SnsConfiguration: typeof SnsConfiguration;
    static TargetConfiguration: typeof TargetConfiguration;
    static TimestreamConfiguration: typeof TimestreamConfiguration;
    constructor(properties: ScheduledQueryProperties);
}
