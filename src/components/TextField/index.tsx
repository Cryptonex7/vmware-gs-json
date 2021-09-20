import "./styles.scss";
import "@cds/core/input/register.js";
import "@cds/core/forms/register.js";

interface Props {
  placeholder?: string;
  label?: string;
  onChange?: any;
  message?: string;
}

const TextField: React.FC<Props> = (props: Props) => {
  return (
    <cds-form-group layout="vertical">
      <cds-input layout="vertical">
        <label>{props.label}</label>
        <input onChange={props.onChange} placeholder={props.placeholder} />
        <cds-control-message>{props.message}</cds-control-message>
      </cds-input>
    </cds-form-group>
  );
};

export default TextField;
