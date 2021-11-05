import React from 'react';
import { Meta } from '@storybook/react';
import Card from './index';
import {
  Row,
  Col,
  Link,
  Text,
  Spacer,
  Divider,
  Code,
  Button,
  Grid
} from '../index';
import { NormalColors } from '../utils/prop-types';
import AppleEvent from '../../assets/apple-event.jpeg';
import Homepods from '../../assets/homepod.jpeg';
import Relaxing from '../../assets/relaxing.jpeg';
import BreathingApp from '../../assets/breathing-app-icon.jpeg';

export default {
  title: 'Surfaces/Card',
  component: Card,
  decorators: [
    (Story) => (
      <Grid.Container gap={1} justify="center" direction="column">
        <Story />
      </Grid.Container>
    )
  ]
} as Meta;

export const Default = () => (
  <Card width="400px">
    <p>A basic card.</p>
  </Card>
);

export const Bordered = () => (
  <Card width="400px" bordered>
    <p>A bordered card.</p>
  </Card>
);

export const Colors = () => {
  const colors: Array<NormalColors> = [
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
    'gradient'
  ];

  return (
    <>
      {colors.map((color) => (
        <Grid.Container gap={2} key={color} style={{ marginBottom: '18px' }}>
          <Grid xs={12}>
            <Card color={color} textColor="white">
              <Text h4 transform="capitalize">
                {color}
              </Text>
              <Text span>{color}</Text>
            </Card>
          </Grid>
        </Grid.Container>
      ))}
    </>
  );
};

export const NoShadow = () => (
  <Card shadow={false} width="400px">
    <h4>The Evil Rabbit</h4>
    <p>shadow card.</p>
  </Card>
);

export const WithFooter = () => (
  <Row wrap="wrap" justify="flex-start">
    <Card width="330px">
      <Text h4>Next UI</Text>
      <Text>🚀 Beautiful and modern React UI library.</Text>
      <Card.Footer>
        <Link color target="_blank" href="https://github.com/geist-org/react">
          Visit source code on GitHub.
        </Link>
      </Card.Footer>
    </Card>
    <Spacer x={1} />
    <Card width="330px" color="primary">
      <Text h4>Next UI</Text>
      <Text>🚀 Beautiful and modern React UI library.</Text>
      <Card.Footer>
        <Link target="_blank" href="https://github.com/geist-org/react">
          Visit source code on GitHub.
        </Link>
      </Card.Footer>
    </Card>
  </Row>
);

export const AbsImageWithHeader = () => {
  return (
    <Grid.Container gap={1} justify="center">
      <Grid>
        <Card width="330px" cover>
          <Card.Header style={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#ffffffAA"
              >
                What to watch
              </Text>
              <Text h3 color="white">
                Stream the Apple event
              </Text>
            </Col>
          </Card.Header>
          <Card.Image
            autoResize={false}
            src={AppleEvent}
            height={440}
            width="100%"
            alt="Apple event background"
            style={{ objectFit: 'cover' }}
          />
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export const AbsImgWithHeaderFooter = () => {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid>
        <Card width="330px" color="#f6f6f6" cover>
          <Card.Header style={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#9E9E9E"
              >
                New
              </Text>
              <Text h2 color="black">
                HomePod mini
              </Text>
              <Text size={14} style={{ paddingRight: '10px' }}>
                Room-filling sound, Intelligent assistant. Smart home control.
                Works seamlessly with iPhone. Check it out
              </Text>
            </Col>
          </Card.Header>
          <Card.Image
            autoResize={false}
            src={Homepods}
            height={440}
            width="100%"
            alt="Apple homedpods background"
            style={{ objectFit: 'cover', paddingTop: '100px' }}
          />
          <Card.Footer autoMargin={false}>
            <Row>
              <Col>
                <Text size={12}>Available soon.</Text>
                <Text size={12}>Get notified.</Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button flat auto rounded>
                    <Text size={12} weight="bold" transform="uppercase">
                      Notify Me
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
      <Grid>
        <Card width="630px" color="#0f1114" cover>
          <Card.Header style={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#9E9E9E"
              >
                Your day your way
              </Text>
              <Text h3 color="white">
                Your checklist for better sleep
              </Text>
            </Col>
          </Card.Header>
          <Card.Body>
            <Card.Image
              autoResize={false}
              src={Relaxing}
              height={440}
              width="100%"
              alt="Apple homedpods background"
              style={{ objectFit: 'cover' }}
            />
          </Card.Body>

          <Card.Footer
            blur
            border
            borderColor="rgba(255, 255, 255, 0.1)"
            style={{ position: 'absolute', zIndex: 1, bottom: 0 }}
          >
            <Row>
              <Col>
                <Row>
                  <Col span={3}>
                    <Card.Image
                      autoResize={false}
                      src={BreathingApp}
                      style={{ background: 'black' }}
                      height={40}
                      width={40}
                      alt="Breathing app icon"
                    />
                  </Col>
                  <Col>
                    <Text color="#d1d1d1" size={12}>
                      Breathing App
                    </Text>
                    <Text color="#d1d1d1" size={12}>
                      Get a good night's sleep.
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button flat auto rounded color="#94f9f0">
                    <Text size={12} weight="bold" transform="uppercase">
                      Get App
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export const CenterImgWithHeader = () => {
  const list = [
    {
      title: 'Mac',
      img: require('../../assets/mac.png')
    },
    {
      title: 'iPhone',
      img: require('../../assets/iphone.png')
    },
    {
      title: 'iPad',
      img: require('../../assets/ipad.png')
    },
    {
      title: 'Apple Watch',
      img: require('../../assets/apple-watch.png')
    },
    {
      title: 'AirPods',
      img: require('../../assets/airpods.png')
    },
    {
      title: 'AirTag',
      img: require('../../assets/airtag.png')
    },
    {
      title: 'Apple TV',
      img: require('../../assets/appletv.png')
    },
    {
      title: 'HomePod mini',
      img: require('../../assets/homepod-mini.png')
    },
    {
      title: 'Accessories',
      img: require('../../assets/accessories.png')
    }
  ];
  return (
    <Grid.Container gap={2} justify="center">
      {list.map((item, index) => (
        <Grid key={index}>
          <Card hoverable clickable width="200px" height="220px">
            <Card.Header noPadding justify="flex-start">
              <Text h5 style={{ paddingLeft: '24px', paddingTop: '10px' }}>
                {item.title}
              </Text>
            </Card.Header>
            <Card.Body height="100%" justify="center">
              <Card.Image
                autoResize={false}
                src={item.img}
                width={180}
                alt={item.title}
              />
            </Card.Body>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export const WithDivider = () => (
  <Card width="400px">
    <Card.Header>
      <Text b>Description</Text>
    </Card.Header>
    <Divider y={0} />
    <Card.Body style={{ padding: '30px 20px' }}>
      <Text>
        The Object constructor creates an object wrapper for the given value.
      </Text>
    </Card.Body>
    <Divider y={0} color="#e2e2e2" />
    <Card.Footer>
      <Text>
        When called in a non-constructor context, Object behaves identically to{' '}
        <Code>new Object()</Code>.
      </Text>
    </Card.Footer>
  </Card>
);