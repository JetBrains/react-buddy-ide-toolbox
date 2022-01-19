import {DEV_MODE} from "../config";
import {historyPush} from "./routing";

if(DEV_MODE) {
  (window as any).reactBuddyHistoryPush = historyPush;
}
