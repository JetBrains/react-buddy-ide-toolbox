import React, { useMemo, useRef, useState } from "react";
import dayjs from "dayjs";
import {
  Category,
  Component,
  Palette,
  Variant,
} from "@react-buddy/ide-toolbox";
import {
  AndroidOutlined,
  AppleOutlined,
  AppstoreOutlined,
  CaretRightOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  DownOutlined,
  EditOutlined,
  EllipsisOutlined,
  FrownFilled,
  FrownOutlined,
  HomeOutlined,
  LikeOutlined,
  LoadingOutlined,
  MailOutlined,
  MehOutlined,
  NotificationOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  SettingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
  YoutubeOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  FastBackwardOutlined,
  FastForwardOutlined,
  ShrinkOutlined,
  ArrowsAltOutlined,
  UpOutlined,
  LeftOutlined,
  RightOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  CaretLeftOutlined,
  UpCircleOutlined,
  DownCircleOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  DoubleRightOutlined,
  DoubleLeftOutlined,
  VerticalLeftOutlined,
  VerticalRightOutlined,
  VerticalAlignTopOutlined,
  VerticalAlignMiddleOutlined,
  VerticalAlignBottomOutlined,
  ForwardOutlined,
  BackwardOutlined,
  RollbackOutlined,
  EnterOutlined,
  RetweetOutlined,
  SwapOutlined,
  SwapLeftOutlined,
  SwapRightOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  PlayCircleOutlined,
  UpSquareOutlined,
  DownSquareOutlined,
  LeftSquareOutlined,
  RightSquareOutlined,
  LoginOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BorderBottomOutlined,
  BorderHorizontalOutlined,
  BorderInnerOutlined,
  BorderOuterOutlined,
  BorderLeftOutlined,
  BorderRightOutlined,
  BorderTopOutlined,
  BorderVerticleOutlined,
  PicCenterOutlined,
  PicLeftOutlined,
  PicRightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  QuestionOutlined,
  PlusOutlined,
  PlusCircleOutlined,
  PauseOutlined,
  PauseCircleOutlined,
  MinusOutlined,
  MinusCircleOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
  InfoOutlined,
  InfoCircleOutlined,
  ExclamationOutlined,
  ExclamationCircleOutlined,
  CloseOutlined,
  CloseSquareOutlined,
  CheckOutlined,
  CheckCircleOutlined,
  CheckSquareOutlined,
  WarningOutlined,
  IssuesCloseOutlined,
  StopOutlined,
  FormOutlined,
  CopyOutlined,
  ScissorOutlined,
  DeleteOutlined,
  SnippetsOutlined,
  DiffOutlined,
  HighlightOutlined,
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  BgColorsOutlined,
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  StrikethroughOutlined,
  RedoOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  FontColorsOutlined,
  FontSizeOutlined,
  LineHeightOutlined,
  DashOutlined,
  SmallDashOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
  DragOutlined,
  OrderedListOutlined,
  UnorderedListOutlined,
  RadiusSettingOutlined,
  ColumnWidthOutlined,
  ColumnHeightOutlined,
  AreaChartOutlined,
  PieChartOutlined,
  BarChartOutlined,
  DotChartOutlined,
  LineChartOutlined,
  RadarChartOutlined,
  HeatMapOutlined,
  FallOutlined,
  RiseOutlined,
  StockOutlined,
  BoxPlotOutlined,
  FundOutlined,
  SlidersOutlined,
  WindowsOutlined,
  IeOutlined,
  ChromeOutlined,
  GithubOutlined,
  AliwangwangOutlined,
  DingdingOutlined,
  WeiboSquareOutlined,
  WeiboCircleOutlined,
  TaobaoCircleOutlined,
  Html5Outlined,
  WeiboOutlined,
  TwitterOutlined,
  WechatOutlined,
  AlipayCircleOutlined,
  TaobaoOutlined,
  SkypeOutlined,
  QqOutlined,
  MediumWorkmarkOutlined,
  GitlabOutlined,
  MediumOutlined,
  LinkedinOutlined,
  GooglePlusOutlined,
  DropboxOutlined,
  FacebookOutlined,
  CodepenOutlined,
  CodeSandboxOutlined,
  AmazonOutlined,
  GoogleOutlined,
  CodepenCircleOutlined,
  AlipayOutlined,
  AntDesignOutlined,
  AntCloudOutlined,
  AliyunOutlined,
  ZhihuOutlined,
  SlackOutlined,
  SlackSquareOutlined,
  BehanceOutlined,
  BehanceSquareOutlined,
  DribbbleOutlined,
  DribbbleSquareOutlined,
  InstagramOutlined,
  YuqueOutlined,
  AlibabaOutlined,
  YahooOutlined,
  RedditOutlined,
  SketchOutlined,
  AccountBookOutlined,
  AimOutlined,
  AlertOutlined,
  ApartmentOutlined,
  ApiOutlined,
  AppstoreAddOutlined,
  AudioOutlined,
  AudioMutedOutlined,
  AuditOutlined,
  BankOutlined,
  BarcodeOutlined,
  BarsOutlined,
  BellOutlined,
  BlockOutlined,
  BookOutlined,
  BorderOutlined,
  BorderlessTableOutlined,
  BranchesOutlined,
  BugOutlined,
  BuildOutlined,
  BulbOutlined,
  CalculatorOutlined,
  CalendarOutlined,
  CameraOutlined,
  CarOutlined,
  CarryOutOutlined,
  CiCircleOutlined,
  CiOutlined,
  ClearOutlined,
  CloudDownloadOutlined,
  CloudOutlined,
  CloudServerOutlined,
  CloudSyncOutlined,
  CloudUploadOutlined,
  ClusterOutlined,
  CodeOutlined,
  CoffeeOutlined,
  CommentOutlined,
  CompassOutlined,
  CompressOutlined,
  ConsoleSqlOutlined,
  ContactsOutlined,
  ContainerOutlined,
  ControlOutlined,
  CopyrightOutlined,
  CreditCardOutlined,
  CrownOutlined,
  CustomerServiceOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  DeleteColumnOutlined,
  DeleteRowOutlined,
  DeliveredProcedureOutlined,
  DeploymentUnitOutlined,
  DesktopOutlined,
  DingtalkOutlined,
  DisconnectOutlined,
  DislikeOutlined,
  DollarCircleOutlined,
  DollarOutlined,
  DownloadOutlined,
  EnvironmentOutlined,
  EuroCircleOutlined,
  EuroOutlined,
  ExceptionOutlined,
  ExpandAltOutlined,
  ExpandOutlined,
  ExperimentOutlined,
  ExportOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  FieldBinaryOutlined,
  FieldNumberOutlined,
  FieldStringOutlined,
  FieldTimeOutlined,
  FileAddOutlined,
  FileDoneOutlined,
  FileExcelOutlined,
  FileExclamationOutlined,
  FileOutlined,
  FileGifOutlined,
  FileImageOutlined,
  FileJpgOutlined,
  FileMarkdownOutlined,
  FilePdfOutlined,
  FilePptOutlined,
  FileProtectOutlined,
  FileSearchOutlined,
  FileSyncOutlined,
  FileTextOutlined,
  FileUnknownOutlined,
  FileWordOutlined,
  FileZipOutlined,
  FilterOutlined,
  FireOutlined,
  FlagOutlined,
  FolderAddOutlined,
  FolderOutlined,
  FolderOpenOutlined,
  FolderViewOutlined,
  ForkOutlined,
  FormatPainterOutlined,
  FunctionOutlined,
  FundProjectionScreenOutlined,
  FundViewOutlined,
  FunnelPlotOutlined,
  GatewayOutlined,
  GifOutlined,
  GiftOutlined,
  GlobalOutlined,
  GoldOutlined,
  GroupOutlined,
  HddOutlined,
  HeartOutlined,
  HistoryOutlined,
  HolderOutlined,
  HourglassOutlined,
  IdcardOutlined,
  ImportOutlined,
  InboxOutlined,
  InsertRowAboveOutlined,
  InsertRowBelowOutlined,
  InsertRowLeftOutlined,
  InsertRowRightOutlined,
  InsuranceOutlined,
  InteractionOutlined,
  KeyOutlined,
  LaptopOutlined,
  LayoutOutlined,
  LineOutlined,
  LinkOutlined,
  Loading3QuartersOutlined,
  LockOutlined,
  MacCommandOutlined,
  ManOutlined,
  MedicineBoxOutlined,
  MenuOutlined,
  MergeCellsOutlined,
  MessageOutlined,
  MobileOutlined,
  MoneyCollectOutlined,
  MonitorOutlined,
  MoreOutlined,
  NodeCollapseOutlined,
  NodeExpandOutlined,
  NodeIndexOutlined,
  NumberOutlined,
  OneToOneOutlined,
  PartitionOutlined,
  PaperClipOutlined,
  PayCircleOutlined,
  PercentageOutlined,
  PhoneOutlined,
  PictureOutlined,
  PlaySquareOutlined,
  PoundCircleOutlined,
  PoweroffOutlined,
  PrinterOutlined,
  ProfileOutlined,
  ProjectOutlined,
  PropertySafetyOutlined,
  PullRequestOutlined,
  PushpinOutlined,
  QrcodeOutlined,
  ReadOutlined,
  ReconciliationOutlined,
  RedEnvelopeOutlined,
  ReloadOutlined,
  RestOutlined,
  RobotOutlined,
  RocketOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SafetyCertificateOutlined,
  SafetyOutlined,
  SaveOutlined,
  ScanOutlined,
  ScheduleOutlined,
  SecurityScanOutlined,
  SelectOutlined,
  SendOutlined,
  ShakeOutlined,
  ShareAltOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  SisternodeOutlined,
  SkinOutlined,
  SoundOutlined,
  SplitCellsOutlined,
  StarOutlined,
  SubnodeOutlined,
  SwitcherOutlined,
  SyncOutlined,
  TableOutlined,
  TabletOutlined,
  TagOutlined,
  TagsOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  ToTopOutlined,
  ToolOutlined,
  TrademarkCircleOutlined,
  TrademarkOutlined,
  TransactionOutlined,
  TranslationOutlined,
  TrophyOutlined,
  UngroupOutlined,
  UnlockOutlined,
  UploadOutlined,
  UsbOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
  UserSwitchOutlined,
  UsergroupAddOutlined,
  UsergroupDeleteOutlined,
  VerifiedOutlined,
  VideoCameraAddOutlined,
  VideoCameraOutlined,
  WalletOutlined,
  WhatsAppOutlined,
  WifiOutlined,
  WomanOutlined,
  StepBackwardFilled,
  StepForwardFilled,
  FastBackwardFilled,
  FastForwardFilled,
  CaretUpFilled,
  CaretDownFilled,
  CaretLeftFilled,
  CaretRightFilled,
  UpCircleFilled,
  DownCircleFilled,
  LeftCircleFilled,
  RightCircleFilled,
  ForwardFilled,
  BackwardFilled,
  PlayCircleFilled,
  UpSquareFilled,
  DownSquareFilled,
  LeftSquareFilled,
  RightSquareFilled,
  QuestionCircleFilled,
  PlusCircleFilled,
  PauseCircleFilled,
  MinusCircleFilled,
  PlusSquareFilled,
  MinusSquareFilled,
  InfoCircleFilled,
  ExclamationCircleFilled,
  CloseCircleFilled,
  CloseSquareFilled,
  CheckCircleFilled,
  CheckSquareFilled,
  ClockCircleFilled,
  WarningFilled,
  StopFilled,
  EditFilled,
  CopyFilled,
  DeleteFilled,
  SnippetsFilled,
  DiffFilled,
  HighlightFilled,
  PieChartFilled,
  BoxPlotFilled,
  FundFilled,
  SlidersFilled,
  AndroidFilled,
  AppleFilled,
  WindowsFilled,
  ChromeFilled,
  GithubFilled,
  AliwangwangFilled,
  WeiboSquareFilled,
  WeiboCircleFilled,
  TaobaoCircleFilled,
  Html5Filled,
  WechatFilled,
  YoutubeFilled,
  AlipayCircleFilled,
  SkypeFilled,
  GitlabFilled,
  LinkedinFilled,
  FacebookFilled,
  CodeSandboxCircleFilled,
  CodepenCircleFilled,
  SlackSquareFilled,
  BehanceSquareFilled,
  DribbbleSquareFilled,
  InstagramFilled,
  YuqueFilled,
  YahooFilled,
  AccountBookFilled,
  AlertFilled,
  AlipaySquareFilled,
  AmazonCircleFilled,
  ApiFilled,
  AppstoreFilled,
  AudioFilled,
  BankFilled,
  BehanceCircleFilled,
  BellFilled,
  BookFilled,
  BugFilled,
  BuildFilled,
  CalculatorFilled,
  CalendarFilled,
  CameraFilled,
  CarFilled,
  CarryOutFilled,
  CiCircleFilled,
  CloudFilled,
  CodeFilled,
  CodeSandboxSquareFilled,
  CodepenSquareFilled,
  CompassFilled,
  ContactsFilled,
  ContainerFilled,
  ControlFilled,
  CreditCardFilled,
  CrownFilled,
  CustomerServiceFilled,
  DashboardFilled,
  DatabaseFilled,
  DingtalkCircleFilled,
  DingtalkSquareFilled,
  DislikeFilled,
  DollarCircleFilled,
  DribbbleCircleFilled,
  DropboxCircleFilled,
  DropboxSquareFilled,
  EnvironmentFilled,
  EuroCircleFilled,
  ExperimentFilled,
  EyeFilled,
  EyeInvisibleFilled,
  FileAddFilled,
  FileExcelFilled,
  FileExclamationFilled,
  FileFilled,
  FileImageFilled,
  FileMarkdownFilled,
  FilePdfFilled,
  FilePptFilled,
  FileTextFilled,
  FileUnknownFilled,
  FileWordFilled,
  FileZipFilled,
  FilterFilled,
  FireFilled,
  FlagFilled,
  FolderAddFilled,
  FolderFilled,
  FolderOpenFilled,
  FormatPainterFilled,
  FunnelPlotFilled,
  GiftFilled,
  GoldFilled,
  GoldenFilled,
  GoogleCircleFilled,
  GooglePlusCircleFilled,
  GooglePlusSquareFilled,
  GoogleSquareFilled,
  HddFilled,
  HeartFilled,
  HomeFilled,
  HourglassFilled,
  IdcardFilled,
  IeCircleFilled,
  IeSquareFilled,
  InsuranceFilled,
  InteractionFilled,
  LayoutFilled,
  LikeFilled,
  LockFilled,
  MacCommandFilled,
  MailFilled,
  MedicineBoxFilled,
  MediumCircleFilled,
  MediumSquareFilled,
  MehFilled,
  MessageFilled,
  MobileFilled,
  MoneyCollectFilled,
  NotificationFilled,
  PayCircleFilled,
  PhoneFilled,
  PictureFilled,
  PlaySquareFilled,
  PoundCircleFilled,
  PrinterFilled,
  ProfileFilled,
  ProjectFilled,
  PropertySafetyFilled,
  PushpinFilled,
  QqCircleFilled,
  QqSquareFilled,
  ReadFilled,
  ReconciliationFilled,
  RedEnvelopeFilled,
  RedditCircleFilled,
  RedditSquareFilled,
  RestFilled,
  RobotFilled,
  RocketFilled,
  SafetyCertificateFilled,
  SaveFilled,
  ScheduleFilled,
  SecurityScanFilled,
  SettingFilled,
  ShopFilled,
  ShoppingFilled,
  SignalFilled,
  SketchCircleFilled,
  SketchSquareFilled,
  SkinFilled,
  SlackCircleFilled,
  SmileFilled,
  SoundFilled,
  StarFilled,
  SwitcherFilled,
  TabletFilled,
  TagFilled,
  TagsFilled,
  TaobaoSquareFilled,
  ThunderboltFilled,
  ToolFilled,
  TrademarkCircleFilled,
  TrophyFilled,
  TwitterCircleFilled,
  TwitterSquareFilled,
  UnlockFilled,
  UsbFilled,
  VideoCameraFilled,
  WalletFilled,
  ZhihuCircleFilled,
  ZhihuSquareFilled,
  UpCircleTwoTone,
  DownCircleTwoTone,
  LeftCircleTwoTone,
  RightCircleTwoTone,
  PlayCircleTwoTone,
  UpSquareTwoTone,
  DownSquareTwoTone,
  LeftSquareTwoTone,
  RightSquareTwoTone,
  QuestionCircleTwoTone,
  PlusCircleTwoTone,
  PauseCircleTwoTone,
  MinusCircleTwoTone,
  PlusSquareTwoTone,
  MinusSquareTwoTone,
  InfoCircleTwoTone,
  ExclamationCircleTwoTone,
  CloseCircleTwoTone,
  CloseSquareTwoTone,
  CheckCircleTwoTone,
  CheckSquareTwoTone,
  ClockCircleTwoTone,
  WarningTwoTone,
  StopTwoTone,
  EditTwoTone,
  CopyTwoTone,
  DeleteTwoTone,
  SnippetsTwoTone,
  DiffTwoTone,
  HighlightTwoTone,
  PieChartTwoTone,
  BoxPlotTwoTone,
  FundTwoTone,
  SlidersTwoTone,
  Html5TwoTone,
  AccountBookTwoTone,
  AlertTwoTone,
  ApiTwoTone,
  AppstoreTwoTone,
  AudioTwoTone,
  BankTwoTone,
  BellTwoTone,
  BookTwoTone,
  BugTwoTone,
  BuildTwoTone,
  BulbTwoTone,
  CalculatorTwoTone,
  CalendarTwoTone,
  CameraTwoTone,
  CarTwoTone,
  CarryOutTwoTone,
  CiCircleTwoTone,
  CiTwoTone,
  CloudTwoTone,
  CreditCardTwoTone,
  CrownTwoTone,
  CustomerServiceTwoTone,
  DashboardTwoTone,
  DatabaseTwoTone,
  CodeTwoTone,
  CompassTwoTone,
  ContactsTwoTone,
  ContainerTwoTone,
  ControlTwoTone,
  DislikeTwoTone,
  DollarCircleTwoTone,
  DollarTwoTone,
  EnvironmentTwoTone,
  EuroCircleTwoTone,
  EuroTwoTone,
  ExperimentTwoTone,
  EyeTwoTone,
  EyeInvisibleTwoTone,
  FileAddTwoTone,
  FileExcelTwoTone,
  FileExclamationTwoTone,
  FileTwoTone,
  FileImageTwoTone,
  FileMarkdownTwoTone,
  FilePdfTwoTone,
  FilePptTwoTone,
  FileTextTwoTone,
  FileUnknownTwoTone,
  FileWordTwoTone,
  FileZipTwoTone,
  FilterTwoTone,
  FireTwoTone,
  FlagTwoTone,
  FolderAddTwoTone,
  FolderTwoTone,
  FolderOpenTwoTone,
  FrownTwoTone,
  FunnelPlotTwoTone,
  GiftTwoTone,
  GoldTwoTone,
  HddTwoTone,
  HeartTwoTone,
  HomeTwoTone,
  HourglassTwoTone,
  IdcardTwoTone,
  InsuranceTwoTone,
  InteractionTwoTone,
  LayoutTwoTone,
  LikeTwoTone,
  LockTwoTone,
  MailTwoTone,
  MedicineBoxTwoTone,
  MehTwoTone,
  MessageTwoTone,
  MobileTwoTone,
  MoneyCollectTwoTone,
  NotificationTwoTone,
  PhoneTwoTone,
  PictureTwoTone,
  PlaySquareTwoTone,
  PoundCircleTwoTone,
  PrinterTwoTone,
  ProfileTwoTone,
  ProjectTwoTone,
  PropertySafetyTwoTone,
  PushpinTwoTone,
  ReconciliationTwoTone,
  RedEnvelopeTwoTone,
  RestTwoTone,
  RocketTwoTone,
  SafetyCertificateTwoTone,
  SaveTwoTone,
  ScheduleTwoTone,
  SecurityScanTwoTone,
  SettingTwoTone,
  ShopTwoTone,
  ShoppingTwoTone,
  SkinTwoTone,
  SmileTwoTone,
  SoundTwoTone,
  StarTwoTone,
  SwitcherTwoTone,
  TabletTwoTone,
  TagTwoTone,
  TagsTwoTone,
  ThunderboltTwoTone,
  ToolTwoTone,
  TrademarkCircleTwoTone,
  TrophyTwoTone,
  UnlockTwoTone,
  UsbTwoTone,
  VideoCameraTwoTone,
  WalletTwoTone,
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Link from "antd/es/typography/Link";
import Button from "antd/es/button";
import Sider from "antd/es/layout/Sider";
import Col from "antd/es/grid/col";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import {
  Affix,
  AutoComplete,
  Avatar,
  Badge,
  Breadcrumb,
  Calendar,
  Card,
  Carousel,
  Cascader,
  Collapse,
  DatePicker,
  Descriptions,
  Divider,
  Dropdown,
  Form,
  Input,
  InputNumber,
  Menu,
  Pagination,
  Rate,
  Row,
  Space,
  Steps,
  Table,
  Tooltip,
  Image,
  Empty,
  List,
  Popover,
  Statistic,
  Tabs,
  Tag,
  Timeline,
  Tree,
  Drawer,
  Modal,
  Popconfirm,
  Progress,
  Result,
  Skeleton,
  Spin,
  Select,
  Slider,
  Switch,
  TimePicker,
  Mentions,
  Anchor,
  TreeSelect,
  Transfer,
  QRCode,
  FloatButton,
  ConfigProvider,
  Watermark,
  Segmented,
  TourProps,
  Tour,
  message,
  notification,
} from "antd/es";
import Checkbox from "antd/es/checkbox/Checkbox";
import Radio, { Group } from "antd/es/radio";
import SubMenu from "antd/es/menu/SubMenu";
import { Alert, Upload } from "antd";
import Meta from "antd/es/card/Meta";
import TextArea from "antd/es/input/TextArea";
import Paragraph from "antd/es/typography/Paragraph";
import { useForm } from "antd/es/form/Form";
import { TransferDirection } from "antd/es/transfer";

export default () => (
  <Palette embeddable>
    <Category name="Button">
      <Component name="Button" docURL="https://ant.design/components/button/">
        <Variant>
          <Button>Default Button</Button>
        </Variant>
        <Variant name="primary">
          <Button type="primary">Primary Button</Button>
        </Variant>
        <Variant name="dashed">
          <Button type="dashed">Dashed Button</Button>
        </Variant>
        <Variant name="text">
          <Button type="text">Text Button</Button>
        </Variant>
        <Variant name="link">
          <Button type="link">Link Button</Button>
        </Variant>
        <Variant name="icon - circle">
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Variant>
        <Variant name="ghost">
          <Button ghost>Ghost Default</Button>
        </Variant>
        <Variant name="ghost - primary">
          <Button type="primary" ghost>
            Ghost Primary
          </Button>
        </Variant>
        <Variant name="ghost - dashed">
          <Button type="dashed" ghost>
            Ghost Dashed
          </Button>
        </Variant>
        <Variant name="ghost - link">
          <Button type="link" ghost>
            Ghost Link
          </Button>
        </Variant>
        <Variant name="danger">
          <Button danger>Danger Default</Button>
        </Variant>
        <Variant name="danger - primary">
          <Button type="primary" danger>
            Danger Primary
          </Button>
        </Variant>
        <Variant name="danger - dashed">
          <Button type="dashed" danger>
            Danger Dashed
          </Button>
        </Variant>
        <Variant name="danger - text">
          <Button type="text" danger>
            Danger Text
          </Button>
        </Variant>
        <Variant name="danger - link">
          <Button type="link" danger>
            Danger Link
          </Button>
        </Variant>
        <Variant
          name="block"
          docURL="https://ant.design/components/button/#components-button-demo-block"
        >
          <Button block>Block Default</Button>
        </Variant>
        <Variant name="block - primary">
          <Button type="primary" block>
            Block Primary
          </Button>
        </Variant>
        <Variant name="block - dashed">
          <Button type="dashed" block>
            Block Dashed
          </Button>
        </Variant>
        <Variant name="block - link">
          <Button type="link" block>
            Block Link
          </Button>
        </Variant>
      </Component>
    </Category>
    <Category name="Typography">
      <Component
        name="Title"
        docURL="https://ant.design/components/typography/#components-typography-demo-title"
      >
        <Variant name="h1">
          <Title level={1}>h1. Ant Design</Title>
        </Variant>
        <Variant name="h2">
          <Title level={2}>h2. Ant Design</Title>
        </Variant>
        <Variant name="h3">
          <Title level={3}>h3. Ant Design</Title>
        </Variant>
        <Variant name="h4">
          <Title level={4}>h4. Ant Design</Title>
        </Variant>
        <Variant name="h5">
          <Title level={5}>h5. Ant Design</Title>
        </Variant>
      </Component>
      <Component
        name="Text"
        docURL="https://ant.design/components/typography/#components-typography-demo-text"
      >
        <Variant>
          <Text>Ant Design (default)</Text>
        </Variant>
        <Variant name="secondary">
          <Text type="secondary">Ant Design (secondary)</Text>
        </Variant>
        <Variant name="success">
          <Text type="success">Ant Design (success)</Text>
        </Variant>
        <Variant name="warning">
          <Text type="warning">Ant Design (warning)</Text>
        </Variant>
        <Variant name="danger">
          <Text type="danger">Ant Design (danger)</Text>
        </Variant>
        <Variant name="disabled">
          <Text disabled>Ant Design (disabled)</Text>
        </Variant>
        <Variant name="mark">
          <Text mark>Ant Design (mark)</Text>
        </Variant>
        <Variant name="code">
          <Text code>Ant Design (code)</Text>
        </Variant>
        <Variant name="keyboard">
          <Text keyboard>Ant Design (keyboard)</Text>
        </Variant>
        <Variant name="underline">
          <Text underline>Ant Design (underline)</Text>
        </Variant>
        <Variant name="delete">
          <Text delete>Ant Design (delete)</Text>
        </Variant>
        <Variant name="strong">
          <Text strong>Ant Design (strong)</Text>
        </Variant>
        <Variant name="italic">
          <Text italic>Ant Design (italic)</Text>
        </Variant>
      </Component>
      <Component
        name="Link"
        docURL="https://ant.design/components/typography/#components-typography-demo-text"
      >
        <Variant>
          <Link href="https://ant.design" target="_blank">
            Ant Design (Link)
          </Link>
        </Variant>
      </Component>
    </Category>
    <Category name="Layout">
      <Component name="Grid" docURL="https://ant.design/components/grid/">
        <Variant name="two cols" previewLayout="stretch">
          <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
          </Row>
        </Variant>
        <Variant name="three cols" previewLayout="stretch">
          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
        </Variant>
        <Variant name="four cols" previewLayout="stretch">
          <Row>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
          </Row>
        </Variant>
      </Component>
      <Component name="Divider" docURL="https://ant.design/components/divider/">
        <Variant>
          <Divider />
        </Variant>
        <Variant name="dashed">
          <Divider dashed />
        </Variant>
        <Variant name="with title">
          <Divider>Title</Divider>
        </Variant>
        <Variant name="vertical">
          <Divider type="vertical" />
        </Variant>
      </Component>
      <Component name="Space" docURL="https://ant.design/components/space/">
        <Variant>
          <Space></Space>
        </Variant>
        <Variant name="vertical">
          <Space direction="vertical"></Space>
        </Variant>
      </Component>
      <Component
        name="App Layout"
        docURL="https://ant.design/components/layout/"
      >
        <Variant>
          <Layout>
            <Header>
              <span style={{ color: "#FFF" }}>Header</span>
            </Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Variant>
        <Variant name="left sider">
          <Layout>
            <Header>
              <span style={{ color: "#FFF" }}>Header</span>
            </Header>
            <Layout>
              <Sider>
                <span style={{ color: "#FFF" }}>Sider</span>
              </Sider>
              <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
        </Variant>
        <Variant name="right sider">
          <Layout>
            <Header>
              <span style={{ color: "#FFF" }}>Header</span>
            </Header>
            <Layout>
              <Content>Content</Content>
              <Sider>
                <span style={{ color: "#FFF" }}>Sider</span>
              </Sider>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
        </Variant>
        <Variant name="left full sider">
          <Layout>
            <Sider>
              <span style={{ color: "#FFF" }}>Sider</span>
            </Sider>
            <Layout>
              <Header color={"white"}>
                <span style={{ color: "#FFF" }}>Header</span>
              </Header>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        </Variant>
      </Component>
    </Category>
    <Category name="Form">
      <Component name="Form" docURL="https://ant.design/components/form/">
        <Variant proto={FormProto} />
      </Component>
      <Component
        name="Form.Item"
        docURL="https://ant.design/components/form/#components-form-demo-dynamic-form-item"
      >
        <Variant name="Input">
          <Form.Item label="Input" name="input">
            <Input />
          </Form.Item>
        </Variant>
        <Variant name="Checkbox">
          <Form.Item label="Checkbox" name="checkbox" valuePropName="checked">
            <Checkbox>checkbox</Checkbox>
          </Form.Item>
        </Variant>
        <Variant name="Radio">
          <Form.Item label="Radio" name="radio">
            <Radio.Group>
              <Radio value="first"> First </Radio>
              <Radio value="second"> Second </Radio>
            </Radio.Group>
          </Form.Item>
        </Variant>
        <Variant name="Select">
          <Form.Item label="Select">
            <Select>
              <Select.Option value="opt1">Option 1</Select.Option>
              <Select.Option value="opt2">Option 2</Select.Option>
            </Select>
          </Form.Item>
        </Variant>
        <Variant name="Cascader">
          <Form.Item label="Cascader" name="cascader">
            <Cascader
              options={[
                {
                  value: "item",
                  label: "Item",
                  children: [
                    {
                      value: "subitem",
                      label: "Sub Item",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
        </Variant>
        <Variant name="DatePicker">
          <Form.Item label="DatePicker" name="datepicker">
            <DatePicker />
          </Form.Item>
        </Variant>
        <Variant name="InputNumber">
          <Form.Item label="InputNumber" name="inputnumber">
            <InputNumber />
          </Form.Item>
        </Variant>
        <Variant name="TextArea">
          <Form.Item label="TextArea" name="textarea">
            <TextArea rows={4} />
          </Form.Item>
        </Variant>
        <Variant name="Switch">
          <Form.Item label="Switch" name="switch" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Variant>
        <Variant name="Upload">
          <Form.Item label="Upload" name="upload" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
        </Variant>
        <Variant name="Button">
          <Form.Item label="Button">
            <Button>Button</Button>
          </Form.Item>
        </Variant>
      </Component>
    </Category>
    <Category name="Data Entry">
      <Component
        name="AutoComplete"
        docURL="https://ant.design/components/auto-complete/"
      >
        <Variant>
          <AutoComplete />
        </Variant>
      </Component>
      <Component
        name="Cascader"
        docURL="https://ant.design/components/cascader/"
      >
        <Variant>
          <Cascader />
        </Variant>
      </Component>
      <Component
        name="Checkbox"
        docURL="https://ant.design/components/checkbox/"
      >
        <Variant>
          <Checkbox>Checkbox</Checkbox>
        </Variant>
      </Component>
      <Component
        name="DatePicker"
        docURL="https://ant.design/components/date-picker/"
      >
        <Variant>
          <DatePicker />
        </Variant>
        <Variant name="show time">
          <DatePicker showTime={true} />
        </Variant>
        <Variant name="week">
          <DatePicker picker="week" />
        </Variant>
        <Variant name="month">
          <DatePicker picker="month" />
        </Variant>
        <Variant name="quarter">
          <DatePicker picker="quarter" />
        </Variant>
        <Variant name="year">
          <DatePicker picker="year" />
        </Variant>
        <Variant name="presets">
          <DatePicker
            presets={[
              { label: "Yesterday", value: dayjs().add(-1, "d") },
              { label: "Last Week", value: dayjs().add(-7, "d") },
              { label: "Last Month", value: dayjs().add(-1, "month") },
            ]}
          />
        </Variant>
        <Variant name="range">
          <DatePicker.RangePicker />
        </Variant>
      </Component>
      <Component name="Input" docURL="https://ant.design/components/input/">
        <Variant>
          <Input />
        </Variant>
        <Variant name="large">
          <Input size="large" />
        </Variant>
        <Variant name="small">
          <Input size="small" />
        </Variant>
        <Variant name="with prefix">
          <Input addonBefore="http://" defaultValue="mysite" />
        </Variant>
        <Variant name="with postfix">
          <Input addonAfter=".com" defaultValue="mysite" />
        </Variant>
      </Component>
      <Component
        name="InputNumber"
        docURL="https://ant.design/components/input-number/"
      >
        <Variant>
          <InputNumber min={0} max={10} defaultValue={5} />
        </Variant>
      </Component>
      <Component
        name="Mentions"
        docURL="https://ant.design/components/mentions/"
      >
        <Variant>
          <Mentions
            style={{ width: "100%" }}
            defaultValue="@user1"
            options={[
              {
                value: "user1",
                label: "user1",
              },
              {
                value: "user2",
                label: "user2",
              },
              {
                value: "user3",
                label: "user3",
              },
            ]}
          />
        </Variant>
        <Variant name="with Form.Item">
          <Form.Item
            name="coders"
            label="Top coders"
            rules={[
              {
                validator: async (_: any, value: string) => {
                  const mentions = Mentions.getMentions(value);

                  if (mentions.length < 2) {
                    throw new Error("More than one must be selected!");
                  }
                },
              },
            ]}
          >
            <Mentions
              options={[
                {
                  value: "user1",
                  label: "user1",
                },
                {
                  value: "user2",
                  label: "user2",
                },
                {
                  value: "user3",
                  label: "user3",
                },
              ]}
            />
          </Form.Item>
        </Variant>
        <Variant name="placement">
          <Mentions
            placement="top"
            options={[
              {
                value: "user1",
                label: "user1",
              },
              {
                value: "user2",
                label: "user2",
              },
              {
                value: "user3",
                label: "user3",
              },
            ]}
          />
        </Variant>
        <Variant name="disabled">
          <Mentions
            placeholder="this is disabled Mentions"
            disabled
            defaultValue="@user1"
            options={[
              {
                value: "user1",
                label: "user1",
              },
              {
                value: "user2",
                label: "user2",
              },
              {
                value: "user3",
                label: "user3",
              },
            ]}
          />
        </Variant>
        <Variant name="readOnly">
          <Mentions
            placeholder="this is readOnly Mentions"
            readOnly
            defaultValue="@user1"
            options={[
              {
                value: "user1",
                label: "user1",
              },
              {
                value: "user2",
                label: "user2",
              },
              {
                value: "user3",
                label: "user3",
              },
            ]}
          />
        </Variant>
        <Variant name="status">
          <Mentions
            defaultValue="@user1"
            status="error"
            options={[
              {
                value: "user1",
                label: "user1",
              },
              {
                value: "user2",
                label: "user2",
              },
              {
                value: "user3",
                label: "user3",
              },
            ]}
          />
        </Variant>
      </Component>
      <Component name="Radio" docURL="https://ant.design/components/radio/">
        <Variant>
          <Group>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Group>
        </Variant>
      </Component>
      <Component name="Rate" docURL="https://ant.design/components/rate/">
        <Variant>
          <Rate />
        </Variant>
      </Component>
      <Component name="Select" docURL="https://ant.design/components/select/">
        <Variant>
          <Select defaultValue="lucy">
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="disabled" disabled>
              Disabled
            </Select.Option>
          </Select>
        </Variant>
      </Component>
      <Component name="Slider" docURL="https://ant.design/components/slider/">
        <Variant previewLayout="stretch">
          <Slider defaultValue={30} />
        </Variant>
      </Component>
      <Component name="Switch" docURL="https://ant.design/components/switch/">
        <Variant>
          <Switch defaultChecked={false} />
        </Variant>
      </Component>
      <Component
        name="TimePicker"
        docURL="https://ant.design/components/time-picker/"
      >
        <Variant>
          <TimePicker />
        </Variant>
      </Component>
      <Component
        name="Transfer"
        docURL="https://ant.design/components/transfer"
      >
        <Variant proto={TransferProto} />
      </Component>
      <Component
        name="TreeSelect"
        docURL="https://ant.design/components/tree-select"
      >
        <Variant>
          <TreeSelect
            showSearch
            style={{ width: "100%" }}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Please select"
            allowClear
            treeDefaultExpandAll
            treeData={[
              {
                value: "parent",
                title: "parent",
                children: [
                  {
                    value: "leaf1",
                    title: "leaf1",
                  },
                  {
                    value: "leaf2",
                    title: "leaf2",
                  },
                ],
              },
            ]}
          />
        </Variant>
        <Variant name="multiple">
          <TreeSelect
            showSearch
            style={{ width: "100%" }}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Please select"
            allowClear
            multiple
            treeDefaultExpandAll
            treeData={[
              {
                value: "parent",
                title: "parent",
                children: [
                  {
                    value: "leaf1",
                    title: "leaf1",
                  },
                  {
                    value: "leaf2",
                    title: "leaf2",
                  },
                ],
              },
            ]}
          />
        </Variant>
        <Variant name="checkable">
          <TreeSelect
            showSearch
            style={{ width: "100%" }}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Please select"
            showCheckedStrategy={TreeSelect.SHOW_PARENT}
            allowClear
            treeDefaultExpandAll
            treeData={[
              {
                value: "parent",
                title: "parent",
                children: [
                  {
                    value: "leaf1",
                    title: "leaf1",
                  },
                  {
                    value: "leaf2",
                    title: "leaf2",
                  },
                ],
              },
            ]}
          />
        </Variant>
        <Variant name="treeLine">
          <TreeSelect
            showSearch
            style={{ width: "100%" }}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Please select"
            treeLine={true && { showLeafIcon: true }}
            allowClear
            treeDefaultExpandAll
            treeData={[
              {
                value: "parent",
                title: "parent",
                children: [
                  {
                    value: "leaf1",
                    title: "leaf1",
                  },
                  {
                    value: "leaf2",
                    title: "leaf2",
                  },
                ],
              },
            ]}
          />
        </Variant>
        <Variant name="placement">
          <TreeSelect
            placement="topRight"
            showSearch
            style={{ width: "100%" }}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Please select"
            allowClear
            treeDefaultExpandAll
            treeData={[
              {
                value: "parent",
                title: "parent",
                children: [
                  {
                    value: "leaf1",
                    title: "leaf1",
                  },
                  {
                    value: "leaf2",
                    title: "leaf2",
                  },
                ],
              },
            ]}
          />
        </Variant>
        <Variant name="status">
          <TreeSelect
            status="error"
            showSearch
            style={{ width: "100%" }}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Please select"
            allowClear
            treeDefaultExpandAll
            treeData={[
              {
                value: "parent",
                title: "parent",
                children: [
                  {
                    value: "leaf1",
                    title: "leaf1",
                  },
                  {
                    value: "leaf2",
                    title: "leaf2",
                  },
                ],
              },
            ]}
          />
        </Variant>
      </Component>
      <Component name="Upload" docURL="https://ant.design/components/upload">
        <Variant>
          <Upload
            name="file"
            headers={{
              authorization: "authorization-text",
            }}
            onChange={(info) => {
              if (info.file.status !== "uploading") {
                console.log(info.file, info.fileList);
              }
              if (info.file.status === "done") {
                console.log(`${info.file.name} file uploaded successfully`);
              } else if (info.file.status === "error") {
                console.error(`${info.file.name} file upload failed.`);
              }
            }}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Variant>
        <Variant name="avatar">
          <Upload
            name="avatar"
            listType="picture-circle"
            className="avatar-uploader"
            showUploadList={false}
            onChange={(info) => {
              if (info.file.status !== "uploading") {
                console.log(info.file, info.fileList);
              }
              if (info.file.status === "done") {
                console.log(`${info.file.name} file uploaded successfully`);
              } else if (info.file.status === "error") {
                console.error(`${info.file.name} file upload failed.`);
              }
            }}
          >
            <div style={{ marginTop: 8 }}>Upload</div>
          </Upload>
        </Variant>
        <Variant name="fileList">
          <Upload
            listType="picture-card"
            fileList={[
              {
                uid: "-1",
                name: "image.png",
                status: "done",
                url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
              },
              {
                uid: "-2",
                percent: 50,
                name: "image.png",
                status: "uploading",
                url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
              },
              {
                uid: "-5",
                name: "image.png",
                status: "error",
              },
            ]}
          />
        </Variant>
        <Variant name="drag and drop">
          <Upload.Dragger name="file" multiple>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Upload.Dragger>
        </Variant>
      </Component>
    </Category>
    <Category name="Data Display">
      <Component name="Avatar" docURL="https://ant.design/components/avatar/">
        <Variant name="letters">
          <Avatar>User</Avatar>
        </Variant>
        <Variant name="letters - square shape">
          <Avatar shape="square">User</Avatar>
        </Variant>
        <Variant name="letters - with gap">
          <Avatar gap={4}>User</Avatar>
        </Variant>
        <Variant name="circle icon">
          <Avatar icon={<UserOutlined />} />
        </Variant>
        <Variant name="square icon">
          <Avatar shape="square" icon={<UserOutlined />} />
        </Variant>
        <Variant name="image type">
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </Variant>
        <Variant name="complex source">
          <Avatar
            src={
              <Image
                src="https://joeschmoe.io/api/v1/random"
                style={{ width: 32 }}
              />
            }
          />
        </Variant>
        <Variant name="with count badge">
          <Badge count={1}>
            <Avatar>User</Avatar>
          </Badge>
        </Variant>
        <Variant name="with dot badge">
          <Badge dot>
            <Avatar>User</Avatar>
          </Badge>
        </Variant>
        <Variant name="responsive size">
          <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}>
            User
          </Avatar>
        </Variant>
      </Component>
      <Component
        name="Avatar.Group"
        docURL="https://ant.design/components/avatar/#components-avatar-demo-group"
      >
        <Variant>
          <Avatar.Group>
            <Avatar icon={<UserOutlined />}>U1</Avatar>
            <Avatar icon={<UserOutlined />}>U2</Avatar>
            <Avatar icon={<UserOutlined />}>U3</Avatar>
          </Avatar.Group>
        </Variant>
        <Variant name="display max count">
          <Avatar.Group maxCount={2}>
            <Avatar icon={<UserOutlined />} />
            <Avatar icon={<UserOutlined />} />
            <Avatar icon={<UserOutlined />} />
          </Avatar.Group>
        </Variant>
      </Component>
      <Component name="Badge" docURL="https://ant.design/components/badge/">
        <Variant name="success status">
          <Badge status="success" />
        </Variant>
        <Variant name="success status with text">
          <Badge status="success" text="Success" />
        </Variant>
        <Variant name="count">
          <Badge count={25} />
        </Variant>
        <Variant name="overflow count">
          <Badge count={100} overflowCount={99} />
        </Variant>
        <Variant name="icon">
          <Badge count={<ClockCircleOutlined style={{ color: "#f5222d" }} />} />
        </Variant>
        <Variant name="orange color with text">
          <Badge color="orange" text="orange" />
        </Variant>
        <Variant name="on avatar - count">
          <Badge count={5}>
            <Avatar shape="square" size="large" />
          </Badge>
        </Variant>
        <Variant name="on avatar - clickable">
          <a href="#">
            <Badge count={5}>
              <Avatar shape="square" size="large" />
            </Badge>
          </a>
        </Variant>
        <Variant name="on avatar - show zero">
          <Badge count={0} showZero>
            <Avatar shape="square" size="large" />
          </Badge>
        </Variant>
        <Variant name="on avatar - icon">
          <Badge count={<ClockCircleOutlined style={{ color: "#f5222d" }} />}>
            <Avatar shape="square" size="large" />
          </Badge>
        </Variant>
        <Variant name="on avatar - overflow">
          <Badge count={99} overflowCount={10}>
            <Avatar shape="square" size="large" />
          </Badge>
        </Variant>
        <Variant name="on avatar - offset">
          <Badge count={5} offset={[10, 10]}>
            <Avatar shape="square" size="large" />
          </Badge>
        </Variant>
        <Variant name="on avatar - small sized count">
          <Badge size="small" count={5}>
            <Avatar shape="square" size="large" />
          </Badge>
        </Variant>
        <Variant name="on icon - dot">
          <Badge dot>
            <NotificationOutlined style={{ fontSize: 16 }} />
          </Badge>
        </Variant>
        <Variant name="on link - dot">
          <Badge dot>
            <a href="#">Link something</a>
          </Badge>
        </Variant>
      </Component>
      <Component
        name="Badge.Ribbon"
        docURL="https://ant.design/components/badge/#components-badge-demo-ribbbon"
      >
        <Variant name="on card">
          <Badge.Ribbon text="Hippies">
            <Card title="Pushes open the window" size="small">
              and raises the spyglass.
            </Card>
          </Badge.Ribbon>
        </Variant>
      </Component>
      <Component
        name="Calendar"
        docURL="https://ant.design/components/calendar/"
      >
        <Variant>
          <Calendar />
        </Variant>
      </Component>
      <Component name="Card" docURL="https://ant.design/components/card/">
        <Variant name="title and content">
          <Card title="Card title">Card content</Card>
        </Variant>
        <Variant name="extra link">
          <Card title="Card title" extra={<a href="#">More</a>}>
            Card content
          </Card>
        </Variant>
        <Variant name="borderless">
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Variant>
        <Variant name="meta content">
          <Card title="Card title">
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Variant>
        <Variant name="3 in grid">
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Card title">Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title">Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title">Card content</Card>
            </Col>
          </Row>
        </Variant>
        <Variant name="built-in loading">
          <Card title="Card title" loading={true}>
            Card content
          </Card>
        </Variant>
        <Variant name="skeleton loading">
          <Card title="Card title">
            <Skeleton loading={true} avatar active>
              Card content
            </Skeleton>
          </Card>
        </Variant>
        <Variant name="with actions">
          <Card
            title="Card title"
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            Card content
          </Card>
        </Variant>
        <Variant name="with inner cards">
          <Card title="Card title">
            <Card type="inner" title="Inner Card title">
              Inner Card content
            </Card>
            <Card
              type="inner"
              title="Inner Card title"
              style={{ marginTop: 16 }}
            >
              Inner Card content
            </Card>
          </Card>
        </Variant>
      </Component>
      <Component
        name="Card.Grid"
        docURL="https://ant.design/components/card/#components-card-demo-grid-card"
      >
        <Variant>
          <Card title="Card title">
            <Card.Grid>Content</Card.Grid>
            <Card.Grid>Content</Card.Grid>
          </Card>
        </Variant>
      </Component>
      <Component
        name="Carousel"
        docURL="https://ant.design/components/carousel/"
      >
        <Variant previewLayout="stretch">
          <Carousel>
            <div>
              <h3
                style={{
                  margin: 0,
                  height: "160px",
                  color: "#fff",
                  lineHeight: "160px",
                  textAlign: "center",
                  background: "#364d79",
                }}
              >
                1
              </h3>
            </div>
            <div>
              <h3
                style={{
                  margin: 0,
                  height: "160px",
                  color: "#fff",
                  lineHeight: "160px",
                  textAlign: "center",
                  background: "#364d79",
                }}
              >
                2
              </h3>
            </div>
          </Carousel>
        </Variant>
      </Component>
      <Component
        name="Collapse"
        docURL="https://ant.design/components/collapse/"
      >
        <Variant>
          <Collapse>
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 2</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 3</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="default active panel">
          <Collapse defaultActiveKey={["1"]}>
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 2</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 3</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="accordion mode">
          <Collapse accordion>
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 2</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 3</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="borderless">
          <Collapse bordered={false}>
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 2</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 3</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="custom expand icon">
          <Collapse
            accordion
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
          >
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 2</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 3</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="no arrow">
          <Collapse>
            <Collapse.Panel
              header="This is panel header 1"
              key="1"
              showArrow={false}
            >
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel
              header="This is panel header 2"
              key="2"
              showArrow={false}
            >
              <p>Panel content 2</p>
            </Collapse.Panel>
            <Collapse.Panel
              header="This is panel header 3"
              key="3"
              showArrow={false}
            >
              <p>Panel content 3</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="expand icon - position right">
          <Collapse expandIconPosition="right">
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 2</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 3</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="ghost">
          <Collapse ghost>
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 2</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 3</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
      </Component>
      <Component
        name="Descriptions"
        docURL="https://ant.design/components/descriptions/"
      >
        <Variant>
          <Descriptions title="User Info">
            <Descriptions.Item label="UserName">Jack Smith</Descriptions.Item>
          </Descriptions>
        </Variant>
        <Variant name="bordered">
          <Descriptions title="User Info" bordered>
            <Descriptions.Item label="UserName">Jack Smith</Descriptions.Item>
          </Descriptions>
        </Variant>
        <Variant name="small size">
          <Descriptions title="User Info" size="small">
            <Descriptions.Item label="UserName">Jack Smith</Descriptions.Item>
          </Descriptions>
        </Variant>
        <Variant name="responsive size">
          <Descriptions
            title="User Info"
            column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
          >
            <Descriptions.Item label="UserName">Jack Smith</Descriptions.Item>
          </Descriptions>
        </Variant>
      </Component>
      <Component name="Empty" docURL="https://ant.design/components/empty/">
        <Variant name="basic">
          <Empty />
        </Variant>
        <Variant name="antd image">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </Variant>
        <Variant name="image source">
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{ height: 60 }}
          />
        </Variant>
        <Variant name="with description">
          <Empty description={<span>Description</span>} />
        </Variant>
        <Variant name="no description">
          <Empty description={false} />
        </Variant>
        <Variant name="with extra content">
          <Empty>
            <Button type="primary">Create Now</Button>
          </Empty>
        </Variant>
      </Component>
      <Component name="Image" docURL="https://ant.design/components/image/">
        <Variant name="basic">
          <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Variant>
        <Variant name="custom preview">
          <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            preview={{
              src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            }}
          />
        </Variant>
        <Variant name="fault tolerant">
          <Image
            width={200}
            height={200}
            src="error"
            fallback="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          />
        </Variant>
      </Component>
      <Component
        name="Image.PreviewGroup"
        docURL="https://ant.design/components/image/#components-image-demo-preview-group"
      >
        <Variant>
          <Image.PreviewGroup>
            <Image
              width={200}
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            />
            <Image
              width={200}
              src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            />
          </Image.PreviewGroup>
        </Variant>
      </Component>
      <Component name="List" docURL="https://ant.design/components/list/">
        <Variant name="basic">
          <List
            dataSource={["Foo", "Bar"]}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Variant>
        <Variant name="with footer and header">
          <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            dataSource={["Foo", "Bar"]}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Variant>
        <Variant name="items with meta and extra img">
          <List
            itemLayout="vertical"
            dataSource={[
              {
                title: "Foo",
                href: "https://ant.design",
                avatar: "https://joeschmoe.io/api/v1/random",
                description:
                  "Ant Design, a design language for background applications, is refined by Ant UED Team.",
                content:
                  "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
              },
              {
                title: "Bar",
                href: "https://ant.design",
                avatar: "https://joeschmoe.io/api/v1/random",
                description:
                  "Ant Design, a design language for background applications, is refined by Ant UED Team.",
                content:
                  "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
              },
            ]}
            renderItem={(item) => (
              <List.Item
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            )}
          />
        </Variant>
        <Variant name="grid layout">
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={[
              { title: "Title 1" },
              { title: "Title 2" },
              { title: "Title 3" },
            ]}
            renderItem={(item) => (
              <List.Item>
                <Card title={item.title}>Card content</Card>
              </List.Item>
            )}
          />
        </Variant>
        <Variant name="responsive grid layout">
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
            dataSource={[
              { title: "Title 1" },
              { title: "Title 2" },
              { title: "Title 3" },
            ]}
            renderItem={(item) => (
              <List.Item>
                <Card title={item.title}>Card content</Card>
              </List.Item>
            )}
          />
        </Variant>
      </Component>
      <Component name="Popover" docURL="https://ant.design/components/popover/">
        <Variant name="basic">
          <Popover content="Content" title="Title">
            <Button type="primary">Hover me</Button>
          </Popover>
        </Variant>
        <Variant name="trigger by focus">
          <Popover content="Content" title="Title" trigger="focus">
            <Button>Focus me</Button>
          </Popover>
        </Variant>
        <Variant name="trigger by click">
          <Popover content="Content" title="Title" trigger="click">
            <Button>Click me</Button>
          </Popover>
        </Variant>
        <Variant name="arrow pointer at center">
          <Popover
            placement="topLeft"
            title="Title"
            content="Content"
            arrowPointAtCenter
          >
            <Button>Arrow points to center</Button>
          </Popover>
        </Variant>
        <Variant name="placement - right top">
          <Popover
            placement="rightTop"
            title="Title"
            content="Content"
            trigger="click"
          >
            <Button>RT</Button>
          </Popover>
        </Variant>
      </Component>
      <Component name="QRCode" docURL="https://ant.design/components/qrcode">
        <Variant>
          <QRCode value="https://ant.design/" />
        </Variant>
        <Variant name="status">
          <QRCode status="loading" value="https://ant.design/" />
        </Variant>
        <Variant name="custom size">
          <QRCode
            errorLevel="H"
            size={200}
            iconSize={50}
            value="https://ant.design/"
            icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          />
        </Variant>
        <Variant name="custom color">
          <QRCode errorLevel="H" color="red" value="https://ant.design/" />
        </Variant>
        <Variant name="with icon">
          <QRCode
            errorLevel="H"
            value="https://ant.design/"
            icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          />
        </Variant>
      </Component>
      <Component
        name="Statistic"
        docURL="https://ant.design/components/statistic/"
      >
        <Variant name="basic">
          <Statistic title="Active Users" value={112893} />
        </Variant>
        <Variant name="loading">
          <Statistic title="Active Users" value={112893} loading />
        </Variant>
        <Variant name="with precision">
          <Statistic
            title="Account Balance (CNY)"
            value={112893}
            precision={2}
          />
        </Variant>
        <Variant name="prefix icon">
          <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
        </Variant>
        <Variant name="suffix text">
          <Statistic title="Unmerged" value={93} suffix=" / 100" />
        </Variant>
        <Variant name="in card">
          <Row gutter={16}>
            <Col span={12}>
              <Card>
                <Statistic title="Active" value={11.28} />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic title="Idle" value={9.3} />
              </Card>
            </Col>
          </Row>
        </Variant>
      </Component>
      <Component name="Table" docURL="https://ant.design/components/table/">
        <Variant name="basic">
          <Table
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
          />
        </Variant>
        <Variant name="jsx style">
          <Table
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
          >
            <Table.Column title="Name" dataIndex="name" key="name" />
            <Table.Column title="Age" dataIndex="age" key="age" />
          </Table>
        </Variant>
        <Variant name="checkbox selection">
          <Table
            rowSelection={{ type: "checkbox" }}
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
          />
        </Variant>
        <Variant name="radio selection">
          <Table
            rowSelection={{ type: "radio" }}
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
          />
        </Variant>
        <Variant name="groups selection">
          <Table
            rowSelection={{
              type: "checkbox",
              selections: [
                Table.SELECTION_ALL,
                Table.SELECTION_INVERT,
                Table.SELECTION_NONE,
              ],
            }}
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
          />
        </Variant>
        <Variant name="filter and sorter">
          <Table
            columns={[
              {
                title: "Name",
                dataIndex: "name",
                filters: [
                  {
                    text: "John",
                    value: "John",
                  },
                  {
                    text: "Lucy",
                    value: "Lucy",
                  },
                ],
                onFilter: (value: any, record) =>
                  record.name.indexOf(value) === 0,
              },
              {
                title: "Age",
                dataIndex: "age",
                sorter: (a, b) => a.age - b.age,
              },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
          />
        </Variant>
        <Variant name="middle size">
          <Table
            size="middle"
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
          />
        </Variant>
        <Variant name="title and footer">
          <Table
            title={() => "Header"}
            footer={() => "Footer"}
            size="middle"
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
          />
        </Variant>
        <Variant name="expandable rows">
          <Table
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
            dataSource={[
              {
                key: 1,
                name: "John",
                age: 30,
                description: "My name is John Brown, I am 32 years old",
              },
              { key: 2, name: "Lucy", age: 31 },
            ]}
            expandable={{
              expandedRowRender: (record: any) => (
                <p style={{ margin: 0 }}>{record.description}</p>
              ),
              rowExpandable: (record) => record.name !== "Lucy",
            }}
          />
        </Variant>
        <Variant name="row span">
          <Table
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
              {
                title: "Phone",
                dataIndex: "phone",
                render: (value, row, index) => {
                  if (index === 0) {
                    return {
                      children: value,
                      props: { rowSpan: 2 },
                    };
                  }
                  if (index === 1) {
                    return {
                      children: value,
                      props: { rowSpan: 0 },
                    };
                  }
                  return value;
                },
              },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30, phone: "0575-22098909" },
              { key: 2, name: "Lucy", age: 31, phone: "0575-22098909" },
              { key: 3, name: "Joe", age: 25, phone: "0571-22098333" },
            ]}
          />
        </Variant>
        <Variant name="col span">
          <Table
            columns={[
              {
                title: "Name",
                dataIndex: "name",
                render: (value, record, index) => {
                  if (index === 2) {
                    return { children: value, props: { colSpan: 3 } };
                  }
                  return value;
                },
              },
              {
                title: "Age",
                dataIndex: "age",
                render: (value, record, index) => {
                  if (index === 2) {
                    return { children: value, props: { colSpan: 0 } };
                  }
                  return value;
                },
              },
              {
                title: "Phone",
                dataIndex: "phone",
                render: (value, record, index) => {
                  if (index === 2) {
                    return { children: value, props: { colSpan: 0 } };
                  }
                  return value;
                },
              },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30, phone: "0575-22098909" },
              { key: 2, name: "Lucy", age: 31, phone: "0575-22098909" },
              { key: 3, name: "Joe", age: 25, phone: "0571-22098333" },
            ]}
          />
        </Variant>
        <Variant
          name="tree data"
          docURL="https://ant.design/components/table/#components-table-demo-tree-data"
        >
          <Table
            columns={[
              {
                title: "Name",
                dataIndex: "name",
                key: "name",
              },
              {
                title: "Age",
                dataIndex: "age",
                key: "age",
                width: "12%",
              },
              {
                title: "Address",
                dataIndex: "address",
                width: "30%",
                key: "address",
              },
            ]}
            dataSource={[
              {
                key: 1,
                name: "John Brown sr.",
                age: 60,
                address: "New York No. 1 Lake Park",
                children: [
                  {
                    key: 11,
                    name: "John Brown",
                    age: 42,
                    address: "New York No. 2 Lake Park",
                  },
                  {
                    key: 12,
                    name: "John Brown jr.",
                    age: 30,
                    address: "New York No. 3 Lake Park",
                    children: [
                      {
                        key: 121,
                        name: "Jimmy Brown",
                        age: 16,
                        address: "New York No. 3 Lake Park",
                      },
                    ],
                  },
                  {
                    key: 13,
                    name: "Jim Green sr.",
                    age: 72,
                    address: "London No. 1 Lake Park",
                    children: [
                      {
                        key: 131,
                        name: "Jim Green",
                        age: 42,
                        address: "London No. 2 Lake Park",
                        children: [
                          {
                            key: 1311,
                            name: "Jim Green jr.",
                            age: 25,
                            address: "London No. 3 Lake Park",
                          },
                          {
                            key: 1312,
                            name: "Jimmy Green sr.",
                            age: 18,
                            address: "London No. 4 Lake Park",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                key: 2,
                name: "Joe Black",
                age: 32,
                address: "Sidney No. 1 Lake Park",
              },
            ]}
          />
        </Variant>
        <Variant
          name="fixed header"
          docURL="https://ant.design/components/table/#components-table-demo-fixed-header"
        >
          <Table
            dataSource={Array.from(Array(30).keys()).map((value, index) => ({
              key: index,
              name: `Edward King ${index}`,
              age: 32,
              address: `London, Park Lane no. ${index}`,
            }))}
            scroll={{ y: 240 }}
            columns={[
              {
                title: "Name",
                dataIndex: "name",
                width: 150,
              },
              {
                title: "Age",
                dataIndex: "age",
                width: 150,
              },
              {
                title: "Address",
                dataIndex: "address",
              },
            ]}
          />
        </Variant>
        <Variant name="ellipsis">
          <Table
            columns={[
              { title: "Name", dataIndex: "name", ellipsis: true },
              { title: "address", dataIndex: "address", ellipsis: true },
            ]}
            dataSource={[
              {
                key: 1,
                name: "John",
                address: "Long Column Long Column Long Column",
              },
              {
                key: 2,
                name: "Lucy",
                address: "Long Column Long Column Long Column",
              },
            ]}
          />
        </Variant>
        <Variant
          name="summary"
          docURL="https://ant.design/components/table/#components-table-demo-summary"
        >
          <Table
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
            summary={() => (
              <Table.Summary fixed>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0}>Summary</Table.Summary.Cell>
                  <Table.Summary.Cell index={1}>
                    This is a summary content
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            )}
          />
        </Variant>
        <Variant name="responsive">
          <Table
            columns={[
              {
                title: "Name (all screens)",
                dataIndex: "name",
                key: "name",
                render: (text) => <a>{text}</a>,
              },
              {
                title: "Age (medium screen or bigger)",
                dataIndex: "age",
                key: "age",
                responsive: ["md"],
              },
              {
                title: "Address (large screen or bigger)",
                dataIndex: "address",
                key: "address",
                responsive: ["lg"],
              },
            ]}
            dataSource={[
              {
                key: "1",
                name: "John Brown",
                age: 32,
                address: "New York No. 1 Lake Park",
              },
            ]}
          />
        </Variant>
        <Variant name="pagination none">
          <Table
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
            pagination={false}
          />
        </Variant>
        <Variant name="pagination top right">
          <Table
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 },
            ]}
            pagination={{ position: ["topRight", "none" as any] }}
          />
        </Variant>
      </Component>
      <Component name="Tabs" docURL="https://ant.design/components/tabs/">
        <Variant name="basic">
          <Tabs>
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="default active key">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="centred">
          <Tabs centered>
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="with icon">
          <Tabs>
            <Tabs.TabPane
              tab={
                <span>
                  <AppleOutlined />
                  Tab 1
                </span>
              }
              key="1"
            >
              Tab 1
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Tab 2
                </span>
              }
              key="2"
            >
              Tab 2
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="tab position left">
          <Tabs tabPosition="left">
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="with extra actions on both sides">
          <Tabs
            tabBarExtraContent={{
              left: (
                <Button style={{ marginRight: "16px" }}>
                  Left Extra Action
                </Button>
              ),
              right: (
                <Button style={{ marginLeft: "16px" }}>
                  Right Extra Action
                </Button>
              ),
            }}
          >
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="type card">
          <Tabs type="card">
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="type editable-card">
          <Tabs type="editable-card">
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
      </Component>
      <Component name="Tag" docURL="https://ant.design/components/tag/">
        <Variant name="basic">
          <Tag>Tag</Tag>
        </Variant>
        <Variant name="closable">
          <Tag closable>Tag</Tag>
        </Variant>
        <Variant name="green color">
          <Tag color="green">green</Tag>
        </Variant>
        <Variant name="custom color">
          <Tag color="#f50">#f50</Tag>
        </Variant>
        <Variant name="with icon">
          <Tag icon={<YoutubeOutlined />} color="#cd201f">
            Youtube
          </Tag>
        </Variant>
      </Component>
      <Component
        name="Timeline"
        docURL="https://ant.design/components/timeline/"
      >
        <Variant name="basic">
          <Timeline>
            <Timeline.Item>Step 1</Timeline.Item>
            <Timeline.Item>Step 2</Timeline.Item>
            <Timeline.Item>Step 3</Timeline.Item>
          </Timeline>
        </Variant>
        <Variant name="colored">
          <Timeline>
            <Timeline.Item color="green">Step 1</Timeline.Item>
            <Timeline.Item color="red">Step 2</Timeline.Item>
          </Timeline>
        </Variant>
        <Variant name="mode left" previewLayout="stretch">
          <Timeline mode="left">
            <Timeline.Item label="2015-09-01">Step 1</Timeline.Item>
            <Timeline.Item label="2015-09-01 09:12:11">Step 2</Timeline.Item>
          </Timeline>
        </Variant>
        <Variant name="mode right" previewLayout="stretch">
          <Timeline mode="right">
            <Timeline.Item label="2015-09-01">Step 1</Timeline.Item>
            <Timeline.Item label="2015-09-01 09:12:11">Step 2</Timeline.Item>
          </Timeline>
        </Variant>
        <Variant name="mode alternate" previewLayout="stretch">
          <Timeline mode="alternate">
            <Timeline.Item label="2015-09-01">Step 1</Timeline.Item>
            <Timeline.Item label="2015-09-01 09:12:11">Step 2</Timeline.Item>
          </Timeline>
        </Variant>
        <Variant name="with icon">
          <Timeline>
            <Timeline.Item>Step 1</Timeline.Item>
            <Timeline.Item
              dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
              color="red"
            >
              Step 2
            </Timeline.Item>
          </Timeline>
        </Variant>
      </Component>
      <Component name="Tooltip" docURL="https://ant.design/components/tooltip/">
        <Variant name="basic">
          <Tooltip title="Prompt text">
            <span>Tooltip will show on mouse enter.</span>
          </Tooltip>
        </Variant>
        <Variant name="arrow point at center">
          <Tooltip arrowPointAtCenter title="Prompt Text">
            <Button>Arrow points to center</Button>
          </Tooltip>
        </Variant>
        <Variant name="placement - right top">
          <Tooltip placement="rightTop" title="Prompt Text">
            <Button>RT</Button>
          </Tooltip>
        </Variant>
        <Variant name="orange color">
          <Tooltip title="Prompt text" color="orange">
            <Button>Orange</Button>
          </Tooltip>
        </Variant>
        <Variant name="custom color">
          <Tooltip title="Prompt text" color="#2db7f5">
            <Button>#2db7f5</Button>
          </Tooltip>
        </Variant>
      </Component>
      <Component name="Tour" docURL="https://ant.design/components/tour">
        <Variant proto={TourProto} />
      </Component>
      <Component name="Tree" docURL="https://ant.design/components/tree/">
        <Variant name="basic">
          <Tree
            checkable
            defaultExpandedKeys={["0-0-0", "0-0-1"]}
            defaultSelectedKeys={["0-0-0", "0-0-1"]}
            defaultCheckedKeys={["0-0-0", "0-0-1"]}
            treeData={[
              {
                title: "parent 1",
                key: "0-0",
                children: [
                  {
                    title: "parent 1-0",
                    key: "0-0-0",
                    disabled: true,
                    children: [
                      {
                        title: "leaf",
                        key: "0-0-0-0",
                        disableCheckbox: true,
                      },
                      {
                        title: "leaf",
                        key: "0-0-0-1",
                      },
                    ],
                  },
                  {
                    title: "parent 1-1",
                    key: "0-0-1",
                    children: [
                      {
                        title: <span style={{ color: "#1890ff" }}>sss</span>,
                        key: "0-0-1-0",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Variant>
        <Variant name="directory tree">
          <Tree.DirectoryTree
            treeData={[
              {
                title: "parent 0",
                key: "0-0",
                children: [
                  { title: "leaf 0-0", key: "0-0-0", isLeaf: true },
                  { title: "leaf 0-1", key: "0-0-1", isLeaf: true },
                ],
              },
              {
                title: "parent 1",
                key: "0-1",
                children: [
                  { title: "leaf 1-0", key: "0-1-0", isLeaf: true },
                  { title: "leaf 1-1", key: "0-1-1", isLeaf: true },
                ],
              },
            ]}
          />
        </Variant>
        <Variant name="show line">
          <Tree
            showLine
            treeData={[
              {
                title: "parent 0",
                key: "0-0",
                children: [
                  {
                    title: "leaf 0-0",
                    key: "0-0-0",
                    children: [
                      { title: "leaf 0-0-1", key: "0-0-0-1", isLeaf: true },
                    ],
                  },
                  { title: "leaf 0-1", key: "0-0-1", isLeaf: true },
                ],
              },
            ]}
          />
        </Variant>
        <Variant name="custom icons">
          <Tree
            showIcon
            defaultExpandAll
            treeData={[
              {
                title: "parent 1",
                key: "0-0",
                icon: <SmileOutlined />,
                children: [
                  {
                    title: "leaf",
                    key: "0-0-0",
                    icon: <MehOutlined />,
                  },
                  {
                    title: "leaf",
                    key: "0-0-1",
                    icon: ({ selected }) =>
                      selected ? <FrownFilled /> : <FrownOutlined />,
                  },
                ],
              },
            ]}
          />
        </Variant>
        <Variant name="custom collapse/expand icon">
          <Tree
            switcherIcon={<DownOutlined />}
            treeData={[
              {
                title: "parent 1",
                key: "0-0",
                children: [
                  {
                    title: "leaf",
                    key: "0-0-0",
                  },
                ],
              },
            ]}
          />
        </Variant>
      </Component>
    </Category>
    <Category name="Navigation">
      <Component name="Anchor" docURL="https://ant.design/components/anchor">
        <Variant>
          <Anchor
            items={[
              {
                key: "part-1",
                href: "#part-1",
                title: "Part 1",
              },
              {
                key: "part-2",
                href: "#part-2",
                title: "Part 2",
              },
            ]}
          />
        </Variant>
        <Variant name="horizontal">
          <Anchor
            direction="horizontal"
            items={[
              {
                key: "part-1",
                href: "#part-1",
                title: "Part 1",
              },
              {
                key: "part-2",
                href: "#part-2",
                title: "Part 2",
              },
            ]}
          />
        </Variant>
      </Component>
      <Component
        name="Breadcrumb"
        docURL="https://ant.design/components/breadcrumb/"
      >
        <Variant name="basic">
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </Variant>
        <Variant name="with icons">
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <UserOutlined />
              <span>Application List</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Application</Breadcrumb.Item>
          </Breadcrumb>
        </Variant>
        <Variant name="custom separator for all">
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
            <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </Variant>
        <Variant name="custom separator for each">
          <Breadcrumb separator="">
            <Breadcrumb.Item>Location</Breadcrumb.Item>
            <Breadcrumb.Separator>:</Breadcrumb.Separator>
            <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </Variant>
        <Variant name="with drop down menu">
          <Breadcrumb>
            <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Component</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item
              overlay={
                <Menu>
                  <Menu.Item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.alipay.com/"
                    >
                      General
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.taobao.com/"
                    >
                      Layout
                    </a>
                  </Menu.Item>
                </Menu>
              }
            >
              <a href="">General</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Button</Breadcrumb.Item>
          </Breadcrumb>
        </Variant>
      </Component>
      <Component
        name="Dropdown"
        docURL="https://ant.design/components/dropdown/"
      >
        <Variant name="basic">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                  >
                    1st menu item
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                  >
                    2nd menu item
                  </a>
                </Menu.Item>
              </Menu>
            }
            placement="bottomCenter"
          >
            <a onClick={(e) => e.preventDefault()}>
              Hover me <DownOutlined />
            </a>
          </Dropdown>
        </Variant>
        <Variant name="display arrow">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                  >
                    1st menu item
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                  >
                    2nd menu item
                  </a>
                </Menu.Item>
              </Menu>
            }
            placement="topCenter"
            arrow
          >
            <Button>topCenter</Button>
          </Dropdown>
        </Variant>
        <Variant name="trigger on click">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                  >
                    1st menu item
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                  >
                    2nd menu item
                  </a>
                </Menu.Item>
              </Menu>
            }
            trigger={["click"]}
          >
            <Button>Click me</Button>
          </Dropdown>
        </Variant>
        <Variant name="trigger on context menu">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="1">1st menu item</Menu.Item>
                <Menu.Item key="2">2nd menu item</Menu.Item>
                <Menu.Item key="3">3rd menu item</Menu.Item>
              </Menu>
            }
            trigger={["contextMenu"]}
          >
            <div>Right Click on here</div>
          </Dropdown>
        </Variant>
      </Component>
      <Component name="Menu" docURL="https://ant.design/components/menu/">
        <Variant name="vertical">
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<AppstoreOutlined />}
              title="Navigation Two"
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub4"
              icon={<SettingOutlined />}
              title="Navigation Three"
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Variant>
        <Variant name="horizontal">
          <Menu defaultSelectedKeys={["1"]} mode={"horizontal"}>
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<AppstoreOutlined />}
              title="Navigation Two"
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub4"
              icon={<SettingOutlined />}
              title="Navigation Three"
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Variant>
      </Component>
      <Component
        name="Pagination"
        docURL="https://ant.design/components/pagination/"
      >
        <Variant name="basic">
          <Pagination defaultCurrent={1} total={50} />
        </Variant>
        <Variant name="with jumper">
          <Pagination showQuickJumper defaultCurrent={2} total={500} />
        </Variant>
        <Variant name="mini size">
          <Pagination size="small" total={50} />
        </Variant>
        <Variant name="simple mode">
          <Pagination simple defaultCurrent={2} total={50} />
        </Variant>
        <Variant name="total number">
          <Pagination
            total={85}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
            defaultPageSize={20}
            defaultCurrent={1}
          />
        </Variant>
        <Variant name="custom prev/next">
          <Pagination
            total={500}
            itemRender={(current, type, originalElement) => {
              if (type === "prev") {
                return <a>Previous</a>;
              }
              if (type === "next") {
                return <a>Next</a>;
              }
              return originalElement;
            }}
          />
        </Variant>
      </Component>
      <Component name="Steps" docURL="https://ant.design/components/steps/">
        <Variant name="basic">
          <Steps current={1}>
            <Steps.Step title="Finished" description="This is a description." />
            <Steps.Step
              title="In Progress"
              subTitle="Left 00:00:08"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description." />
          </Steps>
        </Variant>
        <Variant name="mini">
          <Steps size="small" current={1}>
            <Steps.Step title="Finished" />
            <Steps.Step title="In Progress" />
            <Steps.Step title="Waiting" />
          </Steps>
        </Variant>
        <Variant name="with icon">
          <Steps>
            <Steps.Step status="finish" title="Login" icon={<UserOutlined />} />
            <Steps.Step
              status="finish"
              title="Verification"
              icon={<SolutionOutlined />}
            />
            <Steps.Step
              status="process"
              title="Pay"
              icon={<LoadingOutlined />}
            />
            <Steps.Step status="wait" title="Done" icon={<SmileOutlined />} />
          </Steps>
        </Variant>
        <Variant name="vertical">
          <Steps direction="vertical" current={1}>
            <Steps.Step title="Finished" description="This is a description." />
            <Steps.Step
              title="In Progress"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description." />
          </Steps>
        </Variant>
        <Variant name="vertical mini">
          <Steps direction="vertical" size="small" current={1}>
            <Steps.Step title="Finished" description="This is a description." />
            <Steps.Step
              title="In Progress"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description." />
          </Steps>
        </Variant>
        <Variant name="error status">
          <Steps current={1} status="error">
            <Steps.Step title="Finished" description="This is a description" />
            <Steps.Step
              title="In Process"
              description="This is a description"
            />
            <Steps.Step title="Waiting" description="This is a description" />
          </Steps>
        </Variant>
        <Variant name="dot style">
          <Steps progressDot current={1}>
            <Steps.Step title="Finished" description="This is a description." />
            <Steps.Step
              title="In Progress"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description." />
          </Steps>
        </Variant>
        <Variant name="custom dot style">
          <Steps
            current={1}
            progressDot={(dot, { status, index }) => (
              <Popover
                content={
                  <span>
                    step {index} status: {status}
                  </span>
                }
              >
                {dot}
              </Popover>
            )}
          >
            <Steps.Step
              title="Finished"
              description="You can hover on the dot."
            />
            <Steps.Step
              title="In Progress"
              description="You can hover on the dot."
            />
            <Steps.Step
              title="Waiting"
              description="You can hover on the dot."
            />
            <Steps.Step
              title="Waiting"
              description="You can hover on the dot."
            />
          </Steps>
        </Variant>
        <Variant name="with percent">
          <Steps current={1} percent={60}>
            <Steps.Step title="Finished" description="This is a description." />
            <Steps.Step
              title="In Progress"
              subTitle="Left 00:00:08"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description." />
          </Steps>
        </Variant>
        <Variant name="inline">
          <Steps type="inline">
            <Steps.Step title="Step1" description="This is a description." />
            <Steps.Step title="Step2" description="This is a description." />
            <Steps.Step title="Step3" description="This is a description." />
          </Steps>
        </Variant>
      </Component>
    </Category>
    <Category name="Feedback">
      <Component name="Alert" docURL="https://ant.design/components/alert/">
        <Variant name="error">
          <Alert message="Error Text" type="error" />
        </Variant>
        <Variant name="warning">
          <Alert message="Warning Text" type="warning" />
        </Variant>
        <Variant name="info">
          <Alert message="Info Text" type="info" />
        </Variant>
        <Variant name="success">
          <Alert message="Success Text" type="success" />
        </Variant>
        <Variant name="closable">
          <Alert message="Warning Text" type="warning" closable />
        </Variant>
        <Variant name="with description">
          <Alert
            message="Success Text"
            description="Success Description Success Description Success Description"
            type="success"
          />
        </Variant>
        <Variant name="success type with icon">
          <Alert message="Success Tips" type="success" showIcon />
        </Variant>
        <Variant name="error type with icon and description">
          <Alert
            message="Error"
            description="This is an error message about copywriting."
            type="error"
            showIcon
          />
        </Variant>
        <Variant name="as a banner">
          <Alert message="Warning text" banner />
        </Variant>
        <Variant name="with custom action">
          <Alert
            message="Error Text"
            showIcon
            description="Error Description Error Description Error Description Error Description"
            type="error"
            action={
              <Button size="small" danger>
                Detail
              </Button>
            }
          />
        </Variant>
        <Variant name="custom close text">
          <Alert message="Info Text" type="info" closeText="Close Now" />
        </Variant>
      </Component>
      <Component name="Drawer" docURL="https://ant.design/components/drawer/">
        <Variant name="placement right">
          <Drawer title="Basic Drawer" open>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
        <Variant name="placement top">
          <Drawer title="Basic Drawer" open placement="top">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
        <Variant name="placement left">
          <Drawer title="Basic Drawer" open placement="left">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
        <Variant name="placement bottom">
          <Drawer title="Basic Drawer" open placement="bottom">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
        <Variant name="large">
          <Drawer title="Basic Drawer" open size="large">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
      </Component>
      <Component name="Modal" docURL="https://ant.design/components/modal/">
        <Variant name="basic">
          <Modal title="Basic Modal" open>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
        <Variant name="custom footer">
          <Modal
            title="Basic Modal"
            open
            footer={[
              <Button key="back">Return</Button>,
              <Button key="submit" type="primary">
                Submit
              </Button>,
              <Button key="link" href="https://google.com" type="primary">
                Search on Google
              </Button>,
            ]}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
        <Variant name="width">
          <Modal title="Basic Modal" open width={1000}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
        <Variant name="ok and cancel text">
          <Modal title="Basic Modal" open okText="Confirm" cancelText="Cancel">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
        <Variant name="vertically centred">
          <Modal title="Vertically centered modal dialog" centered open>
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
        </Variant>
        <Variant name="top offset">
          <Modal title="20px to Top" style={{ top: 20 }} open>
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
        </Variant>
        <Variant name="custom button props">
          <Modal
            title="Basic Modal"
            open
            okButtonProps={{ disabled: true }}
            cancelButtonProps={{ disabled: true }}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
      </Component>
      <Component
        name="Popconfirm"
        docURL="https://ant.design/components/popconfirm/"
      >
        <Variant name="basic">
          <Popconfirm title="Are you sure to delete this entity?">
            <a href="#">Delete</a>
          </Popconfirm>
        </Variant>
        <Variant name="locale text">
          <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
            <a href="#">Delete</a>
          </Popconfirm>
        </Variant>
        <Variant name="placement - bottom right">
          <Popconfirm
            placement="bottomRight"
            title="Are you sure to delete this task?"
          >
            <Button>BR</Button>
          </Popconfirm>
        </Variant>
        <Variant name="custom icon">
          <Popconfirm
            title="Are you sure？"
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
          >
            <a href="#">Delete</a>
          </Popconfirm>
        </Variant>
      </Component>
      <Component
        name="Progress"
        docURL="https://ant.design/components/progress/"
      >
        <Variant name="standard">
          <Progress percent={30} />
        </Variant>
        <Variant name="status exception">
          <Progress percent={70} status="exception" />
        </Variant>
        <Variant name="completed">
          <Progress percent={100} />
        </Variant>
        <Variant name="hide info">
          <Progress percent={50} showInfo={false} />
        </Variant>
        <Variant name="small">
          <Progress percent={30} size="small" />
        </Variant>
        <Variant name="with success segment">
          <Progress percent={60} success={{ percent: 30 }} />
        </Variant>
        <Variant name="with gradient">
          <Progress
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
            percent={99.9}
          />
        </Variant>
        <Variant name="square linecaps">
          <Progress strokeLinecap="square" percent={75} />
        </Variant>
        <Variant name="circular">
          <Progress type="circle" percent={75} />
        </Variant>
        <Variant name="circular - with gradient">
          <Progress
            type="circle"
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
            percent={90}
          />
        </Variant>
        <Variant name="circular - with success segment">
          <Progress percent={60} success={{ percent: 30 }} type="circle" />
        </Variant>
        <Variant name="circular - small">
          <Progress type="circle" percent={30} width={80} />
        </Variant>
        <Variant name="circular - custom text format">
          <Progress
            type="circle"
            percent={75}
            format={(percent) => `${percent} Days`}
          />
        </Variant>
        <Variant name="circular - square linecaps">
          <Progress type="circle" strokeLinecap="square" percent={75} />
        </Variant>
        <Variant name="dashboard">
          <Progress type="dashboard" percent={75} />
        </Variant>
        <Variant name="dashboard - gap degree">
          <Progress type="dashboard" percent={75} gapDegree={30} />
        </Variant>
        <Variant name="dashboard - square linecaps">
          <Progress strokeLinecap="square" type="dashboard" percent={75} />
        </Variant>
        <Variant name="steps">
          <Progress percent={50} steps={3} />
        </Variant>
        <Variant name="steps - small">
          <Progress
            percent={100}
            steps={5}
            size="small"
            strokeColor="#52c41a"
          />
        </Variant>
      </Component>
      <Component name="Result" docURL="https://ant.design/components/result/">
        <Variant name="success">
          <Result
            status="success"
            title="Successfully Purchased Cloud Server ECS!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
              <Button type="primary" key="console">
                Go Console
              </Button>,
              <Button key="buy">Buy Again</Button>,
            ]}
          />
        </Variant>
        <Variant name="info">
          <Result
            title="Your operation has been executed"
            extra={
              <Button type="primary" key="console">
                Go Console
              </Button>
            }
          />
        </Variant>
        <Variant name="warning">
          <Result
            status="warning"
            title="There are some problems with your operation."
            extra={
              <Button type="primary" key="console">
                Go Console
              </Button>
            }
          />
        </Variant>
        <Variant name="not authorized">
          <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button type="primary">Back Home</Button>}
          />
        </Variant>
        <Variant name="page doesn't exist">
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary">Back Home</Button>}
          />
        </Variant>
        <Variant name="something went wrong on server">
          <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
            extra={<Button type="primary">Back Home</Button>}
          />
        </Variant>
        <Variant name="complex error feedback">
          <Result
            status="error"
            title="Submission Failed"
            subTitle="Please check and modify the following information before resubmitting."
            extra={[
              <Button type="primary" key="console">
                Go Console
              </Button>,
              <Button key="buy">Buy Again</Button>,
            ]}
          >
            <div>
              <Paragraph>
                <Text
                  strong
                  style={{
                    fontSize: 16,
                  }}
                >
                  The content you submitted has the following error:
                </Text>
              </Paragraph>
              <Paragraph>
                <CloseCircleOutlined style={{ color: "red" }} /> Your account
                has been frozen. <a>Thaw immediately &gt;</a>
              </Paragraph>
              <Paragraph>
                <CloseCircleOutlined style={{ color: "red" }} /> Your account is
                not yet eligible to apply. <a>Apply Unlock &gt;</a>
              </Paragraph>
            </div>
          </Result>
        </Variant>
        <Variant name="custom icon">
          <Result
            icon={<SmileOutlined />}
            title="Great, we have done all the operations!"
            extra={<Button type="primary">Next</Button>}
          />
        </Variant>
      </Component>
      <Component
        name="Skeleton"
        docURL="https://ant.design/components/skeleton/"
      >
        <Variant name="basic">
          <Skeleton />
        </Variant>
        <Variant name="with avatar and multiple paragraphs">
          <Skeleton avatar paragraph={{ rows: 4 }} />
        </Variant>
        <Variant name="active animation">
          <Skeleton active />
        </Variant>
        <Variant name="contains sub component">
          <Skeleton loading={false}>
            <div>
              <h4>Ant Design, a design language</h4>
              <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
              </p>
            </div>
          </Skeleton>
        </Variant>
        <Variant name="avatar">
          <Skeleton.Avatar />
        </Variant>
        <Variant name="avatar - square shape">
          <Skeleton.Avatar shape="square" />
        </Variant>
        <Variant name="avatar - small size">
          <Skeleton.Avatar size="small" />
        </Variant>
        <Variant name="button">
          <Skeleton.Button />
        </Variant>
        <Variant name="button - circle shape">
          <Skeleton.Button shape="circle" />
        </Variant>
        <Variant name="button - round shape">
          <Skeleton.Button shape="round" />
        </Variant>
        <Variant name="button - block">
          <Skeleton.Button block />
        </Variant>
        <Variant name="button - large size">
          <Skeleton.Button size="large" />
        </Variant>
        <Variant name="input">
          <Skeleton.Input style={{ width: 200 }} />
        </Variant>
        <Variant name="input - large size">
          <Skeleton.Input style={{ width: 200 }} size="large" />
        </Variant>
        <Variant name="image">
          <Skeleton.Image />
        </Variant>
      </Component>
      <Component name="Spin" docURL="https://ant.design/components/spin/">
        <Variant name="basic">
          <Spin />
        </Variant>
        <Variant name="tip">
          <Spin tip="Loading..." />
        </Variant>
        <Variant name="custom spinning indicator">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        </Variant>
        <Variant name="small size">
          <Spin size="small" />
        </Variant>
        <Variant name="large size">
          <Spin size="large" />
        </Variant>
      </Component>
    </Category>
    <Category name="Other">
      <Component name="Affix" docURL="https://ant.design/components/affix/">
        <Variant name="top">
          <Affix offsetTop={10}>
            <Button type="primary">Affix top</Button>
          </Affix>
        </Variant>
        <Variant name="bottom">
          <Affix offsetBottom={10}>
            <Button type="primary">Affix bottom</Button>
          </Affix>
        </Variant>
      </Component>
      <Component
        name="ConfigProvider"
        docURL="https://ant.design/components/config-provider"
      >
        <Variant>
          <ConfigProvider
            locale={undefined}
            direction="ltr"
            componentSize="small"
            theme={{}}
          >
            {/* children */}
          </ConfigProvider>
        </Variant>
      </Component>
      <Component
        name="FloatButton"
        docURL="https://ant.design/components/float-button"
      >
        <Variant>
          <FloatButton onClick={() => console.log("click")} />
        </Variant>
        <Variant name="type">
          <FloatButton icon={<QuestionCircleOutlined />} type="primary" />
        </Variant>
        <Variant name="shape">
          <FloatButton
            shape="square"
            type="primary"
            icon={<CustomerServiceOutlined />}
          />
        </Variant>
        <Variant name="description">
          <FloatButton
            icon={<FileTextOutlined />}
            shape="square"
            description="desc"
          />
        </Variant>
        <Variant name="tooltip">
          <FloatButton tooltip={<div>Documents</div>} />
        </Variant>
        <Variant name="group">
          <FloatButton.Group shape="square">
            <FloatButton />
            <FloatButton />
          </FloatButton.Group>
        </Variant>
        <Variant name="menu mode">
          <FloatButton.Group trigger="hover" type="primary">
            <FloatButton />
            <FloatButton />
          </FloatButton.Group>
        </Variant>
        <Variant
          name="BackTop"
          docURL="https://ant.design/components/float-button#components-float-button-demo-back-top"
        >
          <FloatButton.BackTop />
        </Variant>
      </Component>
      <Component name="Watermark">
        <Variant previewLayout="stretch">
          <Watermark content="Ant Design">
            <div style={{ height: 400 }} />
          </Watermark>
        </Variant>
        <Variant name="multi-line" previewLayout="stretch">
          <Watermark content={["Ant Design", "Happy Working"]}>
            <div style={{ height: 400 }} />
          </Watermark>
        </Variant>
        <Variant name="rotate" previewLayout="stretch">
          <Watermark content="Ant Design" rotate={0}>
            <div style={{ height: 400 }} />
          </Watermark>
        </Variant>
        <Variant name="custom font" previewLayout="stretch">
          <Watermark
            content="Ant Design"
            font={{
              color: `red`,
              fontSize: 10,
            }}
          >
            <div style={{ height: 400 }} />
          </Watermark>
        </Variant>
        <Variant name="with image" previewLayout="stretch">
          <Watermark
            height={30}
            width={130}
            image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original"
          >
            <div style={{ height: 400 }} />
          </Watermark>
        </Variant>
      </Component>
      <Component
        name="Segmented"
        docURL="https://ant.design/components/segmented"
      >
        <Variant>
          <Segmented options={["1", "2", "3"]} />
        </Variant>
        <Variant name="block" previewLayout="stretch">
          <Segmented block options={["1", "2", "3"]} />
        </Variant>
        <Variant name="disabled">
          <Segmented disabled options={["1", "2", "3"]} />
        </Variant>
        <Variant name="disabled segment">
          <Segmented
            options={["1", { label: "2", value: "2", disabled: true }, "3"]}
          />
        </Variant>
        <Variant name="size">
          <Segmented size="small" options={["1", "2", "3"]} />
        </Variant>
        <Variant name="with icon">
          <Segmented
            options={[
              {
                label: "List",
                value: "List",
                icon: <BarsOutlined />,
              },
              {
                label: "Kanban",
                value: "Kanban",
                icon: <AppstoreOutlined />,
              },
            ]}
          />
        </Variant>
      </Component>
    </Category>
    <Category name="Icon">
      <Component
        name="StepBackwardOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <StepBackwardOutlined />
        </Variant>
      </Component>
      <Component
        name="StepForwardOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <StepForwardOutlined />
        </Variant>
      </Component>
      <Component
        name="FastBackwardOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FastBackwardOutlined />
        </Variant>
      </Component>
      <Component
        name="FastForwardOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FastForwardOutlined />
        </Variant>
      </Component>
      <Component
        name="ShrinkOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ShrinkOutlined />
        </Variant>
      </Component>
      <Component
        name="ArrowsAltOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ArrowsAltOutlined />
        </Variant>
      </Component>
      <Component
        name="DownOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DownOutlined />
        </Variant>
      </Component>
      <Component name="UpOutlined" docURL="https://ant.design/components/icon">
        <Variant name="outlined">
          <UpOutlined />
        </Variant>
      </Component>
      <Component
        name="LeftOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <LeftOutlined />
        </Variant>
      </Component>
      <Component
        name="RightOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <RightOutlined />
        </Variant>
      </Component>
      <Component
        name="CaretUpOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CaretUpOutlined />
        </Variant>
      </Component>
      <Component
        name="CaretDownOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CaretDownOutlined />
        </Variant>
      </Component>
      <Component
        name="CaretLeftOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CaretLeftOutlined />
        </Variant>
      </Component>
      <Component
        name="CaretRightOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CaretRightOutlined />
        </Variant>
      </Component>
      <Component
        name="UpCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <UpCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="DownCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DownCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="LeftCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <LeftCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="RightCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <RightCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="DoubleRightOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DoubleRightOutlined />
        </Variant>
      </Component>
      <Component
        name="DoubleLeftOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DoubleLeftOutlined />
        </Variant>
      </Component>
      <Component
        name="VerticalLeftOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <VerticalLeftOutlined />
        </Variant>
      </Component>
      <Component
        name="VerticalRightOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <VerticalRightOutlined />
        </Variant>
      </Component>
      <Component
        name="VerticalAlignTopOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <VerticalAlignTopOutlined />
        </Variant>
      </Component>
      <Component
        name="VerticalAlignMiddleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <VerticalAlignMiddleOutlined />
        </Variant>
      </Component>
      <Component
        name="VerticalAlignBottomOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <VerticalAlignBottomOutlined />
        </Variant>
      </Component>
      <Component
        name="ForwardOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ForwardOutlined />
        </Variant>
      </Component>
      <Component
        name="BackwardOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BackwardOutlined />
        </Variant>
      </Component>
      <Component
        name="RollbackOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <RollbackOutlined />
        </Variant>
      </Component>
      <Component
        name="EnterOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <EnterOutlined />
        </Variant>
      </Component>
      <Component
        name="RetweetOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <RetweetOutlined />
        </Variant>
      </Component>
      <Component
        name="SwapOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SwapOutlined />
        </Variant>
      </Component>
      <Component
        name="SwapLeftOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SwapLeftOutlined />
        </Variant>
      </Component>
      <Component
        name="SwapRightOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SwapRightOutlined />
        </Variant>
      </Component>
      <Component
        name="ArrowUpOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ArrowUpOutlined />
        </Variant>
      </Component>
      <Component
        name="ArrowDownOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ArrowDownOutlined />
        </Variant>
      </Component>
      <Component
        name="ArrowLeftOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ArrowLeftOutlined />
        </Variant>
      </Component>
      <Component
        name="ArrowRightOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ArrowRightOutlined />
        </Variant>
      </Component>
      <Component
        name="PlayCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PlayCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="UpSquareOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <UpSquareOutlined />
        </Variant>
      </Component>
      <Component
        name="DownSquareOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DownSquareOutlined />
        </Variant>
      </Component>
      <Component
        name="LeftSquareOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <LeftSquareOutlined />
        </Variant>
      </Component>
      <Component
        name="RightSquareOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <RightSquareOutlined />
        </Variant>
      </Component>
      <Component
        name="LoginOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <LoginOutlined />
        </Variant>
      </Component>
      <Component
        name="LogoutOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <LogoutOutlined />
        </Variant>
      </Component>
      <Component
        name="MenuFoldOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <MenuFoldOutlined />
        </Variant>
      </Component>
      <Component
        name="MenuUnfoldOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <MenuUnfoldOutlined />
        </Variant>
      </Component>
      <Component
        name="BorderBottomOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BorderBottomOutlined />
        </Variant>
      </Component>
      <Component
        name="BorderHorizontalOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BorderHorizontalOutlined />
        </Variant>
      </Component>
      <Component
        name="BorderInnerOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BorderInnerOutlined />
        </Variant>
      </Component>
      <Component
        name="BorderOuterOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BorderOuterOutlined />
        </Variant>
      </Component>
      <Component
        name="BorderLeftOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BorderLeftOutlined />
        </Variant>
      </Component>
      <Component
        name="BorderRightOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BorderRightOutlined />
        </Variant>
      </Component>
      <Component
        name="BorderTopOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BorderTopOutlined />
        </Variant>
      </Component>
      <Component
        name="BorderVerticleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BorderVerticleOutlined />
        </Variant>
      </Component>
      <Component
        name="PicCenterOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PicCenterOutlined />
        </Variant>
      </Component>
      <Component
        name="PicLeftOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PicLeftOutlined />
        </Variant>
      </Component>
      <Component
        name="PicRightOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PicRightOutlined />
        </Variant>
      </Component>
      <Component
        name="RadiusBottomleftOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <RadiusBottomleftOutlined />
        </Variant>
      </Component>
      <Component
        name="RadiusBottomrightOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <RadiusBottomrightOutlined />
        </Variant>
      </Component>
      <Component
        name="RadiusUpleftOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <RadiusUpleftOutlined />
        </Variant>
      </Component>
      <Component
        name="RadiusUprightOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <RadiusUprightOutlined />
        </Variant>
      </Component>
      <Component
        name="FullscreenOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FullscreenOutlined />
        </Variant>
      </Component>
      <Component
        name="FullscreenExitOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FullscreenExitOutlined />
        </Variant>
      </Component>
      <Component
        name="QuestionOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <QuestionOutlined />
        </Variant>
      </Component>
      <Component
        name="QuestionCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <QuestionCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="PlusOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PlusOutlined />
        </Variant>
      </Component>
      <Component
        name="PlusCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PlusCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="PauseOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PauseOutlined />
        </Variant>
      </Component>
      <Component
        name="PauseCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PauseCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="MinusOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <MinusOutlined />
        </Variant>
      </Component>
      <Component
        name="MinusCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <MinusCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="PlusSquareOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PlusSquareOutlined />
        </Variant>
      </Component>
      <Component
        name="MinusSquareOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <MinusSquareOutlined />
        </Variant>
      </Component>
      <Component
        name="InfoOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <InfoOutlined />
        </Variant>
      </Component>
      <Component
        name="InfoCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <InfoCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="ExclamationOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ExclamationOutlined />
        </Variant>
      </Component>
      <Component
        name="ExclamationCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ExclamationCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="CloseOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CloseOutlined />
        </Variant>
      </Component>
      <Component
        name="CloseCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CloseCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="CloseSquareOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CloseSquareOutlined />
        </Variant>
      </Component>
      <Component
        name="CheckOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CheckOutlined />
        </Variant>
      </Component>
      <Component
        name="CheckCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CheckCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="CheckSquareOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CheckSquareOutlined />
        </Variant>
      </Component>
      <Component
        name="ClockCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ClockCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="WarningOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <WarningOutlined />
        </Variant>
      </Component>
      <Component
        name="IssuesCloseOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <IssuesCloseOutlined />
        </Variant>
      </Component>
      <Component
        name="StopOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <StopOutlined />
        </Variant>
      </Component>
      <Component
        name="EditOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <EditOutlined />
        </Variant>
      </Component>
      <Component
        name="FormOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FormOutlined />
        </Variant>
      </Component>
      <Component
        name="CopyOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CopyOutlined />
        </Variant>
      </Component>
      <Component
        name="ScissorOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ScissorOutlined />
        </Variant>
      </Component>
      <Component
        name="DeleteOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DeleteOutlined />
        </Variant>
      </Component>
      <Component
        name="SnippetsOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SnippetsOutlined />
        </Variant>
      </Component>
      <Component
        name="DiffOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DiffOutlined />
        </Variant>
      </Component>
      <Component
        name="HighlightOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <HighlightOutlined />
        </Variant>
      </Component>
      <Component
        name="AlignCenterOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AlignCenterOutlined />
        </Variant>
      </Component>
      <Component
        name="AlignLeftOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AlignLeftOutlined />
        </Variant>
      </Component>
      <Component
        name="AlignRightOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AlignRightOutlined />
        </Variant>
      </Component>
      <Component
        name="BgColorsOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BgColorsOutlined />
        </Variant>
      </Component>
      <Component
        name="BoldOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BoldOutlined />
        </Variant>
      </Component>
      <Component
        name="ItalicOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ItalicOutlined />
        </Variant>
      </Component>
      <Component
        name="UnderlineOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <UnderlineOutlined />
        </Variant>
      </Component>
      <Component
        name="StrikethroughOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <StrikethroughOutlined />
        </Variant>
      </Component>
      <Component
        name="RedoOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <RedoOutlined />
        </Variant>
      </Component>
      <Component
        name="UndoOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <UndoOutlined />
        </Variant>
      </Component>
      <Component
        name="ZoomInOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ZoomInOutlined />
        </Variant>
      </Component>
      <Component
        name="ZoomOutOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ZoomOutOutlined />
        </Variant>
      </Component>
      <Component
        name="FontColorsOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FontColorsOutlined />
        </Variant>
      </Component>
      <Component
        name="FontSizeOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FontSizeOutlined />
        </Variant>
      </Component>
      <Component
        name="LineHeightOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <LineHeightOutlined />
        </Variant>
      </Component>
      <Component
        name="DashOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DashOutlined />
        </Variant>
      </Component>
      <Component
        name="SmallDashOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SmallDashOutlined />
        </Variant>
      </Component>
      <Component
        name="SortAscendingOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SortAscendingOutlined />
        </Variant>
      </Component>
      <Component
        name="SortDescendingOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SortDescendingOutlined />
        </Variant>
      </Component>
      <Component
        name="DragOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DragOutlined />
        </Variant>
      </Component>
      <Component
        name="OrderedListOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <OrderedListOutlined />
        </Variant>
      </Component>
      <Component
        name="UnorderedListOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <UnorderedListOutlined />
        </Variant>
      </Component>
      <Component
        name="RadiusSettingOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <RadiusSettingOutlined />
        </Variant>
      </Component>
      <Component
        name="ColumnWidthOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ColumnWidthOutlined />
        </Variant>
      </Component>
      <Component
        name="ColumnHeightOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ColumnHeightOutlined />
        </Variant>
      </Component>
      <Component
        name="AreaChartOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AreaChartOutlined />
        </Variant>
      </Component>
      <Component
        name="PieChartOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PieChartOutlined />
        </Variant>
      </Component>
      <Component
        name="BarChartOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BarChartOutlined />
        </Variant>
      </Component>
      <Component
        name="DotChartOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DotChartOutlined />
        </Variant>
      </Component>
      <Component
        name="LineChartOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <LineChartOutlined />
        </Variant>
      </Component>
      <Component
        name="RadarChartOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <RadarChartOutlined />
        </Variant>
      </Component>
      <Component
        name="HeatMapOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <HeatMapOutlined />
        </Variant>
      </Component>
      <Component
        name="FallOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FallOutlined />
        </Variant>
      </Component>
      <Component
        name="RiseOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <RiseOutlined />
        </Variant>
      </Component>
      <Component
        name="StockOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <StockOutlined />
        </Variant>
      </Component>
      <Component
        name="BoxPlotOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BoxPlotOutlined />
        </Variant>
      </Component>
      <Component
        name="FundOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FundOutlined />
        </Variant>
      </Component>
      <Component
        name="SlidersOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SlidersOutlined />
        </Variant>
      </Component>
      <Component
        name="AndroidOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AndroidOutlined />
        </Variant>
      </Component>
      <Component
        name="AppleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AppleOutlined />
        </Variant>
      </Component>
      <Component
        name="WindowsOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <WindowsOutlined />
        </Variant>
      </Component>
      <Component name="IeOutlined" docURL="https://ant.design/components/icon">
        <Variant name="outlined">
          <IeOutlined />
        </Variant>
      </Component>
      <Component
        name="ChromeOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ChromeOutlined />
        </Variant>
      </Component>
      <Component
        name="GithubOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <GithubOutlined />
        </Variant>
      </Component>
      <Component
        name="AliwangwangOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AliwangwangOutlined />
        </Variant>
      </Component>
      <Component
        name="DingdingOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DingdingOutlined />
        </Variant>
      </Component>
      <Component
        name="WeiboSquareOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <WeiboSquareOutlined />
        </Variant>
      </Component>
      <Component
        name="WeiboCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <WeiboCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="TaobaoCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <TaobaoCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="Html5Outlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <Html5Outlined />
        </Variant>
      </Component>
      <Component
        name="WeiboOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <WeiboOutlined />
        </Variant>
      </Component>
      <Component
        name="TwitterOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <TwitterOutlined />
        </Variant>
      </Component>
      <Component
        name="WechatOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <WechatOutlined />
        </Variant>
      </Component>
      <Component
        name="YoutubeOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <YoutubeOutlined />
        </Variant>
      </Component>
      <Component
        name="AlipayCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AlipayCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="TaobaoOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <TaobaoOutlined />
        </Variant>
      </Component>
      <Component
        name="SkypeOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SkypeOutlined />
        </Variant>
      </Component>
      <Component name="QqOutlined" docURL="https://ant.design/components/icon">
        <Variant name="outlined">
          <QqOutlined />
        </Variant>
      </Component>
      <Component
        name="MediumWorkmarkOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <MediumWorkmarkOutlined />
        </Variant>
      </Component>
      <Component
        name="GitlabOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <GitlabOutlined />
        </Variant>
      </Component>
      <Component
        name="MediumOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <MediumOutlined />
        </Variant>
      </Component>
      <Component
        name="LinkedinOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <LinkedinOutlined />
        </Variant>
      </Component>
      <Component
        name="GooglePlusOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <GooglePlusOutlined />
        </Variant>
      </Component>
      <Component
        name="DropboxOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DropboxOutlined />
        </Variant>
      </Component>
      <Component
        name="FacebookOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FacebookOutlined />
        </Variant>
      </Component>
      <Component
        name="CodepenOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CodepenOutlined />
        </Variant>
      </Component>
      <Component
        name="CodeSandboxOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CodeSandboxOutlined />
        </Variant>
      </Component>
      <Component
        name="AmazonOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AmazonOutlined />
        </Variant>
      </Component>
      <Component
        name="GoogleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <GoogleOutlined />
        </Variant>
      </Component>
      <Component
        name="CodepenCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CodepenCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="AlipayOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AlipayOutlined />
        </Variant>
      </Component>
      <Component
        name="AntDesignOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AntDesignOutlined />
        </Variant>
      </Component>
      <Component
        name="AntCloudOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AntCloudOutlined />
        </Variant>
      </Component>
      <Component
        name="AliyunOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AliyunOutlined />
        </Variant>
      </Component>
      <Component
        name="ZhihuOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ZhihuOutlined />
        </Variant>
      </Component>
      <Component
        name="SlackOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SlackOutlined />
        </Variant>
      </Component>
      <Component
        name="SlackSquareOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SlackSquareOutlined />
        </Variant>
      </Component>
      <Component
        name="BehanceOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BehanceOutlined />
        </Variant>
      </Component>
      <Component
        name="BehanceSquareOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BehanceSquareOutlined />
        </Variant>
      </Component>
      <Component
        name="DribbbleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DribbbleOutlined />
        </Variant>
      </Component>
      <Component
        name="DribbbleSquareOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DribbbleSquareOutlined />
        </Variant>
      </Component>
      <Component
        name="InstagramOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <InstagramOutlined />
        </Variant>
      </Component>
      <Component
        name="YuqueOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <YuqueOutlined />
        </Variant>
      </Component>
      <Component
        name="AlibabaOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AlibabaOutlined />
        </Variant>
      </Component>
      <Component
        name="YahooOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <YahooOutlined />
        </Variant>
      </Component>
      <Component
        name="RedditOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <RedditOutlined />
        </Variant>
      </Component>
      <Component
        name="SketchOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SketchOutlined />
        </Variant>
      </Component>
      <Component
        name="AccountBookOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AccountBookOutlined />
        </Variant>
      </Component>
      <Component name="AimOutlined" docURL="https://ant.design/components/icon">
        <Variant name="outlined">
          <AimOutlined />
        </Variant>
      </Component>
      <Component
        name="AlertOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AlertOutlined />
        </Variant>
      </Component>
      <Component
        name="ApartmentOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ApartmentOutlined />
        </Variant>
      </Component>
      <Component name="ApiOutlined" docURL="https://ant.design/components/icon">
        <Variant name="outlined">
          <ApiOutlined />
        </Variant>
      </Component>
      <Component
        name="AppstoreAddOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AppstoreAddOutlined />
        </Variant>
      </Component>
      <Component
        name="AppstoreOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AppstoreOutlined />
        </Variant>
      </Component>
      <Component
        name="AudioOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AudioOutlined />
        </Variant>
      </Component>
      <Component
        name="AudioMutedOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AudioMutedOutlined />
        </Variant>
      </Component>
      <Component
        name="AuditOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <AuditOutlined />
        </Variant>
      </Component>
      <Component
        name="BankOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BankOutlined />
        </Variant>
      </Component>
      <Component
        name="BarcodeOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BarcodeOutlined />
        </Variant>
      </Component>
      <Component
        name="BarsOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BarsOutlined />
        </Variant>
      </Component>
      <Component
        name="BellOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BellOutlined />
        </Variant>
      </Component>
      <Component
        name="BlockOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BlockOutlined />
        </Variant>
      </Component>
      <Component
        name="BookOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BookOutlined />
        </Variant>
      </Component>
      <Component
        name="BorderOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BorderOutlined />
        </Variant>
      </Component>
      <Component
        name="BorderlessTableOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BorderlessTableOutlined />
        </Variant>
      </Component>
      <Component
        name="BranchesOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BranchesOutlined />
        </Variant>
      </Component>
      <Component name="BugOutlined" docURL="https://ant.design/components/icon">
        <Variant name="outlined">
          <BugOutlined />
        </Variant>
      </Component>
      <Component
        name="BuildOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BuildOutlined />
        </Variant>
      </Component>
      <Component
        name="BulbOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <BulbOutlined />
        </Variant>
      </Component>
      <Component
        name="CalculatorOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CalculatorOutlined />
        </Variant>
      </Component>
      <Component
        name="CalendarOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CalendarOutlined />
        </Variant>
      </Component>
      <Component
        name="CameraOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CameraOutlined />
        </Variant>
      </Component>
      <Component name="CarOutlined" docURL="https://ant.design/components/icon">
        <Variant name="outlined">
          <CarOutlined />
        </Variant>
      </Component>
      <Component
        name="CarryOutOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CarryOutOutlined />
        </Variant>
      </Component>
      <Component
        name="CiCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CiCircleOutlined />
        </Variant>
      </Component>
      <Component name="CiOutlined" docURL="https://ant.design/components/icon">
        <Variant name="outlined">
          <CiOutlined />
        </Variant>
      </Component>
      <Component
        name="ClearOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ClearOutlined />
        </Variant>
      </Component>
      <Component
        name="CloudDownloadOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CloudDownloadOutlined />
        </Variant>
      </Component>
      <Component
        name="CloudOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CloudOutlined />
        </Variant>
      </Component>
      <Component
        name="CloudServerOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CloudServerOutlined />
        </Variant>
      </Component>
      <Component
        name="CloudSyncOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CloudSyncOutlined />
        </Variant>
      </Component>
      <Component
        name="CloudUploadOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CloudUploadOutlined />
        </Variant>
      </Component>
      <Component
        name="ClusterOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ClusterOutlined />
        </Variant>
      </Component>
      <Component
        name="CodeOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CodeOutlined />
        </Variant>
      </Component>
      <Component
        name="CoffeeOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CoffeeOutlined />
        </Variant>
      </Component>
      <Component
        name="CommentOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CommentOutlined />
        </Variant>
      </Component>
      <Component
        name="CompassOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CompassOutlined />
        </Variant>
      </Component>
      <Component
        name="CompressOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CompressOutlined />
        </Variant>
      </Component>
      <Component
        name="ConsoleSqlOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ConsoleSqlOutlined />
        </Variant>
      </Component>
      <Component
        name="ContactsOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ContactsOutlined />
        </Variant>
      </Component>
      <Component
        name="ContainerOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ContainerOutlined />
        </Variant>
      </Component>
      <Component
        name="ControlOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ControlOutlined />
        </Variant>
      </Component>
      <Component
        name="CopyrightOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CopyrightOutlined />
        </Variant>
      </Component>
      <Component
        name="CreditCardOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CreditCardOutlined />
        </Variant>
      </Component>
      <Component
        name="CrownOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CrownOutlined />
        </Variant>
      </Component>
      <Component
        name="CustomerServiceOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <CustomerServiceOutlined />
        </Variant>
      </Component>
      <Component
        name="DashboardOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DashboardOutlined />
        </Variant>
      </Component>
      <Component
        name="DatabaseOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DatabaseOutlined />
        </Variant>
      </Component>
      <Component
        name="DeleteColumnOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DeleteColumnOutlined />
        </Variant>
      </Component>
      <Component
        name="DeleteRowOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DeleteRowOutlined />
        </Variant>
      </Component>
      <Component
        name="DeliveredProcedureOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DeliveredProcedureOutlined />
        </Variant>
      </Component>
      <Component
        name="DeploymentUnitOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DeploymentUnitOutlined />
        </Variant>
      </Component>
      <Component
        name="DesktopOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DesktopOutlined />
        </Variant>
      </Component>
      <Component
        name="DingtalkOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DingtalkOutlined />
        </Variant>
      </Component>
      <Component
        name="DisconnectOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DisconnectOutlined />
        </Variant>
      </Component>
      <Component
        name="DislikeOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DislikeOutlined />
        </Variant>
      </Component>
      <Component
        name="DollarCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DollarCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="DollarOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DollarOutlined />
        </Variant>
      </Component>
      <Component
        name="DownloadOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <DownloadOutlined />
        </Variant>
      </Component>
      <Component
        name="EllipsisOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <EllipsisOutlined />
        </Variant>
      </Component>
      <Component
        name="EnvironmentOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <EnvironmentOutlined />
        </Variant>
      </Component>
      <Component
        name="EuroCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <EuroCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="EuroOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <EuroOutlined />
        </Variant>
      </Component>
      <Component
        name="ExceptionOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ExceptionOutlined />
        </Variant>
      </Component>
      <Component
        name="ExpandAltOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ExpandAltOutlined />
        </Variant>
      </Component>
      <Component
        name="ExpandOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ExpandOutlined />
        </Variant>
      </Component>
      <Component
        name="ExperimentOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ExperimentOutlined />
        </Variant>
      </Component>
      <Component
        name="ExportOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ExportOutlined />
        </Variant>
      </Component>
      <Component name="EyeOutlined" docURL="https://ant.design/components/icon">
        <Variant name="outlined">
          <EyeOutlined />
        </Variant>
      </Component>
      <Component
        name="EyeInvisibleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <EyeInvisibleOutlined />
        </Variant>
      </Component>
      <Component
        name="FieldBinaryOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FieldBinaryOutlined />
        </Variant>
      </Component>
      <Component
        name="FieldNumberOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FieldNumberOutlined />
        </Variant>
      </Component>
      <Component
        name="FieldStringOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FieldStringOutlined />
        </Variant>
      </Component>
      <Component
        name="FieldTimeOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FieldTimeOutlined />
        </Variant>
      </Component>
      <Component
        name="FileAddOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FileAddOutlined />
        </Variant>
      </Component>
      <Component
        name="FileDoneOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FileDoneOutlined />
        </Variant>
      </Component>
      <Component
        name="FileExcelOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FileExcelOutlined />
        </Variant>
      </Component>
      <Component
        name="FileExclamationOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FileExclamationOutlined />
        </Variant>
      </Component>
      <Component
        name="FileOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FileOutlined />
        </Variant>
      </Component>
      <Component
        name="FileGifOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FileGifOutlined />
        </Variant>
      </Component>
      <Component
        name="FileImageOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FileImageOutlined />
        </Variant>
      </Component>
      <Component
        name="FileJpgOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FileJpgOutlined />
        </Variant>
      </Component>
      <Component
        name="FileMarkdownOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FileMarkdownOutlined />
        </Variant>
      </Component>
      <Component
        name="FilePdfOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FilePdfOutlined />
        </Variant>
      </Component>
      <Component
        name="FilePptOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FilePptOutlined />
        </Variant>
      </Component>
      <Component
        name="FileProtectOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FileProtectOutlined />
        </Variant>
      </Component>
      <Component
        name="FileSearchOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FileSearchOutlined />
        </Variant>
      </Component>
      <Component
        name="FileSyncOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FileSyncOutlined />
        </Variant>
      </Component>
      <Component
        name="FileTextOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FileTextOutlined />
        </Variant>
      </Component>
      <Component
        name="FileUnknownOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FileUnknownOutlined />
        </Variant>
      </Component>
      <Component
        name="FileWordOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FileWordOutlined />
        </Variant>
      </Component>
      <Component
        name="FileZipOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FileZipOutlined />
        </Variant>
      </Component>
      <Component
        name="FilterOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FilterOutlined />
        </Variant>
      </Component>
      <Component
        name="FireOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FireOutlined />
        </Variant>
      </Component>
      <Component
        name="FlagOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FlagOutlined />
        </Variant>
      </Component>
      <Component
        name="FolderAddOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FolderAddOutlined />
        </Variant>
      </Component>
      <Component
        name="FolderOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FolderOutlined />
        </Variant>
      </Component>
      <Component
        name="FolderOpenOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FolderOpenOutlined />
        </Variant>
      </Component>
      <Component
        name="FolderViewOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FolderViewOutlined />
        </Variant>
      </Component>
      <Component
        name="ForkOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ForkOutlined />
        </Variant>
      </Component>
      <Component
        name="FormatPainterOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FormatPainterOutlined />
        </Variant>
      </Component>
      <Component
        name="FrownOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FrownOutlined />
        </Variant>
      </Component>
      <Component
        name="FunctionOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FunctionOutlined />
        </Variant>
      </Component>
      <Component
        name="FundProjectionScreenOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FundProjectionScreenOutlined />
        </Variant>
      </Component>
      <Component
        name="FundViewOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FundViewOutlined />
        </Variant>
      </Component>
      <Component
        name="FunnelPlotOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <FunnelPlotOutlined />
        </Variant>
      </Component>
      <Component
        name="GatewayOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <GatewayOutlined />
        </Variant>
      </Component>
      <Component name="GifOutlined" docURL="https://ant.design/components/icon">
        <Variant name="outlined">
          <GifOutlined />
        </Variant>
      </Component>
      <Component
        name="GiftOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <GiftOutlined />
        </Variant>
      </Component>
      <Component
        name="GlobalOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <GlobalOutlined />
        </Variant>
      </Component>
      <Component
        name="GoldOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <GoldOutlined />
        </Variant>
      </Component>
      <Component
        name="GroupOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <GroupOutlined />
        </Variant>
      </Component>
      <Component name="HddOutlined" docURL="https://ant.design/components/icon">
        <Variant name="outlined">
          <HddOutlined />
        </Variant>
      </Component>
      <Component
        name="HeartOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <HeartOutlined />
        </Variant>
      </Component>
      <Component
        name="HistoryOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <HistoryOutlined />
        </Variant>
      </Component>
      <Component
        name="HolderOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <HolderOutlined />
        </Variant>
      </Component>
      <Component
        name="HomeOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <HomeOutlined />
        </Variant>
      </Component>
      <Component
        name="HourglassOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <HourglassOutlined />
        </Variant>
      </Component>
      <Component
        name="IdcardOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <IdcardOutlined />
        </Variant>
      </Component>
      <Component
        name="ImportOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ImportOutlined />
        </Variant>
      </Component>
      <Component
        name="InboxOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <InboxOutlined />
        </Variant>
      </Component>
      <Component
        name="InsertRowAboveOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <InsertRowAboveOutlined />
        </Variant>
      </Component>
      <Component
        name="InsertRowBelowOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <InsertRowBelowOutlined />
        </Variant>
      </Component>
      <Component
        name="InsertRowLeftOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <InsertRowLeftOutlined />
        </Variant>
      </Component>
      <Component
        name="InsertRowRightOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <InsertRowRightOutlined />
        </Variant>
      </Component>
      <Component
        name="InsuranceOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <InsuranceOutlined />
        </Variant>
      </Component>
      <Component
        name="InteractionOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <InteractionOutlined />
        </Variant>
      </Component>
      <Component name="KeyOutlined" docURL="https://ant.design/components/icon">
        <Variant name="outlined">
          <KeyOutlined />
        </Variant>
      </Component>
      <Component
        name="LaptopOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <LaptopOutlined />
        </Variant>
      </Component>
      <Component
        name="LayoutOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <LayoutOutlined />
        </Variant>
      </Component>
      <Component
        name="LikeOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <LikeOutlined />
        </Variant>
      </Component>
      <Component
        name="LineOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <LineOutlined />
        </Variant>
      </Component>
      <Component
        name="LinkOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <LinkOutlined />
        </Variant>
      </Component>
      <Component
        name="Loading3QuartersOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <Loading3QuartersOutlined />
        </Variant>
      </Component>
      <Component
        name="LoadingOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <LoadingOutlined />
        </Variant>
      </Component>
      <Component
        name="LockOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <LockOutlined />
        </Variant>
      </Component>
      <Component
        name="MacCommandOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <MacCommandOutlined />
        </Variant>
      </Component>
      <Component
        name="MailOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <MailOutlined />
        </Variant>
      </Component>
      <Component name="ManOutlined" docURL="https://ant.design/components/icon">
        <Variant name="outlined">
          <ManOutlined />
        </Variant>
      </Component>
      <Component
        name="MedicineBoxOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <MedicineBoxOutlined />
        </Variant>
      </Component>
      <Component name="MehOutlined" docURL="https://ant.design/components/icon">
        <Variant name="outlined">
          <MehOutlined />
        </Variant>
      </Component>
      <Component
        name="MenuOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <MenuOutlined />
        </Variant>
      </Component>
      <Component
        name="MergeCellsOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <MergeCellsOutlined />
        </Variant>
      </Component>
      <Component
        name="MessageOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <MessageOutlined />
        </Variant>
      </Component>
      <Component
        name="MobileOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <MobileOutlined />
        </Variant>
      </Component>
      <Component
        name="MoneyCollectOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <MoneyCollectOutlined />
        </Variant>
      </Component>
      <Component
        name="MonitorOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <MonitorOutlined />
        </Variant>
      </Component>
      <Component
        name="MoreOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <MoreOutlined />
        </Variant>
      </Component>
      <Component
        name="NodeCollapseOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <NodeCollapseOutlined />
        </Variant>
      </Component>
      <Component
        name="NodeExpandOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <NodeExpandOutlined />
        </Variant>
      </Component>
      <Component
        name="NodeIndexOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <NodeIndexOutlined />
        </Variant>
      </Component>
      <Component
        name="NotificationOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <NotificationOutlined />
        </Variant>
      </Component>
      <Component
        name="NumberOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <NumberOutlined />
        </Variant>
      </Component>
      <Component
        name="OneToOneOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <OneToOneOutlined />
        </Variant>
      </Component>
      <Component
        name="PartitionOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PartitionOutlined />
        </Variant>
      </Component>
      <Component
        name="PaperClipOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PaperClipOutlined />
        </Variant>
      </Component>
      <Component
        name="PayCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PayCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="PercentageOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PercentageOutlined />
        </Variant>
      </Component>
      <Component
        name="PhoneOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PhoneOutlined />
        </Variant>
      </Component>
      <Component
        name="PictureOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PictureOutlined />
        </Variant>
      </Component>
      <Component
        name="PlaySquareOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PlaySquareOutlined />
        </Variant>
      </Component>
      <Component
        name="PoundCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PoundCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="PoweroffOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PoweroffOutlined />
        </Variant>
      </Component>
      <Component
        name="PrinterOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PrinterOutlined />
        </Variant>
      </Component>
      <Component
        name="ProfileOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ProfileOutlined />
        </Variant>
      </Component>
      <Component
        name="ProjectOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ProjectOutlined />
        </Variant>
      </Component>
      <Component
        name="PropertySafetyOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PropertySafetyOutlined />
        </Variant>
      </Component>
      <Component
        name="PullRequestOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PullRequestOutlined />
        </Variant>
      </Component>
      <Component
        name="PushpinOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <PushpinOutlined />
        </Variant>
      </Component>
      <Component
        name="QrcodeOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <QrcodeOutlined />
        </Variant>
      </Component>
      <Component
        name="ReadOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ReadOutlined />
        </Variant>
      </Component>
      <Component
        name="ReconciliationOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ReconciliationOutlined />
        </Variant>
      </Component>
      <Component
        name="RedEnvelopeOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <RedEnvelopeOutlined />
        </Variant>
      </Component>
      <Component
        name="ReloadOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ReloadOutlined />
        </Variant>
      </Component>
      <Component
        name="RestOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <RestOutlined />
        </Variant>
      </Component>
      <Component
        name="RobotOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <RobotOutlined />
        </Variant>
      </Component>
      <Component
        name="RocketOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <RocketOutlined />
        </Variant>
      </Component>
      <Component
        name="RotateLeftOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <RotateLeftOutlined />
        </Variant>
      </Component>
      <Component
        name="RotateRightOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <RotateRightOutlined />
        </Variant>
      </Component>
      <Component
        name="SafetyCertificateOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SafetyCertificateOutlined />
        </Variant>
      </Component>
      <Component
        name="SafetyOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SafetyOutlined />
        </Variant>
      </Component>
      <Component
        name="SaveOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SaveOutlined />
        </Variant>
      </Component>
      <Component
        name="ScanOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ScanOutlined />
        </Variant>
      </Component>
      <Component
        name="ScheduleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ScheduleOutlined />
        </Variant>
      </Component>
      <Component
        name="SearchOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SearchOutlined />
        </Variant>
      </Component>
      <Component
        name="SecurityScanOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SecurityScanOutlined />
        </Variant>
      </Component>
      <Component
        name="SelectOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SelectOutlined />
        </Variant>
      </Component>
      <Component
        name="SendOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SendOutlined />
        </Variant>
      </Component>
      <Component
        name="SettingOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SettingOutlined />
        </Variant>
      </Component>
      <Component
        name="ShakeOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ShakeOutlined />
        </Variant>
      </Component>
      <Component
        name="ShareAltOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ShareAltOutlined />
        </Variant>
      </Component>
      <Component
        name="ShopOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ShopOutlined />
        </Variant>
      </Component>
      <Component
        name="ShoppingCartOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ShoppingCartOutlined />
        </Variant>
      </Component>
      <Component
        name="ShoppingOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ShoppingOutlined />
        </Variant>
      </Component>
      <Component
        name="SisternodeOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SisternodeOutlined />
        </Variant>
      </Component>
      <Component
        name="SkinOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SkinOutlined />
        </Variant>
      </Component>
      <Component
        name="SmileOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SmileOutlined />
        </Variant>
      </Component>
      <Component
        name="SolutionOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SolutionOutlined />
        </Variant>
      </Component>
      <Component
        name="SoundOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SoundOutlined />
        </Variant>
      </Component>
      <Component
        name="SplitCellsOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SplitCellsOutlined />
        </Variant>
      </Component>
      <Component
        name="StarOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <StarOutlined />
        </Variant>
      </Component>
      <Component
        name="SubnodeOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SubnodeOutlined />
        </Variant>
      </Component>
      <Component
        name="SwitcherOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SwitcherOutlined />
        </Variant>
      </Component>
      <Component
        name="SyncOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <SyncOutlined />
        </Variant>
      </Component>
      <Component
        name="TableOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <TableOutlined />
        </Variant>
      </Component>
      <Component
        name="TabletOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <TabletOutlined />
        </Variant>
      </Component>
      <Component name="TagOutlined" docURL="https://ant.design/components/icon">
        <Variant name="outlined">
          <TagOutlined />
        </Variant>
      </Component>
      <Component
        name="TagsOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <TagsOutlined />
        </Variant>
      </Component>
      <Component
        name="TeamOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <TeamOutlined />
        </Variant>
      </Component>
      <Component
        name="ThunderboltOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ThunderboltOutlined />
        </Variant>
      </Component>
      <Component
        name="ToTopOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ToTopOutlined />
        </Variant>
      </Component>
      <Component
        name="ToolOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <ToolOutlined />
        </Variant>
      </Component>
      <Component
        name="TrademarkCircleOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <TrademarkCircleOutlined />
        </Variant>
      </Component>
      <Component
        name="TrademarkOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <TrademarkOutlined />
        </Variant>
      </Component>
      <Component
        name="TransactionOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <TransactionOutlined />
        </Variant>
      </Component>
      <Component
        name="TranslationOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <TranslationOutlined />
        </Variant>
      </Component>
      <Component
        name="TrophyOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <TrophyOutlined />
        </Variant>
      </Component>
      <Component
        name="UngroupOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <UngroupOutlined />
        </Variant>
      </Component>
      <Component
        name="UnlockOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <UnlockOutlined />
        </Variant>
      </Component>
      <Component
        name="UploadOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <UploadOutlined />
        </Variant>
      </Component>
      <Component name="UsbOutlined" docURL="https://ant.design/components/icon">
        <Variant name="outlined">
          <UsbOutlined />
        </Variant>
      </Component>
      <Component
        name="UserAddOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <UserAddOutlined />
        </Variant>
      </Component>
      <Component
        name="UserDeleteOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <UserDeleteOutlined />
        </Variant>
      </Component>
      <Component
        name="UserOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <UserOutlined />
        </Variant>
      </Component>
      <Component
        name="UserSwitchOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <UserSwitchOutlined />
        </Variant>
      </Component>
      <Component
        name="UsergroupAddOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <UsergroupAddOutlined />
        </Variant>
      </Component>
      <Component
        name="UsergroupDeleteOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <UsergroupDeleteOutlined />
        </Variant>
      </Component>
      <Component
        name="VerifiedOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <VerifiedOutlined />
        </Variant>
      </Component>
      <Component
        name="VideoCameraAddOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <VideoCameraAddOutlined />
        </Variant>
      </Component>
      <Component
        name="VideoCameraOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <VideoCameraOutlined />
        </Variant>
      </Component>
      <Component
        name="WalletOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <WalletOutlined />
        </Variant>
      </Component>
      <Component
        name="WhatsAppOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <WhatsAppOutlined />
        </Variant>
      </Component>
      <Component
        name="WifiOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <WifiOutlined />
        </Variant>
      </Component>
      <Component
        name="WomanOutlined"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="outlined">
          <WomanOutlined />
        </Variant>
      </Component>

      <Component
        name="StepBackwardFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <StepBackwardFilled />
        </Variant>
      </Component>
      <Component
        name="StepForwardFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <StepForwardFilled />
        </Variant>
      </Component>
      <Component
        name="FastBackwardFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <FastBackwardFilled />
        </Variant>
      </Component>
      <Component
        name="FastForwardFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <FastForwardFilled />
        </Variant>
      </Component>
      <Component
        name="CaretUpFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <CaretUpFilled />
        </Variant>
      </Component>
      <Component
        name="CaretDownFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <CaretDownFilled />
        </Variant>
      </Component>
      <Component
        name="CaretLeftFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <CaretLeftFilled />
        </Variant>
      </Component>
      <Component
        name="CaretRightFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <CaretRightFilled />
        </Variant>
      </Component>
      <Component
        name="UpCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <UpCircleFilled />
        </Variant>
      </Component>
      <Component
        name="DownCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <DownCircleFilled />
        </Variant>
      </Component>
      <Component
        name="LeftCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <LeftCircleFilled />
        </Variant>
      </Component>
      <Component
        name="RightCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <RightCircleFilled />
        </Variant>
      </Component>
      <Component
        name="ForwardFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <ForwardFilled />
        </Variant>
      </Component>
      <Component
        name="BackwardFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <BackwardFilled />
        </Variant>
      </Component>
      <Component
        name="PlayCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <PlayCircleFilled />
        </Variant>
      </Component>
      <Component
        name="UpSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <UpSquareFilled />
        </Variant>
      </Component>
      <Component
        name="DownSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <DownSquareFilled />
        </Variant>
      </Component>
      <Component
        name="LeftSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <LeftSquareFilled />
        </Variant>
      </Component>
      <Component
        name="RightSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <RightSquareFilled />
        </Variant>
      </Component>
      <Component
        name="QuestionCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <QuestionCircleFilled />
        </Variant>
      </Component>
      <Component
        name="PlusCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <PlusCircleFilled />
        </Variant>
      </Component>
      <Component
        name="PauseCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <PauseCircleFilled />
        </Variant>
      </Component>
      <Component
        name="MinusCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <MinusCircleFilled />
        </Variant>
      </Component>
      <Component
        name="PlusSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <PlusSquareFilled />
        </Variant>
      </Component>
      <Component
        name="MinusSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <MinusSquareFilled />
        </Variant>
      </Component>
      <Component
        name="InfoCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <InfoCircleFilled />
        </Variant>
      </Component>
      <Component
        name="ExclamationCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <ExclamationCircleFilled />
        </Variant>
      </Component>
      <Component
        name="CloseCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <CloseCircleFilled />
        </Variant>
      </Component>
      <Component
        name="CloseSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <CloseSquareFilled />
        </Variant>
      </Component>
      <Component
        name="CheckCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <CheckCircleFilled />
        </Variant>
      </Component>
      <Component
        name="CheckSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <CheckSquareFilled />
        </Variant>
      </Component>
      <Component
        name="ClockCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <ClockCircleFilled />
        </Variant>
      </Component>
      <Component
        name="WarningFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <WarningFilled />
        </Variant>
      </Component>
      <Component name="StopFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <StopFilled />
        </Variant>
      </Component>
      <Component name="EditFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <EditFilled />
        </Variant>
      </Component>
      <Component name="CopyFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <CopyFilled />
        </Variant>
      </Component>
      <Component
        name="DeleteFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <DeleteFilled />
        </Variant>
      </Component>
      <Component
        name="SnippetsFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <SnippetsFilled />
        </Variant>
      </Component>
      <Component name="DiffFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <DiffFilled />
        </Variant>
      </Component>
      <Component
        name="HighlightFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <HighlightFilled />
        </Variant>
      </Component>
      <Component
        name="PieChartFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <PieChartFilled />
        </Variant>
      </Component>
      <Component
        name="BoxPlotFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <BoxPlotFilled />
        </Variant>
      </Component>
      <Component name="FundFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <FundFilled />
        </Variant>
      </Component>
      <Component
        name="SlidersFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <SlidersFilled />
        </Variant>
      </Component>
      <Component
        name="AndroidFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <AndroidFilled />
        </Variant>
      </Component>
      <Component name="AppleFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <AppleFilled />
        </Variant>
      </Component>
      <Component
        name="WindowsFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <WindowsFilled />
        </Variant>
      </Component>
      <Component
        name="ChromeFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <ChromeFilled />
        </Variant>
      </Component>
      <Component
        name="GithubFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <GithubFilled />
        </Variant>
      </Component>
      <Component
        name="AliwangwangFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <AliwangwangFilled />
        </Variant>
      </Component>
      <Component
        name="WeiboSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <WeiboSquareFilled />
        </Variant>
      </Component>
      <Component
        name="WeiboCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <WeiboCircleFilled />
        </Variant>
      </Component>
      <Component
        name="TaobaoCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <TaobaoCircleFilled />
        </Variant>
      </Component>
      <Component name="Html5Filled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <Html5Filled />
        </Variant>
      </Component>
      <Component
        name="WechatFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <WechatFilled />
        </Variant>
      </Component>
      <Component
        name="YoutubeFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <YoutubeFilled />
        </Variant>
      </Component>
      <Component
        name="AlipayCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <AlipayCircleFilled />
        </Variant>
      </Component>
      <Component name="SkypeFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <SkypeFilled />
        </Variant>
      </Component>
      <Component
        name="GitlabFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <GitlabFilled />
        </Variant>
      </Component>
      <Component
        name="LinkedinFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <LinkedinFilled />
        </Variant>
      </Component>
      <Component
        name="FacebookFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <FacebookFilled />
        </Variant>
      </Component>
      <Component
        name="CodeSandboxCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <CodeSandboxCircleFilled />
        </Variant>
      </Component>
      <Component
        name="CodepenCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <CodepenCircleFilled />
        </Variant>
      </Component>
      <Component
        name="SlackSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <SlackSquareFilled />
        </Variant>
      </Component>
      <Component
        name="BehanceSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <BehanceSquareFilled />
        </Variant>
      </Component>
      <Component
        name="DribbbleSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <DribbbleSquareFilled />
        </Variant>
      </Component>
      <Component
        name="InstagramFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <InstagramFilled />
        </Variant>
      </Component>
      <Component name="YuqueFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <YuqueFilled />
        </Variant>
      </Component>
      <Component name="YahooFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <YahooFilled />
        </Variant>
      </Component>
      <Component
        name="AccountBookFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <AccountBookFilled />
        </Variant>
      </Component>
      <Component name="AlertFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <AlertFilled />
        </Variant>
      </Component>
      <Component
        name="AlipaySquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <AlipaySquareFilled />
        </Variant>
      </Component>
      <Component
        name="AmazonCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <AmazonCircleFilled />
        </Variant>
      </Component>
      <Component name="ApiFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <ApiFilled />
        </Variant>
      </Component>
      <Component
        name="AppstoreFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <AppstoreFilled />
        </Variant>
      </Component>
      <Component name="AudioFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <AudioFilled />
        </Variant>
      </Component>
      <Component name="BankFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <BankFilled />
        </Variant>
      </Component>
      <Component
        name="BehanceCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <BehanceCircleFilled />
        </Variant>
      </Component>
      <Component name="BellFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <BellFilled />
        </Variant>
      </Component>
      <Component name="BookFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <BookFilled />
        </Variant>
      </Component>
      <Component name="BugFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <BugFilled />
        </Variant>
      </Component>
      <Component name="BuildFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <BuildFilled />
        </Variant>
      </Component>
      <Component
        name="CalculatorFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <CalculatorFilled />
        </Variant>
      </Component>
      <Component
        name="CalendarFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <CalendarFilled />
        </Variant>
      </Component>
      <Component
        name="CameraFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <CameraFilled />
        </Variant>
      </Component>
      <Component name="CarFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <CarFilled />
        </Variant>
      </Component>
      <Component
        name="CarryOutFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <CarryOutFilled />
        </Variant>
      </Component>
      <Component
        name="CiCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <CiCircleFilled />
        </Variant>
      </Component>
      <Component name="CloudFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <CloudFilled />
        </Variant>
      </Component>
      <Component name="CodeFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <CodeFilled />
        </Variant>
      </Component>
      <Component
        name="CodeSandboxSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <CodeSandboxSquareFilled />
        </Variant>
      </Component>
      <Component
        name="CodepenSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <CodepenSquareFilled />
        </Variant>
      </Component>
      <Component
        name="CompassFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <CompassFilled />
        </Variant>
      </Component>
      <Component
        name="ContactsFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <ContactsFilled />
        </Variant>
      </Component>
      <Component
        name="ContainerFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <ContainerFilled />
        </Variant>
      </Component>
      <Component
        name="ControlFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <ControlFilled />
        </Variant>
      </Component>
      <Component
        name="CreditCardFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <CreditCardFilled />
        </Variant>
      </Component>
      <Component name="CrownFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <CrownFilled />
        </Variant>
      </Component>
      <Component
        name="CustomerServiceFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <CustomerServiceFilled />
        </Variant>
      </Component>
      <Component
        name="DashboardFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <DashboardFilled />
        </Variant>
      </Component>
      <Component
        name="DatabaseFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <DatabaseFilled />
        </Variant>
      </Component>
      <Component
        name="DingtalkCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <DingtalkCircleFilled />
        </Variant>
      </Component>
      <Component
        name="DingtalkSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <DingtalkSquareFilled />
        </Variant>
      </Component>
      <Component
        name="DislikeFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <DislikeFilled />
        </Variant>
      </Component>
      <Component
        name="DollarCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <DollarCircleFilled />
        </Variant>
      </Component>
      <Component
        name="DribbbleCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <DribbbleCircleFilled />
        </Variant>
      </Component>
      <Component
        name="DropboxCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <DropboxCircleFilled />
        </Variant>
      </Component>
      <Component
        name="DropboxSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <DropboxSquareFilled />
        </Variant>
      </Component>
      <Component
        name="EnvironmentFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <EnvironmentFilled />
        </Variant>
      </Component>
      <Component
        name="EuroCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <EuroCircleFilled />
        </Variant>
      </Component>
      <Component
        name="ExperimentFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <ExperimentFilled />
        </Variant>
      </Component>
      <Component name="EyeFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <EyeFilled />
        </Variant>
      </Component>
      <Component
        name="EyeInvisibleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <EyeInvisibleFilled />
        </Variant>
      </Component>
      <Component
        name="FileAddFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <FileAddFilled />
        </Variant>
      </Component>
      <Component
        name="FileExcelFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <FileExcelFilled />
        </Variant>
      </Component>
      <Component
        name="FileExclamationFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <FileExclamationFilled />
        </Variant>
      </Component>
      <Component name="FileFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <FileFilled />
        </Variant>
      </Component>
      <Component
        name="FileImageFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <FileImageFilled />
        </Variant>
      </Component>
      <Component
        name="FileMarkdownFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <FileMarkdownFilled />
        </Variant>
      </Component>
      <Component
        name="FilePdfFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <FilePdfFilled />
        </Variant>
      </Component>
      <Component
        name="FilePptFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <FilePptFilled />
        </Variant>
      </Component>
      <Component
        name="FileTextFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <FileTextFilled />
        </Variant>
      </Component>
      <Component
        name="FileUnknownFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <FileUnknownFilled />
        </Variant>
      </Component>
      <Component
        name="FileWordFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <FileWordFilled />
        </Variant>
      </Component>
      <Component
        name="FileZipFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <FileZipFilled />
        </Variant>
      </Component>
      <Component
        name="FilterFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <FilterFilled />
        </Variant>
      </Component>
      <Component name="FireFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <FireFilled />
        </Variant>
      </Component>
      <Component name="FlagFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <FlagFilled />
        </Variant>
      </Component>
      <Component
        name="FolderAddFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <FolderAddFilled />
        </Variant>
      </Component>
      <Component
        name="FolderFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <FolderFilled />
        </Variant>
      </Component>
      <Component
        name="FolderOpenFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <FolderOpenFilled />
        </Variant>
      </Component>
      <Component
        name="FormatPainterFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <FormatPainterFilled />
        </Variant>
      </Component>
      <Component name="FrownFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <FrownFilled />
        </Variant>
      </Component>
      <Component
        name="FunnelPlotFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <FunnelPlotFilled />
        </Variant>
      </Component>
      <Component name="GiftFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <GiftFilled />
        </Variant>
      </Component>
      <Component name="GoldFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <GoldFilled />
        </Variant>
      </Component>
      <Component
        name="GoldenFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <GoldenFilled />
        </Variant>
      </Component>
      <Component
        name="GoogleCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <GoogleCircleFilled />
        </Variant>
      </Component>
      <Component
        name="GooglePlusCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <GooglePlusCircleFilled />
        </Variant>
      </Component>
      <Component
        name="GooglePlusSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <GooglePlusSquareFilled />
        </Variant>
      </Component>
      <Component
        name="GoogleSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <GoogleSquareFilled />
        </Variant>
      </Component>
      <Component name="HddFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <HddFilled />
        </Variant>
      </Component>
      <Component name="HeartFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <HeartFilled />
        </Variant>
      </Component>
      <Component name="HomeFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <HomeFilled />
        </Variant>
      </Component>
      <Component
        name="HourglassFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <HourglassFilled />
        </Variant>
      </Component>
      <Component
        name="IdcardFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <IdcardFilled />
        </Variant>
      </Component>
      <Component
        name="IeCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <IeCircleFilled />
        </Variant>
      </Component>
      <Component
        name="IeSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <IeSquareFilled />
        </Variant>
      </Component>
      <Component
        name="InsuranceFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <InsuranceFilled />
        </Variant>
      </Component>
      <Component
        name="InteractionFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <InteractionFilled />
        </Variant>
      </Component>
      <Component
        name="LayoutFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <LayoutFilled />
        </Variant>
      </Component>
      <Component name="LikeFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <LikeFilled />
        </Variant>
      </Component>
      <Component name="LockFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <LockFilled />
        </Variant>
      </Component>
      <Component
        name="MacCommandFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <MacCommandFilled />
        </Variant>
      </Component>
      <Component name="MailFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <MailFilled />
        </Variant>
      </Component>
      <Component
        name="MedicineBoxFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <MedicineBoxFilled />
        </Variant>
      </Component>
      <Component
        name="MediumCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <MediumCircleFilled />
        </Variant>
      </Component>
      <Component
        name="MediumSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <MediumSquareFilled />
        </Variant>
      </Component>
      <Component name="MehFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <MehFilled />
        </Variant>
      </Component>
      <Component
        name="MessageFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <MessageFilled />
        </Variant>
      </Component>
      <Component
        name="MobileFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <MobileFilled />
        </Variant>
      </Component>
      <Component
        name="MoneyCollectFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <MoneyCollectFilled />
        </Variant>
      </Component>
      <Component
        name="NotificationFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <NotificationFilled />
        </Variant>
      </Component>
      <Component
        name="PayCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <PayCircleFilled />
        </Variant>
      </Component>
      <Component name="PhoneFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <PhoneFilled />
        </Variant>
      </Component>
      <Component
        name="PictureFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <PictureFilled />
        </Variant>
      </Component>
      <Component
        name="PlaySquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <PlaySquareFilled />
        </Variant>
      </Component>
      <Component
        name="PoundCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <PoundCircleFilled />
        </Variant>
      </Component>
      <Component
        name="PrinterFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <PrinterFilled />
        </Variant>
      </Component>
      <Component
        name="ProfileFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <ProfileFilled />
        </Variant>
      </Component>
      <Component
        name="ProjectFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <ProjectFilled />
        </Variant>
      </Component>
      <Component
        name="PropertySafetyFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <PropertySafetyFilled />
        </Variant>
      </Component>
      <Component
        name="PushpinFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <PushpinFilled />
        </Variant>
      </Component>
      <Component
        name="QqCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <QqCircleFilled />
        </Variant>
      </Component>
      <Component
        name="QqSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <QqSquareFilled />
        </Variant>
      </Component>
      <Component name="ReadFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <ReadFilled />
        </Variant>
      </Component>
      <Component
        name="ReconciliationFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <ReconciliationFilled />
        </Variant>
      </Component>
      <Component
        name="RedEnvelopeFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <RedEnvelopeFilled />
        </Variant>
      </Component>
      <Component
        name="RedditCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <RedditCircleFilled />
        </Variant>
      </Component>
      <Component
        name="RedditSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <RedditSquareFilled />
        </Variant>
      </Component>
      <Component name="RestFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <RestFilled />
        </Variant>
      </Component>
      <Component name="RobotFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <RobotFilled />
        </Variant>
      </Component>
      <Component
        name="RocketFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <RocketFilled />
        </Variant>
      </Component>
      <Component
        name="SafetyCertificateFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <SafetyCertificateFilled />
        </Variant>
      </Component>
      <Component name="SaveFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <SaveFilled />
        </Variant>
      </Component>
      <Component
        name="ScheduleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <ScheduleFilled />
        </Variant>
      </Component>
      <Component
        name="SecurityScanFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <SecurityScanFilled />
        </Variant>
      </Component>
      <Component
        name="SettingFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <SettingFilled />
        </Variant>
      </Component>
      <Component name="ShopFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <ShopFilled />
        </Variant>
      </Component>
      <Component
        name="ShoppingFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <ShoppingFilled />
        </Variant>
      </Component>
      <Component
        name="SignalFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <SignalFilled />
        </Variant>
      </Component>
      <Component
        name="SketchCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <SketchCircleFilled />
        </Variant>
      </Component>
      <Component
        name="SketchSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <SketchSquareFilled />
        </Variant>
      </Component>
      <Component name="SkinFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <SkinFilled />
        </Variant>
      </Component>
      <Component
        name="SlackCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <SlackCircleFilled />
        </Variant>
      </Component>
      <Component name="SmileFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <SmileFilled />
        </Variant>
      </Component>
      <Component name="SoundFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <SoundFilled />
        </Variant>
      </Component>
      <Component name="StarFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <StarFilled />
        </Variant>
      </Component>
      <Component
        name="SwitcherFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <SwitcherFilled />
        </Variant>
      </Component>
      <Component
        name="TabletFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <TabletFilled />
        </Variant>
      </Component>
      <Component name="TagFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <TagFilled />
        </Variant>
      </Component>
      <Component name="TagsFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <TagsFilled />
        </Variant>
      </Component>
      <Component
        name="TaobaoSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <TaobaoSquareFilled />
        </Variant>
      </Component>
      <Component
        name="ThunderboltFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <ThunderboltFilled />
        </Variant>
      </Component>
      <Component name="ToolFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <ToolFilled />
        </Variant>
      </Component>
      <Component
        name="TrademarkCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <TrademarkCircleFilled />
        </Variant>
      </Component>
      <Component
        name="TrophyFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <TrophyFilled />
        </Variant>
      </Component>
      <Component
        name="TwitterCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <TwitterCircleFilled />
        </Variant>
      </Component>
      <Component
        name="TwitterSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <TwitterSquareFilled />
        </Variant>
      </Component>
      <Component
        name="UnlockFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <UnlockFilled />
        </Variant>
      </Component>
      <Component name="UsbFilled" docURL="https://ant.design/components/icon">
        <Variant name="filled">
          <UsbFilled />
        </Variant>
      </Component>
      <Component
        name="VideoCameraFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <VideoCameraFilled />
        </Variant>
      </Component>
      <Component
        name="WalletFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <WalletFilled />
        </Variant>
      </Component>
      <Component
        name="ZhihuCircleFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <ZhihuCircleFilled />
        </Variant>
      </Component>
      <Component
        name="ZhihuSquareFilled"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="filled">
          <ZhihuSquareFilled />
        </Variant>
      </Component>

      <Component
        name="UpCircleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <UpCircleTwoTone />
        </Variant>
      </Component>
      <Component
        name="DownCircleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <DownCircleTwoTone />
        </Variant>
      </Component>
      <Component
        name="LeftCircleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <LeftCircleTwoTone />
        </Variant>
      </Component>
      <Component
        name="RightCircleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <RightCircleTwoTone />
        </Variant>
      </Component>
      <Component
        name="PlayCircleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <PlayCircleTwoTone />
        </Variant>
      </Component>
      <Component
        name="UpSquareTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <UpSquareTwoTone />
        </Variant>
      </Component>
      <Component
        name="DownSquareTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <DownSquareTwoTone />
        </Variant>
      </Component>
      <Component
        name="LeftSquareTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <LeftSquareTwoTone />
        </Variant>
      </Component>
      <Component
        name="RightSquareTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <RightSquareTwoTone />
        </Variant>
      </Component>
      <Component
        name="QuestionCircleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <QuestionCircleTwoTone />
        </Variant>
      </Component>
      <Component
        name="PlusCircleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <PlusCircleTwoTone />
        </Variant>
      </Component>
      <Component
        name="PauseCircleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <PauseCircleTwoTone />
        </Variant>
      </Component>
      <Component
        name="MinusCircleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <MinusCircleTwoTone />
        </Variant>
      </Component>
      <Component
        name="PlusSquareTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <PlusSquareTwoTone />
        </Variant>
      </Component>
      <Component
        name="MinusSquareTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <MinusSquareTwoTone />
        </Variant>
      </Component>
      <Component
        name="InfoCircleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <InfoCircleTwoTone />
        </Variant>
      </Component>
      <Component
        name="ExclamationCircleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <ExclamationCircleTwoTone />
        </Variant>
      </Component>
      <Component
        name="CloseCircleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <CloseCircleTwoTone />
        </Variant>
      </Component>
      <Component
        name="CloseSquareTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <CloseSquareTwoTone />
        </Variant>
      </Component>
      <Component
        name="CheckCircleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <CheckCircleTwoTone />
        </Variant>
      </Component>
      <Component
        name="CheckSquareTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <CheckSquareTwoTone />
        </Variant>
      </Component>
      <Component
        name="ClockCircleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <ClockCircleTwoTone />
        </Variant>
      </Component>
      <Component
        name="WarningTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <WarningTwoTone />
        </Variant>
      </Component>
      <Component name="StopTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <StopTwoTone />
        </Variant>
      </Component>
      <Component name="EditTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <EditTwoTone />
        </Variant>
      </Component>
      <Component name="CopyTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <CopyTwoTone />
        </Variant>
      </Component>
      <Component
        name="DeleteTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <DeleteTwoTone />
        </Variant>
      </Component>
      <Component
        name="SnippetsTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <SnippetsTwoTone />
        </Variant>
      </Component>
      <Component name="DiffTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <DiffTwoTone />
        </Variant>
      </Component>
      <Component
        name="HighlightTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <HighlightTwoTone />
        </Variant>
      </Component>
      <Component
        name="PieChartTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <PieChartTwoTone />
        </Variant>
      </Component>
      <Component
        name="BoxPlotTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <BoxPlotTwoTone />
        </Variant>
      </Component>
      <Component name="FundTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <FundTwoTone />
        </Variant>
      </Component>
      <Component
        name="SlidersTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <SlidersTwoTone />
        </Variant>
      </Component>
      <Component
        name="Html5TwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <Html5TwoTone />
        </Variant>
      </Component>
      <Component
        name="AccountBookTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <AccountBookTwoTone />
        </Variant>
      </Component>
      <Component
        name="AlertTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <AlertTwoTone />
        </Variant>
      </Component>
      <Component name="ApiTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <ApiTwoTone />
        </Variant>
      </Component>
      <Component
        name="AppstoreTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <AppstoreTwoTone />
        </Variant>
      </Component>
      <Component
        name="AudioTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <AudioTwoTone />
        </Variant>
      </Component>
      <Component name="BankTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <BankTwoTone />
        </Variant>
      </Component>
      <Component name="BellTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <BellTwoTone />
        </Variant>
      </Component>
      <Component name="BookTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <BookTwoTone />
        </Variant>
      </Component>
      <Component name="BugTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <BugTwoTone />
        </Variant>
      </Component>
      <Component
        name="BuildTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <BuildTwoTone />
        </Variant>
      </Component>
      <Component name="BulbTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <BulbTwoTone />
        </Variant>
      </Component>
      <Component
        name="CalculatorTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <CalculatorTwoTone />
        </Variant>
      </Component>
      <Component
        name="CalendarTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <CalendarTwoTone />
        </Variant>
      </Component>
      <Component
        name="CameraTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <CameraTwoTone />
        </Variant>
      </Component>
      <Component name="CarTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <CarTwoTone />
        </Variant>
      </Component>
      <Component
        name="CarryOutTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <CarryOutTwoTone />
        </Variant>
      </Component>
      <Component
        name="CiCircleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <CiCircleTwoTone />
        </Variant>
      </Component>
      <Component name="CiTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <CiTwoTone />
        </Variant>
      </Component>
      <Component
        name="CloudTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <CloudTwoTone />
        </Variant>
      </Component>
      <Component
        name="CreditCardTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <CreditCardTwoTone />
        </Variant>
      </Component>
      <Component
        name="CrownTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <CrownTwoTone />
        </Variant>
      </Component>
      <Component
        name="CustomerServiceTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <CustomerServiceTwoTone />
        </Variant>
      </Component>
      <Component
        name="DashboardTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <DashboardTwoTone />
        </Variant>
      </Component>
      <Component
        name="DatabaseTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <DatabaseTwoTone />
        </Variant>
      </Component>
      <Component name="CodeTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <CodeTwoTone />
        </Variant>
      </Component>
      <Component
        name="CompassTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <CompassTwoTone />
        </Variant>
      </Component>
      <Component
        name="ContactsTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <ContactsTwoTone />
        </Variant>
      </Component>
      <Component
        name="ContainerTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <ContainerTwoTone />
        </Variant>
      </Component>
      <Component
        name="ControlTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <ControlTwoTone />
        </Variant>
      </Component>
      <Component
        name="DislikeTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <DislikeTwoTone />
        </Variant>
      </Component>
      <Component
        name="DollarCircleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <DollarCircleTwoTone />
        </Variant>
      </Component>
      <Component
        name="DollarTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <DollarTwoTone />
        </Variant>
      </Component>
      <Component
        name="EnvironmentTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <EnvironmentTwoTone />
        </Variant>
      </Component>
      <Component
        name="EuroCircleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <EuroCircleTwoTone />
        </Variant>
      </Component>
      <Component name="EuroTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <EuroTwoTone />
        </Variant>
      </Component>
      <Component
        name="ExperimentTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <ExperimentTwoTone />
        </Variant>
      </Component>
      <Component name="EyeTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <EyeTwoTone />
        </Variant>
      </Component>
      <Component
        name="EyeInvisibleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <EyeInvisibleTwoTone />
        </Variant>
      </Component>
      <Component
        name="FileAddTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <FileAddTwoTone />
        </Variant>
      </Component>
      <Component
        name="FileExcelTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <FileExcelTwoTone />
        </Variant>
      </Component>
      <Component
        name="FileExclamationTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <FileExclamationTwoTone />
        </Variant>
      </Component>
      <Component name="FileTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <FileTwoTone />
        </Variant>
      </Component>
      <Component
        name="FileImageTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <FileImageTwoTone />
        </Variant>
      </Component>
      <Component
        name="FileMarkdownTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <FileMarkdownTwoTone />
        </Variant>
      </Component>
      <Component
        name="FilePdfTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <FilePdfTwoTone />
        </Variant>
      </Component>
      <Component
        name="FilePptTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <FilePptTwoTone />
        </Variant>
      </Component>
      <Component
        name="FileTextTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <FileTextTwoTone />
        </Variant>
      </Component>
      <Component
        name="FileUnknownTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <FileUnknownTwoTone />
        </Variant>
      </Component>
      <Component
        name="FileWordTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <FileWordTwoTone />
        </Variant>
      </Component>
      <Component
        name="FileZipTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <FileZipTwoTone />
        </Variant>
      </Component>
      <Component
        name="FilterTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <FilterTwoTone />
        </Variant>
      </Component>
      <Component name="FireTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <FireTwoTone />
        </Variant>
      </Component>
      <Component name="FlagTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <FlagTwoTone />
        </Variant>
      </Component>
      <Component
        name="FolderAddTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <FolderAddTwoTone />
        </Variant>
      </Component>
      <Component
        name="FolderTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <FolderTwoTone />
        </Variant>
      </Component>
      <Component
        name="FolderOpenTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <FolderOpenTwoTone />
        </Variant>
      </Component>
      <Component
        name="FrownTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <FrownTwoTone />
        </Variant>
      </Component>
      <Component
        name="FunnelPlotTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <FunnelPlotTwoTone />
        </Variant>
      </Component>
      <Component name="GiftTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <GiftTwoTone />
        </Variant>
      </Component>
      <Component name="GoldTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <GoldTwoTone />
        </Variant>
      </Component>
      <Component name="HddTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <HddTwoTone />
        </Variant>
      </Component>
      <Component
        name="HeartTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <HeartTwoTone />
        </Variant>
      </Component>
      <Component name="HomeTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <HomeTwoTone />
        </Variant>
      </Component>
      <Component
        name="HourglassTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <HourglassTwoTone />
        </Variant>
      </Component>
      <Component
        name="IdcardTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <IdcardTwoTone />
        </Variant>
      </Component>
      <Component
        name="InsuranceTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <InsuranceTwoTone />
        </Variant>
      </Component>
      <Component
        name="InteractionTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <InteractionTwoTone />
        </Variant>
      </Component>
      <Component
        name="LayoutTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <LayoutTwoTone />
        </Variant>
      </Component>
      <Component name="LikeTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <LikeTwoTone />
        </Variant>
      </Component>
      <Component name="LockTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <LockTwoTone />
        </Variant>
      </Component>
      <Component name="MailTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <MailTwoTone />
        </Variant>
      </Component>
      <Component
        name="MedicineBoxTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <MedicineBoxTwoTone />
        </Variant>
      </Component>
      <Component name="MehTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <MehTwoTone />
        </Variant>
      </Component>
      <Component
        name="MessageTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <MessageTwoTone />
        </Variant>
      </Component>
      <Component
        name="MobileTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <MobileTwoTone />
        </Variant>
      </Component>
      <Component
        name="MoneyCollectTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <MoneyCollectTwoTone />
        </Variant>
      </Component>
      <Component
        name="NotificationTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <NotificationTwoTone />
        </Variant>
      </Component>
      <Component
        name="PhoneTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <PhoneTwoTone />
        </Variant>
      </Component>
      <Component
        name="PictureTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <PictureTwoTone />
        </Variant>
      </Component>
      <Component
        name="PlaySquareTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <PlaySquareTwoTone />
        </Variant>
      </Component>
      <Component
        name="PoundCircleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <PoundCircleTwoTone />
        </Variant>
      </Component>
      <Component
        name="PrinterTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <PrinterTwoTone />
        </Variant>
      </Component>
      <Component
        name="ProfileTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <ProfileTwoTone />
        </Variant>
      </Component>
      <Component
        name="ProjectTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <ProjectTwoTone />
        </Variant>
      </Component>
      <Component
        name="PropertySafetyTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <PropertySafetyTwoTone />
        </Variant>
      </Component>
      <Component
        name="PushpinTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <PushpinTwoTone />
        </Variant>
      </Component>
      <Component
        name="ReconciliationTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <ReconciliationTwoTone />
        </Variant>
      </Component>
      <Component
        name="RedEnvelopeTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <RedEnvelopeTwoTone />
        </Variant>
      </Component>
      <Component name="RestTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <RestTwoTone />
        </Variant>
      </Component>
      <Component
        name="RocketTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <RocketTwoTone />
        </Variant>
      </Component>
      <Component
        name="SafetyCertificateTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <SafetyCertificateTwoTone />
        </Variant>
      </Component>
      <Component name="SaveTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <SaveTwoTone />
        </Variant>
      </Component>
      <Component
        name="ScheduleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <ScheduleTwoTone />
        </Variant>
      </Component>
      <Component
        name="SecurityScanTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <SecurityScanTwoTone />
        </Variant>
      </Component>
      <Component
        name="SettingTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <SettingTwoTone />
        </Variant>
      </Component>
      <Component name="ShopTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <ShopTwoTone />
        </Variant>
      </Component>
      <Component
        name="ShoppingTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <ShoppingTwoTone />
        </Variant>
      </Component>
      <Component name="SkinTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <SkinTwoTone />
        </Variant>
      </Component>
      <Component
        name="SmileTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <SmileTwoTone />
        </Variant>
      </Component>
      <Component
        name="SoundTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <SoundTwoTone />
        </Variant>
      </Component>
      <Component name="StarTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <StarTwoTone />
        </Variant>
      </Component>
      <Component
        name="SwitcherTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <SwitcherTwoTone />
        </Variant>
      </Component>
      <Component
        name="TabletTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <TabletTwoTone />
        </Variant>
      </Component>
      <Component name="TagTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <TagTwoTone />
        </Variant>
      </Component>
      <Component name="TagsTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <TagsTwoTone />
        </Variant>
      </Component>
      <Component
        name="ThunderboltTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <ThunderboltTwoTone />
        </Variant>
      </Component>
      <Component name="ToolTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <ToolTwoTone />
        </Variant>
      </Component>
      <Component
        name="TrademarkCircleTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <TrademarkCircleTwoTone />
        </Variant>
      </Component>
      <Component
        name="TrophyTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <TrophyTwoTone />
        </Variant>
      </Component>
      <Component
        name="UnlockTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <UnlockTwoTone />
        </Variant>
      </Component>
      <Component name="UsbTwoTone" docURL="https://ant.design/components/icon">
        <Variant name="two tone">
          <UsbTwoTone />
        </Variant>
      </Component>
      <Component
        name="VideoCameraTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <VideoCameraTwoTone />
        </Variant>
      </Component>
      <Component
        name="WalletTwoTone"
        docURL="https://ant.design/components/icon"
      >
        <Variant name="two tone">
          <WalletTwoTone />
        </Variant>
      </Component>
    </Category>
    <Category name="Antd hooks">
      <Component
        name="useMessage"
        docURL="https://ant.design/components/message"
      >
        <Variant proto={UseMessageProto} />
      </Component>
      <Component
        name="useNotification"
        docURL="https://ant.design/components/notification"
      >
        <Variant proto={UseNotificationProto} />
      </Component>
    </Category>
  </Palette>
);

export function FormProto() {
  const [form] = useForm();

  const onFormFinish = (values: any) => {
    // todo handle form finish
  };

  const onFormFinishFailed = (errorInfo: any) => {
    // todo handle form finish fail
  };

  const onFormClearClick = () => {
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
      initialValues={{ remember: true }}
      onFinish={onFormFinish}
      onFinishFailed={onFormFinishFailed}
    >
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onFormClearClick}>
          Clear
        </Button>
      </Form.Item>
    </Form>
  );
}

