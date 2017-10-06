import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'reactackle-core';
import { IconSvg, IconChevronLeft } from 'reactackle-icons';
import { SidebarToggleStyled } from './styles/SidebarToggleStyled';
import { ToggleIconStyled } from './styles/ToggleIconStyled';
import { ToggleTextStyled } from './styles/ToggleTextStyled';
import { ToggleContentStyled } from './styles/ToggleContentStyled';

const propTypes = {
  toggleButtonText: PropTypes.string,
  expanded: PropTypes.bool,
  autoCollapsing: PropTypes.bool,
  icon: PropTypes.object,
  onClick: PropTypes.func,
};

const defaultProps = {
  toggleButtonText: 'Collapse',
  expanded: false,
  autoCollapsing: false,
  icon: IconChevronLeft,
  onClick: noop,
};

export default function SidebarToggle(props) {
  return (
    <SidebarToggleStyled
      expanded={props.expanded}
      autoCollapsing={props.autoCollapsing}
      onClick={props.onClick}
    >
      <ToggleIconStyled
        expanded={props.expanded}
        autoCollapsing={props.autoCollapsing}
        type="svg"
      >
        <IconSvg color="currentColor" size="custom">
          {props.icon}
        </IconSvg>
      </ToggleIconStyled>

      <ToggleContentStyled>
        <ToggleTextStyled
          expanded={props.expanded}
          autoCollapsing={props.autoCollapsing}
        >
          {props.toggleButtonText}
        </ToggleTextStyled>
      </ToggleContentStyled>
    </SidebarToggleStyled>
  );
}

SidebarToggle.propTypes = propTypes;
SidebarToggle.defaultProps = defaultProps;
SidebarToggle.displayName = 'SidebarToggle';
