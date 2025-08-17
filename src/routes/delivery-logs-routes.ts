import { Router } from "express";

import { DeliveryLogsController } from "@/controllers/delivery-logs-controller";
import { ensureAuthenticated } from "@/middleware/ensure-authenticated";
import { verifyUserAuthorization } from "@/middleware/verifyUserAuthorization";

const deliveryLogsRoutes = Router()
const deliveryLogsController = new DeliveryLogsController()

// only this path will use these middlewares
deliveryLogsRoutes.post("/", ensureAuthenticated, verifyUserAuthorization(["sale"]), deliveryLogsController.create)
deliveryLogsRoutes.get("/:delivery_id/show", ensureAuthenticated, verifyUserAuthorization(["sale", "customer"]), deliveryLogsController.show)

export {deliveryLogsRoutes}