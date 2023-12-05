import { Card, Image, Text, Group, Button, NumberInput, Select, Badge } from '@mantine/core';
import classes from './Welcome.module.css';
import { useState } from 'react';

const cardItems = [
  {
    title: 'Frozen Samosas',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    progress: { value: 80, color: 'blue' },
    details: {
      main: 'Ksh 700 for 30 Samosas pack',
      sub: 'Handcrafted to perfection, these frozen delights offer a convenient and delicious solution for quick snacks or appetizers.',
    },
    qty: "pcs",
  },
  {
    title: 'Frozen Fish Fingers',
    imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/09/12/21/29-fish-fingers-rex.jpg',
    progress: { value: 65, color: 'green' },
    details: {
      main: 'Ksh 1000 per 0.5 kg',
      sub: ' Made from premium quality fish fillets, these golden-brown delights boast a crispy coating that locks in the savory goodness.',
    },
    qty: "1/2 Kgs"
  },
  {
    title: 'Frozen Chicken Nuggets',
    imageUrl: 'https://www.healthyseasonalrecipes.com/wp-content/uploads/2016/01/healthy-baked-chicken-tenders-sq-22-5.jpg',
    progress: { value: 92, color: 'orange' },
    details: {
      main: 'Ksh 1000 per 0.5 kg',
      sub: 'Crafted from premium chicken breast, these fingers are a quick and versatile solution for a flavorful meal or snack.',
    },
    qty: "1/2 Kgs"
  },
];

export function Welcome() {

  const [isOrderButtonDisabled, setIsOrderButtonDisabled] = useState(true);

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const [preference, setPreference] = useState<string | null>('');

  const handlePrefChange = (value) => {
    setPreference(value);
    setIsOrderButtonDisabled(!value);
  };

  const handleOrderNow = (title) => {
    // Form the WhatsApp message with the title and quantity
    const message = `Hello! I would like to order ${quantity} Kgs of ${title}. I prefer ${preference}`;

    // Form the WhatsApp link
    const whatsappLink = `https://wa.me/254712340622?text=${encodeURIComponent(message)}`;

    // Open the WhatsApp link in a new window
    window.open(whatsappLink, '_blank');
  };

  const renderCard = (item) => (
    <Card withBorder padding="lg" className={classes.card}>
      <Card.Section>
        <Image src={item.imageUrl} alt={item.title} height={200} />
      </Card.Section>

      <Group justify="space-between" mt="xl">
        <Text fz="md" fw={700} className={classes.title}>
          {item.title}
        </Text>
        <Group gap={5}>
        <Badge
          size="lg"
          variant="gradient"
          gradient={{ from: 'red', to: 'yellow', deg: 90 }}
        >
          {item.details.main}
        </Badge>
          
        </Group>
      </Group>
      <Text mt="sm" mb="md" c="dimmed" fz="xs">
        {item.details.sub}
      </Text>
      <Card.Section className={classes.footer}>

        <Select
          placeholder="Select Preference"
          className={classes.pref}
          onChange={(value) => handlePrefChange(value)}
          data={['Spicy', 'Non-spicy']}
          value={preference}
        />


        <Group justify="space-between">          
          <NumberInput
              placeholder="Quantity"
              suffix={item.title === "Frozen Samosas" ? " Pack" : " Kgs"}
              defaultValue={item.title === "Frozen Samosas" ? 1 : 0.5}
              onChange={(value) => handleQuantityChange(value)}
              className={classes.field}
            />
        <Button variant="filled" color="red" onClick={() => handleOrderNow(item.title)} disabled={isOrderButtonDisabled}>Order Now</Button>

         </Group> 
      </Card.Section>
    </Card>
  );

  return (
    <Group align="stretch" justify="center">
      {cardItems.map((item, index) => (
        <div key={index} className={classes.cardContainer}>
          {renderCard(item)}
        </div>
      ))}
    </Group>
  );
}
