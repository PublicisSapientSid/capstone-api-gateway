import { InjectGraphQLClient } from '@golevelup/nestjs-graphql-request';
import { Injectable } from '@nestjs/common';
import { GraphQLClient, gql } from 'graphql-request';
import {
  GET_USER,
  GET_ALL_HOTELS,
  GET_ALL_USERS,
  SIGN_IN_USER,
  GET_HOTEL,
} from './gql-data-service';

@Injectable()
export class GatewayService {
  constructor(@InjectGraphQLClient() private readonly client: GraphQLClient) {}

  private graphQLClient = new GraphQLClient('http://localhost:3000/graphql');

  private token = '';

  private async consumeGraphQLEndpoint(gqlQuery: string, variables: any = {}) {
    try {
      const GQL = gql`
        ${gqlQuery}
      `;
      return await this.graphQLClient.request(GQL, variables);
    } catch (error) {
      console.error('Error consuming GraphQL endpoint', error);
      throw error;
    }
  }

  async signInUser(signInInput: { user: string; password: string }) {
    const results = (await this.consumeGraphQLEndpoint(
      SIGN_IN_USER,
      signInInput,
    )) as any;
    // TODO: DON'T STORE THIS
    this.token = results.signInUser.access_token;
    this.graphQLClient.setHeader('authorization', `Bearer ${this.token}`);
    return results;
  }

  async findAllUsers() {
    const results = (await this.consumeGraphQLEndpoint(GET_ALL_USERS)) as any;
    return results;
  }

  async findUser(userID: string) {
    const results = (await this.consumeGraphQLEndpoint(GET_USER, {
      userID,
    })) as any;
    return results;
  }

  async findAllHotels() {
    const results = (await this.consumeGraphQLEndpoint(GET_ALL_HOTELS)) as any;
    return results;
  }

  async findHotel(hotelID: string) {
    const results = (await this.consumeGraphQLEndpoint(GET_HOTEL, {
      hotelID,
    })) as any;
    return results;
  }
}
