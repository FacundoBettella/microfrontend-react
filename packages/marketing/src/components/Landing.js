import React, { Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Button,
  Card,
  Grid,
  Typography,
  CardActions,
  CardContent,
  Link,
  CardMedia,
} from "@mui/material";
import "./landing.css";

function Copyright() {

  return (
    <Typography variant='body2' color='white' align='center'>
      {"Copyright © "}
      <Link component={Link} to='/' color='inherit'>
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Landing = () => {
  return (
    <Fragment>
      <main>
        <div className='marketing-heroContent'>
          <Container maxWidth='sm'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Home Page
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className='marketing-heroButtons'>
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid item>
                  <RouterLink to='/pricing' className='marketing-no-decoration'>
                    <Button
                      variant='contained'
                      sx={{
                        color: "white",
                        backgroundColor: "#5369fb67",
                      }}
                    >
                      Pricing
                    </Button>
                  </RouterLink>
                </Grid>
                <Grid item>
                  <RouterLink to='/pricing' className='marketing-no-decoration'>
                    <Button
                      sx={{
                        color: "white",
                        backgroundColor: "#5369fb67",
                      }}
                    >
                      Pricing
                    </Button>
                  </RouterLink>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className='cardGrid' maxWidth='md'>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className='marketing-card'>
                  <CardMedia
                    className='marketing-cardMedia'
                    image='https://source.unsplash.com/random'
                    title='Image title'
                  />
                  <CardContent className='marketing-cardContent'>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>View</Button>
                    <Button size='small'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <footer className='marketing-footer'>
        <Typography
          variant='subtitle1'
          align='center'
          color='white'
          component='p'
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
    </Fragment>
  );
};
