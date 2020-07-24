import React from 'react'

interface Person {
  firstName: string;
  lastName: string;
};

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  obj?: {
    f1: string
  }
  person: Person;
};

const TextField: React.FC<Props> = () => {
  return (
    <div>
      <input />
    </div>
  )
};

export default TextField
