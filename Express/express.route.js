import { exampleRoute } from '../Library/library.routetest.js';

export function appRouter(db){
    db.use("/test", exampleRoute)
}