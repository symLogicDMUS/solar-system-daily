/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlanet = /* GraphQL */ `
    mutation CreatePlanet(
        $input: CreatePlanetInput!
        $condition: ModelPlanetConditionInput
    ) {
        createPlanet(input: $input, condition: $condition) {
            id
            name
            description
            image
            createdAt
            updatedAt
        }
    }
`;
export const updatePlanet = /* GraphQL */ `
    mutation UpdatePlanet(
        $input: UpdatePlanetInput!
        $condition: ModelPlanetConditionInput
    ) {
        updatePlanet(input: $input, condition: $condition) {
            id
            name
            description
            image
            createdAt
            updatedAt
        }
    }
`;
export const deletePlanet = /* GraphQL */ `
    mutation DeletePlanet(
        $input: DeletePlanetInput!
        $condition: ModelPlanetConditionInput
    ) {
        deletePlanet(input: $input, condition: $condition) {
            id
            name
            description
            image
            createdAt
            updatedAt
        }
    }
`;
