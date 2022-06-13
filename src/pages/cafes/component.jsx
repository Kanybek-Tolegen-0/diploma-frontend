import React, { useEffect, useState } from 'react';
import { IconedInput } from './../../components';
import { icons, colors } from './../../assets';
import { useAtom } from '@reatom/react';
import { cafesAtom } from './../../atoms/cafesAtom';
import { Card } from './libs/card';
import { CafesWrapperStyled } from './styled';
import { useNavigate } from 'react-router-dom';

export const Cafes = ({ ...rest }) => {
    const [{ cafes }, { fetchCafes }] = useAtom(cafesAtom);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => fetchCafes(), [fetchCafes]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <IconedInput
                    color={colors.Basic.GREY}
                    placeholder={'Введите название кафе'}
                    icon={icons.search}
                    iconPosition={'right'}
                    style={{
                        textTransform: 'unset',
                        maxWidth: '400px',
                        margin: '48px 0 32px 0',
                        border: `1px solid ${colors.Basic.GREY}`}}
                    fontSize={'16px'}
                    fontWeight={400}
                    value={searchValue}
                    onBlur={handleSubmit}
                    onChange={(e) => setSearchValue(e.target.value)} />
            </form>
            <CafesWrapperStyled>
                <Card
                    onClick={() => navigate(`/cafes/${1}`)}
                    name={'KHAN SARAY'}
                    description={'Жара. По запотевшему бокалу холодного пива стекают капли воды прямо Вам на руку.'}
                    image={'data:image/jpeg;base64,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'} />
            </CafesWrapperStyled>
        </>
    );
};