import React, {useState, useRef} from 'react'

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
  handleChange: (event: React.InputHTMLAttributes<HTMLInputElement>) => void;
};

interface TextNode {
  text: string;
}

const TextField: React.FC<Props> = ({handleChange}) => {

  const [count, setCount] = useState<TextNode>({text: 'Hello'});
  setCount({ text: 'hello' })
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  )
};

export default TextField
