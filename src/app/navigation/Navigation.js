import React from "react";
import styled from "styled-components";

import COLORS from "../../constants/colors";
import ButtonGrid from "../../components/ButtonGrid";
import CenteredTile from "../../components/CenteredTile";
import Icon from "../../components/Icon";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 0 40px;
  height: 72px;
  background-color: ${COLORS.blue};
  align-items: stretch;
`;

const NavigationItem = styled.div`
  flex: 1;
  font-size: 10px;
  color: ${COLORS.blueLight};
  cursor: pointer;

  :hover {
    background-color: ${COLORS.main};
    color: ${COLORS.white};
  }

  ${({ isSelected }) =>
    isSelected
      ? `background-color: ${COLORS.main}; color: ${COLORS.white}`
      : ""};
`;

const items = [
  { title: "Globe View", icon: "globe", link: "/" },
  {
    title: "Territoire View",
    icon: "france",
    link: "/departmentView",
  },
  { title: "City View", icon: "city", link: "/cityView" },
  { title: "Equipment View", icon: "factory", link: "/equipmentView" },
];

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ButtonGrid
        items={items}
        renderItem={({ item, isSelected, select }) => {
          return (
            <NavigationItem
              isSelected={isSelected}
              onClick={() => {
                select();
                navigate(item.link);
              }}
            >
              <CenteredTile style={{ flexDirection: "column" }}>
                <Icon
                  size={32}
                  icon={item.icon}
                  style={{ marginBottom: "5px" }}
                  color={isSelected ? COLORS.white : COLORS.black}
                  type="color"
                />
                {item.title.toUpperCase()}
              </CenteredTile>
            </NavigationItem>
          );
        }}
      />
    </Container>
  );
};

export default Navigation;
