import React from "react";
import {
  Category,
  Component,
  Palette,
  Variant
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
} from '@ant-design/icons';
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Link from "antd/es/typography/Link";
import Button from "antd/es/button";
import Sider from "antd/es/layout/Sider";
import Col from "antd/es/grid/col";
import Layout, {Content, Footer, Header} from "antd/es/layout/layout";
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
  Comment,
  DatePicker,
  Descriptions,
  Divider,
  Dropdown,
  Form,
  Input,
  InputNumber,
  Menu,
  PageHeader,
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
  Spin, Select,
  Slider,
  Switch, TimePicker
} from "antd/es";
import Checkbox from "antd/es/checkbox/Checkbox";
import Radio, {Group} from "antd/es/radio";
import SubMenu from "antd/es/menu/SubMenu";
import {Alert, ConfigProvider, Upload} from "antd";
import Meta from "antd/es/card/Meta";
import TextArea from "antd/es/input/TextArea";
import Paragraph from "antd/es/typography/Paragraph";
import {useForm} from "antd/es/form/Form";

const palette = () => (
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
          <Button type="primary" shape="circle" icon={<SearchOutlined/>}/>
        </Variant>
        <Variant name="ghost">
          <Button ghost>Ghost Default</Button>
        </Variant>
        <Variant name="ghost - primary">
          <Button type="primary" ghost>Ghost Primary</Button>
        </Variant>
        <Variant name="ghost - dashed">
          <Button type="dashed" ghost>Ghost Dashed</Button>
        </Variant>
        <Variant name="ghost - link">
          <Button type="link" ghost>Ghost Link</Button>
        </Variant>
        <Variant name="danger">
          <Button danger>Danger Default</Button>
        </Variant>
        <Variant name="danger - primary">
          <Button type="primary" danger>Danger Primary</Button>
        </Variant>
        <Variant name="danger - dashed">
          <Button type="dashed" danger>Danger Dashed</Button>
        </Variant>
        <Variant name="danger - text">
          <Button type="text" danger>Danger Text</Button>
        </Variant>
        <Variant name="danger - link">
          <Button type="link" danger>Danger Link</Button>
        </Variant>
        <Variant name="block" docURL="https://ant.design/components/button/#components-button-demo-block">
          <Button block>Block Default</Button>
        </Variant>
        <Variant name="block - primary">
          <Button type="primary" block>Block Primary</Button>
        </Variant>
        <Variant name="block - dashed">
          <Button type="dashed" block>Block Dashed</Button>
        </Variant>
        <Variant name="block - link">
          <Button type="link" block>Block Link</Button>
        </Variant>
      </Component>
    </Category>
    <Category name="Typography">
      <Component name="Title" docURL="https://ant.design/components/typography/#components-typography-demo-title">
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
      <Component name="Text" docURL="https://ant.design/components/typography/#components-typography-demo-text">
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
      <Component name="Link" docURL="https://ant.design/components/typography/#components-typography-demo-text">
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
          <Divider/>
        </Variant>
        <Variant name="dashed">
          <Divider dashed/>
        </Variant>
        <Variant name="with title">
          <Divider>Title</Divider>
        </Variant>
        <Variant name="vertical">
          <Divider type="vertical"/>
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
      <Component name="App Layout" docURL="https://ant.design/components/layout/">
        <Variant>
          <Layout>
            <Header><span style={{'color': '#FFF'}}>Header</span></Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Variant>
        <Variant name="left sider">
          <Layout>
            <Header><span style={{'color': '#FFF'}}>Header</span></Header>
            <Layout>
              <Sider><span style={{'color': '#FFF'}}>Sider</span></Sider>
              <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
        </Variant>
        <Variant name="right sider">
          <Layout>
            <Header><span style={{'color': '#FFF'}}>Header</span></Header>
            <Layout>
              <Content>Content</Content>
              <Sider><span style={{'color': '#FFF'}}>Sider</span></Sider>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
        </Variant>
        <Variant name="left full sider">
          <Layout>
            <Sider><span style={{'color': '#FFF'}}>Sider</span></Sider>
            <Layout>
              <Header color={'white'}><span style={{'color': '#FFF'}}>Header</span></Header>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        </Variant>
      </Component>
    </Category>
    <Category name="Form">
      <Component name="Form" docURL="https://ant.design/components/form/">
        <Variant proto={FormProto}/>
      </Component>
      <Component name="Form.Item" docURL="https://ant.design/components/form/#components-form-demo-dynamic-form-item">
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
                  value: 'item',
                  label: 'Item',
                  children: [
                    {
                      value: 'subitem',
                      label: 'Sub Item',
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
        </Variant>
        <Variant name="DatePicker">
          <Form.Item label="DatePicker" name="datepicker">
            <DatePicker/>
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
      <Component name="AutoComplete" docURL="https://ant.design/components/auto-complete/">
        <Variant>
          <AutoComplete/>
        </Variant>
      </Component>
      <Component name="Cascader" docURL="https://ant.design/components/cascader/">
        <Variant>
          <Cascader/>
        </Variant>
      </Component>
      <Component name="Checkbox" docURL="https://ant.design/components/checkbox/">
        <Variant>
          <Checkbox>Checkbox</Checkbox>
        </Variant>
      </Component>
      <Component name="DatePicker" docURL="https://ant.design/components/date-picker/">
        <Variant>
          <DatePicker/>
        </Variant>
        <Variant name="show time">
          <DatePicker showTime={true}/>
        </Variant>
        <Variant name="week">
          <DatePicker picker="week"/>
        </Variant>
        <Variant name="month">
          <DatePicker picker="month"/>
        </Variant>
        <Variant name="quarter">
          <DatePicker picker="quarter"/>
        </Variant>
        <Variant name="year">
          <DatePicker picker="year"/>
        </Variant>
        {/*
        <Variant name="range">
          <DatePicker.RangePicker/>
        </Variant>
        */}
      </Component>
      <Component name="Input" docURL="https://ant.design/components/input/">
        <Variant>
          <Input/>
        </Variant>
        <Variant name="large">
          <Input size="large"/>
        </Variant>
        <Variant name="small">
          <Input size="small"/>
        </Variant>
        <Variant name="with prefix">
          <Input addonBefore="http://" defaultValue="mysite"/>
        </Variant>
        <Variant name="with postfix">
          <Input addonAfter=".com" defaultValue="mysite"/>
        </Variant>
      </Component>
      <Component name="InputNumber" docURL="https://ant.design/components/input-number/">
        <Variant>
          <InputNumber min={0} max={10} defaultValue={5}/>
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
          <Rate/>
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
          <Slider defaultValue={30}/>
        </Variant>
      </Component>
      <Component name="Switch" docURL="https://ant.design/components/switch/">
        <Variant>
          <Switch defaultChecked={false}/>
        </Variant>
      </Component>
      <Component name="TimePicker" docURL="https://ant.design/components/time-picker/">
        <Variant>
          <TimePicker/>
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
          <Avatar icon={<UserOutlined/>}/>
        </Variant>
        <Variant name="square icon">
          <Avatar shape="square" icon={<UserOutlined/>}/>
        </Variant>
        <Variant name="image type">
          <Avatar src="https://joeschmoe.io/api/v1/random"/>
        </Variant>
        <Variant name="complex source">
          <Avatar
            src={
              <Image
                src="https://joeschmoe.io/api/v1/random"
                style={{width: 32}}
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
          <Avatar size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100}}>
            User
          </Avatar>
        </Variant>
      </Component>
      <Component name="Avatar.Group" docURL="https://ant.design/components/avatar/#components-avatar-demo-group">
        <Variant>
          <Avatar.Group>
            <Avatar icon={<UserOutlined/>}>U1</Avatar>
            <Avatar icon={<UserOutlined/>}>U2</Avatar>
            <Avatar icon={<UserOutlined/>}>U3</Avatar>
          </Avatar.Group>
        </Variant>
        <Variant name="display max count">
          <Avatar.Group maxCount={2}>
            <Avatar icon={<UserOutlined/>}/>
            <Avatar icon={<UserOutlined/>}/>
            <Avatar icon={<UserOutlined/>}/>
          </Avatar.Group>
        </Variant>
      </Component>
      <Component name="Badge" docURL="https://ant.design/components/badge/">
        <Variant name="success status">
          <Badge status="success"/>
        </Variant>
        <Variant name="success status with text">
          <Badge status="success" text="Success"/>
        </Variant>
        <Variant name="count">
          <Badge count={25}/>
        </Variant>
        <Variant name="overflow count">
          <Badge count={100} overflowCount={99}/>
        </Variant>
        <Variant name="icon">
          <Badge count={<ClockCircleOutlined style={{color: "#f5222d"}}/>}/>
        </Variant>
        <Variant name="orange color with text">
          <Badge color="orange" text="orange"/>
        </Variant>
        <Variant name="on avatar - count">
          <Badge count={5}>
            <Avatar shape="square" size="large"/>
          </Badge>
        </Variant>
        <Variant name="on avatar - clickable">
          <a href="#">
            <Badge count={5}>
              <Avatar shape="square" size="large"/>
            </Badge>
          </a>
        </Variant>
        <Variant name="on avatar - show zero">
          <Badge count={0} showZero>
            <Avatar shape="square" size="large"/>
          </Badge>
        </Variant>
        <Variant name="on avatar - icon">
          <Badge count={<ClockCircleOutlined style={{color: "#f5222d"}}/>}>
            <Avatar shape="square" size="large"/>
          </Badge>
        </Variant>
        <Variant name="on avatar - overflow">
          <Badge count={99} overflowCount={10}>
            <Avatar shape="square" size="large"/>
          </Badge>
        </Variant>
        <Variant name="on avatar - offset">
          <Badge count={5} offset={[10, 10]}>
            <Avatar shape="square" size="large"/>
          </Badge>
        </Variant>
        <Variant name="on avatar - small sized count">
          <Badge size="small" count={5}>
            <Avatar shape="square" size="large"/>
          </Badge>
        </Variant>
        <Variant name="on icon - dot">
          <Badge dot>
            <NotificationOutlined style={{fontSize: 16}}/>
          </Badge>
        </Variant>
        <Variant name="on link - dot">
          <Badge dot>
            <a href="#">Link something</a>
          </Badge>
        </Variant>
      </Component>
      <Component name="Badge.Ribbon" docURL="https://ant.design/components/badge/#components-badge-demo-ribbbon">
        <Variant name="on card">
          <Badge.Ribbon text="Hippies">
            <Card title="Pushes open the window" size="small">
              and raises the spyglass.
            </Card>
          </Badge.Ribbon>
        </Variant>
      </Component>
      <Component name="Calendar" docURL="https://ant.design/components/calendar/">
        <Variant>
          <Calendar/>
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
            <Meta title="Europe Street beat" description="www.instagram.com"/>
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
              <SettingOutlined key="setting"/>,
              <EditOutlined key="edit"/>,
              <EllipsisOutlined key="ellipsis"/>
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
              style={{marginTop: 16}}
            >
              Inner Card content
            </Card>
          </Card>
        </Variant>
      </Component>
      <Component name="Card.Grid" docURL="https://ant.design/components/card/#components-card-demo-grid-card">
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
        style={{background: '#364d79'}}
      >
        <Variant previewLayout="stretch">
          <Carousel>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </Variant>
      </Component>
      <Component name="Collapse" docURL="https://ant.design/components/collapse/">
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
            expandIcon={({isActive}) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0}/>
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
      <Component name="Comment" docURL="https://ant.design/components/comment/">
        <Variant name="basic">
          <Comment
            actions={[<span key="comment-nested-reply-to">Reply to</span>]}
            author={<a>Han Solo</a>}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure).
              </p>
            }
          ></Comment>
        </Variant>
        <Variant name="usage with list">
          <List
            header="2 replies"
            itemLayout="horizontal"
            dataSource={[
              {
                actions: [<span key="comment-list-reply-to-0">Reply to</span>],
                author: "Han Solo",
                avatar: "https://joeschmoe.io/api/v1/random",
                content: (
                  <p>
                    We supply a series of design principles, practical patterns
                    and high quality design resources (Sketch and Axure), to
                    help people create their product prototypes beautifully and
                    efficiently.
                  </p>
                ),
                datetime: <span>2022-01-01</span>
              },
              {
                actions: [<span key="comment-list-reply-to-0">Reply to</span>],
                author: "Han Solo",
                avatar: "https://joeschmoe.io/api/v1/random",
                content: (
                  <p>
                    We supply a series of design principles, practical patterns
                    and high quality design resources (Sketch and Axure), to
                    help people create their product prototypes beautifully and
                    efficiently.
                  </p>
                ),
                datetime: <span>2022-01-01</span>
              }
            ]}
            renderItem={item => (
              <li>
                <Comment
                  actions={item.actions}
                  author={item.author}
                  avatar={item.avatar}
                  content={item.content}
                  datetime={item.datetime}
                />
              </li>
            )}
          />
        </Variant>
        <Variant name="reply editor">
          <Comment
            avatar={
              <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo"/>
            }
            content={
              <>
                <Form.Item>
                  <TextArea rows={4}/>
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit" type="primary">
                    Add Comment
                  </Button>
                </Form.Item>
              </>
            }
          />
        </Variant>
      </Component>
      <Component name="Descriptions" docURL="https://ant.design/components/descriptions/">
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
            column={{xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1}}
          >
            <Descriptions.Item label="UserName">Jack Smith</Descriptions.Item>
          </Descriptions>
        </Variant>
      </Component>
      <Component name="Empty" docURL="https://ant.design/components/empty/">
        <Variant name="basic">
          <Empty/>
        </Variant>
        <Variant name="antd image">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
        </Variant>
        <Variant name="image source">
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{height: 60}}
          />
        </Variant>
        <Variant name="with description">
          <Empty description={<span>Description</span>}/>
        </Variant>
        <Variant name="no description">
          <Empty description={false}/>
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
              src:
                "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
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
      <Component name="Image.PreviewGroup" docURL="https://ant.design/components/image/#components-image-demo-preview-group">
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
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </Variant>
        <Variant name="with footer and header">
          <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            dataSource={["Foo", "Bar"]}
            renderItem={item => <List.Item>{item}</List.Item>}
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
                  "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
              },
              {
                title: "Bar",
                href: "https://ant.design",
                avatar: "https://joeschmoe.io/api/v1/random",
                description:
                  "Ant Design, a design language for background applications, is refined by Ant UED Team.",
                content:
                  "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
              }
            ]}
            renderItem={item => (
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
                  avatar={<Avatar src={item.avatar}/>}
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
            grid={{gutter: 16, column: 4}}
            dataSource={[
              {title: "Title 1"},
              {title: "Title 2"},
              {title: "Title 3"}
            ]}
            renderItem={item => (
              <List.Item>
                <Card title={item.title}>Card content</Card>
              </List.Item>
            )}
          />
        </Variant>
        <Variant name="responsive grid layout">
          <List
            grid={{gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3}}
            dataSource={[
              {title: "Title 1"},
              {title: "Title 2"},
              {title: "Title 3"}
            ]}
            renderItem={item => (
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
      <Component name="Statistic" docURL="https://ant.design/components/statistic/">
        <Variant name="basic">
          <Statistic title="Active Users" value={112893}/>
        </Variant>
        <Variant name="loading">
          <Statistic title="Active Users" value={112893} loading/>
        </Variant>
        <Variant name="with precision">
          <Statistic
            title="Account Balance (CNY)"
            value={112893}
            precision={2}
          />
        </Variant>
        <Variant name="prefix icon">
          <Statistic title="Feedback" value={1128} prefix={<LikeOutlined/>}/>
        </Variant>
        <Variant name="suffix text">
          <Statistic title="Unmerged" value={93} suffix=" / 100"/>
        </Variant>
        <Variant name="in card">
          <Row gutter={16}>
            <Col span={12}>
              <Card>
                <Statistic title="Active" value={11.28}/>
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic title="Idle" value={9.3}/>
              </Card>
            </Col>
          </Row>
        </Variant>
      </Component>
      <Component name="Table" docURL="https://ant.design/components/table/">
        <Variant name="basic">
          <Table
            columns={[
              {title: "Name", dataIndex: "name"},
              {title: "Age", dataIndex: "age"}
            ]}
            dataSource={[
              {key: 1, name: "John", age: 30},
              {key: 2, name: "Lucy", age: 31}
            ]}
          />
        </Variant>
        <Variant name="jsx style">
          <Table
            dataSource={[
              {key: 1, name: "John", age: 30},
              {key: 2, name: "Lucy", age: 31}
            ]}
          >
            <Table.Column title="Name" dataIndex="name" key="name"/>
            <Table.Column title="Age" dataIndex="age" key="age"/>
          </Table>
        </Variant>
        <Variant name="checkbox selection">
          <Table
            rowSelection={{type: "checkbox"}}
            columns={[
              {title: "Name", dataIndex: "name"},
              {title: "Age", dataIndex: "age"}
            ]}
            dataSource={[
              {key: 1, name: "John", age: 30},
              {key: 2, name: "Lucy", age: 31}
            ]}
          />
        </Variant>
        <Variant name="radio selection">
          <Table
            rowSelection={{type: "radio"}}
            columns={[
              {title: "Name", dataIndex: "name"},
              {title: "Age", dataIndex: "age"}
            ]}
            dataSource={[
              {key: 1, name: "John", age: 30},
              {key: 2, name: "Lucy", age: 31}
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
                Table.SELECTION_NONE
              ]
            }}
            columns={[
              {title: "Name", dataIndex: "name"},
              {title: "Age", dataIndex: "age"}
            ]}
            dataSource={[
              {key: 1, name: "John", age: 30},
              {key: 2, name: "Lucy", age: 31}
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
                    value: "John"
                  },
                  {
                    text: "Lucy",
                    value: "Lucy"
                  }
                ],
                onFilter: (value: any, record) =>
                  record.name.indexOf(value) === 0
              },
              {
                title: "Age",
                dataIndex: "age",
                sorter: (a, b) => a.age - b.age
              }
            ]}
            dataSource={[
              {key: 1, name: "John", age: 30},
              {key: 2, name: "Lucy", age: 31}
            ]}
          />
        </Variant>
        <Variant name="middle size">
          <Table
            size="middle"
            columns={[
              {title: "Name", dataIndex: "name"},
              {title: "Age", dataIndex: "age"}
            ]}
            dataSource={[
              {key: 1, name: "John", age: 30},
              {key: 2, name: "Lucy", age: 31}
            ]}
          />
        </Variant>
        <Variant name="title and footer">
          <Table
            title={() => "Header"}
            footer={() => "Footer"}
            size="middle"
            columns={[
              {title: "Name", dataIndex: "name"},
              {title: "Age", dataIndex: "age"}
            ]}
            dataSource={[
              {key: 1, name: "John", age: 30},
              {key: 2, name: "Lucy", age: 31}
            ]}
          />
        </Variant>
        <Variant name="expandable rows">
          <Table
            columns={[
              {title: "Name", dataIndex: "name"},
              {title: "Age", dataIndex: "age"}
            ]}
            dataSource={[
              {
                key: 1,
                name: "John",
                age: 30,
                description: "My name is John Brown, I am 32 years old"
              },
              {key: 2, name: "Lucy", age: 31}
            ]}
            expandable={{
              expandedRowRender: (record: any) => (
                <p style={{margin: 0}}>{record.description}</p>
              ),
              rowExpandable: record => record.name !== "Lucy"
            }}
          />
        </Variant>
        <Variant name="row span">
          <Table
            columns={[
              {title: "Name", dataIndex: "name"},
              {title: "Age", dataIndex: "age"},
              {
                title: "Phone",
                dataIndex: "phone",
                render: (value, row, index) => {
                  if (index === 0) {
                    return {
                      children: value,
                      props: {rowSpan: 2}
                    };
                  }
                  if (index === 1) {
                    return {
                      children: value,
                      props: {rowSpan: 0}
                    };
                  }
                  return value;
                }
              }
            ]}
            dataSource={[
              {key: 1, name: "John", age: 30, phone: "0575-22098909"},
              {key: 2, name: "Lucy", age: 31, phone: "0575-22098909"},
              {key: 3, name: "Joe", age: 25, phone: "0571-22098333"}
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
                    return {children: value, props: {colSpan: 3}};
                  }
                  return value;
                }
              },
              {
                title: "Age",
                dataIndex: "age",
                render: (value, record, index) => {
                  if (index === 2) {
                    return {children: value, props: {colSpan: 0}};
                  }
                  return value;
                }
              },
              {
                title: "Phone",
                dataIndex: "phone",
                render: (value, record, index) => {
                  if (index === 2) {
                    return {children: value, props: {colSpan: 0}};
                  }
                  return value;
                }
              }
            ]}
            dataSource={[
              {key: 1, name: "John", age: 30, phone: "0575-22098909"},
              {key: 2, name: "Lucy", age: 31, phone: "0575-22098909"},
              {key: 3, name: "Joe", age: 25, phone: "0571-22098333"}
            ]}
          />
        </Variant>
        <Variant name="tree data" docURL="https://ant.design/components/table/#components-table-demo-tree-data">
          <Table
            columns={[
              {
                title: "Name",
                dataIndex: "name",
                key: "name"
              },
              {
                title: "Age",
                dataIndex: "age",
                key: "age",
                width: "12%"
              },
              {
                title: "Address",
                dataIndex: "address",
                width: "30%",
                key: "address"
              }
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
                    address: "New York No. 2 Lake Park"
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
                        address: "New York No. 3 Lake Park"
                      }
                    ]
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
                            address: "London No. 3 Lake Park"
                          },
                          {
                            key: 1312,
                            name: "Jimmy Green sr.",
                            age: 18,
                            address: "London No. 4 Lake Park"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                key: 2,
                name: "Joe Black",
                age: 32,
                address: "Sidney No. 1 Lake Park"
              }
            ]}
          />
        </Variant>
        <Variant name="fixed header" docURL="https://ant.design/components/table/#components-table-demo-fixed-header">
          <Table
            dataSource={Array.from(Array(30).keys()).map((value, index) => ({
              key: index,
              name: `Edward King ${index}`,
              age: 32,
              address: `London, Park Lane no. ${index}`
            }))}
            scroll={{y: 240}}
            columns={[
              {
                title: "Name",
                dataIndex: "name",
                width: 150
              },
              {
                title: "Age",
                dataIndex: "age",
                width: 150
              },
              {
                title: "Address",
                dataIndex: "address"
              }
            ]}
          />
        </Variant>
        <Variant name="ellipsis">
          <Table
            columns={[
              {title: "Name", dataIndex: "name", ellipsis: true},
              {title: "address", dataIndex: "address", ellipsis: true}
            ]}
            dataSource={[
              {
                key: 1,
                name: "John",
                address: "Long Column Long Column Long Column"
              },
              {
                key: 2,
                name: "Lucy",
                address: "Long Column Long Column Long Column"
              }
            ]}
          />
        </Variant>
        <Variant name="summary" docURL="https://ant.design/components/table/#components-table-demo-summary">
          <Table
            columns={[
              {title: "Name", dataIndex: "name"},
              {title: "Age", dataIndex: "age"}
            ]}
            dataSource={[
              {key: 1, name: "John", age: 30},
              {key: 2, name: "Lucy", age: 31}
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
                render: text => <a>{text}</a>
              },
              {
                title: "Age (medium screen or bigger)",
                dataIndex: "age",
                key: "age",
                responsive: ["md"]
              },
              {
                title: "Address (large screen or bigger)",
                dataIndex: "address",
                key: "address",
                responsive: ["lg"]
              }
            ]}
            dataSource={[
              {
                key: "1",
                name: "John Brown",
                age: 32,
                address: "New York No. 1 Lake Park"
              }
            ]}
          />
        </Variant>
        <Variant name="pagination none">
          <Table
            columns={[
              {title: "Name", dataIndex: "name"},
              {title: "Age", dataIndex: "age"}
            ]}
            dataSource={[
              {key: 1, name: "John", age: 30},
              {key: 2, name: "Lucy", age: 31}
            ]}
            pagination={false}
          />
        </Variant>
        <Variant name="pagination top right">
          <Table
            columns={[
              {title: "Name", dataIndex: "name"},
              {title: "Age", dataIndex: "age"}
            ]}
            dataSource={[
              {key: 1, name: "John", age: 30},
              {key: 2, name: "Lucy", age: 31}
            ]}
            pagination={{position: ["topRight", "none" as any]}}
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
                  <AppleOutlined/>
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
                  <AndroidOutlined/>
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
                <Button style={{marginRight: "16px"}}>
                  Left Extra Action
                </Button>
              ),
              right: (
                <Button style={{marginLeft: "16px"}}>
                  Right Extra Action
                </Button>
              )
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
          <Tag icon={<YoutubeOutlined/>} color="#cd201f">
            Youtube
          </Tag>
        </Variant>
      </Component>
      <Component name="Timeline" docURL="https://ant.design/components/timeline/">
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
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode={"horizontal"}
          >
            <SubMenu key="sub1" icon={<MailOutlined/>} title="Navigation One">
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
              icon={<AppstoreOutlined/>}
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
              icon={<SettingOutlined/>}
              title="Navigation Three"
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Variant>
        <Variant name="with icon">
          <Timeline>
            <Timeline.Item>Step 1</Timeline.Item>
            <Timeline.Item
              dot={<ClockCircleOutlined style={{fontSize: "16px"}}/>}
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
                        disableCheckbox: true
                      },
                      {
                        title: "leaf",
                        key: "0-0-0-1"
                      }
                    ]
                  },
                  {
                    title: "parent 1-1",
                    key: "0-0-1",
                    children: [
                      {
                        title: <span style={{color: "#1890ff"}}>sss</span>,
                        key: "0-0-1-0"
                      }
                    ]
                  }
                ]
              }
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
                  {title: "leaf 0-0", key: "0-0-0", isLeaf: true},
                  {title: "leaf 0-1", key: "0-0-1", isLeaf: true}
                ]
              },
              {
                title: "parent 1",
                key: "0-1",
                children: [
                  {title: "leaf 1-0", key: "0-1-0", isLeaf: true},
                  {title: "leaf 1-1", key: "0-1-1", isLeaf: true}
                ]
              }
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
                      {title: "leaf 0-0-1", key: "0-0-0-1", isLeaf: true}
                    ]
                  },
                  {title: "leaf 0-1", key: "0-0-1", isLeaf: true}
                ]
              }
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
                icon: <SmileOutlined/>,
                children: [
                  {
                    title: "leaf",
                    key: "0-0-0",
                    icon: <MehOutlined/>
                  },
                  {
                    title: "leaf",
                    key: "0-0-1",
                    icon: ({selected}) =>
                      selected ? <FrownFilled/> : <FrownOutlined/>
                  }
                ]
              }
            ]}
          />
        </Variant>
        <Variant name="custom collapse/expand icon">
          <Tree
            switcherIcon={<DownOutlined/>}
            treeData={[
              {
                title: "parent 1",
                key: "0-0",
                children: [
                  {
                    title: "leaf",
                    key: "0-0-0"
                  }
                ]
              }
            ]}
          />
        </Variant>
      </Component>
    </Category>
    <Category name="Navigation">
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
      <Component name="Breadcrumb" docURL="https://ant.design/components/breadcrumb/">
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
              <HomeOutlined/>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <UserOutlined/>
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
            <Breadcrumb.Separator/>
            <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
            <Breadcrumb.Separator/>
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
      <Component name="Dropdown" docURL="https://ant.design/components/dropdown/">
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
            <a onClick={e => e.preventDefault()}>
              Hover me <DownOutlined/>
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
            <SubMenu key="sub1" icon={<MailOutlined/>} title="Navigation One">
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
              icon={<AppstoreOutlined/>}
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
              icon={<SettingOutlined/>}
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
          <Menu
            defaultSelectedKeys={["1"]}
            mode={"horizontal"}
          >
            <SubMenu key="sub1" icon={<MailOutlined/>} title="Navigation One">
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
              icon={<AppstoreOutlined/>}
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
              icon={<SettingOutlined/>}
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
      <Component name="PageHeader" docURL="https://ant.design/components/page-header/">
        <Variant name="basic">
          <PageHeader
            onBack={() => null}
            title="Title"
            subTitle="This is a subtitle"
          />
        </Variant>
        <Variant name="extra">
          <PageHeader
            onBack={() => null}
            title="Title"
            subTitle="This is a subtitle"
            extra={[
              <Button key="3">Operation</Button>,
              <Button key="2">Operation</Button>,
              <Button key="1" type="primary">
                Primary
              </Button>
            ]}
          />
        </Variant>
        <Variant name="with breadcrumbs">
          <PageHeader
            title="Title"
            breadcrumb={{
              routes: [
                {
                  path: "index",
                  breadcrumbName: "First-level Menu"
                },
                {
                  path: "first",
                  breadcrumbName: "Second-level Menu"
                },
                {
                  path: "second",
                  breadcrumbName: "Third-level Menu"
                }
              ]
            }}
            subTitle="This is a subtitle"
          />
        </Variant>
      </Component>
      <Component name="Pagination" docURL="https://ant.design/components/pagination/">
        <Variant name="basic">
          <Pagination defaultCurrent={1} total={50}/>
        </Variant>
        <Variant name="with jumper">
          <Pagination showQuickJumper defaultCurrent={2} total={500}/>
        </Variant>
        <Variant name="mini size">
          <Pagination size="small" total={50}/>
        </Variant>
        <Variant name="simple mode">
          <Pagination simple defaultCurrent={2} total={50}/>
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
            <Steps.Step title="Finished" description="This is a description."/>
            <Steps.Step
              title="In Progress"
              subTitle="Left 00:00:08"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description."/>
          </Steps>
        </Variant>
        <Variant name="mini">
          <Steps size="small" current={1}>
            <Steps.Step title="Finished"/>
            <Steps.Step title="In Progress"/>
            <Steps.Step title="Waiting"/>
          </Steps>
        </Variant>
        <Variant name="with icon">
          <Steps>
            <Steps.Step status="finish" title="Login" icon={<UserOutlined/>}/>
            <Steps.Step
              status="finish"
              title="Verification"
              icon={<SolutionOutlined/>}
            />
            <Steps.Step
              status="process"
              title="Pay"
              icon={<LoadingOutlined/>}
            />
            <Steps.Step status="wait" title="Done" icon={<SmileOutlined/>}/>
          </Steps>
        </Variant>
        <Variant name="vertical">
          <Steps direction="vertical" current={1}>
            <Steps.Step title="Finished" description="This is a description."/>
            <Steps.Step
              title="In Progress"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description."/>
          </Steps>
        </Variant>
        <Variant name="vertical mini">
          <Steps direction="vertical" size="small" current={1}>
            <Steps.Step title="Finished" description="This is a description."/>
            <Steps.Step
              title="In Progress"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description."/>
          </Steps>
        </Variant>
        <Variant name="error status">
          <Steps current={1} status="error">
            <Steps.Step title="Finished" description="This is a description"/>
            <Steps.Step
              title="In Process"
              description="This is a description"
            />
            <Steps.Step title="Waiting" description="This is a description"/>
          </Steps>
        </Variant>
        <Variant name="dot style">
          <Steps progressDot current={1}>
            <Steps.Step title="Finished" description="This is a description."/>
            <Steps.Step
              title="In Progress"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description."/>
          </Steps>
        </Variant>
        <Variant name="custom dot style">
          <Steps
            current={1}
            progressDot={(dot, {status, index}) => (
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
            <Steps.Step title="Finished" description="This is a description."/>
            <Steps.Step
              title="In Progress"
              subTitle="Left 00:00:08"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description."/>
          </Steps>
        </Variant>
      </Component>
    </Category>
    <Category name="Feedback">
      <Component name="Alert" docURL="https://ant.design/components/alert/">
        <Variant name="error">
          <Alert message="Error Text" type="error"/>
        </Variant>
        <Variant name="warning">
          <Alert message="Warning Text" type="warning"/>
        </Variant>
        <Variant name="info">
          <Alert message="Info Text" type="info"/>
        </Variant>
        <Variant name="success">
          <Alert message="Success Text" type="success"/>
        </Variant>
        <Variant name="closable">
          <Alert
            message="Warning Text"
            type="warning"
            closable
          />
        </Variant>
        <Variant name="with description">
          <Alert
            message="Success Text"
            description="Success Description Success Description Success Description"
            type="success"
          />
        </Variant>
        <Variant name="success type with icon">
          <Alert message="Success Tips" type="success" showIcon/>
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
          <Alert message="Warning text" banner/>
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
          <Alert message="Info Text" type="info" closeText="Close Now"/>
        </Variant>
      </Component>
      <Component name="Drawer" docURL="https://ant.design/components/drawer/">
        <Variant name="placement right">
          <Drawer title="Basic Drawer" visible>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
        <Variant name="placement top">
          <Drawer title="Basic Drawer" visible placement="top">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
        <Variant name="placement left">
          <Drawer title="Basic Drawer" visible placement="left">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
        <Variant name="placement bottom">
          <Drawer title="Basic Drawer" visible placement="bottom">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
        <Variant name="large">
          <Drawer title="Basic Drawer" visible size="large">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
      </Component>
      <Component name="Modal" docURL="https://ant.design/components/modal/">
        <Variant name="basic">
          <Modal title="Basic Modal" visible={true}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
        <Variant name="custom footer">
          <Modal
            title="Basic Modal"
            visible={true}
            footer={[
              <Button key="back">Return</Button>,
              <Button key="submit" type="primary">
                Submit
              </Button>,
              <Button key="link" href="https://google.com" type="primary">
                Search on Google
              </Button>
            ]}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
        <Variant name="width">
          <Modal title="Basic Modal" visible={true} width={1000}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
        <Variant name="ok and cancel text">
          <Modal
            title="Basic Modal"
            visible={true}
            okText="Confirm"
            cancelText="Cancel"
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
        <Variant name="vertically centred">
          <Modal title="Vertically centered modal dialog" centered visible>
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
        </Variant>
        <Variant name="top offset">
          <Modal title="20px to Top" style={{top: 20}} visible>
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
        </Variant>
        <Variant name="custom button props">
          <Modal
            title="Basic Modal"
            visible
            okButtonProps={{disabled: true}}
            cancelButtonProps={{disabled: true}}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
      </Component>
      <Component name="Popconfirm" docURL="https://ant.design/components/popconfirm/">
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
            icon={<QuestionCircleOutlined style={{color: "red"}}/>}
          >
            <a href="#">Delete</a>
          </Popconfirm>
        </Variant>
      </Component>
      <Component name="Progress" docURL="https://ant.design/components/progress/">
        <Variant name="standard">
          <Progress percent={30}/>
        </Variant>
        <Variant name="status exception">
          <Progress percent={70} status="exception"/>
        </Variant>
        <Variant name="completed">
          <Progress percent={100}/>
        </Variant>
        <Variant name="hide info">
          <Progress percent={50} showInfo={false}/>
        </Variant>
        <Variant name="small">
          <Progress percent={30} size="small"/>
        </Variant>
        <Variant name="with success segment">
          <Progress percent={60} success={{percent: 30}}/>
        </Variant>
        <Variant name="with gradient">
          <Progress
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068"
            }}
            percent={99.9}
          />
        </Variant>
        <Variant name="square linecaps">
          <Progress strokeLinecap="square" percent={75}/>
        </Variant>
        <Variant name="circular">
          <Progress type="circle" percent={75}/>
        </Variant>
        <Variant name="circular - with gradient">
          <Progress
            type="circle"
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068"
            }}
            percent={90}
          />
        </Variant>
        <Variant name="circular - with success segment">
          <Progress percent={60} success={{percent: 30}} type="circle"/>
        </Variant>
        <Variant name="circular - small">
          <Progress type="circle" percent={30} width={80}/>
        </Variant>
        <Variant name="circular - custom text format">
          <Progress
            type="circle"
            percent={75}
            format={percent => `${percent} Days`}
          />
        </Variant>
        <Variant name="circular - square linecaps">
          <Progress type="circle" strokeLinecap="square" percent={75}/>
        </Variant>
        <Variant name="dashboard">
          <Progress type="dashboard" percent={75}/>
        </Variant>
        <Variant name="dashboard - gap degree">
          <Progress type="dashboard" percent={75} gapDegree={30}/>
        </Variant>
        <Variant name="dashboard - square linecaps">
          <Progress strokeLinecap="square" type="dashboard" percent={75}/>
        </Variant>
        <Variant name="steps">
          <Progress percent={50} steps={3}/>
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
              <Button key="buy">Buy Again</Button>
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
              <Button key="buy">Buy Again</Button>
            ]}
          >
            <div>
              <Paragraph>
                <Text
                  strong
                  style={{
                    fontSize: 16
                  }}
                >
                  The content you submitted has the following error:
                </Text>
              </Paragraph>
              <Paragraph>
                <CloseCircleOutlined style={{color: "red"}}/> Your account
                has been frozen. <a>Thaw immediately &gt;</a>
              </Paragraph>
              <Paragraph>
                <CloseCircleOutlined style={{color: "red"}}/> Your account is
                not yet eligible to apply. <a>Apply Unlock &gt;</a>
              </Paragraph>
            </div>
          </Result>
        </Variant>
        <Variant name="custom icon">
          <Result
            icon={<SmileOutlined/>}
            title="Great, we have done all the operations!"
            extra={<Button type="primary">Next</Button>}
          />
        </Variant>
      </Component>
      <Component name="Skeleton" docURL="https://ant.design/components/skeleton/">
        <Variant name="basic">
          <Skeleton/>
        </Variant>
        <Variant name="with avatar and multiple paragraphs">
          <Skeleton avatar paragraph={{rows: 4}}/>
        </Variant>
        <Variant name="active animation">
          <Skeleton active/>
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
          <Skeleton.Avatar/>
        </Variant>
        <Variant name="avatar - square shape">
          <Skeleton.Avatar shape="square"/>
        </Variant>
        <Variant name="avatar - small size">
          <Skeleton.Avatar size="small"/>
        </Variant>
        <Variant name="button">
          <Skeleton.Button/>
        </Variant>
        <Variant name="button - circle shape">
          <Skeleton.Button shape="circle"/>
        </Variant>
        <Variant name="button - round shape">
          <Skeleton.Button shape="round"/>
        </Variant>
        <Variant name="button - block">
          <Skeleton.Button block/>
        </Variant>
        <Variant name="button - large size">
          <Skeleton.Button size="large"/>
        </Variant>
        <Variant name="input">
          <Skeleton.Input style={{width: 200}}/>
        </Variant>
        <Variant name="input - large size">
          <Skeleton.Input style={{width: 200}} size="large"/>
        </Variant>
        <Variant name="image">
          <Skeleton.Image/>
        </Variant>
      </Component>
      <Component name="Spin" docURL="https://ant.design/components/spin/">
        <Variant name="basic">
          <Spin/>
        </Variant>
        <Variant name="tip">
          <Spin tip="Loading..."/>
        </Variant>
        <Variant name="custom spinning indicator">
          <Spin indicator={<LoadingOutlined style={{fontSize: 24}} spin/>}/>
        </Variant>
        <Variant name="small size">
          <Spin size="small"/>
        </Variant>
        <Variant name="large size">
          <Spin size="large"/>
        </Variant>
      </Component>
    </Category>
    <Category name="Icons">
      <Component name="StepBackwardOutlined">
        <Variant name="outlined">
          <StepBackwardOutlined/>
        </Variant>
      </Component>
      <Component name="StepForwardOutlined">
        <Variant name="outlined">
          <StepForwardOutlined/>
        </Variant>
      </Component>
      <Component name="FastBackwardOutlined">
        <Variant name="outlined">
          <FastBackwardOutlined/>
        </Variant>
      </Component>
      <Component name="FastForwardOutlined">
        <Variant name="outlined">
          <FastForwardOutlined/>
        </Variant>
      </Component>
      <Component name="ShrinkOutlined">
        <Variant name="outlined">
          <ShrinkOutlined/>
        </Variant>
      </Component>
      <Component name="ArrowsAltOutlined">
        <Variant name="outlined">
          <ArrowsAltOutlined/>
        </Variant>
      </Component>
      <Component name="DownOutlined">
        <Variant name="outlined">
          <DownOutlined/>
        </Variant>
      </Component>
      <Component name="UpOutlined">
        <Variant name="outlined">
          <UpOutlined/>
        </Variant>
      </Component>
      <Component name="LeftOutlined">
        <Variant name="outlined">
          <LeftOutlined/>
        </Variant>
      </Component>
      <Component name="RightOutlined">
        <Variant name="outlined">
          <RightOutlined/>
        </Variant>
      </Component>
      <Component name="CaretUpOutlined">
        <Variant name="outlined">
          <CaretUpOutlined/>
        </Variant>
      </Component>
      <Component name="CaretDownOutlined">
        <Variant name="outlined">
          <CaretDownOutlined/>
        </Variant>
      </Component>
      <Component name="CaretLeftOutlined">
        <Variant name="outlined">
          <CaretLeftOutlined/>
        </Variant>
      </Component>
      <Component name="CaretRightOutlined">
        <Variant name="outlined">
          <CaretRightOutlined/>
        </Variant>
      </Component>
      <Component name="UpCircleOutlined">
        <Variant name="outlined">
          <UpCircleOutlined/>
        </Variant>
      </Component>
      <Component name="DownCircleOutlined">
        <Variant name="outlined">
          <DownCircleOutlined/>
        </Variant>
      </Component>
      <Component name="LeftCircleOutlined">
        <Variant name="outlined">
          <LeftCircleOutlined/>
        </Variant>
      </Component>
      <Component name="RightCircleOutlined">
        <Variant name="outlined">
          <RightCircleOutlined/>
        </Variant>
      </Component>
      <Component name="DoubleRightOutlined">
        <Variant name="outlined">
          <DoubleRightOutlined/>
        </Variant>
      </Component>
      <Component name="DoubleLeftOutlined">
        <Variant name="outlined">
          <DoubleLeftOutlined/>
        </Variant>
      </Component>
      <Component name="VerticalLeftOutlined">
        <Variant name="outlined">
          <VerticalLeftOutlined/>
        </Variant>
      </Component>
      <Component name="VerticalRightOutlined">
        <Variant name="outlined">
          <VerticalRightOutlined/>
        </Variant>
      </Component>
      <Component name="VerticalAlignTopOutlined">
        <Variant name="outlined">
          <VerticalAlignTopOutlined/>
        </Variant>
      </Component>
      <Component name="VerticalAlignMiddleOutlined">
        <Variant name="outlined">
          <VerticalAlignMiddleOutlined/>
        </Variant>
      </Component>
      <Component name="VerticalAlignBottomOutlined">
        <Variant name="outlined">
          <VerticalAlignBottomOutlined/>
        </Variant>
      </Component>
      <Component name="ForwardOutlined">
        <Variant name="outlined">
          <ForwardOutlined/>
        </Variant>
      </Component>
      <Component name="BackwardOutlined">
        <Variant name="outlined">
          <BackwardOutlined/>
        </Variant>
      </Component>
      <Component name="RollbackOutlined">
        <Variant name="outlined">
          <RollbackOutlined/>
        </Variant>
      </Component>
      <Component name="EnterOutlined">
        <Variant name="outlined">
          <EnterOutlined/>
        </Variant>
      </Component>
      <Component name="RetweetOutlined">
        <Variant name="outlined">
          <RetweetOutlined/>
        </Variant>
      </Component>
      <Component name="SwapOutlined">
        <Variant name="outlined">
          <SwapOutlined/>
        </Variant>
      </Component>
      <Component name="SwapLeftOutlined">
        <Variant name="outlined">
          <SwapLeftOutlined/>
        </Variant>
      </Component>
      <Component name="SwapRightOutlined">
        <Variant name="outlined">
          <SwapRightOutlined/>
        </Variant>
      </Component>
      <Component name="ArrowUpOutlined">
        <Variant name="outlined">
          <ArrowUpOutlined/>
        </Variant>
      </Component>
      <Component name="ArrowDownOutlined">
        <Variant name="outlined">
          <ArrowDownOutlined/>
        </Variant>
      </Component>
      <Component name="ArrowLeftOutlined">
        <Variant name="outlined">
          <ArrowLeftOutlined/>
        </Variant>
      </Component>
      <Component name="ArrowRightOutlined">
        <Variant name="outlined">
          <ArrowRightOutlined/>
        </Variant>
      </Component>
      <Component name="PlayCircleOutlined">
        <Variant name="outlined">
          <PlayCircleOutlined/>
        </Variant>
      </Component>
      <Component name="UpSquareOutlined">
        <Variant name="outlined">
          <UpSquareOutlined/>
        </Variant>
      </Component>
      <Component name="DownSquareOutlined">
        <Variant name="outlined">
          <DownSquareOutlined/>
        </Variant>
      </Component>
      <Component name="LeftSquareOutlined">
        <Variant name="outlined">
          <LeftSquareOutlined/>
        </Variant>
      </Component>
      <Component name="RightSquareOutlined">
        <Variant name="outlined">
          <RightSquareOutlined/>
        </Variant>
      </Component>
      <Component name="LoginOutlined">
        <Variant name="outlined">
          <LoginOutlined/>
        </Variant>
      </Component>
      <Component name="LogoutOutlined">
        <Variant name="outlined">
          <LogoutOutlined/>
        </Variant>
      </Component>
      <Component name="MenuFoldOutlined">
        <Variant name="outlined">
          <MenuFoldOutlined/>
        </Variant>
      </Component>
      <Component name="MenuUnfoldOutlined">
        <Variant name="outlined">
          <MenuUnfoldOutlined/>
        </Variant>
      </Component>
      <Component name="BorderBottomOutlined">
        <Variant name="outlined">
          <BorderBottomOutlined/>
        </Variant>
      </Component>
      <Component name="BorderHorizontalOutlined">
        <Variant name="outlined">
          <BorderHorizontalOutlined/>
        </Variant>
      </Component>
      <Component name="BorderInnerOutlined">
        <Variant name="outlined">
          <BorderInnerOutlined/>
        </Variant>
      </Component>
      <Component name="BorderOuterOutlined">
        <Variant name="outlined">
          <BorderOuterOutlined/>
        </Variant>
      </Component>
      <Component name="BorderLeftOutlined">
        <Variant name="outlined">
          <BorderLeftOutlined/>
        </Variant>
      </Component>
      <Component name="BorderRightOutlined">
        <Variant name="outlined">
          <BorderRightOutlined/>
        </Variant>
      </Component>
      <Component name="BorderTopOutlined">
        <Variant name="outlined">
          <BorderTopOutlined/>
        </Variant>
      </Component>
      <Component name="BorderVerticleOutlined">
        <Variant name="outlined">
          <BorderVerticleOutlined/>
        </Variant>
      </Component>
      <Component name="PicCenterOutlined">
        <Variant name="outlined">
          <PicCenterOutlined/>
        </Variant>
      </Component>
      <Component name="PicLeftOutlined">
        <Variant name="outlined">
          <PicLeftOutlined/>
        </Variant>
      </Component>
      <Component name="PicRightOutlined">
        <Variant name="outlined">
          <PicRightOutlined/>
        </Variant>
      </Component>
      <Component name="RadiusBottomleftOutlined">
        <Variant name="outlined">
          <RadiusBottomleftOutlined/>
        </Variant>
      </Component>
      <Component name="RadiusBottomrightOutlined">
        <Variant name="outlined">
          <RadiusBottomrightOutlined/>
        </Variant>
      </Component>
      <Component name="RadiusUpleftOutlined">
        <Variant name="outlined">
          <RadiusUpleftOutlined/>
        </Variant>
      </Component>
      <Component name="RadiusUprightOutlined">
        <Variant name="outlined">
          <RadiusUprightOutlined/>
        </Variant>
      </Component>
      <Component name="FullscreenOutlined">
        <Variant name="outlined">
          <FullscreenOutlined/>
        </Variant>
      </Component>
      <Component name="FullscreenExitOutlined">
        <Variant name="outlined">
          <FullscreenExitOutlined/>
        </Variant>
      </Component>
      <Component name="QuestionOutlined">
        <Variant name="outlined">
          <QuestionOutlined/>
        </Variant>
      </Component>
      <Component name="QuestionCircleOutlined">
        <Variant name="outlined">
          <QuestionCircleOutlined/>
        </Variant>
      </Component>
      <Component name="PlusOutlined">
        <Variant name="outlined">
          <PlusOutlined/>
        </Variant>
      </Component>
      <Component name="PlusCircleOutlined">
        <Variant name="outlined">
          <PlusCircleOutlined/>
        </Variant>
      </Component>
      <Component name="PauseOutlined">
        <Variant name="outlined">
          <PauseOutlined/>
        </Variant>
      </Component>
      <Component name="PauseCircleOutlined">
        <Variant name="outlined">
          <PauseCircleOutlined/>
        </Variant>
      </Component>
      <Component name="MinusOutlined">
        <Variant name="outlined">
          <MinusOutlined/>
        </Variant>
      </Component>
      <Component name="MinusCircleOutlined">
        <Variant name="outlined">
          <MinusCircleOutlined/>
        </Variant>
      </Component>
      <Component name="PlusSquareOutlined">
        <Variant name="outlined">
          <PlusSquareOutlined/>
        </Variant>
      </Component>
      <Component name="MinusSquareOutlined">
        <Variant name="outlined">
          <MinusSquareOutlined/>
        </Variant>
      </Component>
      <Component name="InfoOutlined">
        <Variant name="outlined">
          <InfoOutlined/>
        </Variant>
      </Component>
      <Component name="InfoCircleOutlined">
        <Variant name="outlined">
          <InfoCircleOutlined/>
        </Variant>
      </Component>
      <Component name="ExclamationOutlined">
        <Variant name="outlined">
          <ExclamationOutlined/>
        </Variant>
      </Component>
      <Component name="ExclamationCircleOutlined">
        <Variant name="outlined">
          <ExclamationCircleOutlined/>
        </Variant>
      </Component>
      <Component name="CloseOutlined">
        <Variant name="outlined">
          <CloseOutlined/>
        </Variant>
      </Component>
      <Component name="CloseCircleOutlined">
        <Variant name="outlined">
          <CloseCircleOutlined/>
        </Variant>
      </Component>
      <Component name="CloseSquareOutlined">
        <Variant name="outlined">
          <CloseSquareOutlined/>
        </Variant>
      </Component>
      <Component name="CheckOutlined">
        <Variant name="outlined">
          <CheckOutlined/>
        </Variant>
      </Component>
      <Component name="CheckCircleOutlined">
        <Variant name="outlined">
          <CheckCircleOutlined/>
        </Variant>
      </Component>
      <Component name="CheckSquareOutlined">
        <Variant name="outlined">
          <CheckSquareOutlined/>
        </Variant>
      </Component>
      <Component name="ClockCircleOutlined">
        <Variant name="outlined">
          <ClockCircleOutlined/>
        </Variant>
      </Component>
      <Component name="WarningOutlined">
        <Variant name="outlined">
          <WarningOutlined/>
        </Variant>
      </Component>
      <Component name="IssuesCloseOutlined">
        <Variant name="outlined">
          <IssuesCloseOutlined/>
        </Variant>
      </Component>
      <Component name="StopOutlined">
        <Variant name="outlined">
          <StopOutlined/>
        </Variant>
      </Component>
      <Component name="EditOutlined">
        <Variant name="outlined">
          <EditOutlined/>
        </Variant>
      </Component>
      <Component name="FormOutlined">
        <Variant name="outlined">
          <FormOutlined/>
        </Variant>
      </Component>
      <Component name="CopyOutlined">
        <Variant name="outlined">
          <CopyOutlined/>
        </Variant>
      </Component>
      <Component name="ScissorOutlined">
        <Variant name="outlined">
          <ScissorOutlined/>
        </Variant>
      </Component>
      <Component name="DeleteOutlined">
        <Variant name="outlined">
          <DeleteOutlined/>
        </Variant>
      </Component>
      <Component name="SnippetsOutlined">
        <Variant name="outlined">
          <SnippetsOutlined/>
        </Variant>
      </Component>
      <Component name="DiffOutlined">
        <Variant name="outlined">
          <DiffOutlined/>
        </Variant>
      </Component>
      <Component name="HighlightOutlined">
        <Variant name="outlined">
          <HighlightOutlined/>
        </Variant>
      </Component>
      <Component name="AlignCenterOutlined">
        <Variant name="outlined">
          <AlignCenterOutlined/>
        </Variant>
      </Component>
      <Component name="AlignLeftOutlined">
        <Variant name="outlined">
          <AlignLeftOutlined/>
        </Variant>
      </Component>
      <Component name="AlignRightOutlined">
        <Variant name="outlined">
          <AlignRightOutlined/>
        </Variant>
      </Component>
      <Component name="BgColorsOutlined">
        <Variant name="outlined">
          <BgColorsOutlined/>
        </Variant>
      </Component>
      <Component name="BoldOutlined">
        <Variant name="outlined">
          <BoldOutlined/>
        </Variant>
      </Component>
      <Component name="ItalicOutlined">
        <Variant name="outlined">
          <ItalicOutlined/>
        </Variant>
      </Component>
      <Component name="UnderlineOutlined">
        <Variant name="outlined">
          <UnderlineOutlined/>
        </Variant>
      </Component>
      <Component name="StrikethroughOutlined">
        <Variant name="outlined">
          <StrikethroughOutlined/>
        </Variant>
      </Component>
      <Component name="RedoOutlined">
        <Variant name="outlined">
          <RedoOutlined/>
        </Variant>
      </Component>
      <Component name="UndoOutlined">
        <Variant name="outlined">
          <UndoOutlined/>
        </Variant>
      </Component>
      <Component name="ZoomInOutlined">
        <Variant name="outlined">
          <ZoomInOutlined/>
        </Variant>
      </Component>
      <Component name="ZoomOutOutlined">
        <Variant name="outlined">
          <ZoomOutOutlined/>
        </Variant>
      </Component>
      <Component name="FontColorsOutlined">
        <Variant name="outlined">
          <FontColorsOutlined/>
        </Variant>
      </Component>
      <Component name="FontSizeOutlined">
        <Variant name="outlined">
          <FontSizeOutlined/>
        </Variant>
      </Component>
      <Component name="LineHeightOutlined">
        <Variant name="outlined">
          <LineHeightOutlined/>
        </Variant>
      </Component>
      <Component name="DashOutlined">
        <Variant name="outlined">
          <DashOutlined/>
        </Variant>
      </Component>
      <Component name="SmallDashOutlined">
        <Variant name="outlined">
          <SmallDashOutlined/>
        </Variant>
      </Component>
      <Component name="SortAscendingOutlined">
        <Variant name="outlined">
          <SortAscendingOutlined/>
        </Variant>
      </Component>
      <Component name="SortDescendingOutlined">
        <Variant name="outlined">
          <SortDescendingOutlined/>
        </Variant>
      </Component>
      <Component name="DragOutlined">
        <Variant name="outlined">
          <DragOutlined/>
        </Variant>
      </Component>
      <Component name="OrderedListOutlined">
        <Variant name="outlined">
          <OrderedListOutlined/>
        </Variant>
      </Component>
      <Component name="UnorderedListOutlined">
        <Variant name="outlined">
          <UnorderedListOutlined/>
        </Variant>
      </Component>
      <Component name="RadiusSettingOutlined">
        <Variant name="outlined">
          <RadiusSettingOutlined/>
        </Variant>
      </Component>
      <Component name="ColumnWidthOutlined">
        <Variant name="outlined">
          <ColumnWidthOutlined/>
        </Variant>
      </Component>
      <Component name="ColumnHeightOutlined">
        <Variant name="outlined">
          <ColumnHeightOutlined/>
        </Variant>
      </Component>
      <Component name="AreaChartOutlined">
        <Variant name="outlined">
          <AreaChartOutlined/>
        </Variant>
      </Component>
      <Component name="PieChartOutlined">
        <Variant name="outlined">
          <PieChartOutlined/>
        </Variant>
      </Component>
      <Component name="BarChartOutlined">
        <Variant name="outlined">
          <BarChartOutlined/>
        </Variant>
      </Component>
      <Component name="DotChartOutlined">
        <Variant name="outlined">
          <DotChartOutlined/>
        </Variant>
      </Component>
      <Component name="LineChartOutlined">
        <Variant name="outlined">
          <LineChartOutlined/>
        </Variant>
      </Component>
      <Component name="RadarChartOutlined">
        <Variant name="outlined">
          <RadarChartOutlined/>
        </Variant>
      </Component>
      <Component name="HeatMapOutlined">
        <Variant name="outlined">
          <HeatMapOutlined/>
        </Variant>
      </Component>
      <Component name="FallOutlined">
        <Variant name="outlined">
          <FallOutlined/>
        </Variant>
      </Component>
      <Component name="RiseOutlined">
        <Variant name="outlined">
          <RiseOutlined/>
        </Variant>
      </Component>
      <Component name="StockOutlined">
        <Variant name="outlined">
          <StockOutlined/>
        </Variant>
      </Component>
      <Component name="BoxPlotOutlined">
        <Variant name="outlined">
          <BoxPlotOutlined/>
        </Variant>
      </Component>
      <Component name="FundOutlined">
        <Variant name="outlined">
          <FundOutlined/>
        </Variant>
      </Component>
      <Component name="SlidersOutlined">
        <Variant name="outlined">
          <SlidersOutlined/>
        </Variant>
      </Component>
      <Component name="AndroidOutlined">
        <Variant name="outlined">
          <AndroidOutlined/>
        </Variant>
      </Component>
      <Component name="AppleOutlined">
        <Variant name="outlined">
          <AppleOutlined/>
        </Variant>
      </Component>
      <Component name="WindowsOutlined">
        <Variant name="outlined">
          <WindowsOutlined/>
        </Variant>
      </Component>
      <Component name="IeOutlined">
        <Variant name="outlined">
          <IeOutlined/>
        </Variant>
      </Component>
      <Component name="ChromeOutlined">
        <Variant name="outlined">
          <ChromeOutlined/>
        </Variant>
      </Component>
      <Component name="GithubOutlined">
        <Variant name="outlined">
          <GithubOutlined/>
        </Variant>
      </Component>
      <Component name="AliwangwangOutlined">
        <Variant name="outlined">
          <AliwangwangOutlined/>
        </Variant>
      </Component>
      <Component name="DingdingOutlined">
        <Variant name="outlined">
          <DingdingOutlined/>
        </Variant>
      </Component>
      <Component name="WeiboSquareOutlined">
        <Variant name="outlined">
          <WeiboSquareOutlined/>
        </Variant>
      </Component>
      <Component name="WeiboCircleOutlined">
        <Variant name="outlined">
          <WeiboCircleOutlined/>
        </Variant>
      </Component>
      <Component name="TaobaoCircleOutlined">
        <Variant name="outlined">
          <TaobaoCircleOutlined/>
        </Variant>
      </Component>
      <Component name="Html5Outlined">
        <Variant name="outlined">
          <Html5Outlined/>
        </Variant>
      </Component>
      <Component name="WeiboOutlined">
        <Variant name="outlined">
          <WeiboOutlined/>
        </Variant>
      </Component>
      <Component name="TwitterOutlined">
        <Variant name="outlined">
          <TwitterOutlined/>
        </Variant>
      </Component>
      <Component name="WechatOutlined">
        <Variant name="outlined">
          <WechatOutlined/>
        </Variant>
      </Component>
      <Component name="YoutubeOutlined">
        <Variant name="outlined">
          <YoutubeOutlined/>
        </Variant>
      </Component>
      <Component name="AlipayCircleOutlined">
        <Variant name="outlined">
          <AlipayCircleOutlined/>
        </Variant>
      </Component>
      <Component name="TaobaoOutlined">
        <Variant name="outlined">
          <TaobaoOutlined/>
        </Variant>
      </Component>
      <Component name="SkypeOutlined">
        <Variant name="outlined">
          <SkypeOutlined/>
        </Variant>
      </Component>
      <Component name="QqOutlined">
        <Variant name="outlined">
          <QqOutlined/>
        </Variant>
      </Component>
      <Component name="MediumWorkmarkOutlined">
        <Variant name="outlined">
          <MediumWorkmarkOutlined/>
        </Variant>
      </Component>
      <Component name="GitlabOutlined">
        <Variant name="outlined">
          <GitlabOutlined/>
        </Variant>
      </Component>
      <Component name="MediumOutlined">
        <Variant name="outlined">
          <MediumOutlined/>
        </Variant>
      </Component>
      <Component name="LinkedinOutlined">
        <Variant name="outlined">
          <LinkedinOutlined/>
        </Variant>
      </Component>
      <Component name="GooglePlusOutlined">
        <Variant name="outlined">
          <GooglePlusOutlined/>
        </Variant>
      </Component>
      <Component name="DropboxOutlined">
        <Variant name="outlined">
          <DropboxOutlined/>
        </Variant>
      </Component>
      <Component name="FacebookOutlined">
        <Variant name="outlined">
          <FacebookOutlined/>
        </Variant>
      </Component>
      <Component name="CodepenOutlined">
        <Variant name="outlined">
          <CodepenOutlined/>
        </Variant>
      </Component>
      <Component name="CodeSandboxOutlined">
        <Variant name="outlined">
          <CodeSandboxOutlined/>
        </Variant>
      </Component>
      <Component name="AmazonOutlined">
        <Variant name="outlined">
          <AmazonOutlined/>
        </Variant>
      </Component>
      <Component name="GoogleOutlined">
        <Variant name="outlined">
          <GoogleOutlined/>
        </Variant>
      </Component>
      <Component name="CodepenCircleOutlined">
        <Variant name="outlined">
          <CodepenCircleOutlined/>
        </Variant>
      </Component>
      <Component name="AlipayOutlined">
        <Variant name="outlined">
          <AlipayOutlined/>
        </Variant>
      </Component>
      <Component name="AntDesignOutlined">
        <Variant name="outlined">
          <AntDesignOutlined/>
        </Variant>
      </Component>
      <Component name="AntCloudOutlined">
        <Variant name="outlined">
          <AntCloudOutlined/>
        </Variant>
      </Component>
      <Component name="AliyunOutlined">
        <Variant name="outlined">
          <AliyunOutlined/>
        </Variant>
      </Component>
      <Component name="ZhihuOutlined">
        <Variant name="outlined">
          <ZhihuOutlined/>
        </Variant>
      </Component>
      <Component name="SlackOutlined">
        <Variant name="outlined">
          <SlackOutlined/>
        </Variant>
      </Component>
      <Component name="SlackSquareOutlined">
        <Variant name="outlined">
          <SlackSquareOutlined/>
        </Variant>
      </Component>
      <Component name="BehanceOutlined">
        <Variant name="outlined">
          <BehanceOutlined/>
        </Variant>
      </Component>
      <Component name="BehanceSquareOutlined">
        <Variant name="outlined">
          <BehanceSquareOutlined/>
        </Variant>
      </Component>
      <Component name="DribbbleOutlined">
        <Variant name="outlined">
          <DribbbleOutlined/>
        </Variant>
      </Component>
      <Component name="DribbbleSquareOutlined">
        <Variant name="outlined">
          <DribbbleSquareOutlined/>
        </Variant>
      </Component>
      <Component name="InstagramOutlined">
        <Variant name="outlined">
          <InstagramOutlined/>
        </Variant>
      </Component>
      <Component name="YuqueOutlined">
        <Variant name="outlined">
          <YuqueOutlined/>
        </Variant>
      </Component>
      <Component name="AlibabaOutlined">
        <Variant name="outlined">
          <AlibabaOutlined/>
        </Variant>
      </Component>
      <Component name="YahooOutlined">
        <Variant name="outlined">
          <YahooOutlined/>
        </Variant>
      </Component>
      <Component name="RedditOutlined">
        <Variant name="outlined">
          <RedditOutlined/>
        </Variant>
      </Component>
      <Component name="SketchOutlined">
        <Variant name="outlined">
          <SketchOutlined/>
        </Variant>
      </Component>
      <Component name="AccountBookOutlined">
        <Variant name="outlined">
          <AccountBookOutlined/>
        </Variant>
      </Component>
      <Component name="AimOutlined">
        <Variant name="outlined">
          <AimOutlined/>
        </Variant>
      </Component>
      <Component name="AlertOutlined">
        <Variant name="outlined">
          <AlertOutlined/>
        </Variant>
      </Component>
      <Component name="ApartmentOutlined">
        <Variant name="outlined">
          <ApartmentOutlined/>
        </Variant>
      </Component>
      <Component name="ApiOutlined">
        <Variant name="outlined">
          <ApiOutlined/>
        </Variant>
      </Component>
      <Component name="AppstoreAddOutlined">
        <Variant name="outlined">
          <AppstoreAddOutlined/>
        </Variant>
      </Component>
      <Component name="AppstoreOutlined">
        <Variant name="outlined">
          <AppstoreOutlined/>
        </Variant>
      </Component>
      <Component name="AudioOutlined">
        <Variant name="outlined">
          <AudioOutlined/>
        </Variant>
      </Component>
      <Component name="AudioMutedOutlined">
        <Variant name="outlined">
          <AudioMutedOutlined/>
        </Variant>
      </Component>
      <Component name="AuditOutlined">
        <Variant name="outlined">
          <AuditOutlined/>
        </Variant>
      </Component>
      <Component name="BankOutlined">
        <Variant name="outlined">
          <BankOutlined/>
        </Variant>
      </Component>
      <Component name="BarcodeOutlined">
        <Variant name="outlined">
          <BarcodeOutlined/>
        </Variant>
      </Component>
      <Component name="BarsOutlined">
        <Variant name="outlined">
          <BarsOutlined/>
        </Variant>
      </Component>
      <Component name="BellOutlined">
        <Variant name="outlined">
          <BellOutlined/>
        </Variant>
      </Component>
      <Component name="BlockOutlined">
        <Variant name="outlined">
          <BlockOutlined/>
        </Variant>
      </Component>
      <Component name="BookOutlined">
        <Variant name="outlined">
          <BookOutlined/>
        </Variant>
      </Component>
      <Component name="BorderOutlined">
        <Variant name="outlined">
          <BorderOutlined/>
        </Variant>
      </Component>
      <Component name="BorderlessTableOutlined">
        <Variant name="outlined">
          <BorderlessTableOutlined/>
        </Variant>
      </Component>
      <Component name="BranchesOutlined">
        <Variant name="outlined">
          <BranchesOutlined/>
        </Variant>
      </Component>
      <Component name="BugOutlined">
        <Variant name="outlined">
          <BugOutlined/>
        </Variant>
      </Component>
      <Component name="BuildOutlined">
        <Variant name="outlined">
          <BuildOutlined/>
        </Variant>
      </Component>
      <Component name="BulbOutlined">
        <Variant name="outlined">
          <BulbOutlined/>
        </Variant>
      </Component>
      <Component name="CalculatorOutlined">
        <Variant name="outlined">
          <CalculatorOutlined/>
        </Variant>
      </Component>
      <Component name="CalendarOutlined">
        <Variant name="outlined">
          <CalendarOutlined/>
        </Variant>
      </Component>
      <Component name="CameraOutlined">
        <Variant name="outlined">
          <CameraOutlined/>
        </Variant>
      </Component>
      <Component name="CarOutlined">
        <Variant name="outlined">
          <CarOutlined/>
        </Variant>
      </Component>
      <Component name="CarryOutOutlined">
        <Variant name="outlined">
          <CarryOutOutlined/>
        </Variant>
      </Component>
      <Component name="CiCircleOutlined">
        <Variant name="outlined">
          <CiCircleOutlined/>
        </Variant>
      </Component>
      <Component name="CiOutlined">
        <Variant name="outlined">
          <CiOutlined/>
        </Variant>
      </Component>
      <Component name="ClearOutlined">
        <Variant name="outlined">
          <ClearOutlined/>
        </Variant>
      </Component>
      <Component name="CloudDownloadOutlined">
        <Variant name="outlined">
          <CloudDownloadOutlined/>
        </Variant>
      </Component>
      <Component name="CloudOutlined">
        <Variant name="outlined">
          <CloudOutlined/>
        </Variant>
      </Component>
      <Component name="CloudServerOutlined">
        <Variant name="outlined">
          <CloudServerOutlined/>
        </Variant>
      </Component>
      <Component name="CloudSyncOutlined">
        <Variant name="outlined">
          <CloudSyncOutlined/>
        </Variant>
      </Component>
      <Component name="CloudUploadOutlined">
        <Variant name="outlined">
          <CloudUploadOutlined/>
        </Variant>
      </Component>
      <Component name="ClusterOutlined">
        <Variant name="outlined">
          <ClusterOutlined/>
        </Variant>
      </Component>
      <Component name="CodeOutlined">
        <Variant name="outlined">
          <CodeOutlined/>
        </Variant>
      </Component>
      <Component name="CoffeeOutlined">
        <Variant name="outlined">
          <CoffeeOutlined/>
        </Variant>
      </Component>
      <Component name="CommentOutlined">
        <Variant name="outlined">
          <CommentOutlined/>
        </Variant>
      </Component>
      <Component name="CompassOutlined">
        <Variant name="outlined">
          <CompassOutlined/>
        </Variant>
      </Component>
      <Component name="CompressOutlined">
        <Variant name="outlined">
          <CompressOutlined/>
        </Variant>
      </Component>
      <Component name="ConsoleSqlOutlined">
        <Variant name="outlined">
          <ConsoleSqlOutlined/>
        </Variant>
      </Component>
      <Component name="ContactsOutlined">
        <Variant name="outlined">
          <ContactsOutlined/>
        </Variant>
      </Component>
      <Component name="ContainerOutlined">
        <Variant name="outlined">
          <ContainerOutlined/>
        </Variant>
      </Component>
      <Component name="ControlOutlined">
        <Variant name="outlined">
          <ControlOutlined/>
        </Variant>
      </Component>
      <Component name="CopyrightOutlined">
        <Variant name="outlined">
          <CopyrightOutlined/>
        </Variant>
      </Component>
      <Component name="CreditCardOutlined">
        <Variant name="outlined">
          <CreditCardOutlined/>
        </Variant>
      </Component>
      <Component name="CrownOutlined">
        <Variant name="outlined">
          <CrownOutlined/>
        </Variant>
      </Component>
      <Component name="CustomerServiceOutlined">
        <Variant name="outlined">
          <CustomerServiceOutlined/>
        </Variant>
      </Component>
      <Component name="DashboardOutlined">
        <Variant name="outlined">
          <DashboardOutlined/>
        </Variant>
      </Component>
      <Component name="DatabaseOutlined">
        <Variant name="outlined">
          <DatabaseOutlined/>
        </Variant>
      </Component>
      <Component name="DeleteColumnOutlined">
        <Variant name="outlined">
          <DeleteColumnOutlined/>
        </Variant>
      </Component>
      <Component name="DeleteRowOutlined">
        <Variant name="outlined">
          <DeleteRowOutlined/>
        </Variant>
      </Component>
      <Component name="DeliveredProcedureOutlined">
        <Variant name="outlined">
          <DeliveredProcedureOutlined/>
        </Variant>
      </Component>
      <Component name="DeploymentUnitOutlined">
        <Variant name="outlined">
          <DeploymentUnitOutlined/>
        </Variant>
      </Component>
      <Component name="DesktopOutlined">
        <Variant name="outlined">
          <DesktopOutlined/>
        </Variant>
      </Component>
      <Component name="DingtalkOutlined">
        <Variant name="outlined">
          <DingtalkOutlined/>
        </Variant>
      </Component>
      <Component name="DisconnectOutlined">
        <Variant name="outlined">
          <DisconnectOutlined/>
        </Variant>
      </Component>
      <Component name="DislikeOutlined">
        <Variant name="outlined">
          <DislikeOutlined/>
        </Variant>
      </Component>
      <Component name="DollarCircleOutlined">
        <Variant name="outlined">
          <DollarCircleOutlined/>
        </Variant>
      </Component>
      <Component name="DollarOutlined">
        <Variant name="outlined">
          <DollarOutlined/>
        </Variant>
      </Component>
      <Component name="DownloadOutlined">
        <Variant name="outlined">
          <DownloadOutlined/>
        </Variant>
      </Component>
      <Component name="EllipsisOutlined">
        <Variant name="outlined">
          <EllipsisOutlined/>
        </Variant>
      </Component>
      <Component name="EnvironmentOutlined">
        <Variant name="outlined">
          <EnvironmentOutlined/>
        </Variant>
      </Component>
      <Component name="EuroCircleOutlined">
        <Variant name="outlined">
          <EuroCircleOutlined/>
        </Variant>
      </Component>
      <Component name="EuroOutlined">
        <Variant name="outlined">
          <EuroOutlined/>
        </Variant>
      </Component>
      <Component name="ExceptionOutlined">
        <Variant name="outlined">
          <ExceptionOutlined/>
        </Variant>
      </Component>
      <Component name="ExpandAltOutlined">
        <Variant name="outlined">
          <ExpandAltOutlined/>
        </Variant>
      </Component>
      <Component name="ExpandOutlined">
        <Variant name="outlined">
          <ExpandOutlined/>
        </Variant>
      </Component>
      <Component name="ExperimentOutlined">
        <Variant name="outlined">
          <ExperimentOutlined/>
        </Variant>
      </Component>
      <Component name="ExportOutlined">
        <Variant name="outlined">
          <ExportOutlined/>
        </Variant>
      </Component>
      <Component name="EyeOutlined">
        <Variant name="outlined">
          <EyeOutlined/>
        </Variant>
      </Component>
      <Component name="EyeInvisibleOutlined">
        <Variant name="outlined">
          <EyeInvisibleOutlined/>
        </Variant>
      </Component>
      <Component name="FieldBinaryOutlined">
        <Variant name="outlined">
          <FieldBinaryOutlined/>
        </Variant>
      </Component>
      <Component name="FieldNumberOutlined">
        <Variant name="outlined">
          <FieldNumberOutlined/>
        </Variant>
      </Component>
      <Component name="FieldStringOutlined">
        <Variant name="outlined">
          <FieldStringOutlined/>
        </Variant>
      </Component>
      <Component name="FieldTimeOutlined">
        <Variant name="outlined">
          <FieldTimeOutlined/>
        </Variant>
      </Component>
      <Component name="FileAddOutlined">
        <Variant name="outlined">
          <FileAddOutlined/>
        </Variant>
      </Component>
      <Component name="FileDoneOutlined">
        <Variant name="outlined">
          <FileDoneOutlined/>
        </Variant>
      </Component>
      <Component name="FileExcelOutlined">
        <Variant name="outlined">
          <FileExcelOutlined/>
        </Variant>
      </Component>
      <Component name="FileExclamationOutlined">
        <Variant name="outlined">
          <FileExclamationOutlined/>
        </Variant>
      </Component>
      <Component name="FileOutlined">
        <Variant name="outlined">
          <FileOutlined/>
        </Variant>
      </Component>
      <Component name="FileGifOutlined">
        <Variant name="outlined">
          <FileGifOutlined/>
        </Variant>
      </Component>
      <Component name="FileImageOutlined">
        <Variant name="outlined">
          <FileImageOutlined/>
        </Variant>
      </Component>
      <Component name="FileJpgOutlined">
        <Variant name="outlined">
          <FileJpgOutlined/>
        </Variant>
      </Component>
      <Component name="FileMarkdownOutlined">
        <Variant name="outlined">
          <FileMarkdownOutlined/>
        </Variant>
      </Component>
      <Component name="FilePdfOutlined">
        <Variant name="outlined">
          <FilePdfOutlined/>
        </Variant>
      </Component>
      <Component name="FilePptOutlined">
        <Variant name="outlined">
          <FilePptOutlined/>
        </Variant>
      </Component>
      <Component name="FileProtectOutlined">
        <Variant name="outlined">
          <FileProtectOutlined/>
        </Variant>
      </Component>
      <Component name="FileSearchOutlined">
        <Variant name="outlined">
          <FileSearchOutlined/>
        </Variant>
      </Component>
      <Component name="FileSyncOutlined">
        <Variant name="outlined">
          <FileSyncOutlined/>
        </Variant>
      </Component>
      <Component name="FileTextOutlined">
        <Variant name="outlined">
          <FileTextOutlined/>
        </Variant>
      </Component>
      <Component name="FileUnknownOutlined">
        <Variant name="outlined">
          <FileUnknownOutlined/>
        </Variant>
      </Component>
      <Component name="FileWordOutlined">
        <Variant name="outlined">
          <FileWordOutlined/>
        </Variant>
      </Component>
      <Component name="FileZipOutlined">
        <Variant name="outlined">
          <FileZipOutlined/>
        </Variant>
      </Component>
      <Component name="FilterOutlined">
        <Variant name="outlined">
          <FilterOutlined/>
        </Variant>
      </Component>
      <Component name="FireOutlined">
        <Variant name="outlined">
          <FireOutlined/>
        </Variant>
      </Component>
      <Component name="FlagOutlined">
        <Variant name="outlined">
          <FlagOutlined/>
        </Variant>
      </Component>
      <Component name="FolderAddOutlined">
        <Variant name="outlined">
          <FolderAddOutlined/>
        </Variant>
      </Component>
      <Component name="FolderOutlined">
        <Variant name="outlined">
          <FolderOutlined/>
        </Variant>
      </Component>
      <Component name="FolderOpenOutlined">
        <Variant name="outlined">
          <FolderOpenOutlined/>
        </Variant>
      </Component>
      <Component name="FolderViewOutlined">
        <Variant name="outlined">
          <FolderViewOutlined/>
        </Variant>
      </Component>
      <Component name="ForkOutlined">
        <Variant name="outlined">
          <ForkOutlined/>
        </Variant>
      </Component>
      <Component name="FormatPainterOutlined">
        <Variant name="outlined">
          <FormatPainterOutlined/>
        </Variant>
      </Component>
      <Component name="FrownOutlined">
        <Variant name="outlined">
          <FrownOutlined/>
        </Variant>
      </Component>
      <Component name="FunctionOutlined">
        <Variant name="outlined">
          <FunctionOutlined/>
        </Variant>
      </Component>
      <Component name="FundProjectionScreenOutlined">
        <Variant name="outlined">
          <FundProjectionScreenOutlined/>
        </Variant>
      </Component>
      <Component name="FundViewOutlined">
        <Variant name="outlined">
          <FundViewOutlined/>
        </Variant>
      </Component>
      <Component name="FunnelPlotOutlined">
        <Variant name="outlined">
          <FunnelPlotOutlined/>
        </Variant>
      </Component>
      <Component name="GatewayOutlined">
        <Variant name="outlined">
          <GatewayOutlined/>
        </Variant>
      </Component>
      <Component name="GifOutlined">
        <Variant name="outlined">
          <GifOutlined/>
        </Variant>
      </Component>
      <Component name="GiftOutlined">
        <Variant name="outlined">
          <GiftOutlined/>
        </Variant>
      </Component>
      <Component name="GlobalOutlined">
        <Variant name="outlined">
          <GlobalOutlined/>
        </Variant>
      </Component>
      <Component name="GoldOutlined">
        <Variant name="outlined">
          <GoldOutlined/>
        </Variant>
      </Component>
      <Component name="GroupOutlined">
        <Variant name="outlined">
          <GroupOutlined/>
        </Variant>
      </Component>
      <Component name="HddOutlined">
        <Variant name="outlined">
          <HddOutlined/>
        </Variant>
      </Component>
      <Component name="HeartOutlined">
        <Variant name="outlined">
          <HeartOutlined/>
        </Variant>
      </Component>
      <Component name="HistoryOutlined">
        <Variant name="outlined">
          <HistoryOutlined/>
        </Variant>
      </Component>
      <Component name="HolderOutlined">
        <Variant name="outlined">
          <HolderOutlined/>
        </Variant>
      </Component>
      <Component name="HomeOutlined">
        <Variant name="outlined">
          <HomeOutlined/>
        </Variant>
      </Component>
      <Component name="HourglassOutlined">
        <Variant name="outlined">
          <HourglassOutlined/>
        </Variant>
      </Component>
      <Component name="IdcardOutlined">
        <Variant name="outlined">
          <IdcardOutlined/>
        </Variant>
      </Component>
      <Component name="ImportOutlined">
        <Variant name="outlined">
          <ImportOutlined/>
        </Variant>
      </Component>
      <Component name="InboxOutlined">
        <Variant name="outlined">
          <InboxOutlined/>
        </Variant>
      </Component>
      <Component name="InsertRowAboveOutlined">
        <Variant name="outlined">
          <InsertRowAboveOutlined/>
        </Variant>
      </Component>
      <Component name="InsertRowBelowOutlined">
        <Variant name="outlined">
          <InsertRowBelowOutlined/>
        </Variant>
      </Component>
      <Component name="InsertRowLeftOutlined">
        <Variant name="outlined">
          <InsertRowLeftOutlined/>
        </Variant>
      </Component>
      <Component name="InsertRowRightOutlined">
        <Variant name="outlined">
          <InsertRowRightOutlined/>
        </Variant>
      </Component>
      <Component name="InsuranceOutlined">
        <Variant name="outlined">
          <InsuranceOutlined/>
        </Variant>
      </Component>
      <Component name="InteractionOutlined">
        <Variant name="outlined">
          <InteractionOutlined/>
        </Variant>
      </Component>
      <Component name="KeyOutlined">
        <Variant name="outlined">
          <KeyOutlined/>
        </Variant>
      </Component>
      <Component name="LaptopOutlined">
        <Variant name="outlined">
          <LaptopOutlined/>
        </Variant>
      </Component>
      <Component name="LayoutOutlined">
        <Variant name="outlined">
          <LayoutOutlined/>
        </Variant>
      </Component>
      <Component name="LikeOutlined">
        <Variant name="outlined">
          <LikeOutlined/>
        </Variant>
      </Component>
      <Component name="LineOutlined">
        <Variant name="outlined">
          <LineOutlined/>
        </Variant>
      </Component>
      <Component name="LinkOutlined">
        <Variant name="outlined">
          <LinkOutlined/>
        </Variant>
      </Component>
      <Component name="Loading3QuartersOutlined">
        <Variant name="outlined">
          <Loading3QuartersOutlined/>
        </Variant>
      </Component>
      <Component name="LoadingOutlined">
        <Variant name="outlined">
          <LoadingOutlined/>
        </Variant>
      </Component>
      <Component name="LockOutlined">
        <Variant name="outlined">
          <LockOutlined/>
        </Variant>
      </Component>
      <Component name="MacCommandOutlined">
        <Variant name="outlined">
          <MacCommandOutlined/>
        </Variant>
      </Component>
      <Component name="MailOutlined">
        <Variant name="outlined">
          <MailOutlined/>
        </Variant>
      </Component>
      <Component name="ManOutlined">
        <Variant name="outlined">
          <ManOutlined/>
        </Variant>
      </Component>
      <Component name="MedicineBoxOutlined">
        <Variant name="outlined">
          <MedicineBoxOutlined/>
        </Variant>
      </Component>
      <Component name="MehOutlined">
        <Variant name="outlined">
          <MehOutlined/>
        </Variant>
      </Component>
      <Component name="MenuOutlined">
        <Variant name="outlined">
          <MenuOutlined/>
        </Variant>
      </Component>
      <Component name="MergeCellsOutlined">
        <Variant name="outlined">
          <MergeCellsOutlined/>
        </Variant>
      </Component>
      <Component name="MessageOutlined">
        <Variant name="outlined">
          <MessageOutlined/>
        </Variant>
      </Component>
      <Component name="MobileOutlined">
        <Variant name="outlined">
          <MobileOutlined/>
        </Variant>
      </Component>
      <Component name="MoneyCollectOutlined">
        <Variant name="outlined">
          <MoneyCollectOutlined/>
        </Variant>
      </Component>
      <Component name="MonitorOutlined">
        <Variant name="outlined">
          <MonitorOutlined/>
        </Variant>
      </Component>
      <Component name="MoreOutlined">
        <Variant name="outlined">
          <MoreOutlined/>
        </Variant>
      </Component>
      <Component name="NodeCollapseOutlined">
        <Variant name="outlined">
          <NodeCollapseOutlined/>
        </Variant>
      </Component>
      <Component name="NodeExpandOutlined">
        <Variant name="outlined">
          <NodeExpandOutlined/>
        </Variant>
      </Component>
      <Component name="NodeIndexOutlined">
        <Variant name="outlined">
          <NodeIndexOutlined/>
        </Variant>
      </Component>
      <Component name="NotificationOutlined">
        <Variant name="outlined">
          <NotificationOutlined/>
        </Variant>
      </Component>
      <Component name="NumberOutlined">
        <Variant name="outlined">
          <NumberOutlined/>
        </Variant>
      </Component>
      <Component name="OneToOneOutlined">
        <Variant name="outlined">
          <OneToOneOutlined/>
        </Variant>
      </Component>
      <Component name="PartitionOutlined">
        <Variant name="outlined">
          <PartitionOutlined/>
        </Variant>
      </Component>
      <Component name="PaperClipOutlined">
        <Variant name="outlined">
          <PaperClipOutlined/>
        </Variant>
      </Component>
      <Component name="PayCircleOutlined">
        <Variant name="outlined">
          <PayCircleOutlined/>
        </Variant>
      </Component>
      <Component name="PercentageOutlined">
        <Variant name="outlined">
          <PercentageOutlined/>
        </Variant>
      </Component>
      <Component name="PhoneOutlined">
        <Variant name="outlined">
          <PhoneOutlined/>
        </Variant>
      </Component>
      <Component name="PictureOutlined">
        <Variant name="outlined">
          <PictureOutlined/>
        </Variant>
      </Component>
      <Component name="PlaySquareOutlined">
        <Variant name="outlined">
          <PlaySquareOutlined/>
        </Variant>
      </Component>
      <Component name="PoundCircleOutlined">
        <Variant name="outlined">
          <PoundCircleOutlined/>
        </Variant>
      </Component>
      <Component name="PoweroffOutlined">
        <Variant name="outlined">
          <PoweroffOutlined/>
        </Variant>
      </Component>
      <Component name="PrinterOutlined">
        <Variant name="outlined">
          <PrinterOutlined/>
        </Variant>
      </Component>
      <Component name="ProfileOutlined">
        <Variant name="outlined">
          <ProfileOutlined/>
        </Variant>
      </Component>
      <Component name="ProjectOutlined">
        <Variant name="outlined">
          <ProjectOutlined/>
        </Variant>
      </Component>
      <Component name="PropertySafetyOutlined">
        <Variant name="outlined">
          <PropertySafetyOutlined/>
        </Variant>
      </Component>
      <Component name="PullRequestOutlined">
        <Variant name="outlined">
          <PullRequestOutlined/>
        </Variant>
      </Component>
      <Component name="PushpinOutlined">
        <Variant name="outlined">
          <PushpinOutlined/>
        </Variant>
      </Component>
      <Component name="QrcodeOutlined">
        <Variant name="outlined">
          <QrcodeOutlined/>
        </Variant>
      </Component>
      <Component name="ReadOutlined">
        <Variant name="outlined">
          <ReadOutlined/>
        </Variant>
      </Component>
      <Component name="ReconciliationOutlined">
        <Variant name="outlined">
          <ReconciliationOutlined/>
        </Variant>
      </Component>
      <Component name="RedEnvelopeOutlined">
        <Variant name="outlined">
          <RedEnvelopeOutlined/>
        </Variant>
      </Component>
      <Component name="ReloadOutlined">
        <Variant name="outlined">
          <ReloadOutlined/>
        </Variant>
      </Component>
      <Component name="RestOutlined">
        <Variant name="outlined">
          <RestOutlined/>
        </Variant>
      </Component>
      <Component name="RobotOutlined">
        <Variant name="outlined">
          <RobotOutlined/>
        </Variant>
      </Component>
      <Component name="RocketOutlined">
        <Variant name="outlined">
          <RocketOutlined/>
        </Variant>
      </Component>
      <Component name="RotateLeftOutlined">
        <Variant name="outlined">
          <RotateLeftOutlined/>
        </Variant>
      </Component>
      <Component name="RotateRightOutlined">
        <Variant name="outlined">
          <RotateRightOutlined/>
        </Variant>
      </Component>
      <Component name="SafetyCertificateOutlined">
        <Variant name="outlined">
          <SafetyCertificateOutlined/>
        </Variant>
      </Component>
      <Component name="SafetyOutlined">
        <Variant name="outlined">
          <SafetyOutlined/>
        </Variant>
      </Component>
      <Component name="SaveOutlined">
        <Variant name="outlined">
          <SaveOutlined/>
        </Variant>
      </Component>
      <Component name="ScanOutlined">
        <Variant name="outlined">
          <ScanOutlined/>
        </Variant>
      </Component>
      <Component name="ScheduleOutlined">
        <Variant name="outlined">
          <ScheduleOutlined/>
        </Variant>
      </Component>
      <Component name="SearchOutlined">
        <Variant name="outlined">
          <SearchOutlined/>
        </Variant>
      </Component>
      <Component name="SecurityScanOutlined">
        <Variant name="outlined">
          <SecurityScanOutlined/>
        </Variant>
      </Component>
      <Component name="SelectOutlined">
        <Variant name="outlined">
          <SelectOutlined/>
        </Variant>
      </Component>
      <Component name="SendOutlined">
        <Variant name="outlined">
          <SendOutlined/>
        </Variant>
      </Component>
      <Component name="SettingOutlined">
        <Variant name="outlined">
          <SettingOutlined/>
        </Variant>
      </Component>
      <Component name="ShakeOutlined">
        <Variant name="outlined">
          <ShakeOutlined/>
        </Variant>
      </Component>
      <Component name="ShareAltOutlined">
        <Variant name="outlined">
          <ShareAltOutlined/>
        </Variant>
      </Component>
      <Component name="ShopOutlined">
        <Variant name="outlined">
          <ShopOutlined/>
        </Variant>
      </Component>
      <Component name="ShoppingCartOutlined">
        <Variant name="outlined">
          <ShoppingCartOutlined/>
        </Variant>
      </Component>
      <Component name="ShoppingOutlined">
        <Variant name="outlined">
          <ShoppingOutlined/>
        </Variant>
      </Component>
      <Component name="SisternodeOutlined">
        <Variant name="outlined">
          <SisternodeOutlined/>
        </Variant>
      </Component>
      <Component name="SkinOutlined">
        <Variant name="outlined">
          <SkinOutlined/>
        </Variant>
      </Component>
      <Component name="SmileOutlined">
        <Variant name="outlined">
          <SmileOutlined/>
        </Variant>
      </Component>
      <Component name="SolutionOutlined">
        <Variant name="outlined">
          <SolutionOutlined/>
        </Variant>
      </Component>
      <Component name="SoundOutlined">
        <Variant name="outlined">
          <SoundOutlined/>
        </Variant>
      </Component>
      <Component name="SplitCellsOutlined">
        <Variant name="outlined">
          <SplitCellsOutlined/>
        </Variant>
      </Component>
      <Component name="StarOutlined">
        <Variant name="outlined">
          <StarOutlined/>
        </Variant>
      </Component>
      <Component name="SubnodeOutlined">
        <Variant name="outlined">
          <SubnodeOutlined/>
        </Variant>
      </Component>
      <Component name="SwitcherOutlined">
        <Variant name="outlined">
          <SwitcherOutlined/>
        </Variant>
      </Component>
      <Component name="SyncOutlined">
        <Variant name="outlined">
          <SyncOutlined/>
        </Variant>
      </Component>
      <Component name="TableOutlined">
        <Variant name="outlined">
          <TableOutlined/>
        </Variant>
      </Component>
      <Component name="TabletOutlined">
        <Variant name="outlined">
          <TabletOutlined/>
        </Variant>
      </Component>
      <Component name="TagOutlined">
        <Variant name="outlined">
          <TagOutlined/>
        </Variant>
      </Component>
      <Component name="TagsOutlined">
        <Variant name="outlined">
          <TagsOutlined/>
        </Variant>
      </Component>
      <Component name="TeamOutlined">
        <Variant name="outlined">
          <TeamOutlined/>
        </Variant>
      </Component>
      <Component name="ThunderboltOutlined">
        <Variant name="outlined">
          <ThunderboltOutlined/>
        </Variant>
      </Component>
      <Component name="ToTopOutlined">
        <Variant name="outlined">
          <ToTopOutlined/>
        </Variant>
      </Component>
      <Component name="ToolOutlined">
        <Variant name="outlined">
          <ToolOutlined/>
        </Variant>
      </Component>
      <Component name="TrademarkCircleOutlined">
        <Variant name="outlined">
          <TrademarkCircleOutlined/>
        </Variant>
      </Component>
      <Component name="TrademarkOutlined">
        <Variant name="outlined">
          <TrademarkOutlined/>
        </Variant>
      </Component>
      <Component name="TransactionOutlined">
        <Variant name="outlined">
          <TransactionOutlined/>
        </Variant>
      </Component>
      <Component name="TranslationOutlined">
        <Variant name="outlined">
          <TranslationOutlined/>
        </Variant>
      </Component>
      <Component name="TrophyOutlined">
        <Variant name="outlined">
          <TrophyOutlined/>
        </Variant>
      </Component>
      <Component name="UngroupOutlined">
        <Variant name="outlined">
          <UngroupOutlined/>
        </Variant>
      </Component>
      <Component name="UnlockOutlined">
        <Variant name="outlined">
          <UnlockOutlined/>
        </Variant>
      </Component>
      <Component name="UploadOutlined">
        <Variant name="outlined">
          <UploadOutlined/>
        </Variant>
      </Component>
      <Component name="UsbOutlined">
        <Variant name="outlined">
          <UsbOutlined/>
        </Variant>
      </Component>
      <Component name="UserAddOutlined">
        <Variant name="outlined">
          <UserAddOutlined/>
        </Variant>
      </Component>
      <Component name="UserDeleteOutlined">
        <Variant name="outlined">
          <UserDeleteOutlined/>
        </Variant>
      </Component>
      <Component name="UserOutlined">
        <Variant name="outlined">
          <UserOutlined/>
        </Variant>
      </Component>
      <Component name="UserSwitchOutlined">
        <Variant name="outlined">
          <UserSwitchOutlined/>
        </Variant>
      </Component>
      <Component name="UsergroupAddOutlined">
        <Variant name="outlined">
          <UsergroupAddOutlined/>
        </Variant>
      </Component>
      <Component name="UsergroupDeleteOutlined">
        <Variant name="outlined">
          <UsergroupDeleteOutlined/>
        </Variant>
      </Component>
      <Component name="VerifiedOutlined">
        <Variant name="outlined">
          <VerifiedOutlined/>
        </Variant>
      </Component>
      <Component name="VideoCameraAddOutlined">
        <Variant name="outlined">
          <VideoCameraAddOutlined/>
        </Variant>
      </Component>
      <Component name="VideoCameraOutlined">
        <Variant name="outlined">
          <VideoCameraOutlined/>
        </Variant>
      </Component>
      <Component name="WalletOutlined">
        <Variant name="outlined">
          <WalletOutlined/>
        </Variant>
      </Component>
      <Component name="WhatsAppOutlined">
        <Variant name="outlined">
          <WhatsAppOutlined/>
        </Variant>
      </Component>
      <Component name="WifiOutlined">
        <Variant name="outlined">
          <WifiOutlined/>
        </Variant>
      </Component>
      <Component name="WomanOutlined">
        <Variant name="outlined">
          <WomanOutlined/>
        </Variant>
      </Component>


      <Component name="StepBackwardFilled">
        <Variant name="filled">
          <StepBackwardFilled/>
        </Variant>
      </Component>
      <Component name="StepForwardFilled">
        <Variant name="filled">
          <StepForwardFilled/>
        </Variant>
      </Component>
      <Component name="FastBackwardFilled">
        <Variant name="filled">
          <FastBackwardFilled/>
        </Variant>
      </Component>
      <Component name="FastForwardFilled">
        <Variant name="filled">
          <FastForwardFilled/>
        </Variant>
      </Component>
      <Component name="CaretUpFilled">
        <Variant name="filled">
          <CaretUpFilled/>
        </Variant>
      </Component>
      <Component name="CaretDownFilled">
        <Variant name="filled">
          <CaretDownFilled/>
        </Variant>
      </Component>
      <Component name="CaretLeftFilled">
        <Variant name="filled">
          <CaretLeftFilled/>
        </Variant>
      </Component>
      <Component name="CaretRightFilled">
        <Variant name="filled">
          <CaretRightFilled/>
        </Variant>
      </Component>
      <Component name="UpCircleFilled">
        <Variant name="filled">
          <UpCircleFilled/>
        </Variant>
      </Component>
      <Component name="DownCircleFilled">
        <Variant name="filled">
          <DownCircleFilled/>
        </Variant>
      </Component>
      <Component name="LeftCircleFilled">
        <Variant name="filled">
          <LeftCircleFilled/>
        </Variant>
      </Component>
      <Component name="RightCircleFilled">
        <Variant name="filled">
          <RightCircleFilled/>
        </Variant>
      </Component>
      <Component name="ForwardFilled">
        <Variant name="filled">
          <ForwardFilled/>
        </Variant>
      </Component>
      <Component name="BackwardFilled">
        <Variant name="filled">
          <BackwardFilled/>
        </Variant>
      </Component>
      <Component name="PlayCircleFilled">
        <Variant name="filled">
          <PlayCircleFilled/>
        </Variant>
      </Component>
      <Component name="UpSquareFilled">
        <Variant name="filled">
          <UpSquareFilled/>
        </Variant>
      </Component>
      <Component name="DownSquareFilled">
        <Variant name="filled">
          <DownSquareFilled/>
        </Variant>
      </Component>
      <Component name="LeftSquareFilled">
        <Variant name="filled">
          <LeftSquareFilled/>
        </Variant>
      </Component>
      <Component name="RightSquareFilled">
        <Variant name="filled">
          <RightSquareFilled/>
        </Variant>
      </Component>
      <Component name="QuestionCircleFilled">
        <Variant name="filled">
          <QuestionCircleFilled/>
        </Variant>
      </Component>
      <Component name="PlusCircleFilled">
        <Variant name="filled">
          <PlusCircleFilled/>
        </Variant>
      </Component>
      <Component name="PauseCircleFilled">
        <Variant name="filled">
          <PauseCircleFilled/>
        </Variant>
      </Component>
      <Component name="MinusCircleFilled">
        <Variant name="filled">
          <MinusCircleFilled/>
        </Variant>
      </Component>
      <Component name="PlusSquareFilled">
        <Variant name="filled">
          <PlusSquareFilled/>
        </Variant>
      </Component>
      <Component name="MinusSquareFilled">
        <Variant name="filled">
          <MinusSquareFilled/>
        </Variant>
      </Component>
      <Component name="InfoCircleFilled">
        <Variant name="filled">
          <InfoCircleFilled/>
        </Variant>
      </Component>
      <Component name="ExclamationCircleFilled">
        <Variant name="filled">
          <ExclamationCircleFilled/>
        </Variant>
      </Component>
      <Component name="CloseCircleFilled">
        <Variant name="filled">
          <CloseCircleFilled/>
        </Variant>
      </Component>
      <Component name="CloseSquareFilled">
        <Variant name="filled">
          <CloseSquareFilled/>
        </Variant>
      </Component>
      <Component name="CheckCircleFilled">
        <Variant name="filled">
          <CheckCircleFilled/>
        </Variant>
      </Component>
      <Component name="CheckSquareFilled">
        <Variant name="filled">
          <CheckSquareFilled/>
        </Variant>
      </Component>
      <Component name="ClockCircleFilled">
        <Variant name="filled">
          <ClockCircleFilled/>
        </Variant>
      </Component>
      <Component name="WarningFilled">
        <Variant name="filled">
          <WarningFilled/>
        </Variant>
      </Component>
      <Component name="StopFilled">
        <Variant name="filled">
          <StopFilled/>
        </Variant>
      </Component>
      <Component name="EditFilled">
        <Variant name="filled">
          <EditFilled/>
        </Variant>
      </Component>
      <Component name="CopyFilled">
        <Variant name="filled">
          <CopyFilled/>
        </Variant>
      </Component>
      <Component name="DeleteFilled">
        <Variant name="filled">
          <DeleteFilled/>
        </Variant>
      </Component>
      <Component name="SnippetsFilled">
        <Variant name="filled">
          <SnippetsFilled/>
        </Variant>
      </Component>
      <Component name="DiffFilled">
        <Variant name="filled">
          <DiffFilled/>
        </Variant>
      </Component>
      <Component name="HighlightFilled">
        <Variant name="filled">
          <HighlightFilled/>
        </Variant>
      </Component>
      <Component name="PieChartFilled">
        <Variant name="filled">
          <PieChartFilled/>
        </Variant>
      </Component>
      <Component name="BoxPlotFilled">
        <Variant name="filled">
          <BoxPlotFilled/>
        </Variant>
      </Component>
      <Component name="FundFilled">
        <Variant name="filled">
          <FundFilled/>
        </Variant>
      </Component>
      <Component name="SlidersFilled">
        <Variant name="filled">
          <SlidersFilled/>
        </Variant>
      </Component>
      <Component name="AndroidFilled">
        <Variant name="filled">
          <AndroidFilled/>
        </Variant>
      </Component>
      <Component name="AppleFilled">
        <Variant name="filled">
          <AppleFilled/>
        </Variant>
      </Component>
      <Component name="WindowsFilled">
        <Variant name="filled">
          <WindowsFilled/>
        </Variant>
      </Component>
      <Component name="ChromeFilled">
        <Variant name="filled">
          <ChromeFilled/>
        </Variant>
      </Component>
      <Component name="GithubFilled">
        <Variant name="filled">
          <GithubFilled/>
        </Variant>
      </Component>
      <Component name="AliwangwangFilled">
        <Variant name="filled">
          <AliwangwangFilled/>
        </Variant>
      </Component>
      <Component name="WeiboSquareFilled">
        <Variant name="filled">
          <WeiboSquareFilled/>
        </Variant>
      </Component>
      <Component name="WeiboCircleFilled">
        <Variant name="filled">
          <WeiboCircleFilled/>
        </Variant>
      </Component>
      <Component name="TaobaoCircleFilled">
        <Variant name="filled">
          <TaobaoCircleFilled/>
        </Variant>
      </Component>
      <Component name="Html5Filled">
        <Variant name="filled">
          <Html5Filled/>
        </Variant>
      </Component>
      <Component name="WechatFilled">
        <Variant name="filled">
          <WechatFilled/>
        </Variant>
      </Component>
      <Component name="YoutubeFilled">
        <Variant name="filled">
          <YoutubeFilled/>
        </Variant>
      </Component>
      <Component name="AlipayCircleFilled">
        <Variant name="filled">
          <AlipayCircleFilled/>
        </Variant>
      </Component>
      <Component name="SkypeFilled">
        <Variant name="filled">
          <SkypeFilled/>
        </Variant>
      </Component>
      <Component name="GitlabFilled">
        <Variant name="filled">
          <GitlabFilled/>
        </Variant>
      </Component>
      <Component name="LinkedinFilled">
        <Variant name="filled">
          <LinkedinFilled/>
        </Variant>
      </Component>
      <Component name="FacebookFilled">
        <Variant name="filled">
          <FacebookFilled/>
        </Variant>
      </Component>
      <Component name="CodeSandboxCircleFilled">
        <Variant name="filled">
          <CodeSandboxCircleFilled/>
        </Variant>
      </Component>
      <Component name="CodepenCircleFilled">
        <Variant name="filled">
          <CodepenCircleFilled/>
        </Variant>
      </Component>
      <Component name="SlackSquareFilled">
        <Variant name="filled">
          <SlackSquareFilled/>
        </Variant>
      </Component>
      <Component name="BehanceSquareFilled">
        <Variant name="filled">
          <BehanceSquareFilled/>
        </Variant>
      </Component>
      <Component name="DribbbleSquareFilled">
        <Variant name="filled">
          <DribbbleSquareFilled/>
        </Variant>
      </Component>
      <Component name="InstagramFilled">
        <Variant name="filled">
          <InstagramFilled/>
        </Variant>
      </Component>
      <Component name="YuqueFilled">
        <Variant name="filled">
          <YuqueFilled/>
        </Variant>
      </Component>
      <Component name="YahooFilled">
        <Variant name="filled">
          <YahooFilled/>
        </Variant>
      </Component>
      <Component name="AccountBookFilled">
        <Variant name="filled">
          <AccountBookFilled/>
        </Variant>
      </Component>
      <Component name="AlertFilled">
        <Variant name="filled">
          <AlertFilled/>
        </Variant>
      </Component>
      <Component name="AlipaySquareFilled">
        <Variant name="filled">
          <AlipaySquareFilled/>
        </Variant>
      </Component>
      <Component name="AmazonCircleFilled">
        <Variant name="filled">
          <AmazonCircleFilled/>
        </Variant>
      </Component>
      <Component name="ApiFilled">
        <Variant name="filled">
          <ApiFilled/>
        </Variant>
      </Component>
      <Component name="AppstoreFilled">
        <Variant name="filled">
          <AppstoreFilled/>
        </Variant>
      </Component>
      <Component name="AudioFilled">
        <Variant name="filled">
          <AudioFilled/>
        </Variant>
      </Component>
      <Component name="BankFilled">
        <Variant name="filled">
          <BankFilled/>
        </Variant>
      </Component>
      <Component name="BehanceCircleFilled">
        <Variant name="filled">
          <BehanceCircleFilled/>
        </Variant>
      </Component>
      <Component name="BellFilled">
        <Variant name="filled">
          <BellFilled/>
        </Variant>
      </Component>
      <Component name="BookFilled">
        <Variant name="filled">
          <BookFilled/>
        </Variant>
      </Component>
      <Component name="BugFilled">
        <Variant name="filled">
          <BugFilled/>
        </Variant>
      </Component>
      <Component name="BuildFilled">
        <Variant name="filled">
          <BuildFilled/>
        </Variant>
      </Component>
      <Component name="CalculatorFilled">
        <Variant name="filled">
          <CalculatorFilled/>
        </Variant>
      </Component>
      <Component name="CalendarFilled">
        <Variant name="filled">
          <CalendarFilled/>
        </Variant>
      </Component>
      <Component name="CameraFilled">
        <Variant name="filled">
          <CameraFilled/>
        </Variant>
      </Component>
      <Component name="CarFilled">
        <Variant name="filled">
          <CarFilled/>
        </Variant>
      </Component>
      <Component name="CarryOutFilled">
        <Variant name="filled">
          <CarryOutFilled/>
        </Variant>
      </Component>
      <Component name="CiCircleFilled">
        <Variant name="filled">
          <CiCircleFilled/>
        </Variant>
      </Component>
      <Component name="CloudFilled">
        <Variant name="filled">
          <CloudFilled/>
        </Variant>
      </Component>
      <Component name="CodeFilled">
        <Variant name="filled">
          <CodeFilled/>
        </Variant>
      </Component>
      <Component name="CodeSandboxSquareFilled">
        <Variant name="filled">
          <CodeSandboxSquareFilled/>
        </Variant>
      </Component>
      <Component name="CodepenSquareFilled">
        <Variant name="filled">
          <CodepenSquareFilled/>
        </Variant>
      </Component>
      <Component name="CompassFilled">
        <Variant name="filled">
          <CompassFilled/>
        </Variant>
      </Component>
      <Component name="ContactsFilled">
        <Variant name="filled">
          <ContactsFilled/>
        </Variant>
      </Component>
      <Component name="ContainerFilled">
        <Variant name="filled">
          <ContainerFilled/>
        </Variant>
      </Component>
      <Component name="ControlFilled">
        <Variant name="filled">
          <ControlFilled/>
        </Variant>
      </Component>
      <Component name="CreditCardFilled">
        <Variant name="filled">
          <CreditCardFilled/>
        </Variant>
      </Component>
      <Component name="CrownFilled">
        <Variant name="filled">
          <CrownFilled/>
        </Variant>
      </Component>
      <Component name="CustomerServiceFilled">
        <Variant name="filled">
          <CustomerServiceFilled/>
        </Variant>
      </Component>
      <Component name="DashboardFilled">
        <Variant name="filled">
          <DashboardFilled/>
        </Variant>
      </Component>
      <Component name="DatabaseFilled">
        <Variant name="filled">
          <DatabaseFilled/>
        </Variant>
      </Component>
      <Component name="DingtalkCircleFilled">
        <Variant name="filled">
          <DingtalkCircleFilled/>
        </Variant>
      </Component>
      <Component name="DingtalkSquareFilled">
        <Variant name="filled">
          <DingtalkSquareFilled/>
        </Variant>
      </Component>
      <Component name="DislikeFilled">
        <Variant name="filled">
          <DislikeFilled/>
        </Variant>
      </Component>
      <Component name="DollarCircleFilled">
        <Variant name="filled">
          <DollarCircleFilled/>
        </Variant>
      </Component>
      <Component name="DribbbleCircleFilled">
        <Variant name="filled">
          <DribbbleCircleFilled/>
        </Variant>
      </Component>
      <Component name="DropboxCircleFilled">
        <Variant name="filled">
          <DropboxCircleFilled/>
        </Variant>
      </Component>
      <Component name="DropboxSquareFilled">
        <Variant name="filled">
          <DropboxSquareFilled/>
        </Variant>
      </Component>
      <Component name="EnvironmentFilled">
        <Variant name="filled">
          <EnvironmentFilled/>
        </Variant>
      </Component>
      <Component name="EuroCircleFilled">
        <Variant name="filled">
          <EuroCircleFilled/>
        </Variant>
      </Component>
      <Component name="ExperimentFilled">
        <Variant name="filled">
          <ExperimentFilled/>
        </Variant>
      </Component>
      <Component name="EyeFilled">
        <Variant name="filled">
          <EyeFilled/>
        </Variant>
      </Component>
      <Component name="EyeInvisibleFilled">
        <Variant name="filled">
          <EyeInvisibleFilled/>
        </Variant>
      </Component>
      <Component name="FileAddFilled">
        <Variant name="filled">
          <FileAddFilled/>
        </Variant>
      </Component>
      <Component name="FileExcelFilled">
        <Variant name="filled">
          <FileExcelFilled/>
        </Variant>
      </Component>
      <Component name="FileExclamationFilled">
        <Variant name="filled">
          <FileExclamationFilled/>
        </Variant>
      </Component>
      <Component name="FileFilled">
        <Variant name="filled">
          <FileFilled/>
        </Variant>
      </Component>
      <Component name="FileImageFilled">
        <Variant name="filled">
          <FileImageFilled/>
        </Variant>
      </Component>
      <Component name="FileMarkdownFilled">
        <Variant name="filled">
          <FileMarkdownFilled/>
        </Variant>
      </Component>
      <Component name="FilePdfFilled">
        <Variant name="filled">
          <FilePdfFilled/>
        </Variant>
      </Component>
      <Component name="FilePptFilled">
        <Variant name="filled">
          <FilePptFilled/>
        </Variant>
      </Component>
      <Component name="FileTextFilled">
        <Variant name="filled">
          <FileTextFilled/>
        </Variant>
      </Component>
      <Component name="FileUnknownFilled">
        <Variant name="filled">
          <FileUnknownFilled/>
        </Variant>
      </Component>
      <Component name="FileWordFilled">
        <Variant name="filled">
          <FileWordFilled/>
        </Variant>
      </Component>
      <Component name="FileZipFilled">
        <Variant name="filled">
          <FileZipFilled/>
        </Variant>
      </Component>
      <Component name="FilterFilled">
        <Variant name="filled">
          <FilterFilled/>
        </Variant>
      </Component>
      <Component name="FireFilled">
        <Variant name="filled">
          <FireFilled/>
        </Variant>
      </Component>
      <Component name="FlagFilled">
        <Variant name="filled">
          <FlagFilled/>
        </Variant>
      </Component>
      <Component name="FolderAddFilled">
        <Variant name="filled">
          <FolderAddFilled/>
        </Variant>
      </Component>
      <Component name="FolderFilled">
        <Variant name="filled">
          <FolderFilled/>
        </Variant>
      </Component>
      <Component name="FolderOpenFilled">
        <Variant name="filled">
          <FolderOpenFilled/>
        </Variant>
      </Component>
      <Component name="FormatPainterFilled">
        <Variant name="filled">
          <FormatPainterFilled/>
        </Variant>
      </Component>
      <Component name="FrownFilled">
        <Variant name="filled">
          <FrownFilled/>
        </Variant>
      </Component>
      <Component name="FunnelPlotFilled">
        <Variant name="filled">
          <FunnelPlotFilled/>
        </Variant>
      </Component>
      <Component name="GiftFilled">
        <Variant name="filled">
          <GiftFilled/>
        </Variant>
      </Component>
      <Component name="GoldFilled">
        <Variant name="filled">
          <GoldFilled/>
        </Variant>
      </Component>
      <Component name="GoldenFilled">
        <Variant name="filled">
          <GoldenFilled/>
        </Variant>
      </Component>
      <Component name="GoogleCircleFilled">
        <Variant name="filled">
          <GoogleCircleFilled/>
        </Variant>
      </Component>
      <Component name="GooglePlusCircleFilled">
        <Variant name="filled">
          <GooglePlusCircleFilled/>
        </Variant>
      </Component>
      <Component name="GooglePlusSquareFilled">
        <Variant name="filled">
          <GooglePlusSquareFilled/>
        </Variant>
      </Component>
      <Component name="GoogleSquareFilled">
        <Variant name="filled">
          <GoogleSquareFilled/>
        </Variant>
      </Component>
      <Component name="HddFilled">
        <Variant name="filled">
          <HddFilled/>
        </Variant>
      </Component>
      <Component name="HeartFilled">
        <Variant name="filled">
          <HeartFilled/>
        </Variant>
      </Component>
      <Component name="HomeFilled">
        <Variant name="filled">
          <HomeFilled/>
        </Variant>
      </Component>
      <Component name="HourglassFilled">
        <Variant name="filled">
          <HourglassFilled/>
        </Variant>
      </Component>
      <Component name="IdcardFilled">
        <Variant name="filled">
          <IdcardFilled/>
        </Variant>
      </Component>
      <Component name="IeCircleFilled">
        <Variant name="filled">
          <IeCircleFilled/>
        </Variant>
      </Component>
      <Component name="IeSquareFilled">
        <Variant name="filled">
          <IeSquareFilled/>
        </Variant>
      </Component>
      <Component name="InsuranceFilled">
        <Variant name="filled">
          <InsuranceFilled/>
        </Variant>
      </Component>
      <Component name="InteractionFilled">
        <Variant name="filled">
          <InteractionFilled/>
        </Variant>
      </Component>
      <Component name="LayoutFilled">
        <Variant name="filled">
          <LayoutFilled/>
        </Variant>
      </Component>
      <Component name="LikeFilled">
        <Variant name="filled">
          <LikeFilled/>
        </Variant>
      </Component>
      <Component name="LockFilled">
        <Variant name="filled">
          <LockFilled/>
        </Variant>
      </Component>
      <Component name="MacCommandFilled">
        <Variant name="filled">
          <MacCommandFilled/>
        </Variant>
      </Component>
      <Component name="MailFilled">
        <Variant name="filled">
          <MailFilled/>
        </Variant>
      </Component>
      <Component name="MedicineBoxFilled">
        <Variant name="filled">
          <MedicineBoxFilled/>
        </Variant>
      </Component>
      <Component name="MediumCircleFilled">
        <Variant name="filled">
          <MediumCircleFilled/>
        </Variant>
      </Component>
      <Component name="MediumSquareFilled">
        <Variant name="filled">
          <MediumSquareFilled/>
        </Variant>
      </Component>
      <Component name="MehFilled">
        <Variant name="filled">
          <MehFilled/>
        </Variant>
      </Component>
      <Component name="MessageFilled">
        <Variant name="filled">
          <MessageFilled/>
        </Variant>
      </Component>
      <Component name="MobileFilled">
        <Variant name="filled">
          <MobileFilled/>
        </Variant>
      </Component>
      <Component name="MoneyCollectFilled">
        <Variant name="filled">
          <MoneyCollectFilled/>
        </Variant>
      </Component>
      <Component name="NotificationFilled">
        <Variant name="filled">
          <NotificationFilled/>
        </Variant>
      </Component>
      <Component name="PayCircleFilled">
        <Variant name="filled">
          <PayCircleFilled/>
        </Variant>
      </Component>
      <Component name="PhoneFilled">
        <Variant name="filled">
          <PhoneFilled/>
        </Variant>
      </Component>
      <Component name="PictureFilled">
        <Variant name="filled">
          <PictureFilled/>
        </Variant>
      </Component>
      <Component name="PlaySquareFilled">
        <Variant name="filled">
          <PlaySquareFilled/>
        </Variant>
      </Component>
      <Component name="PoundCircleFilled">
        <Variant name="filled">
          <PoundCircleFilled/>
        </Variant>
      </Component>
      <Component name="PrinterFilled">
        <Variant name="filled">
          <PrinterFilled/>
        </Variant>
      </Component>
      <Component name="ProfileFilled">
        <Variant name="filled">
          <ProfileFilled/>
        </Variant>
      </Component>
      <Component name="ProjectFilled">
        <Variant name="filled">
          <ProjectFilled/>
        </Variant>
      </Component>
      <Component name="PropertySafetyFilled">
        <Variant name="filled">
          <PropertySafetyFilled/>
        </Variant>
      </Component>
      <Component name="PushpinFilled">
        <Variant name="filled">
          <PushpinFilled/>
        </Variant>
      </Component>
      <Component name="QqCircleFilled">
        <Variant name="filled">
          <QqCircleFilled/>
        </Variant>
      </Component>
      <Component name="QqSquareFilled">
        <Variant name="filled">
          <QqSquareFilled/>
        </Variant>
      </Component>
      <Component name="ReadFilled">
        <Variant name="filled">
          <ReadFilled/>
        </Variant>
      </Component>
      <Component name="ReconciliationFilled">
        <Variant name="filled">
          <ReconciliationFilled/>
        </Variant>
      </Component>
      <Component name="RedEnvelopeFilled">
        <Variant name="filled">
          <RedEnvelopeFilled/>
        </Variant>
      </Component>
      <Component name="RedditCircleFilled">
        <Variant name="filled">
          <RedditCircleFilled/>
        </Variant>
      </Component>
      <Component name="RedditSquareFilled">
        <Variant name="filled">
          <RedditSquareFilled/>
        </Variant>
      </Component>
      <Component name="RestFilled">
        <Variant name="filled">
          <RestFilled/>
        </Variant>
      </Component>
      <Component name="RobotFilled">
        <Variant name="filled">
          <RobotFilled/>
        </Variant>
      </Component>
      <Component name="RocketFilled">
        <Variant name="filled">
          <RocketFilled/>
        </Variant>
      </Component>
      <Component name="SafetyCertificateFilled">
        <Variant name="filled">
          <SafetyCertificateFilled/>
        </Variant>
      </Component>
      <Component name="SaveFilled">
        <Variant name="filled">
          <SaveFilled/>
        </Variant>
      </Component>
      <Component name="ScheduleFilled">
        <Variant name="filled">
          <ScheduleFilled/>
        </Variant>
      </Component>
      <Component name="SecurityScanFilled">
        <Variant name="filled">
          <SecurityScanFilled/>
        </Variant>
      </Component>
      <Component name="SettingFilled">
        <Variant name="filled">
          <SettingFilled/>
        </Variant>
      </Component>
      <Component name="ShopFilled">
        <Variant name="filled">
          <ShopFilled/>
        </Variant>
      </Component>
      <Component name="ShoppingFilled">
        <Variant name="filled">
          <ShoppingFilled/>
        </Variant>
      </Component>
      <Component name="SignalFilled">
        <Variant name="filled">
          <SignalFilled/>
        </Variant>
      </Component>
      <Component name="SketchCircleFilled">
        <Variant name="filled">
          <SketchCircleFilled/>
        </Variant>
      </Component>
      <Component name="SketchSquareFilled">
        <Variant name="filled">
          <SketchSquareFilled/>
        </Variant>
      </Component>
      <Component name="SkinFilled">
        <Variant name="filled">
          <SkinFilled/>
        </Variant>
      </Component>
      <Component name="SlackCircleFilled">
        <Variant name="filled">
          <SlackCircleFilled/>
        </Variant>
      </Component>
      <Component name="SmileFilled">
        <Variant name="filled">
          <SmileFilled/>
        </Variant>
      </Component>
      <Component name="SoundFilled">
        <Variant name="filled">
          <SoundFilled/>
        </Variant>
      </Component>
      <Component name="StarFilled">
        <Variant name="filled">
          <StarFilled/>
        </Variant>
      </Component>
      <Component name="SwitcherFilled">
        <Variant name="filled">
          <SwitcherFilled/>
        </Variant>
      </Component>
      <Component name="TabletFilled">
        <Variant name="filled">
          <TabletFilled/>
        </Variant>
      </Component>
      <Component name="TagFilled">
        <Variant name="filled">
          <TagFilled/>
        </Variant>
      </Component>
      <Component name="TagsFilled">
        <Variant name="filled">
          <TagsFilled/>
        </Variant>
      </Component>
      <Component name="TaobaoSquareFilled">
        <Variant name="filled">
          <TaobaoSquareFilled/>
        </Variant>
      </Component>
      <Component name="ThunderboltFilled">
        <Variant name="filled">
          <ThunderboltFilled/>
        </Variant>
      </Component>
      <Component name="ToolFilled">
        <Variant name="filled">
          <ToolFilled/>
        </Variant>
      </Component>
      <Component name="TrademarkCircleFilled">
        <Variant name="filled">
          <TrademarkCircleFilled/>
        </Variant>
      </Component>
      <Component name="TrophyFilled">
        <Variant name="filled">
          <TrophyFilled/>
        </Variant>
      </Component>
      <Component name="TwitterCircleFilled">
        <Variant name="filled">
          <TwitterCircleFilled/>
        </Variant>
      </Component>
      <Component name="TwitterSquareFilled">
        <Variant name="filled">
          <TwitterSquareFilled/>
        </Variant>
      </Component>
      <Component name="UnlockFilled">
        <Variant name="filled">
          <UnlockFilled/>
        </Variant>
      </Component>
      <Component name="UsbFilled">
        <Variant name="filled">
          <UsbFilled/>
        </Variant>
      </Component>
      <Component name="VideoCameraFilled">
        <Variant name="filled">
          <VideoCameraFilled/>
        </Variant>
      </Component>
      <Component name="WalletFilled">
        <Variant name="filled">
          <WalletFilled/>
        </Variant>
      </Component>
      <Component name="ZhihuCircleFilled">
        <Variant name="filled">
          <ZhihuCircleFilled/>
        </Variant>
      </Component>
      <Component name="ZhihuSquareFilled">
        <Variant name="filled">
          <ZhihuSquareFilled/>
        </Variant>
      </Component>


      <Component name="UpCircleTwoTone">
        <Variant name="two tone">
          <UpCircleTwoTone/>
        </Variant>
      </Component>
      <Component name="DownCircleTwoTone">
        <Variant name="two tone">
          <DownCircleTwoTone/>
        </Variant>
      </Component>
      <Component name="LeftCircleTwoTone">
        <Variant name="two tone">
          <LeftCircleTwoTone/>
        </Variant>
      </Component>
      <Component name="RightCircleTwoTone">
        <Variant name="two tone">
          <RightCircleTwoTone/>
        </Variant>
      </Component>
      <Component name="PlayCircleTwoTone">
        <Variant name="two tone">
          <PlayCircleTwoTone/>
        </Variant>
      </Component>
      <Component name="UpSquareTwoTone">
        <Variant name="two tone">
          <UpSquareTwoTone/>
        </Variant>
      </Component>
      <Component name="DownSquareTwoTone">
        <Variant name="two tone">
          <DownSquareTwoTone/>
        </Variant>
      </Component>
      <Component name="LeftSquareTwoTone">
        <Variant name="two tone">
          <LeftSquareTwoTone/>
        </Variant>
      </Component>
      <Component name="RightSquareTwoTone">
        <Variant name="two tone">
          <RightSquareTwoTone/>
        </Variant>
      </Component>
      <Component name="QuestionCircleTwoTone">
        <Variant name="two tone">
          <QuestionCircleTwoTone/>
        </Variant>
      </Component>
      <Component name="PlusCircleTwoTone">
        <Variant name="two tone">
          <PlusCircleTwoTone/>
        </Variant>
      </Component>
      <Component name="PauseCircleTwoTone">
        <Variant name="two tone">
          <PauseCircleTwoTone/>
        </Variant>
      </Component>
      <Component name="MinusCircleTwoTone">
        <Variant name="two tone">
          <MinusCircleTwoTone/>
        </Variant>
      </Component>
      <Component name="PlusSquareTwoTone">
        <Variant name="two tone">
          <PlusSquareTwoTone/>
        </Variant>
      </Component>
      <Component name="MinusSquareTwoTone">
        <Variant name="two tone">
          <MinusSquareTwoTone/>
        </Variant>
      </Component>
      <Component name="InfoCircleTwoTone">
        <Variant name="two tone">
          <InfoCircleTwoTone/>
        </Variant>
      </Component>
      <Component name="ExclamationCircleTwoTone">
        <Variant name="two tone">
          <ExclamationCircleTwoTone/>
        </Variant>
      </Component>
      <Component name="CloseCircleTwoTone">
        <Variant name="two tone">
          <CloseCircleTwoTone/>
        </Variant>
      </Component>
      <Component name="CloseSquareTwoTone">
        <Variant name="two tone">
          <CloseSquareTwoTone/>
        </Variant>
      </Component>
      <Component name="CheckCircleTwoTone">
        <Variant name="two tone">
          <CheckCircleTwoTone/>
        </Variant>
      </Component>
      <Component name="CheckSquareTwoTone">
        <Variant name="two tone">
          <CheckSquareTwoTone/>
        </Variant>
      </Component>
      <Component name="ClockCircleTwoTone">
        <Variant name="two tone">
          <ClockCircleTwoTone/>
        </Variant>
      </Component>
      <Component name="WarningTwoTone">
        <Variant name="two tone">
          <WarningTwoTone/>
        </Variant>
      </Component>
      <Component name="StopTwoTone">
        <Variant name="two tone">
          <StopTwoTone/>
        </Variant>
      </Component>
      <Component name="EditTwoTone">
        <Variant name="two tone">
          <EditTwoTone/>
        </Variant>
      </Component>
      <Component name="CopyTwoTone">
        <Variant name="two tone">
          <CopyTwoTone/>
        </Variant>
      </Component>
      <Component name="DeleteTwoTone">
        <Variant name="two tone">
          <DeleteTwoTone/>
        </Variant>
      </Component>
      <Component name="SnippetsTwoTone">
        <Variant name="two tone">
          <SnippetsTwoTone/>
        </Variant>
      </Component>
      <Component name="DiffTwoTone">
        <Variant name="two tone">
          <DiffTwoTone/>
        </Variant>
      </Component>
      <Component name="HighlightTwoTone">
        <Variant name="two tone">
          <HighlightTwoTone/>
        </Variant>
      </Component>
      <Component name="PieChartTwoTone">
        <Variant name="two tone">
          <PieChartTwoTone/>
        </Variant>
      </Component>
      <Component name="BoxPlotTwoTone">
        <Variant name="two tone">
          <BoxPlotTwoTone/>
        </Variant>
      </Component>
      <Component name="FundTwoTone">
        <Variant name="two tone">
          <FundTwoTone/>
        </Variant>
      </Component>
      <Component name="SlidersTwoTone">
        <Variant name="two tone">
          <SlidersTwoTone/>
        </Variant>
      </Component>
      <Component name="Html5TwoTone">
        <Variant name="two tone">
          <Html5TwoTone/>
        </Variant>
      </Component>
      <Component name="AccountBookTwoTone">
        <Variant name="two tone">
          <AccountBookTwoTone/>
        </Variant>
      </Component>
      <Component name="AlertTwoTone">
        <Variant name="two tone">
          <AlertTwoTone/>
        </Variant>
      </Component>
      <Component name="ApiTwoTone">
        <Variant name="two tone">
          <ApiTwoTone/>
        </Variant>
      </Component>
      <Component name="AppstoreTwoTone">
        <Variant name="two tone">
          <AppstoreTwoTone/>
        </Variant>
      </Component>
      <Component name="AudioTwoTone">
        <Variant name="two tone">
          <AudioTwoTone/>
        </Variant>
      </Component>
      <Component name="BankTwoTone">
        <Variant name="two tone">
          <BankTwoTone/>
        </Variant>
      </Component>
      <Component name="BellTwoTone">
        <Variant name="two tone">
          <BellTwoTone/>
        </Variant>
      </Component>
      <Component name="BookTwoTone">
        <Variant name="two tone">
          <BookTwoTone/>
        </Variant>
      </Component>
      <Component name="BugTwoTone">
        <Variant name="two tone">
          <BugTwoTone/>
        </Variant>
      </Component>
      <Component name="BuildTwoTone">
        <Variant name="two tone">
          <BuildTwoTone/>
        </Variant>
      </Component>
      <Component name="BulbTwoTone">
        <Variant name="two tone">
          <BulbTwoTone/>
        </Variant>
      </Component>
      <Component name="CalculatorTwoTone">
        <Variant name="two tone">
          <CalculatorTwoTone/>
        </Variant>
      </Component>
      <Component name="CalendarTwoTone">
        <Variant name="two tone">
          <CalendarTwoTone/>
        </Variant>
      </Component>
      <Component name="CameraTwoTone">
        <Variant name="two tone">
          <CameraTwoTone/>
        </Variant>
      </Component>
      <Component name="CarTwoTone">
        <Variant name="two tone">
          <CarTwoTone/>
        </Variant>
      </Component>
      <Component name="CarryOutTwoTone">
        <Variant name="two tone">
          <CarryOutTwoTone/>
        </Variant>
      </Component>
      <Component name="CiCircleTwoTone">
        <Variant name="two tone">
          <CiCircleTwoTone/>
        </Variant>
      </Component>
      <Component name="CiTwoTone">
        <Variant name="two tone">
          <CiTwoTone/>
        </Variant>
      </Component>
      <Component name="CloudTwoTone">
        <Variant name="two tone">
          <CloudTwoTone/>
        </Variant>
      </Component>
      <Component name="CreditCardTwoTone">
        <Variant name="two tone">
          <CreditCardTwoTone/>
        </Variant>
      </Component>
      <Component name="CrownTwoTone">
        <Variant name="two tone">
          <CrownTwoTone/>
        </Variant>
      </Component>
      <Component name="CustomerServiceTwoTone">
        <Variant name="two tone">
          <CustomerServiceTwoTone/>
        </Variant>
      </Component>
      <Component name="DashboardTwoTone">
        <Variant name="two tone">
          <DashboardTwoTone/>
        </Variant>
      </Component>
      <Component name="DatabaseTwoTone">
        <Variant name="two tone">
          <DatabaseTwoTone/>
        </Variant>
      </Component>
      <Component name="CodeTwoTone">
        <Variant name="two tone">
          <CodeTwoTone/>
        </Variant>
      </Component>
      <Component name="CompassTwoTone">
        <Variant name="two tone">
          <CompassTwoTone/>
        </Variant>
      </Component>
      <Component name="ContactsTwoTone">
        <Variant name="two tone">
          <ContactsTwoTone/>
        </Variant>
      </Component>
      <Component name="ContainerTwoTone">
        <Variant name="two tone">
          <ContainerTwoTone/>
        </Variant>
      </Component>
      <Component name="ControlTwoTone">
        <Variant name="two tone">
          <ControlTwoTone/>
        </Variant>
      </Component>
      <Component name="DislikeTwoTone">
        <Variant name="two tone">
          <DislikeTwoTone/>
        </Variant>
      </Component>
      <Component name="DollarCircleTwoTone">
        <Variant name="two tone">
          <DollarCircleTwoTone/>
        </Variant>
      </Component>
      <Component name="DollarTwoTone">
        <Variant name="two tone">
          <DollarTwoTone/>
        </Variant>
      </Component>
      <Component name="EnvironmentTwoTone">
        <Variant name="two tone">
          <EnvironmentTwoTone/>
        </Variant>
      </Component>
      <Component name="EuroCircleTwoTone">
        <Variant name="two tone">
          <EuroCircleTwoTone/>
        </Variant>
      </Component>
      <Component name="EuroTwoTone">
        <Variant name="two tone">
          <EuroTwoTone/>
        </Variant>
      </Component>
      <Component name="ExperimentTwoTone">
        <Variant name="two tone">
          <ExperimentTwoTone/>
        </Variant>
      </Component>
      <Component name="EyeTwoTone">
        <Variant name="two tone">
          <EyeTwoTone/>
        </Variant>
      </Component>
      <Component name="EyeInvisibleTwoTone">
        <Variant name="two tone">
          <EyeInvisibleTwoTone/>
        </Variant>
      </Component>
      <Component name="FileAddTwoTone">
        <Variant name="two tone">
          <FileAddTwoTone/>
        </Variant>
      </Component>
      <Component name="FileExcelTwoTone">
        <Variant name="two tone">
          <FileExcelTwoTone/>
        </Variant>
      </Component>
      <Component name="FileExclamationTwoTone">
        <Variant name="two tone">
          <FileExclamationTwoTone/>
        </Variant>
      </Component>
      <Component name="FileTwoTone">
        <Variant name="two tone">
          <FileTwoTone/>
        </Variant>
      </Component>
      <Component name="FileImageTwoTone">
        <Variant name="two tone">
          <FileImageTwoTone/>
        </Variant>
      </Component>
      <Component name="FileMarkdownTwoTone">
        <Variant name="two tone">
          <FileMarkdownTwoTone/>
        </Variant>
      </Component>
      <Component name="FilePdfTwoTone">
        <Variant name="two tone">
          <FilePdfTwoTone/>
        </Variant>
      </Component>
      <Component name="FilePptTwoTone">
        <Variant name="two tone">
          <FilePptTwoTone/>
        </Variant>
      </Component>
      <Component name="FileTextTwoTone">
        <Variant name="two tone">
          <FileTextTwoTone/>
        </Variant>
      </Component>
      <Component name="FileUnknownTwoTone">
        <Variant name="two tone">
          <FileUnknownTwoTone/>
        </Variant>
      </Component>
      <Component name="FileWordTwoTone">
        <Variant name="two tone">
          <FileWordTwoTone/>
        </Variant>
      </Component>
      <Component name="FileZipTwoTone">
        <Variant name="two tone">
          <FileZipTwoTone/>
        </Variant>
      </Component>
      <Component name="FilterTwoTone">
        <Variant name="two tone">
          <FilterTwoTone/>
        </Variant>
      </Component>
      <Component name="FireTwoTone">
        <Variant name="two tone">
          <FireTwoTone/>
        </Variant>
      </Component>
      <Component name="FlagTwoTone">
        <Variant name="two tone">
          <FlagTwoTone/>
        </Variant>
      </Component>
      <Component name="FolderAddTwoTone">
        <Variant name="two tone">
          <FolderAddTwoTone/>
        </Variant>
      </Component>
      <Component name="FolderTwoTone">
        <Variant name="two tone">
          <FolderTwoTone/>
        </Variant>
      </Component>
      <Component name="FolderOpenTwoTone">
        <Variant name="two tone">
          <FolderOpenTwoTone/>
        </Variant>
      </Component>
      <Component name="FrownTwoTone">
        <Variant name="two tone">
          <FrownTwoTone/>
        </Variant>
      </Component>
      <Component name="FunnelPlotTwoTone">
        <Variant name="two tone">
          <FunnelPlotTwoTone/>
        </Variant>
      </Component>
      <Component name="GiftTwoTone">
        <Variant name="two tone">
          <GiftTwoTone/>
        </Variant>
      </Component>
      <Component name="GoldTwoTone">
        <Variant name="two tone">
          <GoldTwoTone/>
        </Variant>
      </Component>
      <Component name="HddTwoTone">
        <Variant name="two tone">
          <HddTwoTone/>
        </Variant>
      </Component>
      <Component name="HeartTwoTone">
        <Variant name="two tone">
          <HeartTwoTone/>
        </Variant>
      </Component>
      <Component name="HomeTwoTone">
        <Variant name="two tone">
          <HomeTwoTone/>
        </Variant>
      </Component>
      <Component name="HourglassTwoTone">
        <Variant name="two tone">
          <HourglassTwoTone/>
        </Variant>
      </Component>
      <Component name="IdcardTwoTone">
        <Variant name="two tone">
          <IdcardTwoTone/>
        </Variant>
      </Component>
      <Component name="InsuranceTwoTone">
        <Variant name="two tone">
          <InsuranceTwoTone/>
        </Variant>
      </Component>
      <Component name="InteractionTwoTone">
        <Variant name="two tone">
          <InteractionTwoTone/>
        </Variant>
      </Component>
      <Component name="LayoutTwoTone">
        <Variant name="two tone">
          <LayoutTwoTone/>
        </Variant>
      </Component>
      <Component name="LikeTwoTone">
        <Variant name="two tone">
          <LikeTwoTone/>
        </Variant>
      </Component>
      <Component name="LockTwoTone">
        <Variant name="two tone">
          <LockTwoTone/>
        </Variant>
      </Component>
      <Component name="MailTwoTone">
        <Variant name="two tone">
          <MailTwoTone/>
        </Variant>
      </Component>
      <Component name="MedicineBoxTwoTone">
        <Variant name="two tone">
          <MedicineBoxTwoTone/>
        </Variant>
      </Component>
      <Component name="MehTwoTone">
        <Variant name="two tone">
          <MehTwoTone/>
        </Variant>
      </Component>
      <Component name="MessageTwoTone">
        <Variant name="two tone">
          <MessageTwoTone/>
        </Variant>
      </Component>
      <Component name="MobileTwoTone">
        <Variant name="two tone">
          <MobileTwoTone/>
        </Variant>
      </Component>
      <Component name="MoneyCollectTwoTone">
        <Variant name="two tone">
          <MoneyCollectTwoTone/>
        </Variant>
      </Component>
      <Component name="NotificationTwoTone">
        <Variant name="two tone">
          <NotificationTwoTone/>
        </Variant>
      </Component>
      <Component name="PhoneTwoTone">
        <Variant name="two tone">
          <PhoneTwoTone/>
        </Variant>
      </Component>
      <Component name="PictureTwoTone">
        <Variant name="two tone">
          <PictureTwoTone/>
        </Variant>
      </Component>
      <Component name="PlaySquareTwoTone">
        <Variant name="two tone">
          <PlaySquareTwoTone/>
        </Variant>
      </Component>
      <Component name="PoundCircleTwoTone">
        <Variant name="two tone">
          <PoundCircleTwoTone/>
        </Variant>
      </Component>
      <Component name="PrinterTwoTone">
        <Variant name="two tone">
          <PrinterTwoTone/>
        </Variant>
      </Component>
      <Component name="ProfileTwoTone">
        <Variant name="two tone">
          <ProfileTwoTone/>
        </Variant>
      </Component>
      <Component name="ProjectTwoTone">
        <Variant name="two tone">
          <ProjectTwoTone/>
        </Variant>
      </Component>
      <Component name="PropertySafetyTwoTone">
        <Variant name="two tone">
          <PropertySafetyTwoTone/>
        </Variant>
      </Component>
      <Component name="PushpinTwoTone">
        <Variant name="two tone">
          <PushpinTwoTone/>
        </Variant>
      </Component>
      <Component name="ReconciliationTwoTone">
        <Variant name="two tone">
          <ReconciliationTwoTone/>
        </Variant>
      </Component>
      <Component name="RedEnvelopeTwoTone">
        <Variant name="two tone">
          <RedEnvelopeTwoTone/>
        </Variant>
      </Component>
      <Component name="RestTwoTone">
        <Variant name="two tone">
          <RestTwoTone/>
        </Variant>
      </Component>
      <Component name="RocketTwoTone">
        <Variant name="two tone">
          <RocketTwoTone/>
        </Variant>
      </Component>
      <Component name="SafetyCertificateTwoTone">
        <Variant name="two tone">
          <SafetyCertificateTwoTone/>
        </Variant>
      </Component>
      <Component name="SaveTwoTone">
        <Variant name="two tone">
          <SaveTwoTone/>
        </Variant>
      </Component>
      <Component name="ScheduleTwoTone">
        <Variant name="two tone">
          <ScheduleTwoTone/>
        </Variant>
      </Component>
      <Component name="SecurityScanTwoTone">
        <Variant name="two tone">
          <SecurityScanTwoTone/>
        </Variant>
      </Component>
      <Component name="SettingTwoTone">
        <Variant name="two tone">
          <SettingTwoTone/>
        </Variant>
      </Component>
      <Component name="ShopTwoTone">
        <Variant name="two tone">
          <ShopTwoTone/>
        </Variant>
      </Component>
      <Component name="ShoppingTwoTone">
        <Variant name="two tone">
          <ShoppingTwoTone/>
        </Variant>
      </Component>
      <Component name="SkinTwoTone">
        <Variant name="two tone">
          <SkinTwoTone/>
        </Variant>
      </Component>
      <Component name="SmileTwoTone">
        <Variant name="two tone">
          <SmileTwoTone/>
        </Variant>
      </Component>
      <Component name="SoundTwoTone">
        <Variant name="two tone">
          <SoundTwoTone/>
        </Variant>
      </Component>
      <Component name="StarTwoTone">
        <Variant name="two tone">
          <StarTwoTone/>
        </Variant>
      </Component>
      <Component name="SwitcherTwoTone">
        <Variant name="two tone">
          <SwitcherTwoTone/>
        </Variant>
      </Component>
      <Component name="TabletTwoTone">
        <Variant name="two tone">
          <TabletTwoTone/>
        </Variant>
      </Component>
      <Component name="TagTwoTone">
        <Variant name="two tone">
          <TagTwoTone/>
        </Variant>
      </Component>
      <Component name="TagsTwoTone">
        <Variant name="two tone">
          <TagsTwoTone/>
        </Variant>
      </Component>
      <Component name="ThunderboltTwoTone">
        <Variant name="two tone">
          <ThunderboltTwoTone/>
        </Variant>
      </Component>
      <Component name="ToolTwoTone">
        <Variant name="two tone">
          <ToolTwoTone/>
        </Variant>
      </Component>
      <Component name="TrademarkCircleTwoTone">
        <Variant name="two tone">
          <TrademarkCircleTwoTone/>
        </Variant>
      </Component>
      <Component name="TrophyTwoTone">
        <Variant name="two tone">
          <TrophyTwoTone/>
        </Variant>
      </Component>
      <Component name="UnlockTwoTone">
        <Variant name="two tone">
          <UnlockTwoTone/>
        </Variant>
      </Component>
      <Component name="UsbTwoTone">
        <Variant name="two tone">
          <UsbTwoTone/>
        </Variant>
      </Component>
      <Component name="VideoCameraTwoTone">
        <Variant name="two tone">
          <VideoCameraTwoTone/>
        </Variant>
      </Component>
      <Component name="WalletTwoTone">
        <Variant name="two tone">
          <WalletTwoTone/>
        </Variant>
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
  )

}

export default palette;
