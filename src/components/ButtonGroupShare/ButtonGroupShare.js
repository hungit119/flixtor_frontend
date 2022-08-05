import {
  faFacebook,
  faSquarePinterest,
  faTelegram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ButtonShare from "../ButtonShare/ButtonShare";
const ButtonGroupShare = () => {
  const shares = [
    { icon: <FontAwesomeIcon icon={faFacebook} />, title: "Facebook" },
    { icon: <FontAwesomeIcon icon={faTwitter} />, title: "Twitter" },
    { icon: <FontAwesomeIcon icon={faMailBulk} />, title: "Email" },
    { icon: <FontAwesomeIcon icon={faSquarePinterest} />, title: "Pinterest" },
    { icon: <FontAwesomeIcon icon={faWhatsapp} />, title: "Whatsapp" },
    { icon: <FontAwesomeIcon icon={faTelegram} />, title: "Telegram" },
    { icon: <FontAwesomeIcon icon={faPlus} />, title: "More", option: "12.1k" },
  ];
  return (
    <>
      {shares.map((share, index) => (
        <ButtonShare
          key={index}
          icon={share.icon}
          title={share.title}
          variant={share.title.toLowerCase()}
          option={share.option}
        />
      ))}
    </>
  );
};

export default ButtonGroupShare;
