import { Container } from '@chakra-ui/layout'; 
import { Tab, TabList, Tabs } from '@chakra-ui/tabs';
import React from 'react';
import { useDispatch } from 'react-redux';
import { VISIBILITY_FILTER } from '../constants';
import { setFilter } from '../redux/action';

export const Filter = () => {
    const dispatch = useDispatch();

    return (
        <Container centerContent>
            <Tabs>
                <TabList>
                    {Object.keys(VISIBILITY_FILTER).map(filterkey => {
                        const currentFilter = VISIBILITY_FILTER[filterkey];
                        return (
                            <Tab key={`visibility-filter-${currentFilter}`} onClick={() => dispatch(setFilter(currentFilter))}>
                                {currentFilter}
                            </Tab>
                        )
                    })}
                </TabList>
            </Tabs>
        </Container>
    )
}