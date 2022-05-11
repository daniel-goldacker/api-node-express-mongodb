import express from "express";
import livroRoute from "./livroRoute.js"
import autorRoute from "./autorRoute.js"

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({titulo: 'Curso de Node'});
    })

    app.use(
        express.json(),
        livroRoute,
        autorRoute
    )
}


export default routes;