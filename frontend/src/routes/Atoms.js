import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import styled from "styled-components";
import ATOM from "./Atom";

const GET_ATOMS = gql`
  query {
    atoms {
      id
      Name
      Number
      locationX
      locationY
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 30vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Subtitle = styled.h3`
  font-size: 35px;
`;
const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;
const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: realative;
`;
const LeftTT = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
  width: 9%;
`;
const RightTT = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 25px;
  width: 31%;
  position: right;
`;
const TT = styled.div`
  display: flex;
  justify-content: space-between;
  width: 99.5%;
  position: realative;
`;
const TableAtoms = styled.div`
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-gap: 25px;
  width: 99.9%;
  position: relative;
`;
const AtomTable = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 25px;
  width: 95%;
  position: relative;
  top: 20px;
`;

const Atoms = () => {
  const { loading, data, error } = useQuery(GET_ATOMS);
  console.log(data);

  return (
    <Container>
      <Header>
        <Title>Atoms</Title>
        <Subtitle>DSM 2021 Science Docs</Subtitle>
        {loading && <Loading>Loading..</Loading>}
        {error && <h3>{error}</h3>}
      </Header>
      <AtomTable>
        <FirstLine>
          {data?.atoms?.map((a) => {
            if (a.locationY === "1") {
              return <ATOM Name={a.Name} Number={a.Number} />;
            }
          })}
        </FirstLine>
        <TT>
          <LeftTT>
            {data?.atoms?.map((a) => {
              if (a.locationY === "2" || a.locationY === "3") {
                if (a.locationX === "1" || a.locationX === "2") {
                  return <ATOM Name={a.Name} Number={a.Number} />;
                }
              }
            })}
          </LeftTT>
          <RightTT>
            {data?.atoms?.map((a) => {
              if (a.locationY === "2" || a.locationY === "3") {
                if (a.locationX !== "1" && a.locationX !== "2") {
                  return <ATOM Name={a.Name} Number={a.Number} />;
                }
              }
            })}
          </RightTT>
        </TT>
        <TableAtoms>
          {data?.atoms?.map((a) => {
            if (
              a.locationY !== "1" &&
              a.locationY !== "2" &&
              a.locationY !== "3"
            ) {
              return <ATOM Name={a.Name} Number={a.Number} />;
            }
          })}
        </TableAtoms>
      </AtomTable>
    </Container>
  );
};

export default Atoms;
