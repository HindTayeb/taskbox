import type { Meta, StoryObj } from '@storybook/react-vite';

import NewsListItem from './NewsListItem';

const meta = {
  title: 'Components/NewsListItem',
  component: NewsListItem,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    thumbnail: { control: 'text', description: 'Thumbnail image URL' },
    category: { control: 'text', description: 'Section label (rendered uppercase)' },
    categoryColor: { control: 'color', description: 'Colour of the category label' },
    title: { control: 'text' },
    readTime: { control: 'text' },
  },
  args: {
    thumbnail: 'https://picsum.photos/seed/news1/160/160',
    category: 'Technology',
    categoryColor: '#1a73e8',
    title: 'The city rolls out contactless transit passes citywide',
    readTime: '4 min read',
  },
} satisfies Meta<typeof NewsListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

const articles = [
  {
    thumbnail: 'https://picsum.photos/seed/news1/160/160',
    category: 'Technology',
    categoryColor: '#1a73e8',
    title: 'The city rolls out contactless transit passes citywide',
    readTime: '4 min read',
  },
  {
    thumbnail: 'https://picsum.photos/seed/news2/160/160',
    category: 'Culture',
    categoryColor: '#c026d3',
    title: 'Inside the studios reshaping the downtown arts scene',
    readTime: '6 min read',
  },
  {
    thumbnail: 'https://picsum.photos/seed/news3/160/160',
    category: 'Sport',
    categoryColor: '#1e8e3e',
    title: 'Marathon route changes announced for this year’s race',
    readTime: '3 min read',
  },
];

export const StackedList: Story = {
  render: () => (
    <div style={{ maxWidth: 380 }}>
      {articles.map((article) => (
        <NewsListItem key={article.title} {...article} />
      ))}
    </div>
  ),
};
