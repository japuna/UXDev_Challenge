import React from 'react'
import OverViewElements from '../overview-elements/overview-elements';
import { TitleOverView, OverViewStyles } from './styles'
import { OverviewConstant } from './overview.constant'

const OverView = () => {
  return (
     <> 
    <TitleOverView>Overview - Today</TitleOverView>
      <OverViewStyles>
        {
           OverviewConstant.map(el => <OverViewElements info = {el}/>)
        }
      </OverViewStyles>
    </>  

  );
};

export default OverView;