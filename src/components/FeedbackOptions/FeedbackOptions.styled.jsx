import styled from '@emotion/styled';

export const FeedbackWrap = styled.div`
display: flex;
justify-content: center;
gap: 20px;
`;

export const Button = styled.button`
  border: none;
  color: #fff;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 5px;
  background-color: #53c1e8;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 
              0 0 0 5px #53c1e880;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 
                0 0 0 7px #53c1e880;
    transform: translateY(-1px);
  }

  &:active {
    box-shadow: 0 0 0 2px #53c1e8,
                0 2px 2px rgba(0, 0, 0, 0.3);
    transform: translateY(1px);
  }
`;
