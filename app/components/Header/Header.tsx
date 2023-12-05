import { useState } from 'react';
import { Container, Group, Button, Image } from '@mantine/core';
import classes from './Header.module.css';

export function Header() {

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
      <Image
        className={classes.logo}
        src="/logo.png"
        />
        <Group gap={5}>
        <Button component='a' variant="filled" color="red" href="tel:+254712340622">Order Now</Button>
        </Group>
      </Container>
    </header>
  );
}