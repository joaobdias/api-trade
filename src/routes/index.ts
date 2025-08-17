import { Router } from "express"

//specific routes
import { usersRoutes } from "./user-routes"
import { sessionsRoutes } from "./session-routes"
import { deliveryRoutes } from "./deliveries-routes"
import { deliveryLogsRoutes } from "./delivery-logs-routes"

// main routes file. Redirect to the correct route related to the URL

const routes = Router () // element from express which work with routes

routes.use("/users", usersRoutes)
routes.use("/sessions", sessionsRoutes)
routes.use("/deliveries", deliveryRoutes)
routes.use("/delivery-logs", deliveryLogsRoutes)

export { routes }
