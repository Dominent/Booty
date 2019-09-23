import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Button from './lib/Button';
import Alert from './lib/Alert';
import Badge from './lib/Badge';
import Breadcrumb from './lib/Breadcrumb';
import Card from './lib/Card';
import ListGroup from './lib/ListGroup';

//TODO(PPavlov): Add Prop Types
//TODO(PPavlov): Continue from Card (blockquote)

const Buttons = (
  <React.Fragment>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="success">Success</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="info">Info</Button>
    <Button variant="light">Light</Button>
    <Button variant="dark">Dark</Button>

    <Button variant="link">Link</Button>
  </React.Fragment>
);

const Alerts = (
  <React.Fragment>
    <Alert variant="primary">A simple primary alert—check it out!</Alert>
    <Alert variant="secondary">A simple secondary alert—check it out!</Alert>
    <Alert variant="success">A simple success alert—check it out!</Alert>
    <Alert variant="danger">A simple danger alert—check it out!</Alert>
    <Alert variant="warning">A simple warning alert—check it out!</Alert>
    <Alert variant="info">A simple info alert—check it out!</Alert>
    <Alert variant="light">A simple light alert—check it out!</Alert>
    <Alert variant="dark">A simple dark alert—check it out!</Alert>
  </React.Fragment>
)

const AlertsLinkColor = (
  <React.Fragment>
    <Alert variant="primary">A simple primary alert with <Alert.Link to="/">an example link to="/"</Alert.Link>. Give it a click if you like.</Alert>
    <Alert variant="secondary"> A simple secondary alert with <Alert.Link to="/">an example link</Alert.Link>. Give it a click if you like.</Alert>
    <Alert variant="success">A simple success alert with <Alert.Link to="/">an example link</Alert.Link>. Give it a click if you like.</Alert>
    <Alert variant="danger">A simple danger alert with <Alert.Link to="/">an example link</Alert.Link>. Give it a click if you like.</Alert>
    <Alert variant="warning">A simple warning alert with <Alert.Link to="/">an example link</Alert.Link>. Give it a click if you like.</Alert>
    <Alert variant="info">A simple info alert with <Alert.Link to="/">an example link</Alert.Link>. Give it a click if you like.</Alert>
    <Alert variant="light">A simple light alert with <Alert.Link to="/">an example link</Alert.Link>. Give it a click if you like.</Alert>
    <Alert variant="dark">A simple dark alert with <Alert.Link to="/">an example link</Alert.Link>. Give it a click if you like.</Alert>
  </React.Fragment>
)

const AlertAdditionalContent = (
  <React.Fragment>
    <Alert variant="success">
      <Alert.Heading>Well done!</Alert.Heading>
      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      <hr></hr>
      <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </Alert>
  </React.Fragment>
)

const AlertDismissing = (
  <React.Fragment>
    <Alert variant="warning" dismissible onClose={() => console.log('closed')}>
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
    <Button variant="primary">
      Notifications <Badge variant="light">4</Badge>
    </Button>
  </React.Fragment>
)

const BadgeTypes = (
  <React.Fragment>
    <Badge variant="primary">Primary</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="danger">Danger</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="info">Info</Badge>
    <Badge variant="light">Light</Badge>
    <Badge variant="dark">Dark</Badge>
  </React.Fragment>
)

const PillBadges = (
  <React.Fragment>
    <Badge pill variant="primary">Primary</Badge>
    <Badge pill variant="secondary">Secondary</Badge>
    <Badge pill variant="success">Success</Badge>
    <Badge pill variant="danger">Danger</Badge>
    <Badge pill variant="warning">Warning</Badge>
    <Badge pill variant="info">Info</Badge>
    <Badge pill variant="light">Light</Badge>
    <Badge pill variant="dark">Dark</Badge>
  </React.Fragment>
)

