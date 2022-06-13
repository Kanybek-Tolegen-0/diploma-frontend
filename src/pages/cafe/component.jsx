import React, { useEffect, useState } from 'react';
import { DatePicker } from './libs/datepicker';
import { CustomHeader } from './libs/datepicker/custom-header';
import { CustomTimeInput } from './libs/datepicker/custom-time-input';
import { CalendarContainer } from './libs/datepicker/calendar-container';
import { useParams } from 'react-router-dom';
import { useAtom } from '@reatom/react';
import { cafeAtom } from './../../atoms/cafeAtom';
import { ClipLoader } from 'react-spinners';
import { colors } from '../../assets';
import { H1Styled, H2Styled, H3Styled } from './styled';

export const Cafe = () => {
    const [{ cafe, status }, { fetchCafe }] = useAtom(cafeAtom);
    const { cafeId } = useParams();
    const min = new Date();
    const max = new Date(min.getFullYear(), min.getMonth() + 1, min.getDate());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);
    console.log(cafe);
    useEffect(() => fetchCafe(cafeId), [fetchCafe])

    return (
        status === 'pending'
        ?   <div style={{position: 'absolute', left: '50%', top: '50%'}}>
                <ClipLoader size={'100px'} color={colors.Primary.FIERY_ROSE} />
            </div>
        : cafe
            ? <div style={{ marginTop: '64px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div
                        style={{
                            background: `url(${cafe?.photo}) center no-repeat`,
                            borderRadius: '16px',
                            width: '512px',
                            height: '384px'
                        }}
                    />
                    <div>
                        <H1Styled>{cafe.name}</H1Styled>
                        <div style={{ display: 'grid', gridTemplateColumns: 'max-content 1fr', rowGap: '36px', columnGap: '64px' }}>
                            <H2Styled>адрес:</H2Styled>
                            <H3Styled>{cafe?.address}</H3Styled>
                            <H2Styled>виды Кухни:</H2Styled>
                            <>
                                { cafe.cuisines && cafe.cuisines.map((c) => <H3Styled key={c.id}><li>{c.cuisine.name}</li></H3Styled>)}
                            </>
                            <H2Styled>Телефон:</H2Styled>
                            <>
                                { cafe.phones && cafe.phones.map((p) => <H3Styled key={p.id}><li>{p.phone_number}</li></H3Styled>)}
                            </>
                        </div>
                    </div>
                </div>
                <DatePicker
                    dateFormat={"dd/MM/yyyy"}
                    showTimeInput
                    customTimeInput={<CustomTimeInput selectedTime={selectedTime} setSelectedTime={setSelectedTime} />}           
                    calendarContainer={CalendarContainer} 
                    selected={selectedDate}
                    onChange={(date) => {
                        setSelectedDate(date);
                        setSelectedTime(null);
                    }}
                
                    renderCustomHeader={({
                        date,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled }) => 
                        <CustomHeader
                            date={date}
                            decreaseMonth={decreaseMonth}
                            increaseMonth={increaseMonth}
                            prevMonthButtonDisabled={prevMonthButtonDisabled}
                            nextMonthButtonDisabled={nextMonthButtonDisabled}/>}
                    minDate={min}
                    maxDate={max}
                    required
                />    
            </div> : null
    )
};