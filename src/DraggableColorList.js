import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import bg2 from "./styles/bg2.svg";

import { SortableContainer } from "react-sortable-hoc";

const DraggableColorList = SortableContainer(({ colors, removeColor }) => {
  console.log("rendering color list");
  return (
    <TransitionGroup
      style={{
        height: "100%",
        backgroundColor: "#000000",
        backgroundImage: `url(${bg2})`
      }}
    >
      {colors.map((color, i) => (
        <CSSTransition key={color.name} classNames="fade" timeout={250}>
          <DraggableColorBox
            index={i}
            key={color.name}
            color={color.color}
            name={color.name}
            handleClick={() => removeColor(color.name)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
});

export default DraggableColorList;
