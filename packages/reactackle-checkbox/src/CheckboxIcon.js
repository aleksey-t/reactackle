import React from 'react';
import PropTypes from 'prop-types';
import { withTooltip } from 'reactackle-tooltip';
import { withTheme } from 'reactackle-core';
import { Icon } from 'reactackle-icon';
import { CheckboxIconStyled } from './styles/CheckboxIconStyled';

const propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  tooltipText: PropTypes.string,
  theme: PropTypes.object.isRequired,
  Tooltip: PropTypes.func.isRequired,
  toggleTooltip: PropTypes.func.isRequired,
  showTooltip: PropTypes.func.isRequired,
  hideTooltip: PropTypes.func.isRequired,
};

const defaultProps = {
  checked: void 0,
  disabled: false,
  tooltipText: '',
};

const CheckboxIconComponent = props => {
  const iconSettingsPath =
    props.theme.reactackle.components.checkbox.icon.source;
  const Tooltip = props.Tooltip;

  const tooltip = props.tooltipText
    ? <Tooltip text={props.tooltipText} />
    : null;

  const tooltipManagementProps = props.tooltipText
    ? {
        onClick: props.toggleTooltip,
        onFocus: props.showTooltip,
        onBlur: props.hideTooltip,
        onMouseEnter: props.showTooltip,
        onMouseLeave: props.hideTooltip,
        tabIndex: 1,
      }
    : {};

  return (
    <CheckboxIconStyled
      checked={props.checked}
      disabled={props.disabled}
      {...tooltipManagementProps}
    >
      <Icon
        size="inherit"
        color="inherit"
        name={iconSettingsPath.name}
        src={iconSettingsPath.src}
        type={iconSettingsPath.type}
      />
      {tooltip}
    </CheckboxIconStyled>
  );
};

CheckboxIconComponent.propTypes = propTypes;
CheckboxIconComponent.defaultProps = defaultProps;
CheckboxIconComponent.displayName = 'CheckboxIcon';

export default withTheme(withTooltip(CheckboxIconComponent, true));
