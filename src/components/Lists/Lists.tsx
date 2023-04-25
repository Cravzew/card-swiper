import React from 'react';
import ItemCard from "./ItemCard";
import {useAppSelector} from "../../store/store";
import Flex from "../Flex";

function Lists() {

    const filters = useAppSelector(state => state.photo.filters)

    // Add layout to list and delete

    return (
        <div style={{
            minHeight: 'calc(100vh - 100px)'
        }}>
            <h1 style={{
                textAlign: 'center'
            }}>Liked Image</h1>
            <Flex wrap={'wrap'} align={'center'} justify={'center'}>
                {filters.length === 0 ? <p style={{
                        marginTop: '30px',
                        fontSize: '22px'
                    }}>Lists is empty</p> :
                    filters.map((item) => <ItemCard key={item.id} url={item.url}/>)
                }
            </Flex>
        </div>
    );
}

export default Lists;