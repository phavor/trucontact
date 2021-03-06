import styled from "styled-components";
import { variantMatch } from "../../lib/helpers";

const variantSize = (size) =>
  size
    ? size === "sm"
      ? "0.67rem"
      : size === "md"
      ? "0.775rem"
      : size === "lg"
      ? "1rem"
      : size === "xl"
      ? "1.68rem"
      : ""
    : "0.775rem";

const variantIconSize = (size) =>
  size
    ? size === "sm"
      ? "small"
      : size === "md"
      ? "medium"
      : size === "lg"
      ? "1.55rem"
      : size === "xl"
      ? "1.68rem"
      : ""
    : "medium";

const variantPadding = (size, hasIcon) => {
  if ((size && hasIcon) || hasIcon) {
    return "0.55rem 1rem";
  } else {
    return size === "sm"
      ? "0.5rem 0.9rem"
      : size === "md"
      ? "0.8rem 2rem"
      : size === "lg"
      ? "1rem 2.2rem"
      : "0.8rem 2rem";
  }
};

export const ButtonStyles = styled.button`
  border: none;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "2px")};
  padding: ${({ size, hasIcon }) => variantPadding(size, hasIcon)};
  font-size: ${({ size }) => variantSize(size)};
  letter-spacing: 0.02857em;
  width: ${({ fullwidth }) => (fullwidth ? "100%" : "max-content")};
  color: ${({ color, variant, theme }) =>
    color
      ? color
      : variant
      ? theme.palette[variantMatch[variant]].contrastText
      : theme.palette.primary.contrastText};
  background-color: ${({ bngColor, variant, theme }) =>
    bngColor
      ? bngColor
      : variant
      ? theme.palette[variantMatch[variant]].main
      : theme.palette.primary.main};
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  &:active,
  &:focus {
    outline: 0;
    border: none;
  }

  &:hover {
    .icon {
      left: -0.2rem;
    }
  }

  &:disabled {
    background: ${({ theme }) => theme.palette.grey[400]};
    cursor: not-allowed;
  }

  .text__icon {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: ${({ color, variant, theme }) =>
        color
          ? color
          : variant
          ? theme.palette[variantMatch[variant]].contrastText
          : theme.palette.primary.contrastText};
      font-size: ${({ size }) => variantSize(size)};
    }
  }

  &::-moz-focus-inner {
    border: 0;
  }

  .icon {
    position: relative;
    padding-left: 1rem;
    left: 0;
    -webkit-transition: ${({ noAnimation }) =>
      noAnimation ? null : "left 0.25s ease-in"};
    transition: ${({ noAnimation }) =>
      noAnimation ? null : "left 0.25s ease-in"};

    svg {
      font-size: ${({ size }) => variantIconSize(size)};
      font-weight: 600;
    }
  }

  .loader {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover .icon {
    left: ${({ noAnimation }) => (noAnimation ? null : "-12px")};
  }
`;

export const AlternateButtonStyles = styled("button")`
  border: none;
  letter-spacing: 0.02857em;
  width: ${({ fullwidth }) => (fullwidth ? "100%" : "max-content")};
  background-color: transparent;
  text-transform: uppercase;
  cursor: pointer;

  .text__icon {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .text {
      font-size: ${({ size }) => variantSize(size)};
      color: ${({ color }) => (color ? color : "#4cb952")};
      border-bottom: solid #4cb952;
    }
  }

  &::-moz-focus-inner {
    border: 0;
  }

  .icon {
    border-bottom: 0;
    position: relative;
    padding-left: 1rem;
    left: 0;
    -webkit-transition: ${({ noAnimation }) =>
      noAnimation ? null : "left 0.25s ease-in"};
    transition: ${({ noAnimation }) =>
      noAnimation ? null : "left 0.25s ease-in"};

    svg {
      font-weight: 600;
      font-size: ${({ size }) => variantIconSize(size)};
      color: ${({ color }) => (color ? color : "#4cb952")};
    }
  }

  .loader {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover .icon {
    left: ${({ noAnimation }) => (noAnimation ? null : "-12px")};
  }
`;
