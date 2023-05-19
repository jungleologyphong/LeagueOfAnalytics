import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'containerItemGame': {
    'display': 'flex',
    'position': 'relative',
    'borderRadius': '10px',
    'width': [{ 'unit': 'px', 'value': 200 }],
    'height': [{ 'unit': 'px', 'value': 249 }],
    'resize': 'both',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'itemBackgroundLoL': {
    'borderRadius': '10px',
    'backgroundImage': 'url("../../assets/images/backgroundlol.jpg")',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'display': 'flex',
    'flex': 'content',
    'flexDirection': 'row'
  },
  'itemBackgroundLoL:hover': {
    'borderRadius': '10px',
    'backgroundImage': 'url("../../assets/images/backgroundlol.jpg")',
    'backgroundColor': '#ffffff',
    'borderWidth': '3px',
    'borderColor': '#ffffff',
    'borderStyle': 'solid'
  },
  'itemBackgroundLoL img': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'color': '#ffffff'
  },
  'itemBackgroundTFT': {
    'borderRadius': '10px',
    'backgroundImage': 'url("../../assets/images/lol-tft.jpg")',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'display': 'flex',
    'flex': 'content',
    'flexDirection': 'row'
  },
  'itemBackgroundTFT:hover': {
    'borderRadius': '10px',
    'backgroundImage': 'url("../../assets/images/lol-tft.jpg")',
    'backgroundColor': '#ffffff',
    'borderWidth': '3px',
    'borderColor': '#ffffff',
    'borderStyle': 'solid'
  },
  'itemBackgroundTFT img': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'color': '#ffffff'
  }
});
