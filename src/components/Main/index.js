import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { components } from '../componentList';
import { useCookies } from 'react-cookie';

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

import './style.css';

export const Main = ({ children }) => {  

  const [open, setOpen] = useState(true);
  const [cookie, setCookie, remove] = useCookies(['option-sidebar']);

  const _isOpen = (name) => {
    let style = '';
    if (cookie && cookie.selected && name.toString() === cookie.selected.toString()) {
      style = 'selected'
    }
    return style;
  }

  const _setSelected = (name) => {
    remove('selected');
    setCookie('selected', name);
  }

  const sidebarOptions = () => {
    return components && components.map((component) => {
      return (
        <div className={`sidebar_option ${_isOpen(component.name)}`} key={component.name} onClick={() => _setSelected(component.name)} >
          <Link to={component.path} key={component.name} className="sidebar_link">
            <div key={component.name + "1"} className={`sidebar_icon ${_isOpen(component.name)}`}>
              {component.icon}
            </div>
            <div key={component.name + "2"} className={`sidebar_name ${_sidebarStyle('sidebar_name')} ${_isOpen(component.name)}`}>
              {component.name}
            </div>
          </Link>
        </div>
      );
    });
  }

  const handleOpenMenu = () => {
    setOpen(!open);
  }

  const _sidebarStyle = (origin) => {
    let style;
    switch (origin) {
      case 'sidebar': style = !open && 'sidebar_closed'; break;
      case 'sidebar_body': style = !open && 'sidebar_body_closed'; break;
      case 'sidebar_name': style = !open && 'sidebar_name_closed'; break;
      case 'sidebar_user_name': style = !open && 'sidebar_user_name_closed'; break;
      case 'sidebar_user_icon': style = !open && 'sidebar_user_icon_closed'; break;
      case 'sidebar_footer': style = !open && 'sidebar_footer_closed'; break;
      case 'child': style = !open && 'child_closed'; break;
      default: style = ''; break;
    }
    return style;
  }

  return(
    <div className="main">
      <div className={`sidebar ${_sidebarStyle('sidebar')}`}>
        <div className={`sidebar_body ${_sidebarStyle('sidebar_body')}`}>
          {sidebarOptions()}
        </div>
        <div className={`sidebar_footer ${_sidebarStyle('sidebar_footer')}`}>
          <div className={`sidebar_user_icon ${_sidebarStyle('sidebar_user_icon')}`} />
          <div className={`sidebar_user_name ${_sidebarStyle('sidebar_user_name')}`}>
            <p>Diego Armando Payán López</p>
            <p>Components Repository</p>
          </div>
        </div>
      </div>
      <div className={`child ${_sidebarStyle('child')}`}>
        <div className="sidebar_button_wrapper">
          <div className="sidebar_button" onClick={handleOpenMenu}>
            {!open ? 
              <ArrowForwardIosRoundedIcon className="sidebar_button_icon" />
              : <ArrowBackIosRoundedIcon className="sidebar_button_icon" />
            }
          </div>
        </div>
        {children && children[1] && children[1]}
      </div>
    </div>
  );
}