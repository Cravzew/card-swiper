import React from 'react';
import Button from "../Button";
import Flex from "../Flex";
import {useAppDispatch} from "../../store/store";
import {fetchPhoto} from "../../store/reducers/photoReducer";

function CardSuccess({url}: { url: string}) {

    const dispatch = useAppDispatch()

    const photo = Object.values(url)

    function handleUpdate() {
        dispatch(fetchPhoto())
    }

    return (
        <div>
            <img src={photo + ''} alt=""/>
            <Flex margin={'30px 0 0 0'} justify={'space-between'}>
                <Button onClick={handleUpdate} primary={'#19ff00'} secondary={'#FFF'} padding={'10px'}
                        transparent>
                    Like
                </Button>
                <Button onClick={handleUpdate} primary={'#ff0000'} secondary={'#FFF'} padding={'10px'}
                        transparent>
                    Remove
                </Button>
            </Flex>
        </div>
    );
}

export default CardSuccess;