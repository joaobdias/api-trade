import { Router } from "express"
import { usersRoutes } from "./user-routes"
import { sessionsRoutes } from "./session-routes"
import { deliveryRoutes } from "./deliveries-routes"

const routes = Router ()

routes.use("/users", usersRoutes)
routes.use("/sessions", sessionsRoutes)
routes.use("/deliveries", deliveryRoutes)
routes.use("/delivery-logs", deliveryRoutes)

export { routes }
