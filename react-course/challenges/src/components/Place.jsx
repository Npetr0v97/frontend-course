import PlaceImage from "./PlaceImage";
import { useContext } from "react";
import { ImageSizeContext } from "../contexts/ImageSizeContext";

function Place({ place }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}

export default Place;