function TransferProto() {
  const mockData: {
    key: string;
    title: string;
    description: string;
  }[] = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
      })),
    []
  );

  const initialTargetKeys = useMemo(
    () =>
      mockData.filter((item) => Number(item.key) > 10).map((item) => item.key),
    [mockData]
  );

  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const onChange = (
    nextTargetKeys: string[],
    direction: TransferDirection,
    moveKeys: string[]
  ) => {
    console.log("targetKeys:", nextTargetKeys);
    console.log("direction:", direction);
    console.log("moveKeys:", moveKeys);
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange = (
    sourceSelectedKeys: string[],
    targetSelectedKeys: string[]
  ) => {
    console.log("sourceSelectedKeys:", sourceSelectedKeys);
    console.log("targetSelectedKeys:", targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const onScroll = (
    direction: TransferDirection,
    e: React.SyntheticEvent<HTMLUListElement>
  ) => {
    console.log("direction:", direction);
    console.log("target:", e.target);
  };

  return (
    <Transfer
      dataSource={mockData}
      titles={["Source", "Target"]}
      targetKeys={targetKeys}
      selectedKeys={selectedKeys}
      onChange={onChange}
      onSelectChange={onSelectChange}
      onScroll={onScroll}
      render={(item) => item.title}
    />
  );
}

function TourProto() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const [open, setOpen] = useState<boolean>(false);

  const steps: TourProps["steps"] = [
    {
      title: "Upload File",
      description: "Put your files here.",
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: "Save",
      description: "Save your changes.",
      target: () => ref2.current,
    },
    {
      title: "Other Actions",
      description: "Click to see other actions.",
      target: () => ref3.current,
    },
  ];

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
}

function UseMessageProto() {
  const [messageApi, contextHolder] = message.useMessage();
}

function UseNotificationProto() {
  const [api, contextHolder] = notification.useNotification();
}
