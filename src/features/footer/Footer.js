import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as GitHub } from './../../assets/images/github.svg'
import { ReactComponent as Discord} from './../../assets/images/discord.svg'
import styles from './Footer.module.css';

// <img src={github} height="15" width="15"/> GitHub
const Footer = ({ currentTheme, theme }) => (
  <div 
    className={styles.footerContainer}
    style={{
      backgroundColor: theme.background,
      color: theme.text
    }}  
  >
  </div>
)

const mapStateToProps = (state) => {
  return {
      currentTheme: state.themeProvider.current,
      theme: state.themeProvider.theme,
  }
}

export default connect(mapStateToProps)(Footer);
