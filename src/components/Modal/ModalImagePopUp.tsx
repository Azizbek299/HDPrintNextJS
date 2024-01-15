"use client";

import Image from 'next/image';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Example(props:any) {
  const values = [true ];  //  ['xl-down', 'xxl-down' ,'sm-down', 'md-down', 'lg-down', ]
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint:any) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <div className='h-300'>
      {values.map((v:any, idx) => (
        <div key={idx} className={`h-${props.height}`} onClick={() => handleShow(v)}>
          <Image src={props.img} loading="lazy" fill sizes='100' alt='snow' className='object-cover cursor-pointer'/>
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </div>
      ))}

      <Modal show={show} fullscreen={fullscreen as any} onHide={() => setShow(false)} >
        <Modal.Header closeButton className='absolute z-10 bg-white' style={{borderRadius:'5px', right:'16px', top:'32px'}}>
        </Modal.Header>
        <Modal.Body>
          <div className="relative h-full w-full bg-white rounded-lg">
            <Image loading="lazy" src={props.img} fill sizes='100' alt='snow' className='object-contain'/>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Example;
