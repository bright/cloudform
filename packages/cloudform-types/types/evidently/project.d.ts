import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AppConfigResourceObject {
    EnvironmentId: Value<string>;
    ApplicationId: Value<string>;
    constructor(properties: AppConfigResourceObject);
}
export declare class DataDeliveryObject {
    S3?: S3Destination;
    LogGroup?: Value<string>;
    constructor(properties: DataDeliveryObject);
}
export declare class S3Destination {
    BucketName: Value<string>;
    Prefix?: Value<string>;
    constructor(properties: S3Destination);
}
export interface ProjectProperties {
    DataDelivery?: DataDeliveryObject;
    Description?: Value<string>;
    AppConfigResource?: AppConfigResourceObject;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Project extends ResourceBase<ProjectProperties> {
    static AppConfigResourceObject: typeof AppConfigResourceObject;
    static DataDeliveryObject: typeof DataDeliveryObject;
    static S3Destination: typeof S3Destination;
    constructor(properties: ProjectProperties);
}
