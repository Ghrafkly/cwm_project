import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaPhone,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: FaApple,
    mac: FaApple,
    apple: FaApple,
    iphone: MdPhoneIphone,
    ipad: MdPhoneIphone,
    linux: FaLinux,
    android: FaAndroid,
    web: BsGlobe,
    nintendo: SiNintendo,
    phone: FaPhone,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          boxSize="15px"
          color="gray.500"
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
