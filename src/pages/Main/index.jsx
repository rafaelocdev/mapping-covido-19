import React, { memo } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import getCountry from 'services/api';
import { ContainerStyled } from './style';
import Board from './components/Board';
import Panel from './components/Panel';

const Main = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('brazil');
  const updateAt = new Date().toLocaleString();

  const getCovidData = useCallback((country) => {
    getCountry(country).then((data) => setData(data));
  }, []);

  useEffect(() => {
    getCovidData(country);
  }, [getCovidData, country]);

  const handleChange = ({ target }) => {
    const country = target.value;
    setCountry(country);
  };

  return (
    <ContainerStyled>
      <div className="mb-2">
        <Panel
          data={data}
          updatedAt={updateAt}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />
    </ContainerStyled>
  );
};

export default memo(Main);
