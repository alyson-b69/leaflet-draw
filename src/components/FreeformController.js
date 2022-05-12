import { createControlComponent } from "@react-leaflet/core";
import { Control, DomUtil } from "leaflet";
import PropTypes from "prop-types";

import logoLeaf from "../images/logo-leaflet.png";

const FreeformButtons = Control.extend({
  onAdd: function (map) {
    var img = DomUtil.create("img");

    img.src = logoLeaf;
    img.style.width = "200px";

    return img;
  },

  onRemove: function (map) {
    // Nothing to do here
  }
});

const FreeformController = createControlComponent(
  (props) => new FreeformButtons(props)
);

FreeformController.defaultProps = {
  position: "topleft",
  draw: {},
  edit: false
};

export default FreeformController;
