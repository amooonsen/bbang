import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const MyDropdown = () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <button>Menu</button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Item onSelect={() => alert('Item 1 selected')}>Item 1</DropdownMenu.Item>
      <DropdownMenu.Item onSelect={() => alert('Item 2 selected')}>Item 2</DropdownMenu.Item>
      <DropdownMenu.Item onSelect={() => alert('Item 3 selected')}>Item 3</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);

export default MyDropdown;