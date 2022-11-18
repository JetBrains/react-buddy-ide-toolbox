import React, {useRef} from 'react';
import {
  Category,
  Component,
  Variant,
  Palette,
} from '@react-buddy/ide-toolbox';
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Center,
  Checkbox,
  Circle,
  Container,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  PinInput,
  PinInputField,
  Radio,
  RadioGroup,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Square,
  Stack,
  Switch,
  Textarea,
  Text,
  Grid,
  GridItem,
  SimpleGrid,
  VStack,
  WrapItem,
  Wrap,
  Code,
  Divider,
  Kbd,
  UnorderedList,
  ListItem,
  OrderedList,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatGroup,
  StatArrow,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Td,
  Tr,
  Tbody,
  Th,
  Tfoot,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagCloseButton,
  Alert,
  AlertIcon,
  CircularProgress,
  CircularProgressLabel,
  Progress,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spinner,
  useToast,
  Heading,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogFooter,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Modal,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverArrow,
  PopoverBody,
  PopoverHeader,
  Tooltip,
  AccordionItem,
  AccordionButton,
  Accordion,
  AccordionIcon,
  AccordionPanel,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  VisuallyHidden,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link, LinkBox, LinkOverlay, Avatar, useDisclosure
} from "@chakra-ui/react";
import {AddIcon, CheckIcon, ChevronDownIcon, EmailIcon, ExternalLinkIcon, SearchIcon} from "@chakra-ui/icons";


