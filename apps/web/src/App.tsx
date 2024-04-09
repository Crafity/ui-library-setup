import {
  Button,
  Card,
  Container,
  Heading,
  ThemeSwitcher,
  RightArrow,
} from '@crafity/ui'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container flex="column" gap={10}>
      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <ThemeSwitcher />
      </div>
      <Heading size="xxl">Heading H1</Heading>
      <Heading size="xl">Heading H2</Heading>
      <Heading size="m">Heading H3</Heading>
      <Card>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </Card>
      <input type="text" />
      <input type="number" />
      <input type="checkbox" />
      <textarea defaultValue="Content" />
      <select>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
      <Container gap={10}>
        <Button
          iconRight={<RightArrow />}
          onClick={() => setCount(count => count + 1)}>
          Primary
        </Button>
        <Button border onClick={() => setCount(count => count + 1)}>
          Border
        </Button>
        <Button disabled>Disabled</Button>
        <Button border disabled>
          Disabled
        </Button>
      </Container>
      <Container gap={10}>
        <Button
          variant="secondary"
          onClick={() => setCount(count => count + 1)}>
          Secondary
        </Button>
        <Button
          variant="secondary"
          border
          onClick={() => setCount(count => count + 1)}>
          Border
        </Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
        <Button border variant="secondary" disabled>
          Disabled
        </Button>
      </Container>
    </Container>
  )
}

export default App
