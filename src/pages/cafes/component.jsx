import React, { useEffect, useState } from 'react';
import { IconedInput } from './../../components';
import { icons, colors } from './../../assets';
import { useAtom } from '@reatom/react';
import { cafesAtom } from './../../atoms/cafesAtom';

export const Cafes = ({ ...rest }) => {
    const [{ cafes }, { fetchCafes }] = useAtom(cafesAtom);
    const [searchValue, setSearchValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    console.log(cafes);

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
        </>
    );
};