export interface NavItem{
  url: string;
  label: string;
  icon: string;
  opened?: boolean;
  items?: NavChildItem[];
}

interface NavChildItem{
    url: string;
    label: string;
}

export const navigation: NavItem[] = [
  {
    url: '',
    label: 'Home',
    icon: ''
  },
  {
    url: '',
    label: 'Algorithms',
    icon: '',
    opened: false,
    items:
      [
        {
          url: '/algorithms/link1',
          label: 'Some label'
        },
        {
          url: '/algorithms/link2',
          label: 'Some label 2'
        },
        {
          url: '/algorithms/link3',
          label: 'Some label 3'
        }
      ]
  },
  {
    url: '/about',
    label: 'About me',
    icon: ''
  }
]
