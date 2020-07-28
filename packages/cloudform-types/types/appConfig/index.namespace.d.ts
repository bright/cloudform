import Deployment_ from './deployment';
import ConfigurationProfile_ from './configurationProfile';
import Environment_ from './environment';
import DeploymentStrategy_ from './deploymentStrategy';
import Application_ from './application';
export declare namespace AppConfig {
    const Deployment: typeof Deployment_;
    const ConfigurationProfile: typeof ConfigurationProfile_;
    const Environment: typeof Environment_;
    const DeploymentStrategy: typeof DeploymentStrategy_;
    const Application: typeof Application_;
    type Deployment = Deployment_;
    type ConfigurationProfile = ConfigurationProfile_;
    type Environment = Environment_;
    type DeploymentStrategy = DeploymentStrategy_;
    type Application = Application_;
}
