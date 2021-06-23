import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DecimalParameter {
    Values: List<Value<number>>;
    Name: Value<string>;
    constructor(properties: DecimalParameter);
}
export declare class ResourcePermission {
    Actions: List<Value<string>>;
    Principal: Value<string>;
    constructor(properties: ResourcePermission);
}
export declare class AnalysisSourceTemplate {
    DataSetReferences: List<DataSetReference>;
    Arn: Value<string>;
    constructor(properties: AnalysisSourceTemplate);
}
export declare class Sheet {
    SheetId?: Value<string>;
    Name?: Value<string>;
    constructor(properties: Sheet);
}
export declare class AnalysisSourceEntity {
    SourceTemplate?: AnalysisSourceTemplate;
    constructor(properties: AnalysisSourceEntity);
}
export declare class DataSetReference {
    DataSetArn: Value<string>;
    DataSetPlaceholder: Value<string>;
    constructor(properties: DataSetReference);
}
export declare class DateTimeParameter {
    Values: List<Value<string>>;
    Name: Value<string>;
    constructor(properties: DateTimeParameter);
}
export declare class IntegerParameter {
    Values: List<Value<number>>;
    Name: Value<string>;
    constructor(properties: IntegerParameter);
}
export declare class Parameters {
    StringParameters?: List<StringParameter>;
    DecimalParameters?: List<DecimalParameter>;
    IntegerParameters?: List<IntegerParameter>;
    DateTimeParameters?: List<DateTimeParameter>;
    constructor(properties: Parameters);
}
export declare class StringParameter {
    Values: List<Value<string>>;
    Name: Value<string>;
    constructor(properties: StringParameter);
}
export declare class AnalysisError {
    Type?: Value<string>;
    Message?: Value<string>;
    constructor(properties: AnalysisError);
}
export interface AnalysisProperties {
    AnalysisId: Value<string>;
    AwsAccountId: Value<string>;
    Errors?: List<AnalysisError>;
    Name?: Value<string>;
    Parameters?: Parameters;
    Permissions?: List<ResourcePermission>;
    SourceEntity?: AnalysisSourceEntity;
    Tags?: List<ResourceTag>;
    ThemeArn?: Value<string>;
}
export default class Analysis extends ResourceBase<AnalysisProperties> {
    static DecimalParameter: typeof DecimalParameter;
    static ResourcePermission: typeof ResourcePermission;
    static AnalysisSourceTemplate: typeof AnalysisSourceTemplate;
    static Sheet: typeof Sheet;
    static AnalysisSourceEntity: typeof AnalysisSourceEntity;
    static DataSetReference: typeof DataSetReference;
    static DateTimeParameter: typeof DateTimeParameter;
    static IntegerParameter: typeof IntegerParameter;
    static Parameters: typeof Parameters;
    static StringParameter: typeof StringParameter;
    static AnalysisError: typeof AnalysisError;
    constructor(properties: AnalysisProperties);
}
