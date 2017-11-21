import { ResourceBase } from '../resource';
import { Value } from '../internal';
import CustomRecipes from './customRecipes';
import LifecycleEventConfiguration from './lifecycleEventConfiguration';
import LoadBasedAutoScaling from './loadBasedAutoScaling';
import VolumeConfigurations from './volumeConfigurations';
export interface LayerProperties {
    Attributes?: any;
    AutoAssignElasticIps: Value<boolean>;
    AutoAssignPublicIps: Value<boolean>;
    CustomJson?: any;
    CustomInstanceProfileArn?: Value<string>;
    CustomRecipes?: CustomRecipes;
    CustomSecurityGroupIds?: Value<string>[];
    EnableAutoHealing: Value<boolean>;
    InstallUpdatesOnBoot?: Value<boolean>;
    LifecycleEventConfiguration?: LifecycleEventConfiguration;
    LoadBasedAutoScaling?: LoadBasedAutoScaling;
    Name: Value<string>;
    Packages?: Value<string>[];
    Shortname: Value<string>;
    StackId: Value<string>;
    Type?: Value<string>;
    VolumeConfigurations?: VolumeConfigurations;
}
export default class Layer extends ResourceBase {
    constructor(properties: LayerProperties, dependsOn?: Value<string>);
}
