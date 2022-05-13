import { IconsEnum } from './types';
import typeIcon from '../../assets/icons/delivery-shipment-3.svg';
import customerIcon from '../../assets/icons/userCustomer.svg';
import productIcon from '../../assets/icons/barcode.svg';
import categoryIcon from '../../assets/icons/category.svg';
import departureIcon from '../../assets/icons/flag.svg';
import arrivalIcon from '../../assets/icons/target.svg';
import iconBoat from '../../assets/icons/icon_boat.svg';
import iconWarehouse from '../../assets/icons/icon_warehouse.svg';
import adminLogo from '../../assets/icons/settings.svg';
import trackingLogo from '../../assets/icons/activity.svg';
import analyticsLogo from '../../assets/icons/bar-chart.svg';
import profileLogo from '../../assets/icons/user.svg';
import logoutLogo from '../../assets/icons/icon-log-out.svg';
import importLogo from '../../assets/icons/import-shipments.svg';
import shipmentsLogo from '../../assets/icons/delivery.svg';
import pairingLogo from '../../assets/icons/pairing.svg';
import shipmentAdd from '../../assets/icons/shipment-add.svg';
import infoLogo from '../../assets/icons/info.svg';
import deleteIcon from '../../assets/icons/trash.svg';
import cancelIcon from '../../assets/icons/close.svg';
import validIcon from '../../assets/icons/checkdark.svg';
import download from '../../assets/icons/download-arrow.svg';
import alertIcon from '../../assets/icons/alert.svg';
import reportIcon from '../../assets/icons/rapport.svg';
import locationIcon from '../../assets/icons/location.svg';
import arobaseIcon from '../../assets/icons/arobase.svg';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';
import searchIcon from '../../assets/icons/icon_search.svg';
import iconTruck from '../../assets/icons/icon_truck.svg';
import iconTrain from '../../assets/icons/icon_train.svg';
import iconAirplane from '../../assets/icons/airplane.svg';
import iconLightbulb from '../../assets/icons/light-bulb.svg';
import iconChevronDown from '../../assets/icons/chevron-down.svg';
import iconEye from '../../assets/icons/eye.svg';
import iconCloseEye from '../../assets/icons/closed-eye.svg';
import iconCircleChecked from '../../assets/icons/circle-checked.svg';
import iconCircleWarning from '../../assets/icons/circle-warning.svg';
import iconCircleEmpty from '../../assets/icons/circle-empty.svg';
import iconMap from '../../assets/icons/pin-location-map.svg';
import iconSort from '../../assets/icons/sort.svg';
import iconSortUp from '../../assets/icons/sort-up.svg';
import iconSortDown from '../../assets/icons/sort-down.svg';
import iconChevronUp from '../../assets/icons/chevron-up.svg';
import iconThumb from '../../assets/icons/thumb.svg';
import iconCheckmarkDone from '../../assets/icons/checkmark-done.svg';
import iconChevronLeft from '../../assets/icons/chevron-left.svg';
import iconChevronRight from '../../assets/icons/chevron-right.svg';
import iconClockTimerArrow from '../../assets/icons/clock-time-timer-arrow.svg';
import iconDeleteCircle from '../../assets/icons/delete-circle.svg';
import iconMessage from '../../assets/icons/email.svg';
import iconBoatDrowning from '../../assets/icons/ico_boat_drowning.svg';
import iconLeftArrow from '../../assets/icons/left-arrow.svg';
import iconFilter from '../../assets/icons/icon_filter.svg';
import iconFilterButton from '../../assets/icons/icon_filter_button.svg';
import iconMoreVertical from '../../assets/icons/more-vertical.svg';
import iconNotification from '../../assets/icons/notifications.svg';
import iconPassword from '../../assets/icons/password.svg';
import iconTools from '../../assets/icons/tools.svg';
import iconViewMore from '../../assets/icons/view-more.svg';
import iconWarning from '../../assets/icons/warning.svg';
import iconEdit from '../../assets/icons/pen-edit-write.svg';
import iconPen from '../../assets/icons/pen-edit-5.svg';
import iconShipments from '../../assets/icons/delivery-shipment-1.svg';
import iconFolderSetting from '../../assets/icons/folder-setting.svg';
import iconFolderBlank from '../../assets/icons/folder-blank.svg';
import iconFolderPlus from '../../assets/icons/folder-plus.svg';
import iconPathsLeadtimes from '../../assets/icons/window-text-clock-time.svg';
import iconShare from '../../assets/icons/share.svg';
import iconPlus from '../../assets/icons/plus.svg';
import iconCopy from '../../assets/icons/copy.svg';
import iconFileExcel from '../../assets/icons/file-excel.svg';

export const convertIconsEnum = (): IconsEnum[] => {
  return Object.keys(IconsEnum)
    .map((key) => {
      return key as IconsEnum;
    })
    .sort();
};

export const getIcon = (iconName: IconsEnum) => {
  return icons[iconName];
};

// Dont forget to add icons on IconsEnum (types.ts)

export const icons: Record<IconsEnum, string> = {
  type: typeIcon,
  customer: customerIcon,
  product: productIcon,
  category: categoryIcon,
  departure: departureIcon,
  arrival: arrivalIcon,
  carrier: iconBoat,
  warehouse: iconWarehouse,
  adminLogo: adminLogo,
  trackingLogo: trackingLogo,
  analyticsLogo: analyticsLogo,
  profileLogo: profileLogo,
  logoutLogo: logoutLogo,
  importLogo: importLogo,
  shipmentsLogo: shipmentsLogo,
  pairingLogo: pairingLogo,
  createEasyTrack: shipmentAdd,
  tutorial: infoLogo,
  delete: deleteIcon,
  cancel: cancelIcon,
  valid: validIcon,
  download: download,
  user: profileLogo,
  alert: alertIcon,
  report: reportIcon,
  location: locationIcon,
  search: searchIcon,
  arobase: arobaseIcon,
  arrowRight: arrowRightIcon,
  train: iconTrain,
  truck: iconTruck,
  airplane: iconAirplane,
  lightbulb: iconLightbulb,
  chevronDown: iconChevronDown,
  eye: iconEye,
  closeEye: iconCloseEye,
  circleChecked: iconCircleChecked,
  circleWarning: iconCircleWarning,
  circleEmpty: iconCircleEmpty,
  map: iconMap,
  sort: iconSort,
  sortUp: iconSortUp,
  sortDown: iconSortDown,
  chevronUp: iconChevronUp,
  thumb: iconThumb,
  checkmarkDone: iconCheckmarkDone,
  chevronLeft: iconChevronLeft,
  chevronRight: iconChevronRight,
  clockTimerArrow: iconClockTimerArrow,
  deleteCircle: iconDeleteCircle,
  message: iconMessage,
  boatDrowning: iconBoatDrowning,
  leftArrow: iconLeftArrow,
  filter: iconFilter,
  filterButton: iconFilterButton,
  moreVerticalDots: iconMoreVertical,
  notification: iconNotification,
  password: iconPassword,
  tools: iconTools,
  viewMore: iconViewMore,
  warning: iconWarning,
  edit: iconEdit,
  pen: iconPen,
  shipments: iconShipments,
  folderSetting: iconFolderSetting,
  folderBlank: iconFolderBlank,
  folderPlus: iconFolderPlus,
  pathsLeadtimes: iconPathsLeadtimes,
  share: iconShare,
  plus: iconPlus,
  copy: iconCopy,
  fileExcel: iconFileExcel,
};
