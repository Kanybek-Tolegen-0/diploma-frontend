import React from 'react';
import {
    CardStyled,
    ImageWrapperStyled,
    CafeInfoContainer,
    H1Styled,
    PStyled
} from './styled';

export const Card = ({
    name,
    image,
    description,
    ...rest 
}) => (
    <CardStyled {...rest}>
        <ImageWrapperStyled style={{ background: `url(${image}) center no-repeat`, backgroundSize: 'cover' }} />
        <CafeInfoContainer>
            <H1Styled>{name}</H1Styled>
            {description && <PStyled>{description}</PStyled>}
        </CafeInfoContainer>
    </CardStyled>
);