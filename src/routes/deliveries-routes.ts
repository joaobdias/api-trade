import { Router } from "express"; // import Router from Express to control the routes

import { DeliveriesController } from "@/controllers/deliveries-controller"; // a file to control specific this route
import { ensureAuthenticated } from "@/middleware/ensure-authenticated"; // authentication middleware
import { verifyUserAuthorization } from "@/middleware/verifyUserAuthorization"; // authorization middleware
import { DeliveriesStatusController } from "@/controllers/deliveries-status-controller"; // another controller

const deliveryRoutes = Router()
const deliveryController = new DeliveriesController()
const deliveriesStatusController = new DeliveriesStatusController()

// every path will use these middlewares
deliveryRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"])) 

deliveryRoutes.post("/", deliveryController.create)
deliveryRoutes.get("/", deliveryController.index)
deliveryRoutes.patch("/:id/status", deliveriesStatusController.update)

export { deliveryRoutes }