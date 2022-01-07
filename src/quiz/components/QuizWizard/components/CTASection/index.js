import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getHairReport, getHairGoal, createReport, hairRoutine } from './cta.constants.js';
import SalesLetter from './components/SalesLetter';
import Goals from './components/Goals';
import Report from './components/Report';

const CTASection = () => {

  const profile = useSelector((state) => state.leadProfile);
  const hairReport = getHairReport(profile);
  const hairGoal = getHairGoal(profile.goal, profile.dandruff);
  const damage = createReport(profile.styling).toUpperCase();

  return (
    <>
      <Report hairReport={hairReport} profile={profile} damage={damage} />
      <Goals hairGoal={hairGoal} />
      <SalesLetter />
    </>
  );
}
export default CTASection;
