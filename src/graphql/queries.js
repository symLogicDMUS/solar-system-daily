/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlanet = /* GraphQL */ `
  query GetPlanet($id: ID!) {
    getPlanet(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listPlanets = /* GraphQL */ `
  query ListPlanets(
    $filter: ModelPlanetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlanets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