const LinkBadges = (
  <React.Fragment>
    <Badge element="Link" to="/" variant="primary">Primary</Badge>
    <Badge element="Link" to="/" variant="secondary">Secondary</Badge>
    <Badge element="Link" to="/" variant="success">Success</Badge>
    <Badge element="Link" to="/" variant="danger">Danger</Badge>
    <Badge element="Link" to="/" variant="warning">Warning</Badge>
    <Badge element="Link" to="/" variant="info">Info</Badge>
    <Badge element="Link" to="/" variant="light">Light</Badge>
    <Badge element="Link" to="/" variant="dark">Dark</Badge>
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
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Right</Button>
    </Button.Group>
  </React.Fragment>
)

const ButtonToolbar = (
  <React.Fragment>
    <Button.Toolbar>
      <Button.Group className="mr-2">
        <Button variant="secondary">1</Button>
        <Button variant="secondary">2</Button>
        <Button variant="secondary">3</Button>
        <Button variant="secondary">4</Button>
      </Button.Group>
      <Button.Group className="mr-2">
        <Button variant="secondary">5</Button>
        <Button variant="secondary">6</Button>
        <Button variant="secondary">7</Button>
      </Button.Group>
      <Button.Group>
        <Button variant="secondary">8</Button>
      </Button.Group>
    </Button.Toolbar>
  </React.Fragment>
)

const ButtonGroupSizing = (
  <React.Fragment>
    <Button.Group size="lg">
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Right</Button>
    </Button.Group>
    <Button.Group>
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Right</Button>
    </Button.Group>
    <Button.Group size="sm">
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Right</Button>
    </Button.Group>
  </React.Fragment>
)

const ButtonGroupVertical = (
  <Button.Group size="sm" vertical>
    <Button variant="secondary">Left</Button>
    <Button variant="secondary">Middle</Button>
    <Button variant="secondary">Right</Button>
  </Button.Group>
)

const Cards = (
  <Card style={{ width: '18rem' }}>
    <Card.Image src="https://via.placeholder.com/150"></Card.Image>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Subtitle>Card subtitle</Card.Subtitle>
      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
      <Card.Link>Go somewhere</Card.Link>
    </Card.Body>
  </Card>
)

const CardContentTypes = (
  <Card>
    <Card.Body>This is some text within a card body.</Card.Body>
  </Card>
)

const CardTitlesTextAndLinks = (
  <Card style={{ width: "18rem" }}>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Card subtitle</Card.Subtitle>
      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
      <Card.Link to="#">Card link</Card.Link>
      <Card.Link to="#">Another link</Card.Link>
    </Card.Body>
  </Card>
)

const CardImages = (
  <Card style={{ width: "18rem" }}>
    <Card.Image src="https://via.placeholder.com/150"></Card.Image>
    <Card.Body>
      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
    </Card.Body>
  </Card>
)

const CardListGroups = (
  <Card style={{ width: "18rem" }}>
    <ListGroup flush>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
  </Card>
)

const CardKitchenSink = (
  <Card style={{ width: "18rem" }}>
    <Card.Image src="https://via.placeholder.com/150"></Card.Image>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
    </Card.Body>
    <ListGroup flush>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link to="#">Card link</Card.Link>
      <Card.Link to="#">Another link</Card.Link>
    </Card.Body>
  </Card>
)

const CardHeaderAndFooter = (
  <React.Fragment>
    <Card>
      <Card.Header>
        Featured
    </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
        <Button element="Link" to="#" variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header element="h5">
        Featured
  </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
        <Button element="Link" to="#" variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </React.Fragment>
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
        <h3>Cards</h3>
        {Cards}
        <hr></hr>
        <h3>Card Content Types</h3>
        {CardContentTypes}
        <hr></hr>
        <h3>Titles, text, and links</h3>
        {CardTitlesTextAndLinks}
        <hr></hr>
        <h3>Images</h3>
        {CardImages}
        <hr></hr>
        <h3>List groups</h3>
        {CardListGroups}
        <hr></hr>
        <h3>Kitchen Sink</h3>
        {CardKitchenSink}
        <hr></hr>
        <h3>Header and footer</h3>
        {CardHeaderAndFooter}
        <hr></hr>
      </div>
    </Router>
  );
}

export default App;
