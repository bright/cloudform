import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class KernelGatewayImageConfig {
    FileSystemConfig?: FileSystemConfig;
    KernelSpecs: List<KernelSpec>;
    constructor(properties: KernelGatewayImageConfig);
}
export declare class FileSystemConfig {
    DefaultGid?: Value<number>;
    DefaultUid?: Value<number>;
    MountPath?: Value<string>;
    constructor(properties: FileSystemConfig);
}
export declare class KernelSpec {
    DisplayName?: Value<string>;
    Name: Value<string>;
    constructor(properties: KernelSpec);
}
export interface AppImageConfigProperties {
    AppImageConfigName: Value<string>;
    KernelGatewayImageConfig?: KernelGatewayImageConfig;
    Tags?: List<ResourceTag>;
}
export default class AppImageConfig extends ResourceBase<AppImageConfigProperties> {
    static KernelGatewayImageConfig: typeof KernelGatewayImageConfig;
    static FileSystemConfig: typeof FileSystemConfig;
    static KernelSpec: typeof KernelSpec;
    constructor(properties: AppImageConfigProperties);
}
