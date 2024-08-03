'use client';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import Link from 'next/link';

import { useSuspenseQuery } from "@apollo/client";
// import { getClient } from "../lib/ApolloClient";
import { gql } from "../__generated__/";
import QueryResult from "../components/query-result";

import Header from '../ui/Header';


const SITE_SERVICES_QUERY = gql(`
  query GetSiteServices {
    siteService {
      id,
      name,
      type
    }
  }`
);


export default function Page() {
  // const { data } = await getClient().query({ query: SITE_SERVICES });    // this can only be used in a server component RSC
  const { data, error, networkStatus } = useSuspenseQuery(SITE_SERVICES_QUERY);
  // const queryResult = useSuspenseQuery(SITE_SERVICES_QUERY);
// console.log("rivers/page/tsx -- GQL Query Reslt: ", queryResult);
// console.log("rivers/page.tsx -- error: ", error);
// console.log("rivers/page.tsx -- data: ", data);
    return (
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Header />
        <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
        >
          Conditions
        </Typography>
        <List>
            <ListItem key="1">
                <Link href="/">
                <ListItemText primary="Back to home" />
                </Link>
            </ListItem>
            <ListItem key="2">
                <Link href="/rivers">
                <ListItemText primary="Rivers" />
                </Link>
            </ListItem>  
        </List>
        <QueryResult error={error} loading={networkStatus} data={data}>
        {data ?.siteService?.map((site) => (
          <Box key={site.id}>
            <Typography>
              {site.id}
              {site.name}
              {site.type}
            </Typography>
            <br />
          </Box>
        ))}
      </QueryResult>
      </Container>
    );
  }