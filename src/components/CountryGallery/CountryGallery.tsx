import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountry, fetchPhoto } from "../../redux/actions/countryActions";
import { rootState } from "../../redux/reducers";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { typography } from "@mui/system";

const useStyles = makeStyles({
  media: {
    height: 250,
  },
});

export default function CountryGallery() {
  const dispatch = useDispatch();

  const classes = useStyles();

  const { name } = useParams();
  useEffect(() => {
    dispatch(fetchPhoto(name!));
  }, [dispatch, name]);
  const { loading1, photo } = useSelector(
    (state: rootState) => state.countryReducer
  );
  console.log(photo);
  return (
    <>
      <Typography variant="h3" align="center">
        {name}
      </Typography>
      <ImageList
        sx={{ width: 600, height: "75vh", marginLeft: "35%" }}
        cols={3}
        rowHeight={164}
      >
        {photo.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.urls.small} alt="d" loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
