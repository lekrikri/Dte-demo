import React, { useState } from "react";
import styled from "styled-components";

import COLORS from "../../constants/colors";
import Search from "../../components/Search";
import Icon from "../../components/Icon";
import Notification from "../../components/Notification";
import Avatar from "../../components/Avatar";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  align-items: center;
`;

const AvatarText = styled.div`
  font-size: 13px;
  margin-left: -5px;
  color: ${COLORS.black};
`;

const Actions = () => {
  const [searchText, setSearchText] = useState("");
  const [isNotificationVisible, setIsNotificationVisible] = useState(true);

  return (
    <Container>
      <Search value={searchText} onChange={(text) => setSearchText(text)} />
      <Notification
        isVisible={isNotificationVisible}
        onClick={() => setIsNotificationVisible(!isNotificationVisible)}
      >
        <Icon
          icon="appointment-reminders"
          type="ios-filled"
          size={20}
          color={COLORS.grayLight}
        />
      </Notification>
      <Avatar
        size={40}
        url="https://media.licdn.com/dms/image/C5603AQHLMXqcF7Uy6g/profile-displayphoto-shrink_100_100/0/1576663047118?e=1678320000&v=beta&t=yy85fqFSI_WFJb0q09TuLt1XH8dwYvhXyk1aeHdjXFo"
      />
      <AvatarText>Christophe Ganou</AvatarText>
    </Container>
  );
};

export default Actions;
