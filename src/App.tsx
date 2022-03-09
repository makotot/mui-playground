import React from 'react'
import logo from './logo.svg'
import './App.css'
import {
  Button,
  Card,
  CardContent,
  Container,
  Link,
  Stack,
  Typography,
} from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Stack spacing={2}>
            <Button variant="contained">button</Button>
            <Card>
              <CardContent>
                <Typography>
                  <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                  </p>
                </Typography>
              </CardContent>
            </Card>
            <Link
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer">
              Learn React
            </Link>
          </Stack>
        </header>
      </Container>
    </div>
  )
}

export default App
