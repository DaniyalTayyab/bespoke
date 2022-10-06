import React from "react";

import { Container } from "./Chat.styles";
import { FiMessageSquare } from "react-icons/fi";

const Chat = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <Container onClick={() => openInNewTab("http://techilab.com/contact-us/")}>
      <FiMessageSquare />
    </Container>
  );
};

export default Chat;
