import { useState } from 'react';
interface ButtonProps {
  text: string;
}
function Button(props: ButtonProps) {
  return (
    <button className='bg-purple-600 px-4 h-10 rounded text-violet-200 hover:bg-purple-800 transition-colors'>
      {props.text ?? 'Default'}
    </button>
  );
}

function App() {
  return (
    <div className='flex gap-2'>
      <Button text='Enviar' />
      <Button text='teste' />
    </div>
  );
}

export default App;