const ChakraUIPalette = () => (
  <Palette embeddable>
    <Category name="Layout">
      <Component name="Box" docURL="https://chakra-ui.com/docs/components/box">
        <Variant>
          <Box bg='tomato' w='100%' p={4} color='white'>
            This is the Box
          </Box>
        </Variant>
      </Component>
      <Component name="Center" docURL="https://chakra-ui.com/docs/components/center">
        <Variant>
          <Center bg='tomato' w='100%' h='100px' color='white'>
            This is the Center
          </Center>
        </Variant>
      </Component>
      <Component name="Circle" docURL="https://chakra-ui.com/docs/components/center#square-and-circle">
        <Variant>
          <Circle size='40px' bg='tomato' color='white'>
            1
          </Circle>
        </Variant>
      </Component>
      <Component name="Square" docURL="https://chakra-ui.com/docs/components/center#square-and-circle">
        <Variant>
          <Square size='40px' bg='purple.700' color='white'>
            2
          </Square>
        </Variant>
      </Component>

      <Component name="Container" docURL="https://chakra-ui.com/docs/components/container">
        <Variant>
          <Container>
            There are many benefits to a joint design and development system. Not only
            does it bring benefits to the design team, but it also brings benefits to
            engineering teams. It makes sure that our experiences have a consistent look
            and feel, not just in our design specs, but in production
          </Container>
        </Variant>
      </Component>
      <Component name="Flex" docURL="https://chakra-ui.com/docs/components/flex">
        <Variant>
          <Flex>
            <Center w='100px' bg='green.500'>
              <Text>Box 1</Text>
            </Center>
            <Square bg='blue.500' size='150px'>
              <Text>Box 2</Text>
            </Square>
            <Box flex='1' bg='tomato'>
              <Text>Box 3</Text>
            </Box>
          </Flex>
        </Variant>
      </Component>
      <Component name="Grid" docURL="https://chakra-ui.com/docs/components/grid">
        <Variant>
          <Grid
            h='200px'
            w='100%'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={1} bg='tomato'/>
            <GridItem colSpan={2} bg='papayawhip'/>
            <GridItem colSpan={2} bg='papayawhip'/>
            <GridItem colSpan={4} bg='tomato'/>
          </Grid>
        </Variant>
      </Component>
      <Component name="SimpleGrid" docURL="https://chakra-ui.com/docs/components/simple-grid">
        <Variant>
          <SimpleGrid columns={2} spacing={10} w='100%'>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
          </SimpleGrid>
        </Variant>
      </Component>
      <Component name="HStack" docURL="https://chakra-ui.com/docs/components/stack#feature-cards-with-hstack-component">
        <Variant>
          <HStack spacing='24px'>
            <Box w='40px' h='40px' bg='green.100'>1</Box>
            <Box w='40px' h='40px' bg='green.100'>2</Box>
            <Box w='40px' h='40px' bg='green.100'>3</Box>
          </HStack>
        </Variant>
      </Component>
      <Component name="VStack" docURL="https://chakra-ui.com/docs/components/stack#stack-dividers">
        <Variant>
          <VStack spacing='24px'>
            <Box w='40px' h='40px' bg='green.100'>1</Box>
            <Box w='40px' h='40px' bg='green.100'>2</Box>
            <Box w='40px' h='40px' bg='green.100'>3</Box>
          </VStack>
        </Variant>
      </Component>
      <Component name="Wrap" docURL="https://chakra-ui.com/docs/components/wrap">
        <Variant>
          <Wrap>
            <WrapItem>
              <Center w='180px' h='80px' bg='red.200'>
                Box 1
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w='180px' h='80px' bg='green.200'>
                Box 2
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w='180px' h='80px' bg='tomato'>
                Box 3
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w='180px' h='80px' bg='blue.200'>
                Box 4
              </Center>
            </WrapItem>
          </Wrap>
        </Variant>
      </Component>
    </Category>
    <Category name="Forms">
      <Component name="Button" docURL="https://chakra-ui.com/docs/components/button">
        <Variant>
          <Button>Button</Button>
        </Variant>
        <Variant name="outline">
          <Button variant='outline'>Button</Button>
        </Variant>
        <Variant name="ghost">
          <Button variant='ghost'>Button</Button>
        </Variant>
        <Variant name="link">
          <Button variant='link'>Button</Button>
        </Variant>
        <Variant name="with icon">
          <Button leftIcon={<EmailIcon/>} colorScheme='teal' variant='solid'>Email</Button>
        </Variant>
        <Variant name="is loading">
          <Button
            isLoading
            loadingText='Submitting'
            colorScheme='teal'
            variant='outline'>Submit</Button>
        </Variant>
        <Variant name="large">
          <Button size='lg'>Button</Button>
        </Variant>
        <Variant name="small">
          <Button size='sm'>Button</Button>
        </Variant>
        <Variant name="extra small">
          <Button size='xs'>Button</Button>
        </Variant>
        <Variant name="button group">
          <ButtonGroup variant='outline' spacing='6'>
            <Button colorScheme='blue'>Save</Button>
            <Button>Cancel</Button>
          </ButtonGroup>
        </Variant>
      </Component>
      <Component name="Checkbox" docURL="https://chakra-ui.com/docs/components/checkbox">
        <Variant>
          <Checkbox defaultChecked>Checkbox</Checkbox>
        </Variant>
        <Variant name="small">
          <Checkbox size='sm' colorScheme='red'>
            Checkbox
          </Checkbox>
        </Variant>
        <Variant name="large">
          <Checkbox size='lg' colorScheme='orange' defaultChecked>
            Checkbox
          </Checkbox>
        </Variant>
      </Component>
      <Component name="Editable" docURL="https://chakra-ui.com/docs/components/editable">
        <Variant name="input">
          <Editable defaultValue='Take some chakra'>
            <EditablePreview/>
            <EditableInput/>
          </Editable>
        </Variant>
        <Variant name="textarea">
          <Editable defaultValue='Take some chakra'>
            <EditablePreview/>
            <EditableTextarea/>
          </Editable>
        </Variant>
      </Component>
      <Component name="FormControl" docURL="https://chakra-ui.com/docs/components/form-control" subComponents={[<FormLabel/>, <FormHelperText/>]}>
        <Variant>
          <FormControl>
            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input id='email' type='email'/>
            <FormHelperText>We&apos;ll never share your email.</FormHelperText>
          </FormControl>
        </Variant>
      </Component>
      <Component name="IconButton" docURL="https://chakra-ui.com/docs/components/icon-button">
        <Variant>
          <IconButton aria-label='Search database' icon={<SearchIcon/>}/>
        </Variant>
      </Component>
      <Component name="Input" docURL="https://chakra-ui.com/docs/components/input">
        <Variant>
          <Input placeholder='Basic usage'/>
        </Variant>
        <Variant name="outline">
          <Input variant='outline' placeholder='Outline'/>
        </Variant>
        <Variant name="filled">
          <Input variant='filled' placeholder='Filled'/>
        </Variant>
        <Variant name="flushed">
          <Input variant='flushed' placeholder='Flushed'/>
        </Variant>
        <Variant name="unstyled">
          <Input variant='unstyled' placeholder='Unstyled'/>
        </Variant>
        <Variant name="password">
          <Input pr='4.5rem' type='password' placeholder='Enter password'/>
        </Variant>
      </Component>
      <Component name="NumberInput" docURL="https://chakra-ui.com/docs/components/number-input">
        <Variant>
          <NumberInput step={5} defaultValue={15} min={10} max={30}>
            <NumberInputField/>
            <NumberInputStepper>
              <NumberIncrementStepper/>
              <NumberDecrementStepper/>
            </NumberInputStepper>
          </NumberInput>
        </Variant>
      </Component>
      <Component name="PinInput" docURL="https://chakra-ui.com/docs/components/pin-input">
        <Variant>
          <HStack>
            <PinInput>
              <PinInputField/>
              <PinInputField/>
              <PinInputField/>
              <PinInputField/>
            </PinInput>
          </HStack>
        </Variant>
      </Component>
      <Component name="RadioGroup" docURL="https://chakra-ui.com/docs/components/radio">
        <Variant>
          <RadioGroup>
            <Stack direction='row'>
              <Radio value='1'>First</Radio>
              <Radio value='2'>Second</Radio>
              <Radio value='3'>Third</Radio>
            </Stack>
          </RadioGroup>
        </Variant>
      </Component>
      <Component name="RangeSlider" docURL="https://chakra-ui.com/docs/components/range-slider">
        <Variant>
          <RangeSlider
            aria-label={['min', 'max']}
            colorScheme='pink'
            defaultValue={[10, 30]}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack/>
            </RangeSliderTrack>
            <RangeSliderThumb index={0}/>
            <RangeSliderThumb index={1}/>
          </RangeSlider>
        </Variant>
      </Component>
      <Component name="Select" docURL="https://chakra-ui.com/docs/components/select">
        <Variant>
          <Select placeholder='Select option'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </Variant>
        <Variant name="outline">
          <Select variant='outline' placeholder='Outline'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </Variant>
        <Variant name="filled">
          <Select variant='filled' placeholder='Filled'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </Variant>
        <Variant name="flushed">
          <Select variant='flushed' placeholder='Flushed'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </Variant>
        <Variant name="unstyled">
          <Select variant='unstyled' placeholder='Unstyled'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </Variant>
      </Component>
      <Component name="Slider" docURL="https://chakra-ui.com/docs/components/slider">
        <Variant>
          <Slider aria-label='slider-ex-1' defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack/>
            </SliderTrack>
            <SliderThumb/>
          </Slider>
        </Variant>
      </Component>
      <Component name="Switch" docURL="https://chakra-ui.com/docs/components/switch">
        <Variant>
          <Switch/>
        </Variant>
        <Variant name="small">
          <Switch size='sm'/>
        </Variant>
        <Variant name="large">
          <Switch size='lg'/>
        </Variant>
      </Component>
      <Component name="Textarea" docURL="https://chakra-ui.com/docs/components/textarea">
        <Variant>
          <Textarea placeholder='Here is a sample placeholder'/>
        </Variant>
      </Component>
    </Category>
    <Category name="Data Display">
      <Component name="Badge" docURL="https://chakra-ui.com/docs/components/badge">
        <Variant>
          <Badge>Default</Badge>
        </Variant>
        <Variant name="outline">
          <Badge variant='outline' colorScheme='green'>Default</Badge>
        </Variant>
        <Variant name="solid">
          <Badge variant='solid' colorScheme='green'>Success</Badge>
        </Variant>
        <Variant name="subtle">
          <Badge variant='subtle' colorScheme='green'>Removed</Badge>
        </Variant>
        <Variant name="green">
          <Badge colorScheme='green'>Success</Badge>
        </Variant>
        <Variant name="red">
          <Badge colorScheme='red'>Removed</Badge>
        </Variant>
        <Variant name="purple">
          <Badge colorScheme='purple'>New</Badge>
        </Variant>
      </Component>
      <Component name="Code" docURL="https://chakra-ui.com/docs/components/code">
        <Variant>
          <Code>Hello world</Code>
        </Variant>
      </Component>
      <Component name="Divider" docURL="https://chakra-ui.com/docs/components/divider">
        <Variant>
          <Divider />
        </Variant>
        <Variant name="vertical" style={{ height: '100%' }}>
          <Divider orientation='vertical'/>
        </Variant>
      </Component>
      <Component name="Kbd" docURL="https://chakra-ui.com/docs/components/kbd">
        <Variant>
          <span>
            <Kbd>shift</Kbd> + <Kbd>H</Kbd>
          </span>
        </Variant>
      </Component>
      <Component name="List" docURL="https://chakra-ui.com/docs/components/list" subComponents={[<ListItem/>]}>
        <Variant name="unordered">
          <UnorderedList>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>
        </Variant>
        <Variant name="ordered">
          <OrderedList>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </OrderedList>
        </Variant>
      </Component>
      <Component name="Stat" docURL="https://chakra-ui.com/docs/components/stat">
        <Variant>
          <Stat>
            <StatLabel>Collected Fees</StatLabel>
            <StatNumber>£0.00</StatNumber>
            <StatHelpText>Feb 12 - Feb 28</StatHelpText>
          </Stat>
        </Variant>
        <Variant name="with indicator">
          <StatGroup>
            <Stat>
              <StatLabel>Sent</StatLabel>
              <StatNumber>345,670</StatNumber>
              <StatHelpText>
                <StatArrow type='increase'/>
                23.36%
              </StatHelpText>
            </Stat>

            <Stat>
              <StatLabel>Clicked</StatLabel>
              <StatNumber>45</StatNumber>
              <StatHelpText>
                <StatArrow type='decrease'/>
                9.05%
              </StatHelpText>
            </Stat>
          </StatGroup>
        </Variant>
      </Component>
      <Component name="Table" docURL="https://chakra-ui.com/docs/components/table">
        <Variant>
          <TableContainer>
            <Table variant='simple'>
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Variant>
        <Variant name="Striped">
          <TableContainer>
            <Table variant='striped' colorScheme='teal'>
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Variant>
      </Component>
      <Component name="Tag" docURL="https://chakra-ui.com/docs/components/tag">
        <Variant>
          <Tag>Sample Tag</Tag>
        </Variant>
        <Variant name="with icon">
          <Tag variant='subtle' colorScheme='cyan'>
            <TagLeftIcon boxSize='12px' as={AddIcon}/>
            <TagLabel>Cyan</TagLabel>
          </Tag>
        </Variant>
        <Variant name="with close button">
          <Tag
            borderRadius='full'
            variant='solid'
            colorScheme='green'
          >
            <TagLabel>Green</TagLabel>
            <TagCloseButton/>
          </Tag>
        </Variant>
      </Component>
    </Category>
    <Category name="Feedback">
      <Component name="Alert" docURL="https://chakra-ui.com/docs/components/alert">
        <Variant>
          <Alert status='success' variant='subtle'>
            <AlertIcon/>
            Data uploaded to the server. Fire on!
          </Alert>
        </Variant>
        <Variant name="solid">
          <Alert status='success' variant='solid'>
            <AlertIcon/>
            Data uploaded to the server. Fire on!
          </Alert>
        </Variant>
        <Variant name="left-accent">
          <Alert status='success' variant='left-accent'>
            <AlertIcon/>
            Data uploaded to the server. Fire on!
          </Alert>
        </Variant>
        <Variant name="top-accent">
          <Alert status='success' variant='top-accent'>
            <AlertIcon/>
            Data uploaded to the server. Fire on!
          </Alert>
        </Variant>
        <Variant name="error">
          <Alert status='error'>
            <AlertIcon/>
            There was an error processing your request
          </Alert>
        </Variant>
        <Variant name="warning">
          <Alert status='warning'>
            <AlertIcon/>
            Seems your account is about expire, upgrade now
          </Alert>
        </Variant>
        <Variant name="info">
          <Alert status='info'>
            <AlertIcon/>
            Chakra is going live on August 30th. Get ready!
          </Alert>
        </Variant>
      </Component>
      <Component name="CircularProgress" docURL="https://chakra-ui.com/docs/components/circular-progress">
        <Variant>
          <CircularProgress value={80}/>
        </Variant>
        <Variant name="with label">
          <CircularProgress value={40} color='green.400'>
            <CircularProgressLabel>40%</CircularProgressLabel>
          </CircularProgress>
        </Variant>
        <Variant name="indeterminate">
          <CircularProgress isIndeterminate color='green.300'/>
        </Variant>
      </Component>
      <Component name="Progress" docURL="https://chakra-ui.com/docs/components/progress">
        <Variant>
          <Progress value={80} w='100%'/>
        </Variant>
        <Variant name="indeterminate">
          <Progress size='xs' w='100%' isIndeterminate/>
        </Variant>
      </Component>
      <Component name="Skeleton" docURL="https://chakra-ui.com/docs/components/skeleton">
        <Variant previewLayout="stretch">
          <Stack>
            <Skeleton height='20px'/>
            <Skeleton height='20px'/>
            <Skeleton height='20px'/>
          </Stack>
        </Variant>
        <Variant name="circle and text">
          <Box padding='6' boxShadow='lg' bg='white' w='100%'>
            <SkeletonCircle size='10'/>
            <SkeletonText mt='4' noOfLines={4} spacing='4'/>
          </Box>
        </Variant>
      </Component>
      <Component name="Spinner" docURL="https://chakra-ui.com/docs/components/spinner">
        <Variant>
          <Spinner/>
        </Variant>
      </Component>
      <Component name="Toast" docURL="https://chakra-ui.com/docs/components/toast">
        <Variant proto={ToastProto}/>
      </Component>
    </Category>
    <Category name="Typography">
      <Component name="Text" docURL="https://chakra-ui.com/docs/components/text">
        <Variant name="truncated">
          <Text color='gray.500' noOfLines={1}>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and
            publishing industries for previewing layouts and visual mockups.
          </Text>
        </Variant>
        <Variant name="size 6xl">
          <Text fontSize='6xl'>(6xl) In love with React & Next</Text>
        </Variant>
        <Variant name="size 5xl">
          <Text fontSize='5xl'>(5xl) In love with React & Next</Text>
        </Variant>
        <Variant name="size 4xl">
          <Text fontSize='4xl'>(4xl) In love with React & Next</Text>
        </Variant>
        <Variant name="size 3xl">
          <Text fontSize='3xl'>(3xl) In love with React & Next</Text>
        </Variant>
        <Variant name="size 2xl">
          <Text fontSize='2xl'>(2xl) In love with React & Next</Text>
        </Variant>
        <Variant name="size xl">
          <Text fontSize='xl'>(xl) In love with React & Next</Text>
        </Variant>
        <Variant name="size lg">
          <Text fontSize='lg'>(lg) In love with React & Next</Text>
        </Variant>
        <Variant name="size md">
          <Text fontSize='md'>(md) In love with React & Next</Text>
        </Variant>
        <Variant name="size sm">
          <Text fontSize='sm'>(sm) In love with React & Next</Text>
        </Variant>
        <Variant name="size xs">
          <Text fontSize='xs'>(xs) In love with React & Next</Text>
        </Variant>
        <Variant name="i">
          <Text as='i'>Italic</Text>
        </Variant>
        <Variant name="u">
          <Text as='u'>Underline</Text>
        </Variant>
        <Variant name="abbr">
          <Text as='abbr'>I18N</Text>
        </Variant>
        <Variant name="cite">
          <Text as='cite'>Citation</Text>
        </Variant>
        <Variant name="del">
          <Text as='del'>Deleted</Text>
        </Variant>
        <Variant name="em">
          <Text as='em'>Emphasis</Text>
        </Variant>
        <Variant name="ins">
          <Text as='ins'>Inserted</Text>
        </Variant>
        <Variant name="kbd">
          <Text as='kbd'>Ctrl + C</Text>
        </Variant>
        <Variant name="mark">
          <Text as='mark'>Highlighted</Text>
        </Variant>
        <Variant name="s">
          <Text as='s'>Strikethrough</Text>
        </Variant>
        <Variant name="samp">
          <Text as='samp'>Sample</Text>
        </Variant>
        <Variant name="sub">
          <Text as='sub'>sub</Text>
        </Variant>
        <Variant name="sup">
          <Text as='cite'>Citation</Text>
          <Text as='sup'>sup</Text>
        </Variant>
      </Component>
      <Component name="Heading" docURL="https://chakra-ui.com/docs/components/heading">
        <Variant name="h1">
          <Heading as='h1' size='4xl' noOfLines={1}>
            (4xl) In love with React & Next
          </Heading>
        </Variant>
        <Variant name="h2">
          <Heading as='h2' size='3xl' noOfLines={1}>
            (3xl) In love with React & Next
          </Heading>
        </Variant>
        <Variant name="h3">
          <Heading as='h3' size='lg'>
            (lg) In love with React & Next
          </Heading>
        </Variant>
        <Variant name="h4">
          <Heading as='h4' size='md'>
            (md) In love with React & Next
          </Heading>
        </Variant>
        <Variant name="h5">
          <Heading as='h5' size='sm'>
            (sm) In love with React & Next
          </Heading>
        </Variant>
        <Variant name="h6">
          <Heading as='h6' size='xs'>
            (xs) In love with React & Next
          </Heading>
        </Variant>
      </Component>
    </Category>
    <Category name="Overlay">
      <Component name="AlertDialog" docURL="https://chakra-ui.com/docs/components/alert-dialog">
        <Variant proto={AlertDialogProto}/>
      </Component>
      <Component name="Drawer" docURL="https://chakra-ui.com/docs/components/drawer">
        <Variant>
          <Drawer
            isOpen={true}
            placement='right'
            onClose={() => {/*todo*/
            }}
            finalFocusRef={undefined /*todo*/}
          >
            <DrawerOverlay/>
            <DrawerContent>
              <DrawerCloseButton/>
              <DrawerHeader>Create your account</DrawerHeader>

              <DrawerBody>
                <Input placeholder='Type here...'/>
              </DrawerBody>

              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={() => {/*todo*/
                }}>
                  Cancel
                </Button>
                <Button colorScheme='blue'>Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Variant>
      </Component>
      <Component name="Menu" docURL="https://chakra-ui.com/docs/components/menu">
        <Variant>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Variant>
      </Component>
      <Component name="Modal" docURL="https://chakra-ui.com/docs/components/modal">
        <Variant>
          <Modal isOpen={true} onClose={() => {/*todo*/
          }}>
            <ModalOverlay/>
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton/>
              <ModalBody>
                Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id
                consequat veniam incididunt duis in sint irure nisi.
              </ModalBody>
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={() => {/*todo*/
                }}>
                  Close
                </Button>
                <Button variant='ghost'>Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Variant>
      </Component>
      <Component name="Popover" docURL="https://chakra-ui.com/docs/components/popover">
        <Variant>
          <Popover>
            <PopoverTrigger>
              <Button>Trigger</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow/>
              <PopoverCloseButton/>
              <PopoverHeader>Confirmation!</PopoverHeader>
              <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
            </PopoverContent>
          </Popover>
        </Variant>
      </Component>
      <Component name="Tooltip" docURL="https://chakra-ui.com/docs/components/tooltip">
        <Variant>
          <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
            Hover me
          </Tooltip>
        </Variant>
      </Component>
    </Category>
    <Category name="Disclosure">
      <Component name="Accordion" docURL="https://chakra-ui.com/docs/components/accordion">
        <Variant previewLayout="stretch">
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Section 1 title
                  </Box>
                  <AccordionIcon/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Section 2 title
                  </Box>
                  <AccordionIcon/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Variant>
      </Component>
      <Component name="Tabs" docURL="https://chakra-ui.com/docs/components/tabs">
        <Variant>
          <Tabs>
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
              <Tab>Three</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Variant>
      </Component>
      <Component name="VisuallyHidden" docURL="https://chakra-ui.com/docs/components/visually-hidden">
        <Variant>
          <Button>
            <VisuallyHidden>Checkmark</VisuallyHidden>
            <CheckIcon/>
          </Button>
        </Variant>
      </Component>
    </Category>
    <Category name="Navigation">
      <Component name="Breadcrumb" docURL="https://chakra-ui.com/docs/components/breadcrumb">
        <Variant>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Variant>
      </Component>
      <Component name="Link" docURL="https://chakra-ui.com/docs/components/link">
        <Variant>
          <Link>Chakra UI</Link>
        </Variant>
        <Variant name="external">
          <Link href='https://chakra-ui.com' isExternal>
            Chakra Design system <ExternalLinkIcon mx='2px'/>
          </Link>
        </Variant>
      </Component>
      <Component name="LinkOverlay" docURL="https://chakra-ui.com/docs/components/link-overlay">
        <Variant name="LinBox">
          <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
            <Heading size='md' my='2'>
              <LinkOverlay href='#'>
                New Year, New Beginnings: Smashing Workshops & Audits
              </LinkOverlay>
            </Heading>
          </LinkBox>
        </Variant>
      </Component>
    </Category>
    <Category name="Media and Icons">
      <Component name="Avatar" docURL="https://chakra-ui.com/docs/components/avatar">
        <Variant>
          <Wrap>
            <WrapItem>
              <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov'/>
            </WrapItem>
            <WrapItem>
              <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole'/>
            </WrapItem>
            <WrapItem>
              <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds'/>
            </WrapItem>
            <WrapItem>
              <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence'/>
            </WrapItem>
            <WrapItem>
              <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba'/>
            </WrapItem>
            <WrapItem>
              <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast'/>
            </WrapItem>
            <WrapItem>
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo'/>
            </WrapItem>
          </Wrap>
        </Variant>
      </Component>
      <Component name="Icon" docURL="https://chakra-ui.com/docs/components/icon">
        <Variant>
          <AddIcon w={6} h={6} />
        </Variant>
        {/*todo provide all icons*/}
      </Component>
      <Component name="Image" docURL="https://chakra-ui.com/docs/components/image">
        <Variant>
          <Box boxSize='sm'>
            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
          </Box>
        </Variant>
      </Component>
    </Category>
  </Palette>
);



export function ToastProto() {
  const toast = useToast()
  return (
    <Button
      onClick={() =>
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  )
}

export function AlertDialogProto() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Button colorScheme='red' onClick={onOpen}>
        Delete Customer
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can&apos;t undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}


export default ChakraUIPalette;
