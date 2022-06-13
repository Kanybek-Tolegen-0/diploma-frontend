import React, { useEffect, useState } from 'react';
import { IconedInput } from './../../components';
import { icons, colors } from './../../assets';
import { useAtom } from '@reatom/react';
import { cafesAtom } from './../../atoms/cafesAtom';
import { Card } from './libs/card';
import { CafesWrapperStyled } from './styled';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

export const Cafes = ({ ...rest }) => {
    const [{ cafes, status }, { fetchCafes }] = useAtom(cafesAtom);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => fetchCafes(), [fetchCafes]);

    return (
        <div>
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
            { status === 'pending' ? <div style={{position: 'absolute', left: '50%', top: '50%'}}>
                    <ClipLoader size={'100px'} color={colors.Primary.FIERY_ROSE} />
                </div>
                : <CafesWrapperStyled>
                    {cafes && cafes.map((cafe) => <Card
                        key={cafe.id}
                        name={cafe?.name}
                        image={cafe?.photo}
                        description={cafe?.description}
                        onClick={() => navigate(`/cafes/${cafe.id}`, { replace: true, payload: {cafe} })}
                    />)}
                </CafesWrapperStyled>
            }
        </div>
    );
};