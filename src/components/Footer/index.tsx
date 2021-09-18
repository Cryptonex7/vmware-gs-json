import "@cds/core/divider/register.js";
import "./styles.scss";

interface Props {
  title?: string;
  icon?: string;
  children?: React.ReactNode;
}

const Sidebar: React.FC<Props> = (props: Props) => {
  return (
    <>
      <footer className="footer">
        <cds-divider class="divider-foot"></cds-divider>
        <div className="footer-content" cds-layout="p-y:md p-x:lg">
          footer
        </div>
      </footer>
    </>
  );
};

export default Sidebar;
