import React from 'react';
import { ContentWrapperStyled } from './styled';

export const ContentWrapper = ({ children }) => (
        <ContentWrapperStyled>
            {children}
        </ContentWrapperStyled>
);