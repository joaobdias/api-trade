import { Router } from "express";
import { DeliveriesController } from "@/controllers/deliveries-controller";
import { ensureAuthenticated } from "@/middleware/ensure-authenticated";
import { verifyUserAuthorization } from "@/middleware/verifyUserAuthorization";
import { DeliveriesStatusController } from "@/controllers/deliveries-status-controller";

const deliveryRoutes = Router()
const deliveryController = new DeliveriesController()
const deliveriesStatusController = new DeliveriesStatusController()

deliveryRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]))
deliveryRoutes.post("/", deliveryController.create)
deliveryRoutes.get("/", deliveryController.index)

deliveryRoutes.patch("/:id/status", deliveriesStatusController.update)
export { deliveryRoutes }