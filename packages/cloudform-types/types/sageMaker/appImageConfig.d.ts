import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FileSystemConfig {
    MountPath?: Value<string>;
    DefaultGid?: Value<number>;
    DefaultUid?: Value<number>;
    constructor(properties: FileSystemConfig);
}
export declare class KernelGatewayImageConfig {
    KernelSpecs: List<KernelSpec>;
    FileSystemConfig?: FileSystemConfig;
    constructor(properties: KernelGatewayImageConfig);
}
export declare class KernelSpec {
    DisplayName?: Value<string>;
    Name: Value<string>;
    constructor(properties: KernelSpec);
}
export interface AppImageConfigProperties {
    KernelGatewayImageConfig?: KernelGatewayImageConfig;
    AppImageConfigName: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class AppImageConfig extends ResourceBase<AppImageConfigProperties> {
    static FileSystemConfig: typeof FileSystemConfig;
    static KernelGatewayImageConfig: typeof KernelGatewayImageConfig;
    static KernelSpec: typeof KernelSpec;
    constructor(properties: AppImageConfigProperties);
}
