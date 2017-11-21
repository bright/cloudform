import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
import Application from './application';
import BootstrapAction from './bootstrapAction';
import EbsConfiguration from './ebsConfiguration';
import Instances from './instances';
export interface ClusterProperties {
    AdditionalInfo?: any;
    Applications?: Application[];
    AutoScalingRole?: Value<string>;
    BootstrapActions?: BootstrapAction[];
    Configurations?: any[];
    EbsConfiguration?: EbsConfiguration;
    Instances: Instances;
    JobFlowRole: Value<string>;
    LogUri?: Value<string>;
    Name: Value<string>;
    ReleaseLabel?: Value<string>;
    SecurityConfiguration?: Value<string>;
    ServiceRole: Value<string>;
    VisibleToAllUsers?: Value<boolean>;
    Tags?: ResourceTag[];
}
export default class Cluster extends ResourceBase {
    constructor(properties: ClusterProperties, dependsOn?: Value<string>);
}
