import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'containerMainPage': {
    'display': 'flex',
    'justifyContent': 'center',
    'flexDirection': 'row',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'containerSidebar': {
    'display': 'flex',
    'alignItems': 'flex-start',
    'justifyContent': 'center',
    'flexDirection': 'column',
    'backgroundColor': '#202225',
    'width': [{ 'unit': '%H', 'value': 0.1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'containerSidebar button': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'flex',
    'alignItems': 'center',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'backgroundColor': 'transparent',
    'color': 'rgb(228, 228, 228)',
    'fontWeight': 'bold'
  },
  'containerSidebar button:hover': {
    'color': 'white'
  },
  'containerTheContent': {
    'justifyContent': 'center',
    'alignItems': 'center',
    'backgroundColor': '#0f1015',
    'display': 'flex',
    'flexDirection': 'column',
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  }
});
