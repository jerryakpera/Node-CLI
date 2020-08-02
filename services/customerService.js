// Import customer model
const Customer = require("../db/models/customer")
// Import DB Connection
const db = require("../db")

// Add customer
const addCustomer = customer => {
    Customer.create(customer)
    .then(doc => {
        console.info("New customer added", doc)
        db.close()
    })
    .catch(err => {
        console.log(err)
    })
}

// Find customer
const findCustomer = name => {
    Customer.find()
    .then(doc => {
        const search = name.name.toLowerCase()

        const results = doc.filter(customer => {
            if (customer.firstname.toLowerCase() === search || customer.lastname.toLowerCase() === search) return customer
        })

        console.info("Customer found", results)
        console.info(`${results.length} matches`)
        db.close()
    })
    .catch(err => {
        console.log(err)
    })
}

// Update Customer
const updateCustomer = (_id, customer) => {
    Customer.updateOne({ _id }, customer)
    .then(doc => {
        console.info("Customer updated successfully!")
        db.close()
    })
    .catch(err => {
        console.error(err)
    })
}

// Remove Customer
const removeCustomer = (_id) => {
    Customer.deleteOne({ _id })
    .then(doc => {
        console.info("Customer removed successfully!")
        db.close()
    })
    .catch(err => {
        console.error(err)
    })
}

// List all customers
const listCustomers = () => {
    Customer.find()
    .then(customers => {
        console.info(customers)
        console.info(`${customers.length} customers`)
        db.close()
    })
    .catch(err => {
        console.err(err)
    })
}

module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers
}