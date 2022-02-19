import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/reducers";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Button } from "@mui/material";

export default function CountryGallery() {
  const history = useNavigate();
  const { name } = useParams();
  console.log(name);

  const { loading, photo } = useSelector(
    (state: rootState) => state.photoReducer
  );
  console.log(photo);
  return (
    <>
      {loading ? (
        <div>loading....</div>
      ) : (
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
      )}
    </>
  );
}
