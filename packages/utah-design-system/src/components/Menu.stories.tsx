import type { Meta } from '@storybook/react';
import { MoreHorizontal } from 'lucide-react';
import { MenuTrigger, Popover, SubmenuTrigger } from 'react-aria-components';
import { Button } from './Button';
import {
  Menu as Component,
  MenuItem,
  MenuSection,
  MenuSeparator,
} from './Menu';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MenuTrigger>
        <Button variant="secondary" className="px-2">
          <MoreHorizontal className="size-5" />
        </Button>
        <Story />
      </MenuTrigger>
    ),
  ],
  argTypes: {},
  args: {},
};

export default meta;

export const Example = (args: any) => (
  <Component {...args}>
    <MenuItem id="new">New…</MenuItem>
    <MenuItem id="open">Open…</MenuItem>
    <MenuSeparator />
    <MenuItem isDisabled id="save">
      Save
    </MenuItem>
    <MenuItem id="saveAs">Save as…</MenuItem>
    <MenuSeparator />
    <MenuItem id="print">Print…</MenuItem>
  </Component>
);

export const Sections = (args: any) => (
  <Component {...args}>
    <MenuSection title="Your Content">
      <MenuItem id="repos">Repositories</MenuItem>
      <MenuItem id="projects">Projects</MenuItem>
      <MenuItem id="organizations">Organizations</MenuItem>
      <MenuItem id="stars">Stars</MenuItem>
      <MenuItem id="sponsors">Sponsors</MenuItem>
    </MenuSection>
    <MenuSection title="Your Account">
      <MenuItem id="profile">Profile</MenuItem>
      <MenuItem id="status">Set status</MenuItem>
      <MenuItem id="sign-out">Sign out</MenuItem>
    </MenuSection>
  </Component>
);

export const Submenu = (args: any) => (
  <Component {...args}>
    <MenuItem id="new">New…</MenuItem>
    <SubmenuTrigger>
      <MenuItem id="open">Open</MenuItem>
      <Popover>
        <Component>
          <MenuItem id="open-new">Open in New Window</MenuItem>
          <MenuItem id="open-current">Open in Current Window</MenuItem>
        </Component>
      </Popover>
    </SubmenuTrigger>
    <MenuSeparator />
    <MenuItem id="print">Print…</MenuItem>
    <SubmenuTrigger>
      <MenuItem id="share">Share</MenuItem>
      <Popover>
        <Component>
          <MenuItem id="sms">SMS</MenuItem>
          <MenuItem id="twitter">Twitter</MenuItem>
          <SubmenuTrigger>
            <MenuItem id="email">Email</MenuItem>
            <Popover>
              <Component>
                <MenuItem id="work">Work</MenuItem>
                <MenuItem id="personal">Personal</MenuItem>
              </Component>
            </Popover>
          </SubmenuTrigger>
        </Component>
      </Popover>
    </SubmenuTrigger>
  </Component>
);
