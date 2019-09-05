import React from "react";
import Layout from "../components/layout";
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

export default ({data})=> {
  return (
    <Layout>
      <Container component="main">
        <Typography variant="h5" color="textPrimary">
          <p align="center">{data.strapiArticles.title}</p>
        </Typography>
        <Typography color="textSecondary" variant="subheading" gutterBottom>
          <p align="right">Posted at {data.strapiArticles.created_at}</p>
        </Typography>
        <Typography component="p">
          <ReactMarkdown source={data.strapiArticles.description} />
          <ReactMarkdown source={data.strapiArticles.content} />
        </Typography>
      </Container>
      {/* End hero unit */}
    </Layout>
  );
}

export const Article = graphql`
  query($id: String!) {
    strapiArticles(id: {eq: $id}) {
      id
      title
      description
      content
      created_at(fromNow: true)
    }
  }  
  `