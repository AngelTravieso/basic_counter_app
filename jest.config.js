

// Se hace si se tiene node < v18
// Si se tiene cra no debe dar error, esto es para pruebas asyn
module.exports = {
    // TODO: jsdom,
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
