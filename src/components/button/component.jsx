import React from 'react';
import { ButtonStyled } from './styled';
import { Props } from './props';

export const Button = ({
	padding,
	children,
	color,
	backgroundColor,
	borderRadius,
	fontSize,
	lineHeight,
	fontWeight,
	style,
	...rest }) => (
	<ButtonStyled
		padding={padding}
		color={color}
		borderRadius={borderRadius}
		backgroundColor={backgroundColor}
		fontSize={fontSize}
		lineHeight={lineHeight}
		fontWeight={fontWeight}
		style={{...style}}
		{...rest}
	>
		{children}
	</ButtonStyled>);

Button.propTypes = Props;