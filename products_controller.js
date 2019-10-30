module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');
        const {name, description, price, image_url} = req.body;
        db.create_product([name, description, price, image_url])
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Something has gone awry!"})
            console.log(err)
        });
    },
    getOne: (req, res) => {
        const db = req.app.get('db')
        db.read_product(req.params.id)
        .then(result => {
            res.status(200).send(result)
        })
        .catch( err => {
            res.status(500).send({errorMessage: "This cannot BEEEE!"})
            console.log(err)
        })
    },
    getAll:(req, res) => {
        const db = req.app.get('db')
        db.read_products()
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            res.status(500).send({errorMessage: "I will find this bug....and I will kill it."})
            console.log(err)
        })
    },
    update:(req, res) => {
        const db = req.app.get('db')
        db.update_product([req.params.id, req.query.desc])
        .then(() => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: "All that typing for nothing"})
            console.log(err)
            console.log(req.query.description)
            console.log(req.body.description)
        })
    },
    delete:(req, res) => {
        const db = req.app.get('db')
        db.delete_product(req.params.id)
        .then( () => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: "I guess we're keeping that"})
            console.log(err)
        })
    }
}