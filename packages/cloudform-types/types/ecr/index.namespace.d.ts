import Repository_ from './repository';
import ReplicationConfiguration_ from './replicationConfiguration';
import RegistryPolicy_ from './registryPolicy';
import PublicRepository_ from './publicRepository';
export declare namespace ECR {
    const Repository: typeof Repository_;
    const ReplicationConfiguration: typeof ReplicationConfiguration_;
    const RegistryPolicy: typeof RegistryPolicy_;
    const PublicRepository: typeof PublicRepository_;
    type Repository = Repository_;
    type ReplicationConfiguration = ReplicationConfiguration_;
    type RegistryPolicy = RegistryPolicy_;
    type PublicRepository = PublicRepository_;
}
