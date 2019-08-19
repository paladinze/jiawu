import React from "react";

import { Card, Icon, Col, Row } from "antd";
const { Meta } = Card;

const ShipCard = () => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt="example" src="/images/ship_01.jpeg" />}
      actions={[
        <Icon type="setting" key="setting" />,
        <Icon type="edit" key="edit" />,
        <Icon type="ellipsis" key="ellipsis" />
      ]}
    >
      <Meta title="定远舰" description="主力舰" />
    </Card>
  );
};

export default ShipCard;
