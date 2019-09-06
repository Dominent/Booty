import React from 'react';
import Button from './lib/Button';
import Alert from './lib/Alert';
import Badge from './lib/Badge';

import { BrowserRouter as Router, Link } from 'react-router-dom';

import Breadcrumb from './lib/Breadcrumb';

const Buttons = (
  <React.Fragment>
    <Button type="primary">Primary</Button>
    <Button type="secondary">Secondary</Button>
    <Button type="success">Success</Button>
    <Button type="danger">Danger</Button>
    <Button type="warning">Warning</Button>
    <Button type="info">Info</Button>
    <Button type="light">Light</Button>
    <Button type="dark">Dark</Button>

    <Button type="link">Link</Button>
  </React.Fragment>
);

const Alerts = (
  <React.Fragment>
    <Alert type="primary">A simple primary alert—check it out!</Alert>
    <Alert type="secondary">A simple secondary alert—check it out!</Alert>
    <Alert type="success">A simple success alert—check it out!</Alert>
    <Alert type="danger">A simple danger alert—check it out!</Alert>
    <Alert type="warning">A simple warning alert—check it out!</Alert>
    <Alert type="info">A simple info alert—check it out!</Alert>
    <Alert type="light">A simple light alert—check it out!</Alert>
    <Alert type="dark">A simple dark alert—check it out!</Alert>
  </React.Fragment>
)

const AlertsLinkColor = (
  <React.Fragment>
    <Alert type="primary">A simple primary alert with <Alert.Link to="/">an example link to="/"</Alert.Link>. Give it a click if you like.</Alert>
    <Alert type="secondary"> A simple secondary alert with <Alert.Link to="/">an example link</Alert.Link>. Give it a click if you like.</Alert>
    <Alert type="success">A simple success alert with <Alert.Link to="/">an example link</Alert.Link>. Give it a click if you like.</Alert>
    <Alert type="danger">A simple danger alert with <Alert.Link to="/">an example link</Alert.Link>. Give it a click if you like.</Alert>
    <Alert type="warning">A simple warning alert with <Alert.Link to="/">an example link</Alert.Link>. Give it a click if you like.</Alert>
    <Alert type="info">A simple info alert with <Alert.Link to="/">an example link</Alert.Link>. Give it a click if you like.</Alert>
    <Alert type="light">A simple light alert with <Alert.Link to="/">an example link</Alert.Link>. Give it a click if you like.</Alert>
    <Alert type="dark">A simple dark alert with <Alert.Link to="/">an example link</Alert.Link>. Give it a click if you like.</Alert>
  </React.Fragment>
)

const AlertAdditionalContent = (
  <React.Fragment>
    <Alert type="success">
      <Alert.Heading>Well done!</Alert.Heading>
      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      <hr></hr>
      <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </Alert>
  </React.Fragment>
)

const AlertDismissing = (
  <React.Fragment>
    <Alert type="warning" dismissible onClose={() => console.log('closed')}>
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    </Alert>
  </React.Fragment>
)

const Badges = (
  <React.Fragment>
    <h1>Example heading <Badge size="secondary">New</Badge></h1>
    <h2>Example heading <Badge size="secondary">New</Badge></h2>
    <h3>Example heading <Badge size="secondary">New</Badge></h3>
    <h4>Example heading <Badge size="secondary">New</Badge></h4>
    <h5>Example heading <Badge size="secondary">New</Badge></h5>
    <h6>Example heading <Badge size="secondary">New</Badge></h6>
  </React.Fragment>
)

const BadgeInButton = (
  <React.Fragment>
    <Button type="primary">
      Notifications <Badge type="light">4</Badge>
    </Button>
  </React.Fragment>
)

const BadgeTypes = (
  <React.Fragment>
    <Badge type="primary">Primary</Badge>
    <Badge type="secondary">Secondary</Badge>
    <Badge type="success">Success</Badge>
    <Badge type="danger">Danger</Badge>
    <Badge type="warning">Warning</Badge>
    <Badge type="info">Info</Badge>
    <Badge type="light">Light</Badge>
    <Badge type="dark">Dark</Badge>
  </React.Fragment>
)

const PillBadges = (
  <React.Fragment>
    <Badge pill type="primary">Primary</Badge>
    <Badge pill type="secondary">Secondary</Badge>
    <Badge pill type="success">Success</Badge>
    <Badge pill type="danger">Danger</Badge>
    <Badge pill type="warning">Warning</Badge>
    <Badge pill type="info">Info</Badge>
    <Badge pill type="light">Light</Badge>
    <Badge pill type="dark">Dark</Badge>
  </React.Fragment>
)

