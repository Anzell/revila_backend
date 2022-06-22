
const { defaults: tsjPreset } = require('ts-jest/presets');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    transform: tsjPreset.transform,
    testEnvironment: 'node',
    rootDir: "build",
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    watchPathIgnorePatterns: ['globalConfig']
};