import { IncomingMessage, ServerResponse } from 'http';
import Bottle from "bottlejs";
import frontendController from "../Frontend/Controller";

var DIContainer = new Bottle();
class betaHandler {
  actionOne(req: IncomingMessage, res: ServerResponse, params: {}) {
    res.end("welcome to alpha page with handler's dynamic action call from within a module folder using an imported DI container!")
  }
  actionTwo(req: IncomingMessage, res: ServerResponse, params: {}) {
    res.end("welcome to alpha page with handler's dynamic action call from within a module folder using an imported DI container and route config file!")
  }
}
DIContainer.service('betaHandler', betaHandler);
DIContainer.service('frontendController', frontendController);

export default DIContainer