const theme = {
  fonts: {
    body: "'Noto Sans JP', sans-serif",
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#011017',
    lightBackground: '#EAEAEA',
    primary: '#016A92',
  },
  buttons: {
    primary: {
      maxWidth: '200px',
      border: '1px solid',
      borderColor: 'primary',
      borderRadius: '100px',
      color: 'primary',
      padding: '12px 32px',
      textTransform: 'uppercase',
      fontWeight: 600,
      transition: 'all 0.2s',
      textAlign: 'center',
      textDecoration: 'none',
      fontFamily: 'body',
      backgroundColor: 'background',
      '&:hover, &:focus': {
        cursor: 'pointer',
        color: '#00B6F2',
        borderColor: '#00B6F2',
        transform: 'scale(0.98)',
      },

      '&:active': {
        transform: 'scale(0.98)',
      },
    },
  },
}
export default theme
