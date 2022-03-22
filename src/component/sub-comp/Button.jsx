import React from 'react';
import { Link } from 'react-router-dom';
function Button(props) {
  const buttonStyle = {
  background : props.btnBg,
  padding: '16px 30px',
  position: 'relative',
  boxShadow: '0 0 0 1px rgba(0,0,0,.01)',
  textDecoration: 'none',
  fontSize: '18px',
  color: props.color,
  fontWeight: 600,
  width: props.width,
  textAlign: 'center',
  borderTopRightRadius: '20px',
  borderBottomLeftRadius: '20px',
  }
  return (
    <Link onClick={props.onclick} style={buttonStyle} id={'/' + props.id} to={props.to} className="box-btn">
     {props.btnText}
    </Link>
  )
}

export default Button 