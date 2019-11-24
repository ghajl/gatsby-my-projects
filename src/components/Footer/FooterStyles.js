export default {
  '@global': {
    '.footer': {
      background: '#55585E'
    },
    '.footer__icons-container': {
      position: 'relative',
      display: 'inline-block',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    '.footer__icon-wrapper': {
      display: 'inline-block',
      textAlign: 'center',
      padding: '3px 20px',
      '& *': {
        boxSizing: 'content-box'
      }
    },
    '.footer__icon-link': {
      margin: '0 20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '.footer-icon': {
      transition: '.4s',
      borderRadius: '50%',
      border: '1.2px solid',
      borderColor: 'darkgray',
      padding: 5,
      margin: 5,
      fill: 'darkgray',
      '.can-hover &:hover': {
        fill: 'greenyellow',
        borderColor: 'greenyellow'
      }
    }
  }
};
