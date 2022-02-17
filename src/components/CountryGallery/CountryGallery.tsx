import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../redux/actions/countryActions";
import { rootState } from "../../redux/reducers";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Button } from "@mui/material";

export default function CountryGallery() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { name } = useParams();
  useEffect(() => {
    dispatch(fetchPhoto(name!));
  }, [dispatch, name]);
  const { photo } = useSelector((state: rootState) => state.countryReducer);
  console.log(photo);
  return (
    <>
      <Typography variant="h5" align="center" sx={{ mt: 3 }}>
        {name}
      </Typography>
      <Button
        size="small"
        variant="contained"
        onClick={() => history("/allcountries")}
      >
        Back
      </Button>
      <ImageList
        sx={{ width: "80vw", height: "75vh", marginLeft: "8%" }}
        cols={4}
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
