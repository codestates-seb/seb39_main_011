import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  /* height: 300px; */
  max-height: 500px;
  // 상위에 flex-wrap 때문에 반응형 같은 효과가 나타남
  flex-grow: 1;
  border-radius: 0 0 5px 5px;

  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:hover {
    -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
    -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
    -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
    -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const Img = styled.img`
  width: 100%;
  max-height: 400px;
  display: block;
  border-radius: 5px 5px 0 0;
`;

export const FlexLayout = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  padding: 15px;
  border-radius: 0 0 5px 5px;
  background-color: #ffffff;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  > div > div {
    display: flex;
    align-items: center;
    gap: 5px;

    > svg {
      width: 20px;
    }
  }
`;
