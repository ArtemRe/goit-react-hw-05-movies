import styled from "styled-components";

export const List = styled.ul`
 margin: 0;
  padding: 12px 30px 55px;
  display: grid;
  gap: 25px;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  
    grid-template-columns: 1fr 1fr 1fr;
  
  
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  
`;
export const MovieItem = styled.li`
padding: 0;
  margin: 0;
  
  
  border-radius: 8px;
  overflow: hidden;
  
  text-align: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    
    transform: scale(1.05);
    
    cursor: pointer;
  }
  & a {
    text-decoration: none;
    color: #b0c4de;
    &:hover {
      
    }
  }
  & img {
    width: 100%;
    max-height: 380px;
    object-fit: cover;
  }
`
export const Img = styled.img`
  width: 100%;
  max-height: 380px;
  object-fit: cover;
`;