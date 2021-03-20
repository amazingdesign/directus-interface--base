import Main from './Main.vue'

const ExtensionDefinition = {
  id: 'custom',
  name: 'Custom',
  description: 'This is my custom extension!',
  icon: 'box',
  component: Main,
  types: ['string'],
}

export default ExtensionDefinition
