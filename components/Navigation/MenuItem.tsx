import { ListItem } from '@chakra-ui/layout';
import Link from 'next/link';

interface MenuItemProps {
  name: string;
  to: string;
}

export default function MenuItem({ name, to }: MenuItemProps) {
  return (
    <ListItem p="5px">
      <Link href={to}>
        <a>{name}</a>
      </Link>
    </ListItem>
  );
}
