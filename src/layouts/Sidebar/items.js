import dash from "../../assets/images/dash.svg";
import edit from "../../assets/images/edit.svg";
import group from "../../assets/images/group.svg";
import hourglass from "../../assets/images/hourglass.svg";
import camera from "../../assets/images/camera.svg";
import remove from "../../assets/images/remove.svg";
import subscriptions from "../../assets/images/subscriptions.svg";
import file from "../../assets/images/file.svg";
import alarm from "../../assets/images/alarm.svg";

export const sidebarItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: dash,
  },
  {
    name: "Item 1",
    path: "/item-1",
    icon: edit,
  },
  {
    name: "Item 2",
    path: "/item-2",
    icon: group,
  },
  {
    name: "Item 3",
    path: "/item-3",
    icon: hourglass,
  },
];

export const secoondSidebarItems = [
  {
    name: "Others 1",
    nested_paths: [
      {
        name: "Item 4",
        path: "/others-1/item-1",
        icon: camera,
      },
      {
        name: "Item 5",
        path: "/others-1/item-2",
        icon: remove,
      },
    ],
  },
  {
    name: "Others 2",

    nested_paths: [
      {
        name: "Item 6",
        path: "/others-2/item-1",
        icon: subscriptions,
      },
      {
        name: "Item 7",
        path: "/others-2/item-2",
        icon: file,
      },
      {
        name: "Item 8",
        path: "/others-2/item-3",
        icon: alarm,
      },
    ],
  },
];
