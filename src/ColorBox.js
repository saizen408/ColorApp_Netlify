import React, { Component } from "react";
import CopyToClipBoard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./styles/ColorBoxStyles";

import { withStyles } from "@material-ui/styles";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    console.log("rendering colorboxes");

    const {
      name,
      background,
      moreUrl,
      showingFullPalette,
      classes
    } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipBoard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.ColorBox}>
          <div
            style={{ background }}
            className={classNames(classes.copyOverlay, {
              [classes.showOverlay]: copied
            })}
          />

          <div
            className={classNames(classes.copyMessage, {
              [classes.showMessage]: copied
            })}
          >
            <h1>Copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>

          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button
            className={classes.copyButton}
            style={{ transition: "all 0.3s ease-in-out" }}
          >
            Copy
          </button>

          {showingFullPalette && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipBoard>
    );
  }
}

export default withStyles(styles)(ColorBox);
