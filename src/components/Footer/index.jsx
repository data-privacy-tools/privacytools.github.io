import React from 'react'
import trubrLogo from '../../assets/trubr-logo.svg'
import { Divider } from 'antd'
import { H1 } from '../Title'
import { CTA } from '../Button'
import StyledFooter from './styles'
import Margin from '../Margin'
import Container from '../Container'
import { Row, Col } from 'antd'

function Footer(props) {
  return (
    <StyledFooter>
      <H1 centered>Get started in minutes</H1>
      <CTA as='a' href="/" centered>Learn how</CTA>
      <Margin x={72} />
      <Divider />
      <Margin x={72} />
      <Container>
        <Margin x={36} />
        <Row type="flex" justify="space-between">
          <a href="/" style={{ fontSize: '12px' }}>
            Powered by
            <img src={trubrLogo} height={12} style={{ marginLeft: '3px' }} />
          </a>
          <small>Copyright © {new Date().getFullYear()} All Rights Reserved</small>
        </Row>
        <Margin x={36} />
      </Container>
    </StyledFooter>
  )
}

export default Footer