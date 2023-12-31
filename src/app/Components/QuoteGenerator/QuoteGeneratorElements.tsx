"use client";
import Link from 'next/link'
import Image from 'next/image'
// import {styled} from "../../styledComponents"
import styled from 'styled-components';

export const GradientBackgroundCon = styled.div`
  background: linear-gradient(to right, #050568, #36ccf5);
  background-size: 400% 400%;
  animation: gradient 6s ease infinite;
  height: 100vh;
  width: 100vw;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

