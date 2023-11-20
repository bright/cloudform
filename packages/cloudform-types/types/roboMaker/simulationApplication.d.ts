import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class RenderingEngine {
    Version: Value<string>;
    Name: Value<string>;
    constructor(properties: RenderingEngine);
}
export declare class RobotSoftwareSuite {
    Version?: Value<string>;
    Name: Value<string>;
    constructor(properties: RobotSoftwareSuite);
}
export declare class SimulationSoftwareSuite {
    Version?: Value<string>;
    Name: Value<string>;
    constructor(properties: SimulationSoftwareSuite);
}
export declare class SourceConfig {
    S3Bucket: Value<string>;
    Architecture: Value<string>;
    S3Key: Value<string>;
    constructor(properties: SourceConfig);
}
export interface SimulationApplicationProperties {
    RenderingEngine?: RenderingEngine;
    SimulationSoftwareSuite: SimulationSoftwareSuite;
    CurrentRevisionId?: Value<string>;
    Environment?: Value<string>;
    RobotSoftwareSuite: RobotSoftwareSuite;
    Sources?: List<SourceConfig>;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name?: Value<string>;
}
export default class SimulationApplication extends ResourceBase<SimulationApplicationProperties> {
    static RenderingEngine: typeof RenderingEngine;
    static RobotSoftwareSuite: typeof RobotSoftwareSuite;
    static SimulationSoftwareSuite: typeof SimulationSoftwareSuite;
    static SourceConfig: typeof SourceConfig;
    constructor(properties: SimulationApplicationProperties);
}
