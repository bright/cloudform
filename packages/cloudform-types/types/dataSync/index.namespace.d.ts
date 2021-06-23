import LocationNFS_ from './locationNfs';
import LocationFSxWindows_ from './locationFSxWindows';
import LocationS3_ from './locationS3';
import Task_ from './task';
import LocationObjectStorage_ from './locationObjectStorage';
import Agent_ from './agent';
import LocationEFS_ from './locationEfs';
import LocationSMB_ from './locationSmb';
export declare namespace DataSync {
    const LocationNFS: typeof LocationNFS_;
    const LocationFSxWindows: typeof LocationFSxWindows_;
    const LocationS3: typeof LocationS3_;
    const Task: typeof Task_;
    const LocationObjectStorage: typeof LocationObjectStorage_;
    const Agent: typeof Agent_;
    const LocationEFS: typeof LocationEFS_;
    const LocationSMB: typeof LocationSMB_;
    type LocationNFS = LocationNFS_;
    type LocationFSxWindows = LocationFSxWindows_;
    type LocationS3 = LocationS3_;
    type Task = Task_;
    type LocationObjectStorage = LocationObjectStorage_;
    type Agent = Agent_;
    type LocationEFS = LocationEFS_;
    type LocationSMB = LocationSMB_;
}
