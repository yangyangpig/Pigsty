const componentsRouter = {
  path: '',
  component: () => import(),
  redirect: '',
  name: 'ComponentDemo',
  meta: {
    title: 'Components',
    icon: 'component'
  },
  children: [
    {
      path: '',
      component: () => import(),
      name: ''
    }
  ]
}

export default componentsRouter