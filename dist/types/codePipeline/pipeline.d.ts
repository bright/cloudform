import { ResourceBase } from '../resource';
import { Value } from '../internal';
import ArtifactStore from './artifactStore';
import DisableInboundStageTransition from './disableInboundStageTransition';
import Stage from './stage';
export interface PipelineProperties {
    ArtifactStore: ArtifactStore;
    DisableInboundStageTransitions?: DisableInboundStageTransition[];
    Name?: Value<string>;
    RestartExecutionOnUpdate?: Value<boolean>;
    RoleArn: Value<string>;
    Stages: Stage[];
}
export default class Pipeline extends ResourceBase {
    constructor(properties: PipelineProperties, dependsOn?: Value<string>);
}
