#!/usr/bin/env node

// Import commander
const program = require("commander")
// Import Inquirer
const { prompt } = require("inquirer")

// Import customer functions
const {
    addCustomer, 
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers
} = require("./services/customerService")

// Customer questions
const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Customer First Name'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Customer Last Name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer Phone'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer Email'
    }
]

// Set customer-cli version
program
.version('0.0.1')
.description("Customer Management System")

// Add command
program
.command("add")
.alias("a")
.description("Add a new customer")
.action(() => {
    prompt(questions)
    .then(answers => addCustomer(answers))
})

// Find command
program
.command("find <name>")
.alias("f")
.description("Find a customer")
.action(name => findCustomer({name}) )

// Update command
program
.command("update <_id>")
.alias("u")
.description("Update customer details")
.action(_id => {
    prompt(questions)
    .then(answers => updateCustomer(_id, answers))
})

// Remove command
program
.command("remove <_id>")
.alias("r")
.description("Remove a customer")
.action(_id => removeCustomer(_id) )


// Find command
program
.command("list")
.alias("l")
.description("List all customers")
.action(() => listCustomers() )

program.parse(process.argv)