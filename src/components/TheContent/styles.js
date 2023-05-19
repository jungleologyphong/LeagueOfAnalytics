import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'inputSearch': {
    'backgroundColor': '#3f3f3f',
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'height': [{ 'unit': 'px', 'value': 45 }],
    'borderRadius': '5px',
    'alignItems': 'center',
    'justifyContent': 'center'
  },
  'inputSearch::before': {
    'content': 'none',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'backgroundColor': 'rgba(255, 255, 255, 0)',
    'transition': 'background-color 0.3s ease',
    'zIndex': '1'
  },
  'inputSearch:hover::before': {
    'backgroundColor': 'rgba(255, 255, 255, 0.3)'
  },
  'containerItem': {
    'display': 'flex',
    'flexDirection': 'row',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  }
});
