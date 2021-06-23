import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SheetControlsOption {
    VisibilityState?: Value<string>;
    constructor(properties: SheetControlsOption);
}
export declare class ResourcePermission {
    Actions: List<Value<string>>;
    Principal: Value<string>;
    constructor(properties: ResourcePermission);
}
export declare class DashboardSourceEntity {
    SourceTemplate?: DashboardSourceTemplate;
    constructor(properties: DashboardSourceEntity);
}
export declare class Parameters {
    StringParameters?: List<StringParameter>;
    DecimalParameters?: List<DecimalParameter>;
    IntegerParameters?: List<IntegerParameter>;
    DateTimeParameters?: List<DateTimeParameter>;
    constructor(properties: Parameters);
}
export declare class DashboardSourceTemplate {
    DataSetReferences: List<DataSetReference>;
    Arn: Value<string>;
    constructor(properties: DashboardSourceTemplate);
}
export declare class DataSetReference {
    DataSetArn: Value<string>;
    DataSetPlaceholder: Value<string>;
    constructor(properties: DataSetReference);
}
export declare class StringParameter {
    Values: List<Value<string>>;
    Name: Value<string>;
    constructor(properties: StringParameter);
}
export declare class IntegerParameter {
    Values: List<Value<number>>;
    Name: Value<string>;
    constructor(properties: IntegerParameter);
}
export declare class ExportToCSVOption {
    AvailabilityStatus?: Value<string>;
    constructor(properties: ExportToCSVOption);
}
export declare class DashboardPublishOptions {
    SheetControlsOption?: SheetControlsOption;
    ExportToCSVOption?: ExportToCSVOption;
    AdHocFilteringOption?: AdHocFilteringOption;
    constructor(properties: DashboardPublishOptions);
}
export declare class DecimalParameter {
    Values: List<Value<number>>;
    Name: Value<string>;
    constructor(properties: DecimalParameter);
}
export declare class DateTimeParameter {
    Values: List<Value<string>>;
    Name: Value<string>;
    constructor(properties: DateTimeParameter);
}
export declare class AdHocFilteringOption {
    AvailabilityStatus?: Value<string>;
    constructor(properties: AdHocFilteringOption);
}
export interface DashboardProperties {
    AwsAccountId: Value<string>;
    DashboardId: Value<string>;
    DashboardPublishOptions?: DashboardPublishOptions;
    Name?: Value<string>;
    Parameters?: Parameters;
    Permissions?: List<ResourcePermission>;
    SourceEntity?: DashboardSourceEntity;
    Tags?: List<ResourceTag>;
    ThemeArn?: Value<string>;
    VersionDescription?: Value<string>;
}
export default class Dashboard extends ResourceBase<DashboardProperties> {
    static SheetControlsOption: typeof SheetControlsOption;
    static ResourcePermission: typeof ResourcePermission;
    static DashboardSourceEntity: typeof DashboardSourceEntity;
    static Parameters: typeof Parameters;
    static DashboardSourceTemplate: typeof DashboardSourceTemplate;
    static DataSetReference: typeof DataSetReference;
    static StringParameter: typeof StringParameter;
    static IntegerParameter: typeof IntegerParameter;
    static ExportToCSVOption: typeof ExportToCSVOption;
    static DashboardPublishOptions: typeof DashboardPublishOptions;
    static DecimalParameter: typeof DecimalParameter;
    static DateTimeParameter: typeof DateTimeParameter;
    static AdHocFilteringOption: typeof AdHocFilteringOption;
    constructor(properties: DashboardProperties);
}
