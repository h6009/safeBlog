import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql, navigate } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import ReactMarkdown from "react-markdown"

  
export default () => {

  const Articles = useStaticQuery(graphql`
  query ArticlesQuery {
    allStrapiArticles {
      edges {
        node {
          id
          title
          description
          content
          created_at(fromNow: true)
        }
      }
    }
  }
  `)
    return (
        <Layout>
          <Grid xs={12} md={12}>
            <Typography variant="h6" color="textPrimary" component="p">
              Danh Sách Bài Viết
            </Typography>
          </Grid>
          {Articles.allStrapiArticles.edges.map(post => (
            <Grid item key={post.node.title} xs={12} md={12}>
              <CardActionArea onClick={event => {
                event.preventDefault()
                navigate(post.node.id)
              }}>
                <Card >
                  <div >
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.node.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                      Posted at {post.node.created_at}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        <ReactMarkdown source={post.node.description} />
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        Đọc Tiếp
                      </Typography>
                    </CardContent>
                  </div>

                </Card>
              </CardActionArea>
            </Grid>
            ))}
        </Layout>
    )
}
