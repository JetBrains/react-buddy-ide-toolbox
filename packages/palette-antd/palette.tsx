import React from 'react';
import {Category, Component, Palette, Variant} from '@react-buddy/ide-toolbox';
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
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import Link from 'antd/es/typography/Link';
import Button from 'antd/es/button';
import Sider from 'antd/es/layout/Sider';
import Col from 'antd/es/grid/col';
import Layout, {Content, Footer, Header} from 'antd/es/layout/layout';
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
  Spin,
  Select, TimePicker,
  Slider, Switch
} from 'antd/es';
import Checkbox from 'antd/es/checkbox/Checkbox';
import Radio, {Group} from 'antd/es/radio';
import SubMenu from 'antd/es/menu/SubMenu';
import {Alert, ConfigProvider} from 'antd';
import Meta from 'antd/es/card/Meta';
import TextArea from 'antd/es/input/TextArea';
import Paragraph from 'antd/es/typography/Paragraph';

const palette = () => (
  <Palette>
    <Category name="Button">
      <Component name="Button">
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
        <Variant name="block">
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
      <Component name="Title">
        <Variant name="h1">
          <Title>h1. Ant Design</Title>
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
      <Component name="Text">
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
      <Component name="Link">
        <Variant>
          <Link href="https://ant.design" target="_blank">
            Ant Design (Link)
          </Link>
        </Variant>
      </Component>
    </Category>
    <Category name="Layout">
      <Component name="Grid">
        <Variant name="two cols">
          <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
          </Row>
        </Variant>
        <Variant name="three cols">
          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
        </Variant>
        <Variant name="four cols">
          <Row>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
          </Row>
        </Variant>
      </Component>
      <Component name="Divider">
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
      <Component name="Space">
        <Variant>
          <Space></Space>
        </Variant>
        <Variant name="vertical">
          <Space direction="vertical"></Space>
        </Variant>
      </Component>
      <Component name="App Layout">
        <Variant>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Variant>
        <Variant name="left sider">
          <Layout>
            <Header>Header</Header>
            <Layout>
              <Sider>Sider</Sider>
              <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
        </Variant>
        <Variant name="right sider">
          <Layout>
            <Header>Header</Header>
            <Layout>
              <Content>Content</Content>
              <Sider>Sider</Sider>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
        </Variant>
        <Variant name="left full sider">
          <Layout>
            <Sider>Sider</Sider>
            <Layout>
              <Header>Header</Header>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        </Variant>
      </Component>
    </Category>
    <Category name="Data Entry">
      <Component name="AutoComplete">
        <Variant>
          <AutoComplete />
        </Variant>
      </Component>
      <Component name="Cascader">
        <Variant>
          <Cascader />
        </Variant>
      </Component>
      <Component name="Checkbox">
        <Variant>
          <Checkbox>Checkbox</Checkbox>
        </Variant>
      </Component>
      <Component name="DatePicker">
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
        {/*
        <Variant name="range">
          <DatePicker.RangePicker/>
        </Variant>
        */}
      </Component>
      <Component name="Input">
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
      <Component name="InputNumber">
        <Variant>
          <InputNumber min={0} max={10} defaultValue={5} />
        </Variant>
      </Component>
      <Component name="Radio">
        <Variant>
          <Group>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Group>
        </Variant>
      </Component>
      <Component name="Rate">
        <Variant>
          <Rate />
        </Variant>
      </Component>
      <Component name="Select">
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
      <Component name="Slider">
        <Variant>
          <Slider defaultValue={30} />
        </Variant>
      </Component>
      <Component name="Switch">
        <Variant>
          <Switch defaultChecked={false}/>
        </Variant>
      </Component>
      <Component name="TimePicker">
        <Variant>
          <TimePicker/>
        </Variant>
      </Component>
    </Category>
    <Category name="Data Display">
      <Component name="Avatar">
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
      <Component name="Avatar.Group">
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
      <Component name="Badge">
        <Variant name="success status">
          <Badge status="success" />
        </Variant>
        <Variant name="success status with text">
          <Badge status="success" text="Success" />
        </Variant>
        <Variant name="count">
          <Badge count={25} />
        </Variant>
        <Variant name="icon">
          <Badge count={<ClockCircleOutlined style={{color: '#f5222d'}} />} />
        </Variant>
        <Variant name="overflow count">
          <Badge count={100} overflowCount={99} />
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
          <Badge count={<ClockCircleOutlined style={{color: '#f5222d'}} />}>
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
            <NotificationOutlined style={{fontSize: 16}} />
          </Badge>
        </Variant>
        <Variant name="on link - dot">
          <Badge dot>
            <a href="#">Link something</a>
          </Badge>
        </Variant>
      </Component>
      <Component name="Badge.Ribbon">
        <Variant name="on card">
          <Badge.Ribbon text="Hippies">
            <Card title="Pushes open the window" size="small">
              and raises the spyglass.
            </Card>
          </Badge.Ribbon>
        </Variant>
      </Component>
      <Component name="Calendar">
        <Variant>
          <Calendar />
        </Variant>
      </Component>
      <Component name="Card">
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
            <Card type="inner" title="Inner Card title" style={{marginTop: 16}}>
              Inner Card content
            </Card>
          </Card>
        </Variant>
      </Component>
      <Component name="Card.Grid">
        <Variant>
          <Card title="Card title">
            <Card.Grid>Content</Card.Grid>
            <Card.Grid>Content</Card.Grid>
          </Card>
        </Variant>
      </Component>
      <Component name="Carousel">
        <Variant>
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
      <Component name="Collapse">
        <Variant>
          <Collapse>
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 1</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="default active panel">
          <Collapse defaultActiveKey={['1']}>
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 1</p>
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
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel
              header="This is panel header 3"
              key="3"
              showArrow={false}
            >
              <p>Panel content 1</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="expand icon - position right">
          <Collapse expandIconPosition="right">
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 1</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="ghost">
          <Collapse ghost>
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 1</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
      </Component>
      <Component name="Comment">
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
                author: 'Han Solo',
                avatar: 'https://joeschmoe.io/api/v1/random',
                content: (
                  <p>
                    We supply a series of design principles, practical patterns
                    and high quality design resources (Sketch and Axure), to
                    help people create their product prototypes beautifully and
                    efficiently.
                  </p>
                ),
                datetime: <span>2022-01-01</span>,
              },
              {
                actions: [<span key="comment-list-reply-to-0">Reply to</span>],
                author: 'Han Solo',
                avatar: 'https://joeschmoe.io/api/v1/random',
                content: (
                  <p>
                    We supply a series of design principles, practical patterns
                    and high quality design resources (Sketch and Axure), to
                    help people create their product prototypes beautifully and
                    efficiently.
                  </p>
                ),
                datetime: <span>2022-01-01</span>,
              },
            ]}
            renderItem={(item) => (
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
              <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
            }
            content={
              <>
                <Form.Item>
                  <TextArea rows={4} />
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
      <Component name="Descriptions">
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
      <Component name="Empty">
        <Variant name="basic">
          <Empty />
        </Variant>
        <Variant name="antd image">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </Variant>
        <Variant name="image source">
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{height: 60}}
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
        <Variant name="provide globally">
          <ConfigProvider
            renderEmpty={() => (
              <div style={{textAlign: 'center'}}>
                <SmileOutlined style={{fontSize: 20}} />
                <p>Data Not Found</p>
              </div>
            )}
          ></ConfigProvider>
        </Variant>
      </Component>
      <Component name="Image">
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
              src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
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
      <Component name="Image.PreviewGroup">
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
      <Component name="List">
        <Variant name="basic">
          <List
            dataSource={['Foo', 'Bar']}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Variant>
        <Variant name="with footer and header">
          <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            dataSource={['Foo', 'Bar']}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Variant>
        <Variant name="items with meta and extra img">
          <List
            itemLayout="vertical"
            dataSource={[
              {
                title: 'Foo',
                href: 'https://ant.design',
                avatar: 'https://joeschmoe.io/api/v1/random',
                description:
                  'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content:
                  'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
              },
              {
                title: 'Bar',
                href: 'https://ant.design',
                avatar: 'https://joeschmoe.io/api/v1/random',
                description:
                  'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content:
                  'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
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
            grid={{gutter: 16, column: 4}}
            dataSource={[
              {title: 'Title 1'},
              {title: 'Title 2'},
              {title: 'Title 3'},
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
            grid={{gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3}}
            dataSource={[
              {title: 'Title 1'},
              {title: 'Title 2'},
              {title: 'Title 3'},
            ]}
            renderItem={(item) => (
              <List.Item>
                <Card title={item.title}>Card content</Card>
              </List.Item>
            )}
          />
        </Variant>
      </Component>
      <Component name="Popover">
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
      <Component name="Statistic">
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
      <Component name="Table">
        <Variant name="basic">
          <Table
            columns={[
              {title: 'Name', dataIndex: 'name'},
              {title: 'Age', dataIndex: 'age'},
            ]}
            dataSource={[
              {key: 1, name: 'John', age: 30},
              {key: 2, name: 'Lucy', age: 31},
            ]}
          />
        </Variant>
        <Variant name="jsx style">
          <Table
            dataSource={[
              {key: 1, name: 'John', age: 30},
              {key: 2, name: 'Lucy', age: 31},
            ]}
          >
            <Table.Column title="Name" dataIndex="name" key="name" />
            <Table.Column title="Age" dataIndex="age" key="age" />
          </Table>
        </Variant>
        <Variant name="checkbox selection">
          <Table
            rowSelection={{type: 'checkbox'}}
            columns={[
              {title: 'Name', dataIndex: 'name'},
              {title: 'Age', dataIndex: 'age'},
            ]}
            dataSource={[
              {key: 1, name: 'John', age: 30},
              {key: 2, name: 'Lucy', age: 31},
            ]}
          />
        </Variant>
        <Variant name="radio selection">
          <Table
            rowSelection={{type: 'radio'}}
            columns={[
              {title: 'Name', dataIndex: 'name'},
              {title: 'Age', dataIndex: 'age'},
            ]}
            dataSource={[
              {key: 1, name: 'John', age: 30},
              {key: 2, name: 'Lucy', age: 31},
            ]}
          />
        </Variant>
        <Variant name="groups selection">
          <Table
            rowSelection={{
              type: 'checkbox',
              selections: [
                Table.SELECTION_ALL,
                Table.SELECTION_INVERT,
                Table.SELECTION_NONE,
              ],
            }}
            columns={[
              {title: 'Name', dataIndex: 'name'},
              {title: 'Age', dataIndex: 'age'},
            ]}
            dataSource={[
              {key: 1, name: 'John', age: 30},
              {key: 2, name: 'Lucy', age: 31},
            ]}
          />
        </Variant>
        <Variant name="filter and sorter">
          <Table
            columns={[
              {
                title: 'Name',
                dataIndex: 'name',
                filters: [
                  {
                    text: 'John',
                    value: 'John',
                  },
                  {
                    text: 'Lucy',
                    value: 'Lucy',
                  },
                ],
                onFilter: (value, record) =>
                  record.name.indexOf(value as string) === 0,
              },
              {
                title: 'Age',
                dataIndex: 'age',
                sorter: (a, b) => a.age - b.age,
              },
            ]}
            dataSource={[
              {key: 1, name: 'John', age: 30},
              {key: 2, name: 'Lucy', age: 31},
            ]}
          />
        </Variant>
        <Variant name="middle size">
          <Table
            size="middle"
            columns={[
              {title: 'Name', dataIndex: 'name'},
              {title: 'Age', dataIndex: 'age'},
            ]}
            dataSource={[
              {key: 1, name: 'John', age: 30},
              {key: 2, name: 'Lucy', age: 31},
            ]}
          />
        </Variant>
        <Variant name="title and footer">
          <Table
            title={() => 'Header'}
            footer={() => 'Footer'}
            size="middle"
            columns={[
              {title: 'Name', dataIndex: 'name'},
              {title: 'Age', dataIndex: 'age'},
            ]}
            dataSource={[
              {key: 1, name: 'John', age: 30},
              {key: 2, name: 'Lucy', age: 31},
            ]}
          />
        </Variant>
        <Variant name="expandable rows">
          <Table
            columns={[
              {title: 'Name', dataIndex: 'name'},
              {title: 'Age', dataIndex: 'age'},
            ]}
            dataSource={[
              {
                key: 1,
                name: 'John',
                age: 30,
                description: 'My name is John Brown, I am 32 years old',
              },
              {key: 2, name: 'Lucy', age: 31},
            ]}
            expandable={{
              expandedRowRender: (record) => (
                <p style={{margin: 0}}>{record.description}</p>
              ),
              rowExpandable: (record) => record.name !== 'Lucy',
            }}
          />
        </Variant>
        <Variant name="row span">
          <Table
            columns={[
              {title: 'Name', dataIndex: 'name'},
              {title: 'Age', dataIndex: 'age'},
              {
                title: 'Phone',
                dataIndex: 'phone',
                render: (value, _row, index) => {
                  if (index === 0) {
                    return {
                      children: value,
                      props: {rowSpan: 2},
                    };
                  }
                  if (index === 1) {
                    return {
                      children: value,
                      props: {rowSpan: 0},
                    };
                  }
                  return value;
                },
              },
            ]}
            dataSource={[
              {key: 1, name: 'John', age: 30, phone: '0575-22098909'},
              {key: 2, name: 'Lucy', age: 31, phone: '0575-22098909'},
              {key: 3, name: 'Joe', age: 25, phone: '0571-22098333'},
            ]}
          />
        </Variant>
        <Variant name="col span">
          <Table
            columns={[
              {
                title: 'Name',
                dataIndex: 'name',
                render: (value, _record, index) => {
                  if (index === 2) {
                    return {children: value, props: {colSpan: 3}};
                  }
                  return value;
                },
              },
              {
                title: 'Age',
                dataIndex: 'age',
                render: (value, _record, index) => {
                  if (index === 2) {
                    return {children: value, props: {colSpan: 0}};
                  }
                  return value;
                },
              },
              {
                title: 'Phone',
                dataIndex: 'phone',
                render: (value, _record, index) => {
                  if (index === 2) {
                    return {children: value, props: {colSpan: 0}};
                  }
                  return value;
                },
              },
            ]}
            dataSource={[
              {key: 1, name: 'John', age: 30, phone: '0575-22098909'},
              {key: 2, name: 'Lucy', age: 31, phone: '0575-22098909'},
              {key: 3, name: 'Joe', age: 25, phone: '0571-22098333'},
            ]}
          />
        </Variant>
        <Variant name="tree data">
          <Table
            columns={[
              {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                width: '12%',
              },
              {
                title: 'Address',
                dataIndex: 'address',
                width: '30%',
                key: 'address',
              },
            ]}
            dataSource={[
              {
                key: 1,
                name: 'John Brown sr.',
                age: 60,
                address: 'New York No. 1 Lake Park',
                children: [
                  {
                    key: 11,
                    name: 'John Brown',
                    age: 42,
                    address: 'New York No. 2 Lake Park',
                  },
                  {
                    key: 12,
                    name: 'John Brown jr.',
                    age: 30,
                    address: 'New York No. 3 Lake Park',
                    children: [
                      {
                        key: 121,
                        name: 'Jimmy Brown',
                        age: 16,
                        address: 'New York No. 3 Lake Park',
                      },
                    ],
                  },
                  {
                    key: 13,
                    name: 'Jim Green sr.',
                    age: 72,
                    address: 'London No. 1 Lake Park',
                    children: [
                      {
                        key: 131,
                        name: 'Jim Green',
                        age: 42,
                        address: 'London No. 2 Lake Park',
                        children: [
                          {
                            key: 1311,
                            name: 'Jim Green jr.',
                            age: 25,
                            address: 'London No. 3 Lake Park',
                          },
                          {
                            key: 1312,
                            name: 'Jimmy Green sr.',
                            age: 18,
                            address: 'London No. 4 Lake Park',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                key: 2,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
              },
            ]}
          />
        </Variant>
        <Variant name="fixed header">
          <Table
            dataSource={Array.from(Array(30).keys()).map((_value, index) => ({
              key: index,
              name: `Edward King ${index}`,
              age: 32,
              address: `London, Park Lane no. ${index}`,
            }))}
            scroll={{y: 240}}
            columns={[
              {
                title: 'Name',
                dataIndex: 'name',
                width: 150,
              },
              {
                title: 'Age',
                dataIndex: 'age',
                width: 150,
              },
              {
                title: 'Address',
                dataIndex: 'address',
              },
            ]}
          />
        </Variant>
        <Variant name="ellipsis">
          <Table
            columns={[
              {title: 'Name', dataIndex: 'name', ellipsis: true},
              {title: 'address', dataIndex: 'address', ellipsis: true},
            ]}
            dataSource={[
              {
                key: 1,
                name: 'John',
                address: 'Long Column Long Column Long Column',
              },
              {
                key: 2,
                name: 'Lucy',
                address: 'Long Column Long Column Long Column',
              },
            ]}
          />
        </Variant>
        <Variant name="summary">
          <Table
            columns={[
              {title: 'Name', dataIndex: 'name'},
              {title: 'Age', dataIndex: 'age'},
            ]}
            dataSource={[
              {key: 1, name: 'John', age: 30},
              {key: 2, name: 'Lucy', age: 31},
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
                title: 'Name (all screens)',
                dataIndex: 'name',
                key: 'name',
                render: (text) => <a>{text}</a>,
              },
              {
                title: 'Age (medium screen or bigger)',
                dataIndex: 'age',
                key: 'age',
                responsive: ['md'],
              },
              {
                title: 'Address (large screen or bigger)',
                dataIndex: 'address',
                key: 'address',
                responsive: ['lg'],
              },
            ]}
            dataSource={[
              {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
              },
            ]}
          />
        </Variant>
        <Variant name="pagination none">
          <Table
            columns={[
              {title: 'Name', dataIndex: 'name'},
              {title: 'Age', dataIndex: 'age'},
            ]}
            dataSource={[
              {key: 1, name: 'John', age: 30},
              {key: 2, name: 'Lucy', age: 31},
            ]}
            pagination={false}
          />
        </Variant>
        <Variant name="pagination top right">
          <Table
            columns={[
              {title: 'Name', dataIndex: 'name'},
              {title: 'Age', dataIndex: 'age'},
            ]}
            dataSource={[
              {key: 1, name: 'John', age: 30},
              {key: 2, name: 'Lucy', age: 31},
            ]}
            pagination={{position: ['topRight']}}
          />
        </Variant>
      </Component>
      <Component name="Tabs">
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
                <Button style={{marginRight: '16px'}}>Left Extra Action</Button>
              ),
              right: (
                <Button style={{marginLeft: '16px'}}>Right Extra Action</Button>
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
      <Component name="Tag">
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
      <Component name="Timeline">
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
        <Variant name="mode left">
          <Timeline mode="left">
            <Timeline.Item label="2015-09-01">Step 1</Timeline.Item>
            <Timeline.Item label="2015-09-01 09:12:11">Step 2</Timeline.Item>
          </Timeline>
        </Variant>
        <Variant name="mode right">
          <Timeline mode="right">
            <Timeline.Item label="2015-09-01">Step 1</Timeline.Item>
            <Timeline.Item label="2015-09-01 09:12:11">Step 2</Timeline.Item>
          </Timeline>
        </Variant>
        <Variant name="mode alternate">
          <Timeline mode="alternate">
            <Timeline.Item label="2015-09-01">Step 1</Timeline.Item>
            <Timeline.Item label="2015-09-01 09:12:11">Step 2</Timeline.Item>
          </Timeline>
        </Variant>
        <Variant name="with icon">
          <Timeline>
            <Timeline.Item>Step 1</Timeline.Item>
            <Timeline.Item
              dot={<ClockCircleOutlined style={{fontSize: '16px'}} />}
              color="red"
            >
              Step 2
            </Timeline.Item>
          </Timeline>
        </Variant>
      </Component>
      <Component name="Tooltip">
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
      <Component name="Tree">
        <Variant name="basic">
          <Tree
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
            treeData={[
              {
                title: 'parent 1',
                key: '0-0',
                children: [
                  {
                    title: 'parent 1-0',
                    key: '0-0-0',
                    disabled: true,
                    children: [
                      {
                        title: 'leaf',
                        key: '0-0-0-0',
                        disableCheckbox: true,
                      },
                      {
                        title: 'leaf',
                        key: '0-0-0-1',
                      },
                    ],
                  },
                  {
                    title: 'parent 1-1',
                    key: '0-0-1',
                    children: [
                      {
                        title: <span style={{color: '#1890ff'}}>sss</span>,
                        key: '0-0-1-0',
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
                title: 'parent 0',
                key: '0-0',
                children: [
                  {title: 'leaf 0-0', key: '0-0-0', isLeaf: true},
                  {title: 'leaf 0-1', key: '0-0-1', isLeaf: true},
                ],
              },
              {
                title: 'parent 1',
                key: '0-1',
                children: [
                  {title: 'leaf 1-0', key: '0-1-0', isLeaf: true},
                  {title: 'leaf 1-1', key: '0-1-1', isLeaf: true},
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
                title: 'parent 0',
                key: '0-0',
                children: [
                  {
                    title: 'leaf 0-0',
                    key: '0-0-0',
                    children: [
                      {title: 'leaf 0-0-1', key: '0-0-0-1', isLeaf: true},
                    ],
                  },
                  {title: 'leaf 0-1', key: '0-0-1', isLeaf: true},
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
                title: 'parent 1',
                key: '0-0',
                icon: <SmileOutlined />,
                children: [
                  {
                    title: 'leaf',
                    key: '0-0-0',
                    icon: <MehOutlined />,
                  },
                  {
                    title: 'leaf',
                    key: '0-0-1',
                    icon: ({selected}) =>
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
                title: 'parent 1',
                key: '0-0',
                children: [
                  {
                    title: 'leaf',
                    key: '0-0-0',
                  },
                ],
              },
            ]}
          />
        </Variant>
      </Component>
    </Category>
    <Category name="Navigation">
      <Component name="Affix">
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
      <Component name="Breadcrumb">
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
      <Component name="Dropdown">
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
            trigger={['click']}
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
            trigger={['contextMenu']}
          >
            <div>Right Click on here</div>
          </Dropdown>
        </Variant>
      </Component>
      <Component name="Menu">
        <Variant name="vertical">
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
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
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode={'horizontal'}
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
      </Component>
      <Component name="PageHeader">
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
              </Button>,
            ]}
          />
        </Variant>
        <Variant name="with breadcrumbs">
          <PageHeader
            title="Title"
            breadcrumb={{
              routes: [
                {
                  path: 'index',
                  breadcrumbName: 'First-level Menu',
                },
                {
                  path: 'first',
                  breadcrumbName: 'Second-level Menu',
                },
                {
                  path: 'second',
                  breadcrumbName: 'Third-level Menu',
                },
              ],
            }}
            subTitle="This is a subtitle"
          />
        </Variant>
      </Component>
      <Component name="Pagination">
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
            itemRender={(_current, type, originalElement) => {
              if (type === 'prev') {
                return <a>Previous</a>;
              }
              if (type === 'next') {
                return <a>Next</a>;
              }
              return originalElement;
            }}
          />
        </Variant>
      </Component>
      <Component name="Steps">
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
            <Steps.Step title="Finished" description="This is a description." />
            <Steps.Step
              title="In Progress"
              subTitle="Left 00:00:08"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description." />
          </Steps>
        </Variant>
      </Component>
    </Category>
    <Category name="Feedback">
      <Component name="Alert">
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
          <Alert
            message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
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
      <Component name="Drawer">
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
      <Component name="Modal">
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
              </Button>,
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
        <Variant name="ok and close text">
          <Modal
            title="Basic Modal"
            visible={true}
            okText="Confirm"
            cancelText="Close"
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
      <Component name="Popconfirm">
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
            icon={<QuestionCircleOutlined style={{color: 'red'}} />}
          >
            <a href="#">Delete</a>
          </Popconfirm>
        </Variant>
      </Component>
      <Component name="Progress">
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
          <Progress percent={60} success={{percent: 30}} />
        </Variant>
        <Variant name="with gradient">
          <Progress
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
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
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
            percent={90}
          />
        </Variant>
        <Variant name="circular - with success segment">
          <Progress percent={60} success={{percent: 30}} type="circle" />
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
      <Component name="Result">
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
        <Variant name="page doens't exist">
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
                <CloseCircleOutlined style={{color: 'red'}} /> Your account has
                been frozen. <a>Thaw immediately &gt;</a>
              </Paragraph>
              <Paragraph>
                <CloseCircleOutlined style={{color: 'red'}} /> Your account is
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
      <Component name="Skeleton">
        <Variant name="basic">
          <Skeleton />
        </Variant>
        <Variant name="with avatar and multiple paragraphs">
          <Skeleton avatar paragraph={{rows: 4}} />
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
          <Skeleton.Input style={{width: 200}} />
        </Variant>
        <Variant name="input - large size">
          <Skeleton.Input style={{width: 200}} size="large" />
        </Variant>
        <Variant name="image">
          <Skeleton.Image />
        </Variant>
      </Component>
      <Component name="Spin">
        <Variant name="basic">
          <Spin />
        </Variant>
        <Variant name="tip">
          <Spin tip="Loading..." />
        </Variant>
        <Variant name="custom spinning indicator">
          <Spin indicator={<LoadingOutlined style={{fontSize: 24}} spin />} />
        </Variant>
        <Variant name="small size">
          <Spin size="small" />
        </Variant>
        <Variant name="large size">
          <Spin size="large" />
        </Variant>
      </Component>
    </Category>
    <Category name="Icons">
      <Component name="StepBackwardOutlined">
        <Variant>
          <StepBackwardOutlined />
        </Variant>
      </Component>
      <Component name="StepForwardOutlined">
        <Variant>
          <StepForwardOutlined />
        </Variant>
      </Component>
      <Component name="FastBackwardOutlined">
        <Variant>
          <FastBackwardOutlined />
        </Variant>
      </Component>
      <Component name="FastForwardOutlined">
        <Variant>
          <FastForwardOutlined />
        </Variant>
      </Component>
      <Component name="ShrinkOutlined">
        <Variant>
          <ShrinkOutlined />
        </Variant>
      </Component>
      <Component name="ArrowsAltOutlined">
        <Variant>
          <ArrowsAltOutlined />
        </Variant>
      </Component>
      <Component name="DownOutlined">
        <Variant>
          <DownOutlined />
        </Variant>
      </Component>
      <Component name="UpOutlined">
        <Variant>
          <UpOutlined />
        </Variant>
      </Component>
      <Component name="LeftOutlined">
        <Variant>
          <LeftOutlined />
        </Variant>
      </Component>
      <Component name="RightOutlined">
        <Variant>
          <RightOutlined />
        </Variant>
      </Component>
      <Component name="CaretUpOutlined">
        <Variant>
          <CaretUpOutlined />
        </Variant>
      </Component>
      <Component name="CaretDownOutlined">
        <Variant>
          <CaretDownOutlined />
        </Variant>
      </Component>
      <Component name="CaretLeftOutlined">
        <Variant>
          <CaretLeftOutlined />
        </Variant>
      </Component>
      <Component name="CaretRightOutlined">
        <Variant>
          <CaretRightOutlined />
        </Variant>
      </Component>
      <Component name="UpCircleOutlined">
        <Variant>
          <UpCircleOutlined />
        </Variant>
      </Component>
      <Component name="DownCircleOutlined">
        <Variant>
          <DownCircleOutlined />
        </Variant>
      </Component>
      <Component name="LeftCircleOutlined">
        <Variant>
          <LeftCircleOutlined />
        </Variant>
      </Component>
      <Component name="RightCircleOutlined">
        <Variant>
          <RightCircleOutlined />
        </Variant>
      </Component>
      <Component name="DoubleRightOutlined">
        <Variant>
          <DoubleRightOutlined />
        </Variant>
      </Component>
      <Component name="DoubleLeftOutlined">
        <Variant>
          <DoubleLeftOutlined />
        </Variant>
      </Component>
      <Component name="VerticalLeftOutlined">
        <Variant>
          <VerticalLeftOutlined />
        </Variant>
      </Component>
      <Component name="VerticalRightOutlined">
        <Variant>
          <VerticalRightOutlined />
        </Variant>
      </Component>
      <Component name="VerticalAlignTopOutlined">
        <Variant>
          <VerticalAlignTopOutlined />
        </Variant>
      </Component>
      <Component name="VerticalAlignMiddleOutlined">
        <Variant>
          <VerticalAlignMiddleOutlined />
        </Variant>
      </Component>
      <Component name="VerticalAlignBottomOutlined">
        <Variant>
          <VerticalAlignBottomOutlined />
        </Variant>
      </Component>
      <Component name="ForwardOutlined">
        <Variant>
          <ForwardOutlined />
        </Variant>
      </Component>
      <Component name="BackwardOutlined">
        <Variant>
          <BackwardOutlined />
        </Variant>
      </Component>
      <Component name="RollbackOutlined">
        <Variant>
          <RollbackOutlined />
        </Variant>
      </Component>
      <Component name="EnterOutlined">
        <Variant>
          <EnterOutlined />
        </Variant>
      </Component>
      <Component name="RetweetOutlined">
        <Variant>
          <RetweetOutlined />
        </Variant>
      </Component>
      <Component name="SwapOutlined">
        <Variant>
          <SwapOutlined />
        </Variant>
      </Component>
      <Component name="SwapLeftOutlined">
        <Variant>
          <SwapLeftOutlined />
        </Variant>
      </Component>
      <Component name="SwapRightOutlined">
        <Variant>
          <SwapRightOutlined />
        </Variant>
      </Component>
      <Component name="ArrowUpOutlined">
        <Variant>
          <ArrowUpOutlined />
        </Variant>
      </Component>
      <Component name="ArrowDownOutlined">
        <Variant>
          <ArrowDownOutlined />
        </Variant>
      </Component>
      <Component name="ArrowLeftOutlined">
        <Variant>
          <ArrowLeftOutlined />
        </Variant>
      </Component>
      <Component name="ArrowRightOutlined">
        <Variant>
          <ArrowRightOutlined />
        </Variant>
      </Component>
      <Component name="PlayCircleOutlined">
        <Variant>
          <PlayCircleOutlined />
        </Variant>
      </Component>
      <Component name="UpSquareOutlined">
        <Variant>
          <UpSquareOutlined />
        </Variant>
      </Component>
      <Component name="DownSquareOutlined">
        <Variant>
          <DownSquareOutlined />
        </Variant>
      </Component>
      <Component name="LeftSquareOutlined">
        <Variant>
          <LeftSquareOutlined />
        </Variant>
      </Component>
      <Component name="RightSquareOutlined">
        <Variant>
          <RightSquareOutlined />
        </Variant>
      </Component>
      <Component name="LoginOutlined">
        <Variant>
          <LoginOutlined />
        </Variant>
      </Component>
      <Component name="LogoutOutlined">
        <Variant>
          <LogoutOutlined />
        </Variant>
      </Component>
      <Component name="MenuFoldOutlined">
        <Variant>
          <MenuFoldOutlined />
        </Variant>
      </Component>
      <Component name="MenuUnfoldOutlined">
        <Variant>
          <MenuUnfoldOutlined />
        </Variant>
      </Component>
      <Component name="BorderBottomOutlined">
        <Variant>
          <BorderBottomOutlined />
        </Variant>
      </Component>
      <Component name="BorderHorizontalOutlined">
        <Variant>
          <BorderHorizontalOutlined />
        </Variant>
      </Component>
      <Component name="BorderInnerOutlined">
        <Variant>
          <BorderInnerOutlined />
        </Variant>
      </Component>
      <Component name="BorderOuterOutlined">
        <Variant>
          <BorderOuterOutlined />
        </Variant>
      </Component>
      <Component name="BorderLeftOutlined">
        <Variant>
          <BorderLeftOutlined />
        </Variant>
      </Component>
      <Component name="BorderRightOutlined">
        <Variant>
          <BorderRightOutlined />
        </Variant>
      </Component>
      <Component name="BorderTopOutlined">
        <Variant>
          <BorderTopOutlined />
        </Variant>
      </Component>
      <Component name="BorderVerticleOutlined">
        <Variant>
          <BorderVerticleOutlined />
        </Variant>
      </Component>
      <Component name="PicCenterOutlined">
        <Variant>
          <PicCenterOutlined />
        </Variant>
      </Component>
      <Component name="PicLeftOutlined">
        <Variant>
          <PicLeftOutlined />
        </Variant>
      </Component>
      <Component name="PicRightOutlined">
        <Variant>
          <PicRightOutlined />
        </Variant>
      </Component>
      <Component name="RadiusBottomleftOutlined">
        <Variant>
          <RadiusBottomleftOutlined />
        </Variant>
      </Component>
      <Component name="RadiusBottomrightOutlined">
        <Variant>
          <RadiusBottomrightOutlined />
        </Variant>
      </Component>
      <Component name="RadiusUpleftOutlined">
        <Variant>
          <RadiusUpleftOutlined />
        </Variant>
      </Component>
      <Component name="RadiusUprightOutlined">
        <Variant>
          <RadiusUprightOutlined />
        </Variant>
      </Component>
      <Component name="FullscreenOutlined">
        <Variant>
          <FullscreenOutlined />
        </Variant>
      </Component>
      <Component name="FullscreenExitOutlined">
        <Variant>
          <FullscreenExitOutlined />
        </Variant>
      </Component>
      <Component name="QuestionOutlined">
        <Variant>
          <QuestionOutlined />
        </Variant>
      </Component>
      <Component name="QuestionCircleOutlined">
        <Variant>
          <QuestionCircleOutlined />
        </Variant>
      </Component>
      <Component name="PlusOutlined">
        <Variant>
          <PlusOutlined />
        </Variant>
      </Component>
      <Component name="PlusCircleOutlined">
        <Variant>
          <PlusCircleOutlined />
        </Variant>
      </Component>
      <Component name="PauseOutlined">
        <Variant>
          <PauseOutlined />
        </Variant>
      </Component>
      <Component name="PauseCircleOutlined">
        <Variant>
          <PauseCircleOutlined />
        </Variant>
      </Component>
      <Component name="MinusOutlined">
        <Variant>
          <MinusOutlined />
        </Variant>
      </Component>
      <Component name="MinusCircleOutlined">
        <Variant>
          <MinusCircleOutlined />
        </Variant>
      </Component>
      <Component name="PlusSquareOutlined">
        <Variant>
          <PlusSquareOutlined />
        </Variant>
      </Component>
      <Component name="MinusSquareOutlined">
        <Variant>
          <MinusSquareOutlined />
        </Variant>
      </Component>
      <Component name="InfoOutlined">
        <Variant>
          <InfoOutlined />
        </Variant>
      </Component>
      <Component name="InfoCircleOutlined">
        <Variant>
          <InfoCircleOutlined />
        </Variant>
      </Component>
      <Component name="ExclamationOutlined">
        <Variant>
          <ExclamationOutlined />
        </Variant>
      </Component>
      <Component name="ExclamationCircleOutlined">
        <Variant>
          <ExclamationCircleOutlined />
        </Variant>
      </Component>
      <Component name="CloseOutlined">
        <Variant>
          <CloseOutlined />
        </Variant>
      </Component>
      <Component name="CloseCircleOutlined">
        <Variant>
          <CloseCircleOutlined />
        </Variant>
      </Component>
      <Component name="CloseSquareOutlined">
        <Variant>
          <CloseSquareOutlined />
        </Variant>
      </Component>
      <Component name="CheckOutlined">
        <Variant>
          <CheckOutlined />
        </Variant>
      </Component>
      <Component name="CheckCircleOutlined">
        <Variant>
          <CheckCircleOutlined />
        </Variant>
      </Component>
      <Component name="CheckSquareOutlined">
        <Variant>
          <CheckSquareOutlined />
        </Variant>
      </Component>
      <Component name="ClockCircleOutlined">
        <Variant>
          <ClockCircleOutlined />
        </Variant>
      </Component>
      <Component name="WarningOutlined">
        <Variant>
          <WarningOutlined />
        </Variant>
      </Component>
      <Component name="IssuesCloseOutlined">
        <Variant>
          <IssuesCloseOutlined />
        </Variant>
      </Component>
      <Component name="StopOutlined">
        <Variant>
          <StopOutlined />
        </Variant>
      </Component>
      <Component name="EditOutlined">
        <Variant>
          <EditOutlined />
        </Variant>
      </Component>
      <Component name="FormOutlined">
        <Variant>
          <FormOutlined />
        </Variant>
      </Component>
      <Component name="CopyOutlined">
        <Variant>
          <CopyOutlined />
        </Variant>
      </Component>
      <Component name="ScissorOutlined">
        <Variant>
          <ScissorOutlined />
        </Variant>
      </Component>
      <Component name="DeleteOutlined">
        <Variant>
          <DeleteOutlined />
        </Variant>
      </Component>
      <Component name="SnippetsOutlined">
        <Variant>
          <SnippetsOutlined />
        </Variant>
      </Component>
      <Component name="DiffOutlined">
        <Variant>
          <DiffOutlined />
        </Variant>
      </Component>
      <Component name="HighlightOutlined">
        <Variant>
          <HighlightOutlined />
        </Variant>
      </Component>
      <Component name="AlignCenterOutlined">
        <Variant>
          <AlignCenterOutlined />
        </Variant>
      </Component>
      <Component name="AlignLeftOutlined">
        <Variant>
          <AlignLeftOutlined />
        </Variant>
      </Component>
      <Component name="AlignRightOutlined">
        <Variant>
          <AlignRightOutlined />
        </Variant>
      </Component>
      <Component name="BgColorsOutlined">
        <Variant>
          <BgColorsOutlined />
        </Variant>
      </Component>
      <Component name="BoldOutlined">
        <Variant>
          <BoldOutlined />
        </Variant>
      </Component>
      <Component name="ItalicOutlined">
        <Variant>
          <ItalicOutlined />
        </Variant>
      </Component>
      <Component name="UnderlineOutlined">
        <Variant>
          <UnderlineOutlined />
        </Variant>
      </Component>
      <Component name="StrikethroughOutlined">
        <Variant>
          <StrikethroughOutlined />
        </Variant>
      </Component>
      <Component name="RedoOutlined">
        <Variant>
          <RedoOutlined />
        </Variant>
      </Component>
      <Component name="UndoOutlined">
        <Variant>
          <UndoOutlined />
        </Variant>
      </Component>
      <Component name="ZoomInOutlined">
        <Variant>
          <ZoomInOutlined />
        </Variant>
      </Component>
      <Component name="ZoomOutOutlined">
        <Variant>
          <ZoomOutOutlined />
        </Variant>
      </Component>
      <Component name="FontColorsOutlined">
        <Variant>
          <FontColorsOutlined />
        </Variant>
      </Component>
      <Component name="FontColorsOutlined">
        <Variant>
          <FontSizeOutlined />
        </Variant>
      </Component>
      <Component name="LineHeightOutlined">
        <Variant>
          <LineHeightOutlined />
        </Variant>
      </Component>
      <Component name="DashOutlined">
        <Variant>
          <DashOutlined />
        </Variant>
      </Component>
      <Component name="SmallDashOutlined">
        <Variant>
          <SmallDashOutlined />
        </Variant>
      </Component>
      <Component name="SortAscendingOutlined">
        <Variant>
          <SortAscendingOutlined />
        </Variant>
      </Component>
      <Component name="SortDescendingOutlined">
        <Variant>
          <SortDescendingOutlined />
        </Variant>
      </Component>
      <Component name="DragOutlined">
        <Variant>
          <DragOutlined />
        </Variant>
      </Component>
      <Component name="OrderedListOutlined">
        <Variant>
          <OrderedListOutlined />
        </Variant>
      </Component>
      <Component name="UnorderedListOutlined">
        <Variant>
          <UnorderedListOutlined />
        </Variant>
      </Component>
      <Component name="RadiusSettingOutlined">
        <Variant>
          <RadiusSettingOutlined />
        </Variant>
      </Component>
      <Component name="ColumnWidthOutlined">
        <Variant>
          <ColumnWidthOutlined />
        </Variant>
      </Component>
      <Component name="ColumnHeightOutlined">
        <Variant>
          <ColumnHeightOutlined />
        </Variant>
      </Component>
      <Component name="AreaChartOutlined">
        <Variant>
          <AreaChartOutlined />
        </Variant>
      </Component>
      <Component name="PieChartOutlined">
        <Variant>
          <PieChartOutlined />
        </Variant>
      </Component>
      <Component name="BarChartOutlined">
        <Variant>
          <BarChartOutlined />
        </Variant>
      </Component>
      <Component name="DotChartOutlined">
        <Variant>
          <DotChartOutlined />
        </Variant>
      </Component>
      <Component name="LineChartOutlined">
        <Variant>
          <LineChartOutlined />
        </Variant>
      </Component>
      <Component name="RadarChartOutlined">
        <Variant>
          <RadarChartOutlined />
        </Variant>
      </Component>
      <Component name="HeatMapOutlined">
        <Variant>
          <HeatMapOutlined />
        </Variant>
      </Component>
      <Component name="FallOutlined">
        <Variant>
          <FallOutlined />
        </Variant>
      </Component>
      <Component name="RiseOutlined">
        <Variant>
          <RiseOutlined />
        </Variant>
      </Component>
      <Component name="StockOutlined">
        <Variant>
          <StockOutlined />
        </Variant>
      </Component>
      <Component name="BoxPlotOutlined">
        <Variant>
          <BoxPlotOutlined />
        </Variant>
      </Component>
      <Component name="FundOutlined">
        <Variant>
          <FundOutlined />
        </Variant>
      </Component>
      <Component name="SlidersOutlined">
        <Variant>
          <SlidersOutlined />
        </Variant>
      </Component>
      <Component name="AndroidOutlined">
        <Variant>
          <AndroidOutlined />
        </Variant>
      </Component>
      <Component name="AppleOutlined">
        <Variant>
          <AppleOutlined />
        </Variant>
      </Component>
      <Component name="WindowsOutlined">
        <Variant>
          <WindowsOutlined />
        </Variant>
      </Component>
      <Component name="IeOutlined">
        <Variant>
          <IeOutlined />
        </Variant>
      </Component>
      <Component name="ChromeOutlined">
        <Variant>
          <ChromeOutlined />
        </Variant>
      </Component>
      <Component name="GithubOutlined">
        <Variant>
          <GithubOutlined />
        </Variant>
      </Component>
      <Component name="AliwangwangOutlined">
        <Variant>
          <AliwangwangOutlined />
        </Variant>
      </Component>
      <Component name="DingdingOutlined">
        <Variant>
          <DingdingOutlined />
        </Variant>
      </Component>
      <Component name="WeiboSquareOutlined">
        <Variant>
          <WeiboSquareOutlined />
        </Variant>
      </Component>
      <Component name="WeiboCircleOutlined">
        <Variant>
          <WeiboCircleOutlined />
        </Variant>
      </Component>
      <Component name="TaobaoCircleOutlined">
        <Variant>
          <TaobaoCircleOutlined />
        </Variant>
      </Component>
      <Component name="Html5Outlined">
        <Variant>
          <Html5Outlined />
        </Variant>
      </Component>
      <Component name="WeiboOutlined">
        <Variant>
          <WeiboOutlined />
        </Variant>
      </Component>
      <Component name="TwitterOutlined">
        <Variant>
          <TwitterOutlined />
        </Variant>
      </Component>
      <Component name="WechatOutlined">
        <Variant>
          <WechatOutlined />
        </Variant>
      </Component>
      <Component name="YoutubeOutlined">
        <Variant>
          <YoutubeOutlined />
        </Variant>
      </Component>
      <Component name="AlipayCircleOutlined">
        <Variant>
          <AlipayCircleOutlined />
        </Variant>
      </Component>
      <Component name="AlipayCircleOutlined">
        <Variant>
          <TaobaoOutlined />
        </Variant>
      </Component>
      <Component name="SkypeOutlined">
        <Variant>
          <SkypeOutlined />
        </Variant>
      </Component>
      <Component name="QqOutlined">
        <Variant>
          <QqOutlined />
        </Variant>
      </Component>
      <Component name="MediumWorkmarkOutlined">
        <Variant>
          <MediumWorkmarkOutlined />
        </Variant>
      </Component>
      <Component name="GitlabOutlined">
        <Variant>
          <GitlabOutlined />
        </Variant>
      </Component>
      <Component name="MediumOutlined">
        <Variant>
          <MediumOutlined />
        </Variant>
      </Component>
      <Component name="LinkedinOutlined">
        <Variant>
          <LinkedinOutlined />
        </Variant>
      </Component>
      <Component name="GooglePlusOutlined">
        <Variant>
          <GooglePlusOutlined />
        </Variant>
      </Component>
      <Component name="DropboxOutlined">
        <Variant>
          <DropboxOutlined />
        </Variant>
      </Component>
      <Component name="FacebookOutlined">
        <Variant>
          <FacebookOutlined />
        </Variant>
      </Component>
      <Component name="CodepenOutlined">
        <Variant>
          <CodepenOutlined />
        </Variant>
      </Component>
      <Component name="CodeSandboxOutlined">
        <Variant>
          <CodeSandboxOutlined />
        </Variant>
      </Component>
      <Component name="AmazonOutlined">
        <Variant>
          <AmazonOutlined />
        </Variant>
      </Component>
      <Component name="GoogleOutlined">
        <Variant>
          <GoogleOutlined />
        </Variant>
      </Component>
      <Component name="CodepenCircleOutlined">
        <Variant>
          <CodepenCircleOutlined />
        </Variant>
      </Component>
      <Component name="AlipayOutlined">
        <Variant>
          <AlipayOutlined />
        </Variant>
      </Component>
      <Component name="AntDesignOutlined">
        <Variant>
          <AntDesignOutlined />
        </Variant>
      </Component>
      <Component name="AntCloudOutlined">
        <Variant>
          <AntCloudOutlined />
        </Variant>
      </Component>
      <Component name="AliyunOutlined">
        <Variant>
          <AliyunOutlined />
        </Variant>
      </Component>
      <Component name="ZhihuOutlined">
        <Variant>
          <ZhihuOutlined />
        </Variant>
      </Component>
      <Component name="SlackOutlined">
        <Variant>
          <SlackOutlined />
        </Variant>
      </Component>
      <Component name="SlackSquareOutlined">
        <Variant>
          <SlackSquareOutlined />
        </Variant>
      </Component>
      <Component name="BehanceOutlined">
        <Variant>
          <BehanceOutlined />
        </Variant>
      </Component>
      <Component name="BehanceSquareOutlined">
        <Variant>
          <BehanceSquareOutlined />
        </Variant>
      </Component>
      <Component name="DribbbleOutlined">
        <Variant>
          <DribbbleOutlined />
        </Variant>
      </Component>
      <Component name="DribbbleSquareOutlined">
        <Variant>
          <DribbbleSquareOutlined />
        </Variant>
      </Component>
      <Component name="InstagramOutlined">
        <Variant>
          <InstagramOutlined />
        </Variant>
      </Component>
      <Component name="YuqueOutlined">
        <Variant>
          <YuqueOutlined />
        </Variant>
      </Component>
      <Component name="AlibabaOutlined">
        <Variant>
          <AlibabaOutlined />
        </Variant>
      </Component>
      <Component name="YahooOutlined">
        <Variant>
          <YahooOutlined />
        </Variant>
      </Component>
      <Component name="RedditOutlined">
        <Variant>
          <RedditOutlined />
        </Variant>
      </Component>
      <Component name="SketchOutlined">
        <Variant>
          <SketchOutlined />
        </Variant>
      </Component>
      <Component name="AccountBookOutlined">
        <Variant>
          <AccountBookOutlined />
        </Variant>
      </Component>
      <Component name="AimOutlined">
        <Variant>
          <AimOutlined />
        </Variant>
      </Component>
      <Component name="AlertOutlined">
        <Variant>
          <AlertOutlined />
        </Variant>
      </Component>
      <Component name="ApartmentOutlined">
        <Variant>
          <ApartmentOutlined />
        </Variant>
      </Component>
      <Component name="ApiOutlined">
        <Variant>
          <ApiOutlined />
        </Variant>
      </Component>
      <Component name="AppstoreAddOutlined">
        <Variant>
          <AppstoreAddOutlined />
        </Variant>
      </Component>
      <Component name="AppstoreOutlined">
        <Variant>
          <AppstoreOutlined />
        </Variant>
      </Component>
      <Component name="AudioOutlined">
        <Variant>
          <AudioOutlined />
        </Variant>
      </Component>
      <Component name="AudioMutedOutlined">
        <Variant>
          <AudioMutedOutlined />
        </Variant>
      </Component>
      <Component name="AuditOutlined">
        <Variant>
          <AuditOutlined />
        </Variant>
      </Component>
      <Component name="BankOutlined">
        <Variant>
          <BankOutlined />
        </Variant>
      </Component>
      <Component name="BarcodeOutlined">
        <Variant>
          <BarcodeOutlined />
        </Variant>
      </Component>
      <Component name="BarsOutlined">
        <Variant>
          <BarsOutlined />
        </Variant>
      </Component>
      <Component name="BellOutlined">
        <Variant>
          <BellOutlined />
        </Variant>
      </Component>
      <Component name="BellOutlined">
        <Variant>
          <BlockOutlined />
        </Variant>
      </Component>
      <Component name="BookOutlined">
        <Variant>
          <BookOutlined />
        </Variant>
      </Component>
      <Component name="BorderOutlined">
        <Variant>
          <BorderOutlined />
        </Variant>
      </Component>
      <Component name="BorderlessTableOutlined">
        <Variant>
          <BorderlessTableOutlined />
        </Variant>
      </Component>
      <Component name="BranchesOutlined">
        <Variant>
          <BranchesOutlined />
        </Variant>
      </Component>
      <Component name="BugOutlined">
        <Variant>
          <BugOutlined />
        </Variant>
      </Component>
      <Component name="BuildOutlined">
        <Variant>
          <BuildOutlined />
        </Variant>
      </Component>
      <Component name="BulbOutlined">
        <Variant>
          <BulbOutlined />
        </Variant>
      </Component>
      <Component name="CalculatorOutlined">
        <Variant>
          <CalculatorOutlined />
        </Variant>
      </Component>
      <Component name="CalendarOutlined">
        <Variant>
          <CalendarOutlined />
        </Variant>
      </Component>
      <Component name="CameraOutlined">
        <Variant>
          <CameraOutlined />
        </Variant>
      </Component>
      <Component name="CarOutlined">
        <Variant>
          <CarOutlined />
        </Variant>
      </Component>
      <Component name="CarryOutOutlined">
        <Variant>
          <CarryOutOutlined />
        </Variant>
      </Component>
      <Component name="CiCircleOutlined">
        <Variant>
          <CiCircleOutlined />
        </Variant>
      </Component>
      <Component name="CiOutlined">
        <Variant>
          <CiOutlined />
        </Variant>
      </Component>
      <Component name="ClearOutlined">
        <Variant>
          <ClearOutlined />
        </Variant>
      </Component>
      <Component name="CloudDownloadOutlined">
        <Variant>
          <CloudDownloadOutlined />
        </Variant>
      </Component>
      <Component name="CloudOutlined">
        <Variant>
          <CloudOutlined />
        </Variant>
      </Component>
      <Component name="CloudServerOutlined">
        <Variant>
          <CloudServerOutlined />
        </Variant>
      </Component>
      <Component name="CloudSyncOutlined">
        <Variant>
          <CloudSyncOutlined />
        </Variant>
      </Component>
      <Component name="CloudUploadOutlined">
        <Variant>
          <CloudUploadOutlined />
        </Variant>
      </Component>
      <Component name="CloudUploadOutlined">
        <Variant>
          <ClusterOutlined />
        </Variant>
      </Component>
      <Component name="CodeOutlined">
        <Variant>
          <CodeOutlined />
        </Variant>
      </Component>
      <Component name="CoffeeOutlined">
        <Variant>
          <CoffeeOutlined />
        </Variant>
      </Component>
      <Component name="CommentOutlined">
        <Variant>
          <CommentOutlined />
        </Variant>
      </Component>
      <Component name="CompassOutlined">
        <Variant>
          <CompassOutlined />
        </Variant>
      </Component>
      <Component name="CompressOutlined">
        <Variant>
          <CompressOutlined />
        </Variant>
      </Component>
      <Component name="ConsoleSqlOutlined">
        <Variant>
          <ConsoleSqlOutlined />
        </Variant>
      </Component>
      <Component name="ContactsOutlined">
        <Variant>
          <ContactsOutlined />
        </Variant>
      </Component>
      <Component name="ContainerOutlined">
        <Variant>
          <ContainerOutlined />
        </Variant>
      </Component>
      <Component name="ContainerOutlined">
        <Variant>
          <ControlOutlined />
        </Variant>
      </Component>
      <Component name="CopyrightOutlined">
        <Variant>
          <CopyrightOutlined />
        </Variant>
      </Component>
      <Component name="CreditCardOutlined">
        <Variant>
          <CreditCardOutlined />
        </Variant>
      </Component>
      <Component name="CrownOutlined">
        <Variant>
          <CrownOutlined />
        </Variant>
      </Component>
      <Component name="CustomerServiceOutlined">
        <Variant>
          <CustomerServiceOutlined />
        </Variant>
      </Component>
      <Component name="DashboardOutlined">
        <Variant>
          <DashboardOutlined />
        </Variant>
      </Component>
      <Component name="DatabaseOutlined">
        <Variant>
          <DatabaseOutlined />
        </Variant>
      </Component>
      <Component name="DeleteColumnOutlined">
        <Variant>
          <DeleteColumnOutlined />
        </Variant>
      </Component>
      <Component name="DeleteRowOutlined">
        <Variant>
          <DeleteRowOutlined />
        </Variant>
      </Component>
      <Component name="DeliveredProcedureOutlined">
        <Variant>
          <DeliveredProcedureOutlined />
        </Variant>
      </Component>
      <Component name="DeploymentUnitOutlined">
        <Variant>
          <DeploymentUnitOutlined />
        </Variant>
      </Component>
      <Component name="DesktopOutlined">
        <Variant>
          <DesktopOutlined />
        </Variant>
      </Component>
      <Component name="DingtalkOutlined">
        <Variant>
          <DingtalkOutlined />
        </Variant>
      </Component>
      <Component name="DisconnectOutlined">
        <Variant>
          <DisconnectOutlined />
        </Variant>
      </Component>
      <Component name="DislikeOutlined">
        <Variant>
          <DislikeOutlined />
        </Variant>
      </Component>
      <Component name="DollarCircleOutlined">
        <Variant>
          <DollarCircleOutlined />
        </Variant>
      </Component>
      <Component name="DollarOutlined">
        <Variant>
          <DollarOutlined />
        </Variant>
      </Component>
      <Component name="DownloadOutlined">
        <Variant>
          <DownloadOutlined />
        </Variant>
      </Component>
      <Component name="EllipsisOutlined">
        <Variant>
          <EllipsisOutlined />
        </Variant>
      </Component>
      <Component name="EnvironmentOutlined">
        <Variant>
          <EnvironmentOutlined />
        </Variant>
      </Component>
      <Component name="EuroCircleOutlined">
        <Variant>
          <EuroCircleOutlined />
        </Variant>
      </Component>
      <Component name="EuroOutlined">
        <Variant>
          <EuroOutlined />
        </Variant>
      </Component>
      <Component name="ExceptionOutlined">
        <Variant>
          <ExceptionOutlined />
        </Variant>
      </Component>
      <Component name="ExpandAltOutlined">
        <Variant>
          <ExpandAltOutlined />
        </Variant>
      </Component>
      <Component name="ExpandOutlined">
        <Variant>
          <ExpandOutlined />
        </Variant>
      </Component>
      <Component name="ExperimentOutlined">
        <Variant>
          <ExperimentOutlined />
        </Variant>
      </Component>
      <Component name="ExportOutlined">
        <Variant>
          <ExportOutlined />
        </Variant>
      </Component>
      <Component name="EyeOutlined">
        <Variant>
          <EyeOutlined />
        </Variant>
      </Component>
      <Component name="EyeInvisibleOutlined">
        <Variant>
          <EyeInvisibleOutlined />
        </Variant>
      </Component>
      <Component name="FieldBinaryOutlined">
        <Variant>
          <FieldBinaryOutlined />
        </Variant>
      </Component>
      <Component name="FieldNumberOutlined">
        <Variant>
          <FieldNumberOutlined />
        </Variant>
      </Component>
      <Component name="FieldStringOutlined">
        <Variant>
          <FieldStringOutlined />
        </Variant>
      </Component>
      <Component name="FieldTimeOutlined">
        <Variant>
          <FieldTimeOutlined />
        </Variant>
      </Component>
      <Component name="FileAddOutlined">
        <Variant>
          <FileAddOutlined />
        </Variant>
      </Component>
      <Component name="FileDoneOutlined">
        <Variant>
          <FileDoneOutlined />
        </Variant>
      </Component>
      <Component name="FileExcelOutlined">
        <Variant>
          <FileExcelOutlined />
        </Variant>
      </Component>
      <Component name="FileExclamationOutlined">
        <Variant>
          <FileExclamationOutlined />
        </Variant>
      </Component>
      <Component name="FileOutlined">
        <Variant>
          <FileOutlined />
        </Variant>
      </Component>
      <Component name="FileGifOutlined">
        <Variant>
          <FileGifOutlined />
        </Variant>
      </Component>
      <Component name="FileImageOutlined">
        <Variant>
          <FileImageOutlined />
        </Variant>
      </Component>
      <Component name="FileJpgOutlined">
        <Variant>
          <FileJpgOutlined />
        </Variant>
      </Component>
      <Component name="FileMarkdownOutlined">
        <Variant>
          <FileMarkdownOutlined />
        </Variant>
      </Component>
      <Component name="FilePdfOutlined">
        <Variant>
          <FilePdfOutlined />
        </Variant>
      </Component>
      <Component name="FilePptOutlined">
        <Variant>
          <FilePptOutlined />
        </Variant>
      </Component>
      <Component name="FileProtectOutlined">
        <Variant>
          <FileProtectOutlined />
        </Variant>
      </Component>
      <Component name="FileSearchOutlined">
        <Variant>
          <FileSearchOutlined />
        </Variant>
      </Component>
      <Component name="FileSyncOutlined">
        <Variant>
          <FileSyncOutlined />
        </Variant>
      </Component>
      <Component name="FileTextOutlined">
        <Variant>
          <FileTextOutlined />
        </Variant>
      </Component>
      <Component name="FileUnknownOutlined">
        <Variant>
          <FileUnknownOutlined />
        </Variant>
      </Component>
      <Component name="FileWordOutlined">
        <Variant>
          <FileWordOutlined />
        </Variant>
      </Component>
      <Component name="FileZipOutlined">
        <Variant>
          <FileZipOutlined />
        </Variant>
      </Component>
      <Component name="FilterOutlined">
        <Variant>
          <FilterOutlined />
        </Variant>
      </Component>
      <Component name="FireOutlined">
        <Variant>
          <FireOutlined />
        </Variant>
      </Component>
      <Component name="FlagOutlined">
        <Variant>
          <FlagOutlined />
        </Variant>
      </Component>
      <Component name="FolderAddOutlined">
        <Variant>
          <FolderAddOutlined />
        </Variant>
      </Component>
      <Component name="FolderAddOutlined">
        <Variant>
          <FolderOutlined />
        </Variant>
      </Component>
      <Component name="FolderOpenOutlined">
        <Variant>
          <FolderOpenOutlined />
        </Variant>
      </Component>
      <Component name="FolderViewOutlined">
        <Variant>
          <FolderViewOutlined />
        </Variant>
      </Component>
      <Component name="ForkOutlined">
        <Variant>
          <ForkOutlined />
        </Variant>
      </Component>
      <Component name="FormatPainterOutlined">
        <Variant>
          <FormatPainterOutlined />
        </Variant>
      </Component>
      <Component name="FrownOutlined">
        <Variant>
          <FrownOutlined />
        </Variant>
      </Component>
      <Component name="FunctionOutlined">
        <Variant>
          <FunctionOutlined />
        </Variant>
      </Component>
      <Component name="FundProjectionScreenOutlined">
        <Variant>
          <FundProjectionScreenOutlined />
        </Variant>
      </Component>
      <Component name="FundViewOutlined">
        <Variant>
          <FundViewOutlined />
        </Variant>
      </Component>
      <Component name="FunnelPlotOutlined">
        <Variant>
          <FunnelPlotOutlined />
        </Variant>
      </Component>
      <Component name="GatewayOutlined">
        <Variant>
          <GatewayOutlined />
        </Variant>
      </Component>
      <Component name="GifOutlined">
        <Variant>
          <GifOutlined />
        </Variant>
      </Component>
      <Component name="GiftOutlined">
        <Variant>
          <GiftOutlined />
        </Variant>
      </Component>
      <Component name="GlobalOutlined">
        <Variant>
          <GlobalOutlined />
        </Variant>
      </Component>
      <Component name="GoldOutlined">
        <Variant>
          <GoldOutlined />
        </Variant>
      </Component>
      <Component name="GroupOutlined">
        <Variant>
          <GroupOutlined />
        </Variant>
      </Component>
      <Component name="HddOutlined">
        <Variant>
          <HddOutlined />
        </Variant>
      </Component>
      <Component name="HeartOutlined">
        <Variant>
          <HeartOutlined />
        </Variant>
      </Component>
      <Component name="HistoryOutlined">
        <Variant>
          <HistoryOutlined />
        </Variant>
      </Component>
      <Component name="HolderOutlined">
        <Variant>
          <HolderOutlined />
        </Variant>
      </Component>
      <Component name="HomeOutlined">
        <Variant>
          <HomeOutlined />
        </Variant>
      </Component>
      <Component name="HourglassOutlined">
        <Variant>
          <HourglassOutlined />
        </Variant>
      </Component>
      <Component name="IdcardOutlined">
        <Variant>
          <IdcardOutlined />
        </Variant>
      </Component>
      <Component name="ImportOutlined">
        <Variant>
          <ImportOutlined />
        </Variant>
      </Component>
      <Component name="InboxOutlined">
        <Variant>
          <InboxOutlined />
        </Variant>
      </Component>
      <Component name="InsertRowAboveOutlined">
        <Variant>
          <InsertRowAboveOutlined />
        </Variant>
      </Component>
      <Component name="InsertRowBelowOutlined">
        <Variant>
          <InsertRowBelowOutlined />
        </Variant>
      </Component>
      <Component name="InsertRowLeftOutlined">
        <Variant>
          <InsertRowLeftOutlined />
        </Variant>
      </Component>
      <Component name="InsertRowRightOutlined">
        <Variant>
          <InsertRowRightOutlined />
        </Variant>
      </Component>
      <Component name="InsuranceOutlined">
        <Variant>
          <InsuranceOutlined />
        </Variant>
      </Component>
      <Component name="InteractionOutlined">
        <Variant>
          <InteractionOutlined />
        </Variant>
      </Component>
      <Component name="KeyOutlined">
        <Variant>
          <KeyOutlined />
        </Variant>
      </Component>
      <Component name="LaptopOutlined">
        <Variant>
          <LaptopOutlined />
        </Variant>
      </Component>
      <Component name="LayoutOutlined">
        <Variant>
          <LayoutOutlined />
        </Variant>
      </Component>
      <Component name="LikeOutlined">
        <Variant>
          <LikeOutlined />
        </Variant>
      </Component>
      <Component name="LineOutlined">
        <Variant>
          <LineOutlined />
        </Variant>
      </Component>
      <Component name="LinkOutlined">
        <Variant>
          <LinkOutlined />
        </Variant>
      </Component>
      <Component name="Loading3QuartersOutlined">
        <Variant>
          <Loading3QuartersOutlined />
        </Variant>
      </Component>
      <Component name="LoadingOutlined">
        <Variant>
          <LoadingOutlined />
        </Variant>
      </Component>
      <Component name="LockOutlined">
        <Variant>
          <LockOutlined />
        </Variant>
      </Component>
      <Component name="MacCommandOutlined">
        <Variant>
          <MacCommandOutlined />
        </Variant>
      </Component>
      <Component name="MailOutlined">
        <Variant>
          <MailOutlined />
        </Variant>
      </Component>
      <Component name="ManOutlined">
        <Variant>
          <ManOutlined />
        </Variant>
      </Component>
      <Component name="MedicineBoxOutlined">
        <Variant>
          <MedicineBoxOutlined />
        </Variant>
      </Component>
      <Component name="MehOutlined">
        <Variant>
          <MehOutlined />
        </Variant>
      </Component>
      <Component name="MenuOutlined">
        <Variant>
          <MenuOutlined />
        </Variant>
      </Component>
      <Component name="MergeCellsOutlined">
        <Variant>
          <MergeCellsOutlined />
        </Variant>
      </Component>
      <Component name="MessageOutlined">
        <Variant>
          <MessageOutlined />
        </Variant>
      </Component>
      <Component name="MobileOutlined">
        <Variant>
          <MobileOutlined />
        </Variant>
      </Component>
      <Component name="MoneyCollectOutlined">
        <Variant>
          <MoneyCollectOutlined />
        </Variant>
      </Component>
      <Component name="MonitorOutlined">
        <Variant>
          <MonitorOutlined />
        </Variant>
      </Component>
      <Component name="MoreOutlined">
        <Variant>
          <MoreOutlined />
        </Variant>
      </Component>
      <Component name="NodeCollapseOutlined">
        <Variant>
          <NodeCollapseOutlined />
        </Variant>
      </Component>
      <Component name="NodeExpandOutlined">
        <Variant>
          <NodeExpandOutlined />
        </Variant>
      </Component>
      <Component name="NodeIndexOutlined">
        <Variant>
          <NodeIndexOutlined />
        </Variant>
      </Component>
      <Component name="NotificationOutlined">
        <Variant>
          <NotificationOutlined />
        </Variant>
      </Component>
      <Component name="NumberOutlined">
        <Variant>
          <NumberOutlined />
        </Variant>
      </Component>
      <Component name="OneToOneOutlined">
        <Variant>
          <OneToOneOutlined />
        </Variant>
      </Component>
      <Component name="PartitionOutlined">
        <Variant>
          <PartitionOutlined />
        </Variant>
      </Component>
      <Component name="PaperClipOutlined">
        <Variant>
          <PaperClipOutlined />
        </Variant>
      </Component>
      <Component name="PayCircleOutlined">
        <Variant>
          <PayCircleOutlined />
        </Variant>
      </Component>
      <Component name="PercentageOutlined">
        <Variant>
          <PercentageOutlined />
        </Variant>
      </Component>
      <Component name="PhoneOutlined">
        <Variant>
          <PhoneOutlined />
        </Variant>
      </Component>
      <Component name="PictureOutlined">
        <Variant>
          <PictureOutlined />
        </Variant>
      </Component>
      <Component name="PlaySquareOutlined">
        <Variant>
          <PlaySquareOutlined />
        </Variant>
      </Component>
      <Component name="PoundCircleOutlined">
        <Variant>
          <PoundCircleOutlined />
        </Variant>
      </Component>
      <Component name="PoweroffOutlined">
        <Variant>
          <PoweroffOutlined />
        </Variant>
      </Component>
      <Component name="PrinterOutlined">
        <Variant>
          <PrinterOutlined />
        </Variant>
      </Component>
      <Component name="ProfileOutlined">
        <Variant>
          <ProfileOutlined />
        </Variant>
      </Component>
      <Component name="ProjectOutlined">
        <Variant>
          <ProjectOutlined />
        </Variant>
      </Component>
      <Component name="PropertySafetyOutlined">
        <Variant>
          <PropertySafetyOutlined />
        </Variant>
      </Component>
      <Component name="PullRequestOutlined">
        <Variant>
          <PullRequestOutlined />
        </Variant>
      </Component>
      <Component name="PushpinOutlined">
        <Variant>
          <PushpinOutlined />
        </Variant>
      </Component>
      <Component name="QrcodeOutlined">
        <Variant>
          <QrcodeOutlined />
        </Variant>
      </Component>
      <Component name="ReadOutlined">
        <Variant>
          <ReadOutlined />
        </Variant>
      </Component>
      <Component name="ReconciliationOutlined">
        <Variant>
          <ReconciliationOutlined />
        </Variant>
      </Component>
      <Component name="RedEnvelopeOutlined">
        <Variant>
          <RedEnvelopeOutlined />
        </Variant>
      </Component>
      <Component name="ReloadOutlined">
        <Variant>
          <ReloadOutlined />
        </Variant>
      </Component>
      <Component name="RestOutlined">
        <Variant>
          <RestOutlined />
        </Variant>
      </Component>
      <Component name="RobotOutlined">
        <Variant>
          <RobotOutlined />
        </Variant>
      </Component>
      <Component name="RocketOutlined">
        <Variant>
          <RocketOutlined />
        </Variant>
      </Component>
      <Component name="RotateLeftOutlined">
        <Variant>
          <RotateLeftOutlined />
        </Variant>
      </Component>
      <Component name="RotateRightOutlined">
        <Variant>
          <RotateRightOutlined />
        </Variant>
      </Component>
      <Component name="SafetyCertificateOutlined">
        <Variant>
          <SafetyCertificateOutlined />
        </Variant>
      </Component>
      <Component name="SafetyOutlined">
        <Variant>
          <SafetyOutlined />
        </Variant>
      </Component>
      <Component name="SaveOutlined">
        <Variant>
          <SaveOutlined />
        </Variant>
      </Component>
      <Component name="ScanOutlined">
        <Variant>
          <ScanOutlined />
        </Variant>
      </Component>
      <Component name="ScheduleOutlined">
        <Variant>
          <ScheduleOutlined />
        </Variant>
      </Component>
      <Component name="SearchOutlined">
        <Variant>
          <SearchOutlined />
        </Variant>
      </Component>
      <Component name="SecurityScanOutlined">
        <Variant>
          <SecurityScanOutlined />
        </Variant>
      </Component>
      <Component name="SelectOutlined">
        <Variant>
          <SelectOutlined />
        </Variant>
      </Component>
      <Component name="SendOutlined">
        <Variant>
          <SendOutlined />
        </Variant>
      </Component>
      <Component name="SettingOutlined">
        <Variant>
          <SettingOutlined />
        </Variant>
      </Component>
      <Component name="ShakeOutlined">
        <Variant>
          <ShakeOutlined />
        </Variant>
      </Component>
      <Component name="ShareAltOutlined">
        <Variant>
          <ShareAltOutlined />
        </Variant>
      </Component>
      <Component name="ShopOutlined">
        <Variant>
          <ShopOutlined />
        </Variant>
      </Component>
      <Component name="ShoppingCartOutlined">
        <Variant>
          <ShoppingCartOutlined />
        </Variant>
      </Component>
      <Component name="ShoppingOutlined">
        <Variant>
          <ShoppingOutlined />
        </Variant>
      </Component>
      <Component name="SisternodeOutlined">
        <Variant>
          <SisternodeOutlined />
        </Variant>
      </Component>
      <Component name="SkinOutlined">
        <Variant>
          <SkinOutlined />
        </Variant>
      </Component>
      <Component name="SmileOutlined">
        <Variant>
          <SmileOutlined />
        </Variant>
      </Component>
      <Component name="SolutionOutlined">
        <Variant>
          <SolutionOutlined />
        </Variant>
      </Component>
      <Component name="SoundOutlined">
        <Variant>
          <SoundOutlined />
        </Variant>
      </Component>
      <Component name="SplitCellsOutlined">
        <Variant>
          <SplitCellsOutlined />
        </Variant>
      </Component>
      <Component name="StarOutlined">
        <Variant>
          <StarOutlined />
        </Variant>
      </Component>
      <Component name="SubnodeOutlined">
        <Variant>
          <SubnodeOutlined />
        </Variant>
      </Component>
      <Component name="SwitcherOutlined">
        <Variant>
          <SwitcherOutlined />
        </Variant>
      </Component>
      <Component name="SyncOutlined">
        <Variant>
          <SyncOutlined />
        </Variant>
      </Component>
      <Component name="TableOutlined">
        <Variant>
          <TableOutlined />
        </Variant>
      </Component>
      <Component name="TableOutlined">
        <Variant>
          <TabletOutlined />
        </Variant>
      </Component>
      <Component name="TagOutlined">
        <Variant>
          <TagOutlined />
        </Variant>
      </Component>
      <Component name="TagsOutlined">
        <Variant>
          <TagsOutlined />
        </Variant>
      </Component>
      <Component name="TeamOutlined">
        <Variant>
          <TeamOutlined />
        </Variant>
      </Component>
      <Component name="ThunderboltOutlined">
        <Variant>
          <ThunderboltOutlined />
        </Variant>
      </Component>
      <Component name="ToTopOutlined">
        <Variant>
          <ToTopOutlined />
        </Variant>
      </Component>
      <Component name="ToolOutlined">
        <Variant>
          <ToolOutlined />
        </Variant>
      </Component>
      <Component name="TrademarkCircleOutlined">
        <Variant>
          <TrademarkCircleOutlined />
        </Variant>
      </Component>
      <Component name="TrademarkOutlined">
        <Variant>
          <TrademarkOutlined />
        </Variant>
      </Component>
      <Component name="TransactionOutlined">
        <Variant>
          <TransactionOutlined />
        </Variant>
      </Component>
      <Component name="TranslationOutlined">
        <Variant>
          <TranslationOutlined />
        </Variant>
      </Component>
      <Component name="TranslationOutlined">
        <Variant>
          <TrophyOutlined />
        </Variant>
      </Component>
      <Component name="UngroupOutlined">
        <Variant>
          <UngroupOutlined />
        </Variant>
      </Component>
      <Component name="UnlockOutlined">
        <Variant>
          <UnlockOutlined />
        </Variant>
      </Component>
      <Component name="UploadOutlined">
        <Variant>
          <UploadOutlined />
        </Variant>
      </Component>
      <Component name="UsbOutlined">
        <Variant>
          <UsbOutlined />
        </Variant>
      </Component>
      <Component name="UserAddOutlined">
        <Variant>
          <UserAddOutlined />
        </Variant>
      </Component>
      <Component name="UserDeleteOutlined">
        <Variant>
          <UserDeleteOutlined />
        </Variant>
      </Component>
      <Component name="UserOutlined">
        <Variant>
          <UserOutlined />
        </Variant>
      </Component>
      <Component name="UserSwitchOutlined">
        <Variant>
          <UserSwitchOutlined />
        </Variant>
      </Component>
      <Component name="UsergroupAddOutlined">
        <Variant>
          <UsergroupAddOutlined />
        </Variant>
      </Component>
      <Component name="UsergroupDeleteOutlined">
        <Variant>
          <UsergroupDeleteOutlined />
        </Variant>
      </Component>
      <Component name="VerifiedOutlined">
        <Variant>
          <VerifiedOutlined />
        </Variant>
      </Component>
      <Component name="VideoCameraAddOutlined">
        <Variant>
          <VideoCameraAddOutlined />
        </Variant>
      </Component>
      <Component name="VideoCameraOutlined">
        <Variant>
          <VideoCameraOutlined />
        </Variant>
      </Component>
      <Component name="WalletOutlined">
        <Variant>
          <WalletOutlined />
        </Variant>
      </Component>
      <Component name="WhatsAppOutlined">
        <Variant>
          <WhatsAppOutlined />
        </Variant>
      </Component>
      <Component name="WifiOutlined">
        <Variant>
          <WifiOutlined />
        </Variant>
      </Component>
      <Component name="WomanOutlined">
        <Variant>
          <WomanOutlined />
        </Variant>
      </Component>
      <Component name="StepBackwardFilled">
        <Variant>
          <StepBackwardFilled />
        </Variant>
      </Component>
      <Component name="StepForwardFilled">
        <Variant>
          <StepForwardFilled />
        </Variant>
      </Component>
      <Component name="FastBackwardFilled">
        <Variant>
          <FastBackwardFilled />
        </Variant>
      </Component>
      <Component name="FastForwardFilled">
        <Variant>
          <FastForwardFilled />
        </Variant>
      </Component>
      <Component name="CaretUpFilled">
        <Variant>
          <CaretUpFilled />
        </Variant>
      </Component>
      <Component name="CaretDownFilled">
        <Variant>
          <CaretDownFilled />
        </Variant>
      </Component>
      <Component name="CaretLeftFilled">
        <Variant>
          <CaretLeftFilled />
        </Variant>
      </Component>
      <Component name="CaretRightFilled">
        <Variant>
          <CaretRightFilled />
        </Variant>
      </Component>
      <Component name="UpCircleFilled">
        <Variant>
          <UpCircleFilled />
        </Variant>
      </Component>
      <Component name="DownCircleFilled">
        <Variant>
          <DownCircleFilled />
        </Variant>
      </Component>
      <Component name="LeftCircleFilled">
        <Variant>
          <LeftCircleFilled />
        </Variant>
      </Component>
      <Component name="RightCircleFilled">
        <Variant>
          <RightCircleFilled />
        </Variant>
      </Component>
      <Component name="ForwardFilled">
        <Variant>
          <ForwardFilled />
        </Variant>
      </Component>
      <Component name="BackwardFilled">
        <Variant>
          <BackwardFilled />
        </Variant>
      </Component>
      <Component name="PlayCircleFilled">
        <Variant>
          <PlayCircleFilled />
        </Variant>
      </Component>
      <Component name="UpSquareFilled">
        <Variant>
          <UpSquareFilled />
        </Variant>
      </Component>
      <Component name="DownSquareFilled">
        <Variant>
          <DownSquareFilled />
        </Variant>
      </Component>
      <Component name="LeftSquareFilled">
        <Variant>
          <LeftSquareFilled />
        </Variant>
      </Component>
      <Component name="RightSquareFilled">
        <Variant>
          <RightSquareFilled />
        </Variant>
      </Component>
      <Component name="QuestionCircleFilled">
        <Variant>
          <QuestionCircleFilled />
        </Variant>
      </Component>
      <Component name="PlusCircleFilled">
        <Variant>
          <PlusCircleFilled />
        </Variant>
      </Component>
      <Component name="PauseCircleFilled">
        <Variant>
          <PauseCircleFilled />
        </Variant>
      </Component>
      <Component name="MinusCircleFilled">
        <Variant>
          <MinusCircleFilled />
        </Variant>
      </Component>
      <Component name="PlusSquareFilled">
        <Variant>
          <PlusSquareFilled />
        </Variant>
      </Component>
      <Component name="MinusSquareFilled">
        <Variant>
          <MinusSquareFilled />
        </Variant>
      </Component>
      <Component name="InfoCircleFilled">
        <Variant>
          <InfoCircleFilled />
        </Variant>
      </Component>
      <Component name="ExclamationCircleFilled">
        <Variant>
          <ExclamationCircleFilled />
        </Variant>
      </Component>
      <Component name="CloseCircleFilled">
        <Variant>
          <CloseCircleFilled />
        </Variant>
      </Component>
      <Component name="CloseSquareFilled">
        <Variant>
          <CloseSquareFilled />
        </Variant>
      </Component>
      <Component name="CheckCircleFilled">
        <Variant>
          <CheckCircleFilled />
        </Variant>
      </Component>
      <Component name="CheckSquareFilled">
        <Variant>
          <CheckSquareFilled />
        </Variant>
      </Component>
      <Component name="ClockCircleFilled">
        <Variant>
          <ClockCircleFilled />
        </Variant>
      </Component>
      <Component name="WarningFilled">
        <Variant>
          <WarningFilled />
        </Variant>
      </Component>
      <Component name="StopFilled">
        <Variant>
          <StopFilled />
        </Variant>
      </Component>
      <Component name="EditFilled">
        <Variant>
          <EditFilled />
        </Variant>
      </Component>
      <Component name="CopyFilled">
        <Variant>
          <CopyFilled />
        </Variant>
      </Component>
      <Component name="DeleteFilled">
        <Variant>
          <DeleteFilled />
        </Variant>
      </Component>
      <Component name="SnippetsFilled">
        <Variant>
          <SnippetsFilled />
        </Variant>
      </Component>
      <Component name="DiffFilled">
        <Variant>
          <DiffFilled />
        </Variant>
      </Component>
      <Component name="HighlightFilled">
        <Variant>
          <HighlightFilled />
        </Variant>
      </Component>
      <Component name="PieChartFilled">
        <Variant>
          <PieChartFilled />
        </Variant>
      </Component>
      <Component name="BoxPlotFilled">
        <Variant>
          <BoxPlotFilled />
        </Variant>
      </Component>
      <Component name="FundFilled">
        <Variant>
          <FundFilled />
        </Variant>
      </Component>
      <Component name="SlidersFilled">
        <Variant>
          <SlidersFilled />
        </Variant>
      </Component>
      <Component name="AndroidFilled">
        <Variant>
          <AndroidFilled />
        </Variant>
      </Component>
      <Component name="AppleFilled">
        <Variant>
          <AppleFilled />
        </Variant>
      </Component>
      <Component name="WindowsFilled">
        <Variant>
          <WindowsFilled />
        </Variant>
      </Component>
      <Component name="ChromeFilled">
        <Variant>
          <ChromeFilled />
        </Variant>
      </Component>
      <Component name="GithubFilled">
        <Variant>
          <GithubFilled />
        </Variant>
      </Component>
      <Component name="AliwangwangFilled">
        <Variant>
          <AliwangwangFilled />
        </Variant>
      </Component>
      <Component name="WeiboSquareFilled">
        <Variant>
          <WeiboSquareFilled />
        </Variant>
      </Component>
      <Component name="WeiboCircleFilled">
        <Variant>
          <WeiboCircleFilled />
        </Variant>
      </Component>
      <Component name="TaobaoCircleFilled">
        <Variant>
          <TaobaoCircleFilled />
        </Variant>
      </Component>
      <Component name="Html5Filled">
        <Variant>
          <Html5Filled />
        </Variant>
      </Component>
      <Component name="WechatFilled">
        <Variant>
          <WechatFilled />
        </Variant>
      </Component>
      <Component name="YoutubeFilled">
        <Variant>
          <YoutubeFilled />
        </Variant>
      </Component>
      <Component name="AlipayCircleFilled">
        <Variant>
          <AlipayCircleFilled />
        </Variant>
      </Component>
      <Component name="SkypeFilled">
        <Variant>
          <SkypeFilled />
        </Variant>
      </Component>
      <Component name="GitlabFilled">
        <Variant>
          <GitlabFilled />
        </Variant>
      </Component>
      <Component name="LinkedinFilled">
        <Variant>
          <LinkedinFilled />
        </Variant>
      </Component>
      <Component name="FacebookFilled">
        <Variant>
          <FacebookFilled />
        </Variant>
      </Component>
      <Component name="CodeSandboxCircleFilled">
        <Variant>
          <CodeSandboxCircleFilled />
        </Variant>
      </Component>
      <Component name="CodepenCircleFilled">
        <Variant>
          <CodepenCircleFilled />
        </Variant>
      </Component>
      <Component name="SlackSquareFilled">
        <Variant>
          <SlackSquareFilled />
        </Variant>
      </Component>
      <Component name="BehanceSquareFilled">
        <Variant>
          <BehanceSquareFilled />
        </Variant>
      </Component>
      <Component name="DribbbleSquareFilled">
        <Variant>
          <DribbbleSquareFilled />
        </Variant>
      </Component>
      <Component name="InstagramFilled">
        <Variant>
          <InstagramFilled />
        </Variant>
      </Component>
      <Component name="YuqueFilled">
        <Variant>
          <YuqueFilled />
        </Variant>
      </Component>
      <Component name="YahooFilled">
        <Variant>
          <YahooFilled />
        </Variant>
      </Component>
      <Component name="AccountBookFilled">
        <Variant>
          <AccountBookFilled />
        </Variant>
      </Component>
      <Component name="AlertFilled">
        <Variant>
          <AlertFilled />
        </Variant>
      </Component>
      <Component name="AlipaySquareFilled">
        <Variant>
          <AlipaySquareFilled />
        </Variant>
      </Component>
      <Component name="AmazonCircleFilled">
        <Variant>
          <AmazonCircleFilled />
        </Variant>
      </Component>
      <Component name="ApiFilled">
        <Variant>
          <ApiFilled />
        </Variant>
      </Component>
      <Component name="AppstoreFilled">
        <Variant>
          <AppstoreFilled />
        </Variant>
      </Component>
      <Component name="AudioFilled">
        <Variant>
          <AudioFilled />
        </Variant>
      </Component>
      <Component name="BankFilled">
        <Variant>
          <BankFilled />
        </Variant>
      </Component>
      <Component name="BehanceCircleFilled">
        <Variant>
          <BehanceCircleFilled />
        </Variant>
      </Component>
      <Component name="BellFilled">
        <Variant>
          <BellFilled />
        </Variant>
      </Component>
      <Component name="BookFilled">
        <Variant>
          <BookFilled />
        </Variant>
      </Component>
      <Component name="BugFilled">
        <Variant>
          <BugFilled />
        </Variant>
      </Component>
      <Component name="BuildFilled">
        <Variant>
          <BuildFilled />
        </Variant>
      </Component>
      <Component name="CalculatorFilled">
        <Variant>
          <CalculatorFilled />
        </Variant>
      </Component>
      <Component name="CalendarFilled">
        <Variant>
          <CalendarFilled />
        </Variant>
      </Component>
      <Component name="CameraFilled">
        <Variant>
          <CameraFilled />
        </Variant>
      </Component>
      <Component name="CarFilled">
        <Variant>
          <CarFilled />
        </Variant>
      </Component>
      <Component name="CarryOutFilled">
        <Variant>
          <CarryOutFilled />
        </Variant>
      </Component>
      <Component name="CiCircleFilled">
        <Variant>
          <CiCircleFilled />
        </Variant>
      </Component>
      <Component name="CloudFilled">
        <Variant>
          <CloudFilled />
        </Variant>
      </Component>
      <Component name="CodeFilled">
        <Variant>
          <CodeFilled />
        </Variant>
      </Component>
      <Component name="CodeSandboxSquareFilled">
        <Variant>
          <CodeSandboxSquareFilled />
        </Variant>
      </Component>
      <Component name="CodepenSquareFilled">
        <Variant>
          <CodepenSquareFilled />
        </Variant>
      </Component>
      <Component name="CompassFilled">
        <Variant>
          <CompassFilled />
        </Variant>
      </Component>
      <Component name="ContactsFilled">
        <Variant>
          <ContactsFilled />
        </Variant>
      </Component>
      <Component name="ContainerFilled">
        <Variant>
          <ContainerFilled />
        </Variant>
      </Component>
      <Component name="ContainerFilled">
        <Variant>
          <ControlFilled />
        </Variant>
      </Component>
      <Component name="CreditCardFilled">
        <Variant>
          <CreditCardFilled />
        </Variant>
      </Component>
      <Component name="CrownFilled">
        <Variant>
          <CrownFilled />
        </Variant>
      </Component>
      <Component name="CustomerServiceFilled">
        <Variant>
          <CustomerServiceFilled />
        </Variant>
      </Component>
      <Component name="DashboardFilled">
        <Variant>
          <DashboardFilled />
        </Variant>
      </Component>
      <Component name="DatabaseFilled">
        <Variant>
          <DatabaseFilled />
        </Variant>
      </Component>
      <Component name="DingtalkCircleFilled">
        <Variant>
          <DingtalkCircleFilled />
        </Variant>
      </Component>
      <Component name="DingtalkSquareFilled">
        <Variant>
          <DingtalkSquareFilled />
        </Variant>
      </Component>
      <Component name="DislikeFilled">
        <Variant>
          <DislikeFilled />
        </Variant>
      </Component>
      <Component name="DollarCircleFilled">
        <Variant>
          <DollarCircleFilled />
        </Variant>
      </Component>
      <Component name="DribbbleCircleFilled">
        <Variant>
          <DribbbleCircleFilled />
        </Variant>
      </Component>
      <Component name="DropboxCircleFilled">
        <Variant>
          <DropboxCircleFilled />
        </Variant>
      </Component>
      <Component name="DropboxSquareFilled">
        <Variant>
          <DropboxSquareFilled />
        </Variant>
      </Component>
      <Component name="EnvironmentFilled">
        <Variant>
          <EnvironmentFilled />
        </Variant>
      </Component>
      <Component name="EuroCircleFilled">
        <Variant>
          <EuroCircleFilled />
        </Variant>
      </Component>
      <Component name="ExperimentFilled">
        <Variant>
          <ExperimentFilled />
        </Variant>
      </Component>
      <Component name="EyeFilled">
        <Variant>
          <EyeFilled />
        </Variant>
      </Component>
      <Component name="EyeInvisibleFilled">
        <Variant>
          <EyeInvisibleFilled />
        </Variant>
      </Component>
      <Component name="FileAddFilled">
        <Variant>
          <FileAddFilled />
        </Variant>
      </Component>
      <Component name="FileExcelFilled">
        <Variant>
          <FileExcelFilled />
        </Variant>
      </Component>
      <Component name="FileExclamationFilled">
        <Variant>
          <FileExclamationFilled />
        </Variant>
      </Component>
      <Component name="FileFilled">
        <Variant>
          <FileFilled />
        </Variant>
      </Component>
      <Component name="FileImageFilled">
        <Variant>
          <FileImageFilled />
        </Variant>
      </Component>
      <Component name="FileMarkdownFilled">
        <Variant>
          <FileMarkdownFilled />
        </Variant>
      </Component>
      <Component name="FilePdfFilled">
        <Variant>
          <FilePdfFilled />
        </Variant>
      </Component>
      <Component name="FilePptFilled">
        <Variant>
          <FilePptFilled />
        </Variant>
      </Component>
      <Component name="FileTextFilled">
        <Variant>
          <FileTextFilled />
        </Variant>
      </Component>
      <Component name="FileUnknownFilled">
        <Variant>
          <FileUnknownFilled />
        </Variant>
      </Component>
      <Component name="FileWordFilled">
        <Variant>
          <FileWordFilled />
        </Variant>
      </Component>
      <Component name="FileZipFilled">
        <Variant>
          <FileZipFilled />
        </Variant>
      </Component>
      <Component name="FilterFilled">
        <Variant>
          <FilterFilled />
        </Variant>
      </Component>
      <Component name="FireFilled">
        <Variant>
          <FireFilled />
        </Variant>
      </Component>
      <Component name="FlagFilled">
        <Variant>
          <FlagFilled />
        </Variant>
      </Component>
      <Component name="FolderAddFilled">
        <Variant>
          <FolderAddFilled />
        </Variant>
      </Component>
      <Component name="FolderFilled">
        <Variant>
          <FolderFilled />
        </Variant>
      </Component>
      <Component name="FolderOpenFilled">
        <Variant>
          <FolderOpenFilled />
        </Variant>
      </Component>
      <Component name="FormatPainterFilled">
        <Variant>
          <FormatPainterFilled />
        </Variant>
      </Component>
      <Component name="FrownFilled">
        <Variant>
          <FrownFilled />
        </Variant>
      </Component>
      <Component name="FunnelPlotFilled">
        <Variant>
          <FunnelPlotFilled />
        </Variant>
      </Component>
      <Component name="GiftFilled">
        <Variant>
          <GiftFilled />
        </Variant>
      </Component>
      <Component name="GoldFilled">
        <Variant>
          <GoldFilled />
        </Variant>
      </Component>
      <Component name="GoldenFilled">
        <Variant>
          <GoldenFilled />
        </Variant>
      </Component>
      <Component name="GoogleCircleFilled">
        <Variant>
          <GoogleCircleFilled />
        </Variant>
      </Component>
      <Component name="GooglePlusCircleFilled">
        <Variant>
          <GooglePlusCircleFilled />
        </Variant>
      </Component>
      <Component name="GooglePlusSquareFilled">
        <Variant>
          <GooglePlusSquareFilled />
        </Variant>
      </Component>
      <Component name="GoogleSquareFilled">
        <Variant>
          <GoogleSquareFilled />
        </Variant>
      </Component>
      <Component name="HddFilled">
        <Variant>
          <HddFilled />
        </Variant>
      </Component>
      <Component name="HeartFilled">
        <Variant>
          <HeartFilled />
        </Variant>
      </Component>
      <Component name="HomeFilled">
        <Variant>
          <HomeFilled />
        </Variant>
      </Component>
      <Component name="HourglassFilled">
        <Variant>
          <HourglassFilled />
        </Variant>
      </Component>
      <Component name="IdcardFilled">
        <Variant>
          <IdcardFilled />
        </Variant>
      </Component>
      <Component name="IeCircleFilled">
        <Variant>
          <IeCircleFilled />
        </Variant>
      </Component>
      <Component name="IeSquareFilled">
        <Variant>
          <IeSquareFilled />
        </Variant>
      </Component>
      <Component name="InsuranceFilled">
        <Variant>
          <InsuranceFilled />
        </Variant>
      </Component>
      <Component name="InteractionFilled">
        <Variant>
          <InteractionFilled />
        </Variant>
      </Component>
      <Component name="LayoutFilled">
        <Variant>
          <LayoutFilled />
        </Variant>
      </Component>
      <Component name="LikeFilled">
        <Variant>
          <LikeFilled />
        </Variant>
      </Component>
      <Component name="LockFilled">
        <Variant>
          <LockFilled />
        </Variant>
      </Component>
      <Component name="MacCommandFilled">
        <Variant>
          <MacCommandFilled />
        </Variant>
      </Component>
      <Component name="MailFilled">
        <Variant>
          <MailFilled />
        </Variant>
      </Component>
      <Component name="MedicineBoxFilled">
        <Variant>
          <MedicineBoxFilled />
        </Variant>
      </Component>
      <Component name="MediumCircleFilled">
        <Variant>
          <MediumCircleFilled />
        </Variant>
      </Component>
      <Component name="MediumSquareFilled">
        <Variant>
          <MediumSquareFilled />
        </Variant>
      </Component>
      <Component name="MehFilled">
        <Variant>
          <MehFilled />
        </Variant>
      </Component>
      <Component name="MessageFilled">
        <Variant>
          <MessageFilled />
        </Variant>
      </Component>
      <Component name="MobileFilled">
        <Variant>
          <MobileFilled />
        </Variant>
      </Component>
      <Component name="MoneyCollectFilled">
        <Variant>
          <MoneyCollectFilled />
        </Variant>
      </Component>
      <Component name="NotificationFilled">
        <Variant>
          <NotificationFilled />
        </Variant>
      </Component>
      <Component name="PayCircleFilled">
        <Variant>
          <PayCircleFilled />
        </Variant>
      </Component>
      <Component name="PhoneFilled">
        <Variant>
          <PhoneFilled />
        </Variant>
      </Component>
      <Component name="PictureFilled">
        <Variant>
          <PictureFilled />
        </Variant>
      </Component>
      <Component name="PlaySquareFilled">
        <Variant>
          <PlaySquareFilled />
        </Variant>
      </Component>
      <Component name="PoundCircleFilled">
        <Variant>
          <PoundCircleFilled />
        </Variant>
      </Component>
      <Component name="PrinterFilled">
        <Variant>
          <PrinterFilled />
        </Variant>
      </Component>
      <Component name="ProfileFilled">
        <Variant>
          <ProfileFilled />
        </Variant>
      </Component>
      <Component name="ProjectFilled">
        <Variant>
          <ProjectFilled />
        </Variant>
      </Component>
      <Component name="PropertySafetyFilled">
        <Variant>
          <PropertySafetyFilled />
        </Variant>
      </Component>
      <Component name="PushpinFilled">
        <Variant>
          <PushpinFilled />
        </Variant>
      </Component>
      <Component name="QqCircleFilled">
        <Variant>
          <QqCircleFilled />
        </Variant>
      </Component>
      <Component name="QqSquareFilled">
        <Variant>
          <QqSquareFilled />
        </Variant>
      </Component>
      <Component name="ReadFilled">
        <Variant>
          <ReadFilled />
        </Variant>
      </Component>
      <Component name="ReconciliationFilled">
        <Variant>
          <ReconciliationFilled />
        </Variant>
      </Component>
      <Component name="RedEnvelopeFilled">
        <Variant>
          <RedEnvelopeFilled />
        </Variant>
      </Component>
      <Component name="RedditCircleFilled">
        <Variant>
          <RedditCircleFilled />
        </Variant>
      </Component>
      <Component name="RedditSquareFilled">
        <Variant>
          <RedditSquareFilled />
        </Variant>
      </Component>
      <Component name="RestFilled">
        <Variant>
          <RestFilled />
        </Variant>
      </Component>
      <Component name="RobotFilled">
        <Variant>
          <RobotFilled />
        </Variant>
      </Component>
      <Component name="RocketFilled">
        <Variant>
          <RocketFilled />
        </Variant>
      </Component>
      <Component name="SafetyCertificateFilled">
        <Variant>
          <SafetyCertificateFilled />
        </Variant>
      </Component>
      <Component name="SaveFilled">
        <Variant>
          <SaveFilled />
        </Variant>
      </Component>
      <Component name="ScheduleFilled">
        <Variant>
          <ScheduleFilled />
        </Variant>
      </Component>
      <Component name="SecurityScanFilled">
        <Variant>
          <SecurityScanFilled />
        </Variant>
      </Component>
      <Component name="SettingFilled">
        <Variant>
          <SettingFilled />
        </Variant>
      </Component>
      <Component name="ShopFilled">
        <Variant>
          <ShopFilled />
        </Variant>
      </Component>
      <Component name="ShoppingFilled">
        <Variant>
          <ShoppingFilled />
        </Variant>
      </Component>
      <Component name="SignalFilled">
        <Variant>
          <SignalFilled />
        </Variant>
      </Component>
      <Component name="SketchCircleFilled">
        <Variant>
          <SketchCircleFilled />
        </Variant>
      </Component>
      <Component name="SketchSquareFilled">
        <Variant>
          <SketchSquareFilled />
        </Variant>
      </Component>
      <Component name="SkinFilled">
        <Variant>
          <SkinFilled />
        </Variant>
      </Component>
      <Component name="SlackCircleFilled">
        <Variant>
          <SlackCircleFilled />
        </Variant>
      </Component>
      <Component name="SmileFilled">
        <Variant>
          <SmileFilled />
        </Variant>
      </Component>
      <Component name="SoundFilled">
        <Variant>
          <SoundFilled />
        </Variant>
      </Component>
      <Component name="StarFilled">
        <Variant>
          <StarFilled />
        </Variant>
      </Component>
      <Component name="SwitcherFilled">
        <Variant>
          <SwitcherFilled />
        </Variant>
      </Component>
      <Component name="TabletFilled">
        <Variant>
          <TabletFilled />
        </Variant>
      </Component>
      <Component name="TagFilled">
        <Variant>
          <TagFilled />
        </Variant>
      </Component>
      <Component name="TagsFilled">
        <Variant>
          <TagsFilled />
        </Variant>
      </Component>
      <Component name="TaobaoSquareFilled">
        <Variant>
          <TaobaoSquareFilled />
        </Variant>
      </Component>
      <Component name="ThunderboltFilled">
        <Variant>
          <ThunderboltFilled />
        </Variant>
      </Component>
      <Component name="ToolFilled">
        <Variant>
          <ToolFilled />
        </Variant>
      </Component>
      <Component name="TrademarkCircleFilled">
        <Variant>
          <TrademarkCircleFilled />
        </Variant>
      </Component>
      <Component name="TrophyFilled">
        <Variant>
          <TrophyFilled />
        </Variant>
      </Component>
      <Component name="TwitterCircleFilled">
        <Variant>
          <TwitterCircleFilled />
        </Variant>
      </Component>
      <Component name="TwitterSquareFilled">
        <Variant>
          <TwitterSquareFilled />
        </Variant>
      </Component>
      <Component name="UnlockFilled">
        <Variant>
          <UnlockFilled />
        </Variant>
      </Component>
      <Component name="UsbFilled">
        <Variant>
          <UsbFilled />
        </Variant>
      </Component>
      <Component name="VideoCameraFilled">
        <Variant>
          <VideoCameraFilled />
        </Variant>
      </Component>
      <Component name="WalletFilled">
        <Variant>
          <WalletFilled />
        </Variant>
      </Component>
      <Component name="ZhihuCircleFilled">
        <Variant>
          <ZhihuCircleFilled />
        </Variant>
      </Component>
      <Component name="ZhihuSquareFilled">
        <Variant>
          <ZhihuSquareFilled />
        </Variant>
      </Component>
      <Component name="UpCircleTwoTone">
        <Variant>
          <UpCircleTwoTone />
        </Variant>
      </Component>
      <Component name="DownCircleTwoTone">
        <Variant>
          <DownCircleTwoTone />
        </Variant>
      </Component>
      <Component name="LeftCircleTwoTone">
        <Variant>
          <LeftCircleTwoTone />
        </Variant>
      </Component>
      <Component name="RightCircleTwoTone">
        <Variant>
          <RightCircleTwoTone />
        </Variant>
      </Component>
      <Component name="PlayCircleTwoTone">
        <Variant>
          <PlayCircleTwoTone />
        </Variant>
      </Component>
      <Component name="UpSquareTwoTone">
        <Variant>
          <UpSquareTwoTone />
        </Variant>
      </Component>
      <Component name="DownSquareTwoTone">
        <Variant>
          <DownSquareTwoTone />
        </Variant>
      </Component>
      <Component name="LeftSquareTwoTone">
        <Variant>
          <LeftSquareTwoTone />
        </Variant>
      </Component>
      <Component name="LeftSquareTwoTone">
        <Variant>
          <RightSquareTwoTone />
        </Variant>
      </Component>
      <Component name="QuestionCircleTwoTone">
        <Variant>
          <QuestionCircleTwoTone />
        </Variant>
      </Component>
      <Component name="PlusCircleTwoTone">
        <Variant>
          <PlusCircleTwoTone />
        </Variant>
      </Component>
      <Component name="PauseCircleTwoTone">
        <Variant>
          <PauseCircleTwoTone />
        </Variant>
      </Component>
      <Component name="MinusCircleTwoTone">
        <Variant>
          <MinusCircleTwoTone />
        </Variant>
      </Component>
      <Component name="PlusSquareTwoTone">
        <Variant>
          <PlusSquareTwoTone />
        </Variant>
      </Component>
      <Component name="MinusSquareTwoTone">
        <Variant>
          <MinusSquareTwoTone />
        </Variant>
      </Component>
      <Component name="InfoCircleTwoTone">
        <Variant>
          <InfoCircleTwoTone />
        </Variant>
      </Component>
      <Component name="ExclamationCircleTwoTone">
        <Variant>
          <ExclamationCircleTwoTone />
        </Variant>
      </Component>
      <Component name="CloseCircleTwoTone">
        <Variant>
          <CloseCircleTwoTone />
        </Variant>
      </Component>
      <Component name="CloseSquareTwoTone">
        <Variant>
          <CloseSquareTwoTone />
        </Variant>
      </Component>
      <Component name="CheckCircleTwoTone">
        <Variant>
          <CheckCircleTwoTone />
        </Variant>
      </Component>
      <Component name="CheckSquareTwoTone">
        <Variant>
          <CheckSquareTwoTone />
        </Variant>
      </Component>
      <Component name="ClockCircleTwoTone">
        <Variant>
          <ClockCircleTwoTone />
        </Variant>
      </Component>
      <Component name="WarningTwoTone">
        <Variant>
          <WarningTwoTone />
        </Variant>
      </Component>
      <Component name="StopTwoTone">
        <Variant>
          <StopTwoTone />
        </Variant>
      </Component>
      <Component name="EditTwoTone">
        <Variant>
          <EditTwoTone />
        </Variant>
      </Component>
      <Component name="CopyTwoTone">
        <Variant>
          <CopyTwoTone />
        </Variant>
      </Component>
      <Component name="DeleteTwoTone">
        <Variant>
          <DeleteTwoTone />
        </Variant>
      </Component>
      <Component name="SnippetsTwoTone">
        <Variant>
          <SnippetsTwoTone />
        </Variant>
      </Component>
      <Component name="DiffTwoTone">
        <Variant>
          <DiffTwoTone />
        </Variant>
      </Component>
      <Component name="HighlightTwoTone">
        <Variant>
          <HighlightTwoTone />
        </Variant>
      </Component>
      <Component name="PieChartTwoTone">
        <Variant>
          <PieChartTwoTone />
        </Variant>
      </Component>
      <Component name="BoxPlotTwoTone">
        <Variant>
          <BoxPlotTwoTone />
        </Variant>
      </Component>
      <Component name="FundTwoTone">
        <Variant>
          <FundTwoTone />
        </Variant>
      </Component>
      <Component name="SlidersTwoTone">
        <Variant>
          <SlidersTwoTone />
        </Variant>
      </Component>
      <Component name="Html5TwoTone">
        <Variant>
          <Html5TwoTone />
        </Variant>
      </Component>
      <Component name="AccountBookTwoTone">
        <Variant>
          <AccountBookTwoTone />
        </Variant>
      </Component>
      <Component name="AlertTwoTone">
        <Variant>
          <AlertTwoTone />
        </Variant>
      </Component>
      <Component name="ApiTwoTone">
        <Variant>
          <ApiTwoTone />
        </Variant>
      </Component>
      <Component name="AppstoreTwoTone">
        <Variant>
          <AppstoreTwoTone />
        </Variant>
      </Component>
      <Component name="AudioTwoTone">
        <Variant>
          <AudioTwoTone />
        </Variant>
      </Component>
      <Component name="BankTwoTone">
        <Variant>
          <BankTwoTone />
        </Variant>
      </Component>
      <Component name="BellTwoTone">
        <Variant>
          <BellTwoTone />
        </Variant>
      </Component>
      <Component name="BookTwoTone">
        <Variant>
          <BookTwoTone />
        </Variant>
      </Component>
      <Component name="BugTwoTone">
        <Variant>
          <BugTwoTone />
        </Variant>
      </Component>
      <Component name="BuildTwoTone">
        <Variant>
          <BuildTwoTone />
        </Variant>
      </Component>
      <Component name="BulbTwoTone">
        <Variant>
          <BulbTwoTone />
        </Variant>
      </Component>
      <Component name="CalculatorTwoTone">
        <Variant>
          <CalculatorTwoTone />
        </Variant>
      </Component>
      <Component name="CalendarTwoTone">
        <Variant>
          <CalendarTwoTone />
        </Variant>
      </Component>
      <Component name="CameraTwoTone">
        <Variant>
          <CameraTwoTone />
        </Variant>
      </Component>
      <Component name="CarTwoTone">
        <Variant>
          <CarTwoTone />
        </Variant>
      </Component>
      <Component name="CarryOutTwoTone">
        <Variant>
          <CarryOutTwoTone />
        </Variant>
      </Component>
      <Component name="CiCircleTwoTone">
        <Variant>
          <CiCircleTwoTone />
        </Variant>
      </Component>
      <Component name="CiTwoTone">
        <Variant>
          <CiTwoTone />
        </Variant>
      </Component>
      <Component name="CloudTwoTone">
        <Variant>
          <CloudTwoTone />
        </Variant>
      </Component>
      <Component name="CreditCardTwoTone">
        <Variant>
          <CreditCardTwoTone />
        </Variant>
      </Component>
      <Component name="CrownTwoTone">
        <Variant>
          <CrownTwoTone />
        </Variant>
      </Component>
      <Component name="CustomerServiceTwoTone">
        <Variant>
          <CustomerServiceTwoTone />
        </Variant>
      </Component>
      <Component name="DashboardTwoTone">
        <Variant>
          <DashboardTwoTone />
        </Variant>
      </Component>
      <Component name="DatabaseTwoTone">
        <Variant>
          <DatabaseTwoTone />
        </Variant>
      </Component>
      <Component name="CodeTwoTone">
        <Variant>
          <CodeTwoTone />
        </Variant>
      </Component>
      <Component name="CompassTwoTone">
        <Variant>
          <CompassTwoTone />
        </Variant>
      </Component>
      <Component name="ContactsTwoTone">
        <Variant>
          <ContactsTwoTone />
        </Variant>
      </Component>
      <Component name="ContainerTwoTone">
        <Variant>
          <ContainerTwoTone />
        </Variant>
      </Component>
      <Component name="ControlTwoTone">
        <Variant>
          <ControlTwoTone />
        </Variant>
      </Component>
      <Component name="DislikeTwoTone">
        <Variant>
          <DislikeTwoTone />
        </Variant>
      </Component>
      <Component name="DollarCircleTwoTone">
        <Variant>
          <DollarCircleTwoTone />
        </Variant>
      </Component>
      <Component name="DollarTwoTone">
        <Variant>
          <DollarTwoTone />
        </Variant>
      </Component>
      <Component name="EnvironmentTwoTone">
        <Variant>
          <EnvironmentTwoTone />
        </Variant>
      </Component>
      <Component name="EuroCircleTwoTone">
        <Variant>
          <EuroCircleTwoTone />
        </Variant>
      </Component>
      <Component name="EuroTwoTone">
        <Variant>
          <EuroTwoTone />
        </Variant>
      </Component>
      <Component name="ExperimentTwoTone">
        <Variant>
          <ExperimentTwoTone />
        </Variant>
      </Component>
      <Component name="EyeTwoTone">
        <Variant>
          <EyeTwoTone />
        </Variant>
      </Component>
      <Component name="EyeInvisibleTwoTone">
        <Variant>
          <EyeInvisibleTwoTone />
        </Variant>
      </Component>
      <Component name="FileAddTwoTone">
        <Variant>
          <FileAddTwoTone />
        </Variant>
      </Component>
      <Component name="FileExcelTwoTone">
        <Variant>
          <FileExcelTwoTone />
        </Variant>
      </Component>
      <Component name="FileExcelTwoTone">
        <Variant>
          <FileExclamationTwoTone />
        </Variant>
      </Component>
      <Component name="FileTwoTone">
        <Variant>
          <FileTwoTone />
        </Variant>
      </Component>
      <Component name="FileImageTwoTone">
        <Variant>
          <FileImageTwoTone />
        </Variant>
      </Component>
      <Component name="FileMarkdownTwoTone">
        <Variant>
          <FileMarkdownTwoTone />
        </Variant>
      </Component>
      <Component name="FilePdfTwoTone">
        <Variant>
          <FilePdfTwoTone />
        </Variant>
      </Component>
      <Component name="FilePptTwoTone">
        <Variant>
          <FilePptTwoTone />
        </Variant>
      </Component>
      <Component name="FileTextTwoTone">
        <Variant>
          <FileTextTwoTone />
        </Variant>
      </Component>
      <Component name="FileUnknownTwoTone">
        <Variant>
          <FileUnknownTwoTone />
        </Variant>
      </Component>
      <Component name="FileWordTwoTone">
        <Variant>
          <FileWordTwoTone />
        </Variant>
      </Component>
      <Component name="FileZipTwoTone">
        <Variant>
          <FileZipTwoTone />
        </Variant>
      </Component>
      <Component name="FilterTwoTone">
        <Variant>
          <FilterTwoTone />
        </Variant>
      </Component>
      <Component name="FireTwoTone">
        <Variant>
          <FireTwoTone />
        </Variant>
      </Component>
      <Component name="FlagTwoTone">
        <Variant>
          <FlagTwoTone />
        </Variant>
      </Component>
      <Component name="FolderAddTwoTone">
        <Variant>
          <FolderAddTwoTone />
        </Variant>
      </Component>
      <Component name="FolderTwoTone">
        <Variant>
          <FolderTwoTone />
        </Variant>
      </Component>
      <Component name="FolderOpenTwoTone">
        <Variant>
          <FolderOpenTwoTone />
        </Variant>
      </Component>
      <Component name="FrownTwoTone">
        <Variant>
          <FrownTwoTone />
        </Variant>
      </Component>
      <Component name="FunnelPlotTwoTone">
        <Variant>
          <FunnelPlotTwoTone />
        </Variant>
      </Component>
      <Component name="GiftTwoTone">
        <Variant>
          <GiftTwoTone />
        </Variant>
      </Component>
      <Component name="GoldTwoTone">
        <Variant>
          <GoldTwoTone />
        </Variant>
      </Component>
      <Component name="HddTwoTone">
        <Variant>
          <HddTwoTone />
        </Variant>
      </Component>
      <Component name="HeartTwoTone">
        <Variant>
          <HeartTwoTone />
        </Variant>
      </Component>
      <Component name="HomeTwoTone">
        <Variant>
          <HomeTwoTone />
        </Variant>
      </Component>
      <Component name="HourglassTwoTone">
        <Variant>
          <HourglassTwoTone />
        </Variant>
      </Component>
      <Component name="IdcardTwoTone">
        <Variant>
          <IdcardTwoTone />
        </Variant>
      </Component>
      <Component name="InsuranceTwoTone">
        <Variant>
          <InsuranceTwoTone />
        </Variant>
      </Component>
      <Component name="InteractionTwoTone">
        <Variant>
          <InteractionTwoTone />
        </Variant>
      </Component>
      <Component name="LayoutTwoTone">
        <Variant>
          <LayoutTwoTone />
        </Variant>
      </Component>
      <Component name="LikeTwoTone">
        <Variant>
          <LikeTwoTone />
        </Variant>
      </Component>
      <Component name="LockTwoTone">
        <Variant>
          <LockTwoTone />
        </Variant>
      </Component>
      <Component name="MailTwoTone">
        <Variant>
          <MailTwoTone />
        </Variant>
      </Component>
      <Component name="MedicineBoxTwoTone">
        <Variant>
          <MedicineBoxTwoTone />
        </Variant>
      </Component>
      <Component name="MehTwoTone">
        <Variant>
          <MehTwoTone />
        </Variant>
      </Component>
      <Component name="MessageTwoTone">
        <Variant>
          <MessageTwoTone />
        </Variant>
      </Component>
      <Component name="MobileTwoTone">
        <Variant>
          <MobileTwoTone />
        </Variant>
      </Component>
      <Component name="MoneyCollectTwoTone">
        <Variant>
          <MoneyCollectTwoTone />
        </Variant>
      </Component>
      <Component name="NotificationTwoTone">
        <Variant>
          <NotificationTwoTone />
        </Variant>
      </Component>
      <Component name="PhoneTwoTone">
        <Variant>
          <PhoneTwoTone />
        </Variant>
      </Component>
      <Component name="PictureTwoTone">
        <Variant>
          <PictureTwoTone />
        </Variant>
      </Component>
      <Component name="PlaySquareTwoTone">
        <Variant>
          <PlaySquareTwoTone />
        </Variant>
      </Component>
      <Component name="PoundCircleTwoTone">
        <Variant>
          <PoundCircleTwoTone />
        </Variant>
      </Component>
      <Component name="PrinterTwoTone">
        <Variant>
          <PrinterTwoTone />
        </Variant>
      </Component>
      <Component name="ProfileTwoTone">
        <Variant>
          <ProfileTwoTone />
        </Variant>
      </Component>
      <Component name="ProjectTwoTone">
        <Variant>
          <ProjectTwoTone />
        </Variant>
      </Component>
      <Component name="PropertySafetyTwoTone">
        <Variant>
          <PropertySafetyTwoTone />
        </Variant>
      </Component>
      <Component name="PushpinTwoTone">
        <Variant>
          <PushpinTwoTone />
        </Variant>
      </Component>
      <Component name="ReconciliationTwoTone">
        <Variant>
          <ReconciliationTwoTone />
        </Variant>
      </Component>
      <Component name="RedEnvelopeTwoTone">
        <Variant>
          <RedEnvelopeTwoTone />
        </Variant>
      </Component>
      <Component name="RestTwoTone">
        <Variant>
          <RestTwoTone />
        </Variant>
      </Component>
      <Component name="RocketTwoTone">
        <Variant>
          <RocketTwoTone />
        </Variant>
      </Component>
      <Component name="SafetyCertificateTwoTone">
        <Variant>
          <SafetyCertificateTwoTone />
        </Variant>
      </Component>
      <Component name="SaveTwoTone">
        <Variant>
          <SaveTwoTone />
        </Variant>
      </Component>
      <Component name="ScheduleTwoTone">
        <Variant>
          <ScheduleTwoTone />
        </Variant>
      </Component>
      <Component name="SecurityScanTwoTone">
        <Variant>
          <SecurityScanTwoTone />
        </Variant>
      </Component>
      <Component name="SettingTwoTone">
        <Variant>
          <SettingTwoTone />
        </Variant>
      </Component>
      <Component name="ShopTwoTone">
        <Variant>
          <ShopTwoTone />
        </Variant>
      </Component>
      <Component name="ShoppingTwoTone">
        <Variant>
          <ShoppingTwoTone />
        </Variant>
      </Component>
      <Component name="SkinTwoTone">
        <Variant>
          <SkinTwoTone />
        </Variant>
      </Component>
      <Component name="SmileTwoTone">
        <Variant>
          <SmileTwoTone />
        </Variant>
      </Component>
      <Component name="SoundTwoTone">
        <Variant>
          <SoundTwoTone />
        </Variant>
      </Component>
      <Component name="StarTwoTone">
        <Variant>
          <StarTwoTone />
        </Variant>
      </Component>
      <Component name="SwitcherTwoTone">
        <Variant>
          <SwitcherTwoTone />
        </Variant>
      </Component>
      <Component name="TabletTwoTone">
        <Variant>
          <TabletTwoTone />
        </Variant>
      </Component>
      <Component name="TagTwoTone">
        <Variant>
          <TagTwoTone />
        </Variant>
      </Component>
      <Component name="TagsTwoTone">
        <Variant>
          <TagsTwoTone />
        </Variant>
      </Component>
      <Component name="ThunderboltTwoTone">
        <Variant>
          <ThunderboltTwoTone />
        </Variant>
      </Component>
      <Component name="ToolTwoTone">
        <Variant>
          <ToolTwoTone />
        </Variant>
      </Component>
      <Component name="TrademarkCircleTwoTone">
        <Variant>
          <TrademarkCircleTwoTone />
        </Variant>
      </Component>
      <Component name="TrophyTwoTone">
        <Variant>
          <TrophyTwoTone />
        </Variant>
      </Component>
      <Component name="UnlockTwoTone">
        <Variant>
          <UnlockTwoTone />
        </Variant>
      </Component>
      <Component name="UsbTwoTone">
        <Variant>
          <UsbTwoTone />
        </Variant>
      </Component>
      <Component name="VideoCameraTwoTone">
        <Variant>
          <VideoCameraTwoTone />
        </Variant>
      </Component>
      <Component name="WalletTwoTone">
        <Variant>
          <WalletTwoTone />
        </Variant>
      </Component>
    </Category>
  </Palette>
);

export default palette;
