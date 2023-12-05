import { useState } from 'react';
import { Container, Group, Burger, Image } from '@mantine/core';
import classes from './Header.module.css';

const links = [
  { link: 'tel:+254712340622', label: 'Call Now' },
];

export function Header() {
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
      <Image
        className={classes.logo}
        src="/logo.png"
        />
        <Group gap={5}>
          {items}
        </Group>
      </Container>
    </header>
  );
}