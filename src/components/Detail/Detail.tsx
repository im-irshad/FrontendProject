import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountry } from "../../redux/actions/countryActions";
import { rootState } from "../../redux/reducers";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  media: {
    height: 250,
  },
});

export default function Detail() {
  const classes = useStyles();

  const { name } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountry(name!));
  }, [dispatch, name]);

  const { loading1, country } = useSelector(
    (state: rootState) => state.countryReducer
  );

  return (
    <div>
      {loading1 ? (
        <div>loading....</div>
      ) : (
        <Container maxWidth="sm">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                image={country[0].flags.png}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {country[0].name.common}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Capital: {country[0].capital}
                  <br />
                  Population: {country[0].population} <br />
                  Region: {country[0].region}
                  <br />
                  Area: {country[0].area}
                  <br />
                </Typography>
              </CardContent>
              <Link to={`/detail/images/${name}/`}> Images </Link>
              <Button href="#text-buttons">Back</Button>
            </CardActionArea>
          </Card>
        </Container>
      )}
    </div>
  );
}