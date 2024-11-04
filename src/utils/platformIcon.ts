// platformIcons.ts
import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaApple,
  FaLinux,
  FaAppStoreIos,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { IoLogoAndroid } from "react-icons/io";

// Map platform names to icons
const platformIcons: { [key: string]: () => JSX.Element } = {
  "PlayStation 4": FaPlaystation,
  "PlayStation 5": FaPlaystation,
  "Xbox One": FaXbox,
  PC: FaWindows,
  macOS: FaApple,
  Linux: FaLinux,
  "Nintendo Switch": BsNintendoSwitch,
  Android: IoLogoAndroid,
  ios: FaAppStoreIos,
};

export default platformIcons;
