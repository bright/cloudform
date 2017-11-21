import { ResourceBase } from '../resource';
import { Value } from '../internal';
import Environment from './environment';
import LogConfiguration from './logConfiguration';
import MountPoint from './mountPoint';
import PortMapping from './portMapping';
import Ulimit from './ulimit';
import VolumesFrom from './volumesFrom';
export interface ContainerDefinitionProperties {
    Command?: Value<string>[];
    Cpu?: Value<number>;
    DisableNetworking?: Value<boolean>;
    DnsSearchDomains?: Value<string>[];
    DnsServers?: Value<string>[];
    DockerLabels: Value<string>;
    DockerSecurityOptions?: Value<string>[];
    EntryPoint?: Value<string>[];
    Environment?: Environment[];
    Essential?: Value<boolean>;
    Hostname?: Value<string>;
    Image: Value<string>;
    Links?: Value<string>[];
    LogConfiguration?: LogConfiguration;
    Memory: Value<number>;
    MemoryReservation?: Value<number>;
    MountPoints?: MountPoint[];
    Name: Value<string>;
    PortMappings?: PortMapping[];
    Privileged?: Value<boolean>;
    ReadonlyRootFilesystem?: Value<boolean>;
    Ulimits?: Ulimit[];
    User?: Value<string>;
    VolumesFrom?: VolumesFrom[];
    WorkingDirectory?: Value<string>;
}
export default class ContainerDefinition extends ResourceBase {
    constructor(properties: ContainerDefinitionProperties, dependsOn?: Value<string>);
}
