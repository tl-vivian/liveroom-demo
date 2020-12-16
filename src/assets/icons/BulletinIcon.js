import React from "react";
import styled from "styled-components";

const BulletinIconWrapper = styled.svg`
  width: 24px;
  height: 24px;
  display:flex;
  justify-content:center;
  align-items:center;
  fill:currentColor;
`;

export const BulletinIcon = () => (
  <BulletinIconWrapper aria-hidden="true">
    <path d="M19.2462312,6 C19.6625262,6 20,6.33183601 20,6.74117647 L20,6.74117647 L20,19.2588235 C20,19.668164 19.6625262,20 19.2462312,20 L19.2462312,20 L0.753768844,20 C0.337473807,20 -5.07749398e-12,19.668164 -5.07749398e-12,19.2588235 L-5.07749398e-12,19.2588235 L-5.07749398e-12,6.74117647 C-5.07749398e-12,6.33183601 0.337473807,6 0.753768844,6 L0.753768844,6 Z M18.4924623,7.48169412 L1.50753769,7.48169412 L1.50753769,18.5173176 L18.4924623,18.5173176 L18.4924623,7.48169412 Z M15.4666667,14.45 C15.8808802,14.45 16.2166667,14.7857864 16.2166667,15.2 C16.2166667,15.5796958 15.9345128,15.893491 15.5684372,15.9431534 L15.4666667,15.95 L4.93333333,15.95 C4.51911977,15.95 4.18333333,15.6142136 4.18333333,15.2 C4.18333333,14.8203042 4.46548721,14.506509 4.83156278,14.4568466 L4.93333333,14.45 L15.4666667,14.45 Z M15.4666667,10.5833333 C15.8808802,10.5833333 16.2166667,10.9191198 16.2166667,11.3333333 C16.2166667,11.7130291 15.9345128,12.0268243 15.5684372,12.0764867 L15.4666667,12.0833333 L4.93333333,12.0833333 C4.51911977,12.0833333 4.18333333,11.7475469 4.18333333,11.3333333 C4.18333333,10.9536376 4.46548721,10.6398424 4.83156278,10.5901799 L4.93333333,10.5833333 L15.4666667,10.5833333 Z M9.95,-2.46469511e-14 C11.0269553,-2.46469511e-14 11.9,0.873044738 11.9,1.95 C11.9,2.03523899 11.8945309,2.1192006 11.8839244,2.20155305 L14.76246,4.33020123 L14.8467529,4.40261679 C15.1057515,4.66066324 15.1436214,5.07630784 14.9197988,5.37912663 C14.6735939,5.71222729 14.203974,5.78267028 13.8708734,5.53646544 L13.8708734,5.53646544 L11.1245564,3.50670994 C10.7978717,3.75358481 10.3910344,3.9 9.95,3.9 C9.45404677,3.9 9.00133754,3.71485047 8.65722181,3.40990093 L5.77912663,5.53646544 C5.44602596,5.78267028 4.97640607,5.71222729 4.73020123,5.37912663 C4.50637865,5.07630784 4.54424848,4.66066324 4.80324714,4.40261679 L4.88754004,4.33020123 L7.9542067,2.06353456 L8.002,2.033 L8,1.95 C8,0.92199725 8.79548085,0.0797890062 9.80446921,0.00534859302 Z M9.95,1.5 C9.70147186,1.5 9.5,1.70147186 9.5,1.95 C9.5,2.19852814 9.70147186,2.4 9.95,2.4 C10.1985281,2.4 10.4,2.19852814 10.4,1.95 C10.4,1.70147186 10.1985281,1.5 9.95,1.5 Z"></path>
  </BulletinIconWrapper>
);