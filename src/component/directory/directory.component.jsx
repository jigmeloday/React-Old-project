import React from "react";
import "./directory.style.scss";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ selections }) => (
  <div className="directory-menu">
    {this.state.section.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps}></MenuItem>
    ))}
  </div>
);

export default Directory;
