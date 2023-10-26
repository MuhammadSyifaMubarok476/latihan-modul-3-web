import styled from "styled-components";

const coklatKrem = "#023e8a"

export const Box = styled.div`
  padding: 1.5% 2.5%;
  background: ${coklatKrem};
  position: fixed;
  bottom: 0;
  width: 100%; /* Use 100% width to span the entire page */

  @media (max-width: 100px) {
    /* You can add responsive styles if needed */
  }
`;
