import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class RobotSoftwareSuite {
    Version: Value<string>;
    Name: Value<string>;
    constructor(properties: RobotSoftwareSuite);
}
export declare class SourceConfig {
    S3Bucket: Value<string>;
    Architecture: Value<string>;
    S3Key: Value<string>;
    constructor(properties: SourceConfig);
}
export interface RobotApplicationProperties {
    CurrentRevisionId?: Value<string>;
    RobotSoftwareSuite: RobotSoftwareSuite;
    Sources: List<SourceConfig>;
    Tags?: {
        [key: string]: any;
    };
    Name?: Value<string>;
}
export default class RobotApplication extends ResourceBase<RobotApplicationProperties> {
    static RobotSoftwareSuite: typeof RobotSoftwareSuite;
    static SourceConfig: typeof SourceConfig;
    constructor(properties: RobotApplicationProperties);
}
