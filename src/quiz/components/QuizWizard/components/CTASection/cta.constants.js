

const createReport = (styling) => {
  let report = 'Mild';
  if (styling?.length > 1) {
    report = 'Severe'
  } else if (styling?.length === 1 && styling[0] !== "None of the above") {
    report = 'Moderate'
  }
  return report;
}

const getStyling = (styling) => {
  if(styling) {
    let styleString = '';
    for(let i = 0; i < styling.length; i++) {
      const styleArr = styling[i].split(' ');
      styleString = `${styleString + styleArr[0]} `;
    }
    return styleString;
  } else {
    return '-'
  }
}

const getHairReport = (profile) => {
  const {
    dermatologist,
    styling,
    dandruff,
    medications,
    type,
    scalp,
    thickness,
    hair_loss,
    username,
    volume } = profile;

    const hairReport = [
      {
        key: 'Hair Type',
        value: type,
        action: 'All Good'
      },
      {
        key: 'Thickness',
        value: thickness,
        action: 'All Good'
      },
      {
        key: 'Dandruff',
        value: dandruff,
        action: dandruff === 'Yes' ? 'Action required' : 'All Good'
      },
      {
        key: 'Hair Loss',
        value: hair_loss,
        action: hair_loss === '100+ Strands' ? 'Action required' : 'All Good'
      },
      {
        key: 'Scalp',
        value: scalp,
        action: 'All Good'
      },
      {
        key: 'Volume',
        value: volume,
        action: 'All Good'
      },
      {
        key: 'Styling',
        value: getStyling(styling),
        action: styling ? 'Action required' : 'All Good'
      },
      {
        key: 'Damage',
        value: createReport(styling),
        action: 'Action required'
      }
    ];
  return hairReport;
}

const hairGoal = [
  {
    goal: 'MORE MOISTURIZATION',
    solution: 'D- Panthenol',
    key: 'More Moisturization'
  },
  {
    goal: 'MORE VOLUME',
    solution: 'Ethyltrimonium Chloride Methacrylate/Hydrolyzed Wheat Protein Copolyme',
    key: 'More Volume'
  },
  {
    goal: 'SOFTNESS AND SHINE',
    solution: '18-Methyl Eicosanoic Acid',
    key: 'Softness And Shine'
  },
  {
    goal: 'DANDRUFF',
    solution: 'Salicylic Acid',
    key: 'Dandruff'
  },
  {
    goal: 'OIL CONTROL',
    solution: 'Sodium Methyl Cocoyl Taurate',
    key: 'Oil Control'
  },
  {
    goal: 'COLOR PROTECTION',
    solution: 'Helianthus Annuus Seed Extract',
    key: 'Color Protection'
  },
  {
    goal: 'DEEP CONDITIONING',
    solution: 'Shea Butter, Coconut Oil',
    key: 'Deep Conditioning'
  },
  {
    goal: 'DAMAGE REPAIR & DAILY MAINTENANCE',
    solution: '18-MEA, Protein Complex, Hydrolyzed Keratin',
    key: 'Daily Maintenance'
  }
];

const getHairGoal = (goal, dandruff) => {
  const filterGoals = hairGoal.filter((item) => {
    return goal.includes(item.key) || (item.key === 'Dandruff' && dandruff === 'Yes');
  }).map((item) => {
    item.active = true;
    return item;
  });

  const filterRest = hairGoal.filter((item) => {
    if((item.key === 'Dandruff' && dandruff === 'Yes')) {
      return false
    }
    return !goal.includes(item.key)
  });

  return [
    ...filterGoals,
    ...filterRest
  ];
}

export { getHairReport, getHairGoal, createReport }
