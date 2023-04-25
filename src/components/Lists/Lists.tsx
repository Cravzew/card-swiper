import React from 'react';
import ItemCard from "./ItemCard";
import {useAppSelector} from "../../store/store";
import Flex from "../Flex";

function Lists() {

    const filters = useAppSelector(state => state.photo.filters)

    return (
        <div>
            <h1 style={{
                textAlign: 'center'
            }}>Liked Image</h1>
            <Flex wrap={'wrap'} align={'center'}>
                {filters.map((item) => <ItemCard key={item.id} url={item.url}/>)}
            </Flex>
        </div>
    );
}

export default Lists;