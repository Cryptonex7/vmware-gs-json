import "./styles.scss";
import "@cds/core/input/register.js";
import "@cds/core/forms/register.js";
import "@cds/core/icon/register.js";
import "@cds/core/button/register.js";
import "@cds/core/card/register.js";
import "@cds/core/divider/register.js";
    
import { withRouter, RouteComponentProps } from "react-router";

import { ClarityIcons, vmBugInverseIcon } from "@cds/core/icon";
import { useState } from "react";
import TextField from "../../components/TextField";
import LogoCard from "../../components/LogoCard";
import { images } from "./images";

ClarityIcons.addIcons(vmBugInverseIcon);

interface Props extends RouteComponentProps {}


const TestPage: React.FC<Props> = (props: Props) => {
  const [index, setIndex] = useState(0);

  const onSubmit = () => {
    setIndex(index + 1);
  };

  return (
    <div className="wrapper flex-row just-sb">
      {/* Image */}
      <div className="logo-display flex-row just-sb">
        <LogoCard
          imgUrl={images.level1[index].src}
          title="Logo #1"
          hint="hint"
        />
        <cds-divider orientation="vertical"></cds-divider>
      </div>

      {/* Answer Sheet */}
      <div className="answer-sheet flex-col align-fs width-40">
        <TextField
          label="Answer"
          placeholder="Write the Name of the Company whose Logo is shown."
          message="You can have unlimited tries till time runs out - you will only be scored if you make a correct guess!"
        />
        <br />
        <br />
        <cds-button block onClick={onSubmit}>
          Enter
        </cds-button>
      </div>
    </div>
  );
};

export default withRouter(TestPage);
