// Not used, yet
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { onError } from "@apollo/link-error";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { createUploadLink } from "apollo-upload-client";
import withApollo, {
  InitApolloClient,
  InitApolloOptions,
} from "next-with-apollo";
import { GQL_ENDPOINT, GQL_PRODENDPOINT } from "../lib/config";

function createClient({
  headers,
  initialState,
}: InitApolloOptions<{
  headers: any;
  initialState: any;
}>): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        if (networkError)
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
          );
      }),
      // this uses apollo-link-http under the hood, so all the options here come from that package
      createUploadLink({
        uri:
          process.env.NODE_ENV === "development"
            ? GQL_ENDPOINT
            : GQL_PRODENDPOINT,
        fetchOptions: {
          credentials: "include",
        },
        // pass the headers along from this request. This enables SSR with logged in state
        headers,
      }),
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // TODO: We will add this together!
            // allProducts: paginationField(),
          },
        },
      },
    }).restore(initialState || {}),
  });
}

export default withApollo(createClient, { getDataFromTree });
