import { AppShell, Burger, NavLink} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';


import './App.css'

function App() {
    const [opened, { toggle }] = useDisclosure();


  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        padding="md"
      > 

      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <div>cyruss amante</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <AppShell.Section>Cyruss Amante</AppShell.Section>
        <AppShell.Section>
          <NavLink
            href="#required-for-focus"
            label="about"
            variant="subtle"
          />
          <NavLink
            href="#required-for-focus"
            label="projects"
            variant="subtle"
          />
          <NavLink
            href="#required-for-focus"
            label="experience"
            variant="subtle"
          />
          <NavLink
            href="#required-for-focus"
            label="contact"
            variant="subtle"
          />
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
          <h1>my content</h1>
          <p>content over here</p>
      </AppShell.Main>

      </AppShell>
  
    </>
  )
}

export default App
