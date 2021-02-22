export const timeDiffText = (diffObj) => {
  if (diffObj.years > 0) return `${diffObj.years} year${diffObj.years === 1 ? '' : 's'} ago`;
  if (diffObj.months > 0) return `${diffObj.months} month${diffObj.month === 1 ? '' : 's'} ago`;
  if (diffObj.days > 0) return `${diffObj.days} day${diffObj.days === 1 ? '' : 's'} ago`;
  if (diffObj.hours > 0) return `${diffObj.hours} hour${diffObj.hour === 1 ? '' : 's'} ago`;
  if (diffObj.minutes >= 1) return `${Math.floor(diffObj.minutes)} minute${diffObj.minutes < 2 ? '' : 's'} ago`;
  return 'just now';
}

export const demoUsers = [
  {
    id: 'B318713B-BBFE-44B1-9F0A-BDA1BC70B99E',
    name: 'Matthew Benson',
    role: 'Professional-CEO',
    thumbImg: 'B318713B-BBFE-44B1-9F0A-BDA1BC70B99E.png',
    location: {
      state: 'OH',
      country: 'USA'
    }
  },
  {
    id: '4F4D916C-A6CC-4E87-83F0-85519BAA9D2A',
    name: 'Patrick Shuff',
    role: 'Professional-Student',
    thumbImg: '4F4D916C-A6CC-4E87-83F0-85519BAA9D2A.png',
    location: {
      state: 'OH',
      country: 'USA'
    }
  },
  {
    id: 'A19A8F66-B904-4671-9572-5CCB2FAB5972',
    name: 'Jay Karlsven',
    role: 'Dadgamer',
    thumbImg: 'A19A8F66-B904-4671-9572-5CCB2FAB5972.png',
    location: {
      state: 'OH',
      country: 'USA'
    }
  },
  {
    id: '994D34D1-78EA-443B-8784-9FCE8D803880',
    name: 'Darth Vader',
    role: 'Evil Warlord',
    thumbImg: '994D34D1-78EA-443B-8784-9FCE8D803880.png',
    location: {
      state: 'MOS EISLEY',
      country: 'TATOOINE'
    }
  }
];