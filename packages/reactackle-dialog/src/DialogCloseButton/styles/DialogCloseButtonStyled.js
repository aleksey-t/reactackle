import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  extractThemeOrDefault,
  getValueString,
  transition,
  iconSizeMixin,
} from 'reactackle-core';

const propTypes = {
  transparentBg: PropTypes.bool,
};

const defaultProps = {
  transparentBg: false,
};

/** Prop Receivers */
const sizeProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const {
    width,
    height,
    imgSize,
  } = theme.reactackle.components.dialog.closeButton;

  return css`    
    ${iconSizeMixin(
      getValueString(width),
      getValueString(imgSize || width),
      getValueString(height || width),
    )}
  `;
};

const styleProps = ({ theme: themeFromProvider, transparentBg }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.dialog.closeButton.style,
    source = transparentBg ? path.modalWithTransparentBg : path;

  return `
    color: ${source.color};
    opacity: ${source.opacity};

    &:hover {
      color: ${source.hover.color};
      opacity: ${source.hover.opacity};
    }

    &:focus {
      color: ${source.focus.color};
      opacity: ${source.focus.opacity};
    }
  `;
};

/** Styles */
export const DialogCloseButtonStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  z-index: 9;
  cursor: pointer;
  ${sizeProps} ${styleProps} ${transition('color, opacity')};
`;

DialogCloseButtonStyled.propTypes = propTypes;
DialogCloseButtonStyled.defaultProps = defaultProps;
DialogCloseButtonStyled.displayName = 'DialogCloseButtonStyled';
