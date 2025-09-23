import React from 'react';
import {Col} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import { NumberWithCommas } from '../utils/utils';

const Menus =({menu, masukkeranjang}) => {
    return (
        <Col md={4} xs={6} className='mb-4'>
            <Card className='shadow' style={{width:'13rem', cursor: "pointer" }} onClick={() => masukkeranjang(menu)}>
                <Card.Img variant='top' src={'images/' + menu.category.nama.toLowerCase()+'/'+menu.gambar} />
                <Card.Body>
                    <Card.Title>{menu.nama}({menu.kode})</Card.Title>
                    <Card.Text>
                        Rp. {NumberWithCommas(menu.harga)}
                    </Card.Text>
                   {/* <button 
                   variant ="primary"
                   className='mt-auto'
                   onClick={() => masukkeranjang(menu)}>
                    Tambah Ke Keranjang
                   </button> */}
                </Card.Body>
            </Card>
        </Col>
    )
}
export default Menus;

