import Cluster_ from './cluster';
import Service_ from './service';
import TaskDefinition_ from './taskDefinition';
export declare namespace ECS {
    const Cluster: typeof Cluster_;
    const Service: typeof Service_;
    const TaskDefinition: typeof TaskDefinition_;
    type Cluster = Cluster_;
    type Service = Service_;
    type TaskDefinition = TaskDefinition_;
}
