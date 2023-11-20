import Application_ from './application';
import DeploymentConfig_ from './deploymentConfig';
import DeploymentGroup_ from './deploymentGroup';
export declare namespace CodeDeploy {
    const Application: typeof Application_;
    const DeploymentConfig: typeof DeploymentConfig_;
    const DeploymentGroup: typeof DeploymentGroup_;
    type Application = Application_;
    type DeploymentConfig = DeploymentConfig_;
    type DeploymentGroup = DeploymentGroup_;
}
