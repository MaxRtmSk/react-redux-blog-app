import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useEffect } from "react";
import ProgressBar from './ProgressBar'
import "./Modal.css"

export const ModalBox = styled(motion.div)`
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.8),
    0 0 0 1px rgba(255, 255, 255, 0.8);
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, hsl(210, 30%, 20%), hsl(255, 30%, 25%));
  color: hsl(220, 50%, 90%);;
  box-shadow: var(--m-shadow, .4rem .4rem 10.2rem .2rem) hsla(236, 50%, 50%, .3);
  border-radius: .8rem;
/* 
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  width: 200px;
  height: 150px; */

  /* margin: 20px; */
   width: 400px;
   height: 200px;
   position: absolute;
   left: 50%;
   top: 50%; 
   top: 89%;
   margin-left: -200px;
   margin-top: -150px;
`;

export const ModalContent = styled(motion.div)`
  h4{
    margin-top: 0px;
  }
  button {
  border: 1px solid hsla(0, 0%, 100%, .2);
  border-radius: 100rem;

  color: inherit;
  background: transparent;
  font-size: 20px;
  font-family: inherit;

  transition: .2s;
  cursor: pointer;
  }
  button:hover,
  button:focus {
  background: hsl(210, 90%, 50%);
  border-color: hsl(210, 90%, 50%);
  transform: translateY(-.2rem);
}
`;



export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: none;
  width: 30px;

  &:hover {
    cursor: pointer;
  }
`;

export const ToggleButton = styled(motion.button)`
  font-size: 15px;
  color: #fff;
  padding: 0.5rem 0.8rem;
  margin-top: 3rem;
  background: #3bb75e;
  border: none;
  border-radius: 4px;
  text-transform: capitalize;
  cursor: pointer;
`;
const delay = 5;
const Modal = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setShow(false), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
      <AnimatePresence>
        {show && (
          <ModalBox
            initial={{ opacity: 0, y: 60, scale: 0.3 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: "spring", stiffness: 300 },
            }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
          >
            <ModalContent
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
            >
                <h4>Уведомление</h4>
                <ProgressBar/>
                <p>Сайт ещё допиливаться</p>
                <button onClick={()=>{setShow(false)}}>понятно</button>
            </ModalContent>
          </ModalBox>
        )}
      </AnimatePresence>
  );
};

export default Modal;