const LinkBadges = (
  <React.Fragment>
    <Badge element="Link" to="/" type="primary">Primary</Badge>
    <Badge element="Link" to="/" type="secondary">Secondary</Badge>
    <Badge element="Link" to="/" type="success">Success</Badge>
    <Badge element="Link" to="/" type="danger">Danger</Badge>
    <Badge element="Link" to="/" type="warning">Warning</Badge>
    <Badge element="Link" to="/" type="info">Info</Badge>
    <Badge element="Link" to="/" type="light">Light</Badge>
    <Badge element="Link" to="/" type="dark">Dark</Badge>
  </React.Fragment>
)

const Breadcrumbs = (
  <React.Fragment>
    <Breadcrumb>
      <Breadcrumb.Item active>Home</Breadcrumb.Item>
    </Breadcrumb>
    <Breadcrumb>
      <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item active>Library</Breadcrumb.Item>
    </Breadcrumb>
    <Breadcrumb>
      <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item><Link to="/">Library</Link></Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  </React.Fragment>
)

const ButtonGroup = (
  <React.Fragment>
    <Button.Group>
      <Button type="secondary">Left</Button>
      <Button type="secondary">Middle</Button>
      <Button type="secondary">Right</Button>
    </Button.Group>
  </React.Fragment>
)

const ButtonToolbar = (
  <React.Fragment>
    <Button.Toolbar>
      <Button.Group className="mr-2">
        <Button type="secondary">1</Button>
        <Button type="secondary">2</Button>
        <Button type="secondary">3</Button>
        <Button type="secondary">4</Button>
      </Button.Group>
      <Button.Group className="mr-2">
        <Button type="secondary">5</Button>
        <Button type="secondary">6</Button>
        <Button type="secondary">7</Button>
      </Button.Group>
      <Button.Group>
        <Button type="secondary">8</Button>
      </Button.Group>
    </Button.Toolbar>
  </React.Fragment>
)

const ButtonGroupSizing = (
  <React.Fragment>
    <Button.Group size="lg">
      <Button type="secondary">Left</Button>
      <Button type="secondary">Middle</Button>
      <Button type="secondary">Right</Button>
    </Button.Group>
    <Button.Group>
      <Button type="secondary">Left</Button>
      <Button type="secondary">Middle</Button>
      <Button type="secondary">Right</Button>
    </Button.Group>
    <Button.Group size="sm">
      <Button type="secondary">Left</Button>
      <Button type="secondary">Middle</Button>
      <Button type="secondary">Right</Button>
    </Button.Group>
  </React.Fragment>
)

const ButtonGroupVertical = (
  <Button.Group size="sm" vertical>
    <Button type="secondary">Left</Button>
    <Button type="secondary">Middle</Button>
    <Button type="secondary">Right</Button>
  </Button.Group>
)

function App() {
  return (
    <Router>
      <div>
        <h3>Buttons</h3>
        {Buttons}
        <hr></hr>
        <h3>Alerts</h3>
        {Alerts}
        <hr></hr>
        <h3>Alerts Link Color</h3>
        {AlertsLinkColor}
        <hr></hr>
        <h3>Alert Additional Content</h3>
        {AlertAdditionalContent}
        <hr></hr>
        <h3>Alert Dismissing</h3>
        {AlertDismissing}
        <hr></hr>
        <h3>Badges</h3>
        {Badges}
        <hr></hr>
        <h3>Badge In Button</h3>
        {BadgeInButton}
        <hr></hr>
        <h3>Badge Types</h3>
        {BadgeTypes}
        <hr></hr>
        <h3>Pill Badges</h3>
        {PillBadges}
        <hr></hr>
        <h3>Link Badges</h3>
        {LinkBadges}
        <hr></hr>
        <h3>Breadcrumbs</h3>
        {Breadcrumbs}
        <hr></hr>
        <h3>Button Group</h3>
        {ButtonGroup}
        <hr></hr>
        <h3>Button Toolbar</h3>
        {ButtonToolbar}
        <hr></hr>
        <h3>Button Group Sizing</h3>
        {ButtonGroupSizing}
        <hr></hr>
        <h3>Button Group Vertical</h3>
        {ButtonGroupVertical}
        <hr></hr>
      </div>
    </Router>
  );
}

export default App;
