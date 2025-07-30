import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@treetop-studio/cartridge';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'icon']
    },
    asChild: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive'
  }
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline'
  }
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost'
  }
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link'
  }
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small'
  }
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large'
  }
};

export const Icon: Story = {
  args: {
    size: 'icon',
    children: '🚀'
  }
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
};