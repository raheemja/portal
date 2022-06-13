// Admin Components
import Bookmarks from "./bookmarks";

import { Row, Col } from "react-bootstrap";

const AdminSkin = (props) => {
  return (
    <>
      <Col xs={12} md={8}>
        <>{props.children}</>
      </Col>
      <Col xs={12} md={4}>
        <Bookmarks />
      </Col>
    </>
  );
};

export default AdminSkin;
