import "./styles.scss";

import "@cds/core/card/register.js";
import "@cds/core/divider/register.js";

interface Props {
  title?: string;
  imgUrl?: string;
  hint?: string;
}

const LogoCard: React.FC<Props> = (props: Props) => {
  return (
    <cds-card>
      <div cds-layout="vertical gap:md">
        <h2 id="cardWithImage" cds-text="section" cds-layout="p-y:sm">
          {props.title}
        </h2>

        <cds-divider cds-card-remove-margin></cds-divider>

        <div className="media" cds-text="body light" cds-layout="p-y:md">
          <img src={props.imgUrl} alt="placeholder" />
        </div>

        <cds-divider cds-card-remove-margin></cds-divider>

        <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center">
          <cds-button action="flat-inline">{props.hint}</cds-button>
        </div>
      </div>
    </cds-card>
  );
};

export default LogoCard;
