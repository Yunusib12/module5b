const routes = require('express').Router();
const axios = require('axios');


// Default Route
routes
    .route('/')
    .get((req, res) => {

        // Get the list of all the products

        function getProduct() {
            return axios.get('http://localhost:3000/api/products')
                .then((response) => response.data)
        }

        getProduct()
            .then((products) => {
                res.render('main', { products })
            })
            .catch((err) => console.error(err))
    });


module.exports = routes;